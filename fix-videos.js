const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

async function downloadFile(url, filepath) {
    console.log(`Downloading ${url} to ${filepath}`);
    try {
        const res = await fetch(url);
        if (!res.ok) return false;
        const buffer = await res.arrayBuffer();
        fs.writeFileSync(filepath, Buffer.from(buffer));
        return true;
    } catch (e) {
        console.error(e.message);
        return false;
    }
}

async function fixVideos(filename) {
    if (!fs.existsSync(filename)) return;
    let html = fs.readFileSync(filename, 'utf-8');
    const $ = cheerio.load(html);
    const assetsDir = path.join(__dirname, 'assets');

    const videos = $('video[src*="cdn.shopify.com"]');
    for (let i = 0; i < videos.length; i++) {
        const el = $(videos[i]);
        const src = el.attr('src');
        const urlObj = new URL(src);
        const filenameExt = path.basename(urlObj.pathname);
        const localPath = path.join(assetsDir, filenameExt);
        if (!fs.existsSync(localPath)) {
            await downloadFile(src, localPath);
        }
        el.attr('src', 'assets/' + filenameExt);
    }
    fs.writeFileSync(filename, $.html(), 'utf-8');
    console.log(`Fixed videos in ${filename}`);
}

async function run() {
    await fixVideos('index.html');
    await fixVideos('regulamin.html');
    await fixVideos('polityka-prywatnosci.html');
    await fixVideos('contact.html');
}
run();
