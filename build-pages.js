const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

async function downloadFile(url, filepath) {
    try {
        const res = await fetch(url);
        if (!res.ok) return false;
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(filepath, Buffer.from(buffer));
        return true;
    } catch (e) {
        return false;
    }
}

async function processPage(urlPath, filename) {
    console.log(`Fetching ${urlPath}...`);
    const res = await fetch(`https://dowodpupila.pl${urlPath}`);
    if (!res.ok) {
        console.log(`Failed to fetch ${urlPath}`);
        return;
    }
    let html = await res.text();
    const $ = cheerio.load(html);
    
    $('script[src*="shopify.com"]').remove();
    $('link[href*="shopify.com"]').remove();
    $('#shopify-features').remove();

    $('#cart-drawer').remove();
    $('#cart-overlay').remove();
    $('#cart-drawer-toggle').remove();
    $('.promo-marquee').remove();

    $('form[action^="/cart/add"]').replaceWith(`
        <div class="vacation-notice" style="background: #fff3cd; color: #856404; padding: 20px; text-align: center; border-radius: 12px; font-weight: bold; border: 1px solid #ffeeba; margin: 30px 0; font-size: 1.1rem; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <i class="fas fa-umbrella-beach" style="font-size: 1.5rem; margin-bottom: 10px; display: block; color: #d39e00;"></i>
            Sklep jest nieczynny do września z powodu wakacji. Przepraszamy za utrudnienia i zapraszamy po wakacjach! 🐾
        </div>
    `);

    // We must adjust asset paths since these files will be in a subfolder or root. Let's put them in root so paths like `assets/...` still work.
    // Replace theme.css and theme.js
    $('link[rel="stylesheet"][href*="theme.css"]').attr('href', 'assets/theme.css');
    $('script[src*="theme.js"]').attr('src', 'assets/theme.js');

    // Fix internal links to add .html
    $('a[href^="/pages/"]').each((i, el) => {
        let href = $(el).attr('href');
        href = href.replace('/pages/', '') + '.html';
        $(el).attr('href', href);
    });
    $('a[href="/"]').attr('href', 'index.html');

    // Do the same link fix for the main index.html
    const indexHtmlPath = path.join(__dirname, 'index.html');
    if (fs.existsSync(indexHtmlPath)) {
        let idxHtml = fs.readFileSync(indexHtmlPath, 'utf-8');
        const idx$ = cheerio.load(idxHtml);
        idx$('a[href^="/pages/"]').each((i, el) => {
            let href = idx$(el).attr('href');
            href = href.replace('/pages/', '') + '.html';
            idx$(el).attr('href', href);
        });
        idx$('a[href="/"]').attr('href', 'index.html');
        fs.writeFileSync(indexHtmlPath, idx$.html(), 'utf-8');
    }

    // Images
    const assetsDir = path.join(__dirname, 'assets');
    const elementsWithImages = $('img[src*="cdn/shop/files/"], img[src*="cdn/shop/t/"]');
    
    for (let i = 0; i < elementsWithImages.length; i++) {
        const el = $(elementsWithImages[i]);
        let src = el.attr('src');
        if (src.startsWith('//')) src = 'https:' + src;
        const urlObj = new URL(src);
        const imgname = path.basename(urlObj.pathname);
        const localPath = path.join(assetsDir, imgname);
        if (!fs.existsSync(localPath)) await downloadFile(src, localPath);
        el.attr('src', 'assets/' + imgname);
        el.removeAttr('srcset');
    }

    fs.writeFileSync(filename, $.html(), 'utf-8');
    console.log(`Generated ${filename}`);
}

async function run() {
    await processPage('/pages/regulamin', 'regulamin.html');
    await processPage('/pages/polityka-prywatnosci', 'polityka-prywatnosci.html');
    await processPage('/pages/contact', 'contact.html');
}

run();
