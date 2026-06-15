const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

async function downloadFile(url, filepath) {
    console.log(`Downloading ${url} to ${filepath}`);
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.statusText}`);
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(filepath, Buffer.from(buffer));
        return true;
    } catch (e) {
        console.error(e.message);
        return false;
    }
}

async function run() {
    console.log("Fetching HTML...");
    const res = await fetch('https://dowodpupila.pl');
    let html = await res.text();
    
    const $ = cheerio.load(html);
    
    // Remove Shopify specific scripts and links that are useless for static
    $('script[src*="shopify.com"]').remove();
    $('link[href*="shopify.com"]').remove();
    $('#shopify-features').remove();

    // Remove cart drawer, backdrop, and header cart toggle
    $('#cart-drawer').remove();
    $('#cart-overlay').remove();
    $('#cart-drawer-toggle').remove();

    // Replace the buy forms with vacation notice
    const vacationHtml = `
        <div class="vacation-notice" style="background: #fff3cd; color: #856404; padding: 20px; text-align: center; border-radius: 12px; font-weight: bold; border: 1px solid #ffeeba; margin: 30px 0; font-size: 1.1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <i class="fas fa-umbrella-beach" style="font-size: 1.5rem; margin-bottom: 10px; display: block; color: #d39e00;"></i>
            Sklep jest nieczynny do września z powodu wakacji. Przepraszamy za utrudnienia i zapraszamy po wakacjach! 🐾
        </div>
    `;

    $('form[action^="/cart/add"]').replaceWith(vacationHtml);

    // Download images and replace their URLs
    const assetsDir = path.join(__dirname, 'assets');
    if (!fs.existsSync(assetsDir)) fs.mkdirSync(assetsDir);

    // Find all images using shopify CDN
    const elementsWithImages = $('img[src*="cdn/shop/files/"], img[src*="cdn/shop/t/"]');
    
    for (let i = 0; i < elementsWithImages.length; i++) {
        const el = $(elementsWithImages[i]);
        let src = el.attr('src');
        if (src.startsWith('//')) {
            src = 'https:' + src;
        }

        // Extract filename
        const urlObj = new URL(src);
        const filename = path.basename(urlObj.pathname);
        const localPath = path.join(assetsDir, filename);

        // Download if it doesn't exist
        if (!fs.existsSync(localPath)) {
            await downloadFile(src, localPath);
        }

        // Update src in HTML
        el.attr('src', 'assets/' + filename);
        
        // Also remove srcset because it relies on shopify CDN
        el.removeAttr('srcset');
    }

    // Replace theme.css and theme.js
    $('link[rel="stylesheet"][href*="theme.css"]').attr('href', 'assets/theme.css');
    $('script[src*="theme.js"]').attr('src', 'assets/theme.js');

    // Remove promo marquee as it contains "BRELOKI DO KUPNA JUŻ OD 27 ZŁ"
    $('.promo-marquee').remove();

    // Change 'Add to cart' texts or other remnants if any
    
    // Save final HTML
    fs.writeFileSync('index.html', $.html(), 'utf-8');
    console.log("Static HTML generated successfully.");
}

run();
