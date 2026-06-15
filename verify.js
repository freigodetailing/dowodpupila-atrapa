const fs = require('fs');
const cheerio = require('cheerio');
const path = require('path');

const files = ['index.html', 'regulamin.html', 'polityka-prywatnosci.html', 'contact.html'];
let allGood = true;

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    const html = fs.readFileSync(file, 'utf-8');
    const $ = cheerio.load(html);

    $('img').each((i, el) => {
        let src = $(el).attr('src');
        if (src && src.startsWith('assets/')) {
            if (!fs.existsSync(src)) {
                console.log(`Missing image in ${file}: ${src}`);
                allGood = false;
            }
        }
    });

    $('link[rel="stylesheet"]').each((i, el) => {
        let href = $(el).attr('href');
        if (href && href.startsWith('assets/')) {
            if (!fs.existsSync(href)) {
                console.log(`Missing CSS in ${file}: ${href}`);
                allGood = false;
            }
        }
    });

    $('script[src]').each((i, el) => {
        let src = $(el).attr('src');
        if (src && src.startsWith('assets/')) {
            if (!fs.existsSync(src)) {
                console.log(`Missing JS in ${file}: ${src}`);
                allGood = false;
            }
        }
    });

    $('a').each((i, el) => {
        let href = $(el).attr('href');
        if (href && href.startsWith('cdn.shopify')) {
            console.log(`Leftover Shopify CDN link in ${file}: ${href}`);
            allGood = false;
        }
    });
});

if (allGood) {
    console.log("Validation passed! No missing assets found.");
}
