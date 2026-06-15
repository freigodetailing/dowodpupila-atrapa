const fs = require('fs');
const cheerio = require('cheerio');

let html = fs.readFileSync('index.html', 'utf-8');
const $ = cheerio.load(html);

// Remove the grids container entirely
$('.grids-container').replaceWith(`
    <div class="vacation-notice-container" style="max-width: 800px; margin: 0 auto; padding: 0 20px;">
        <div class="vacation-notice" style="background: #fff3cd; color: #856404; padding: 40px 20px; text-align: center; border-radius: 12px; font-weight: bold; border: 1px solid #ffeeba; margin: 30px 0; font-size: 1.2rem; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            <i class="fas fa-umbrella-beach" style="font-size: 2.5rem; margin-bottom: 15px; display: block; color: #d39e00;"></i>
            Sklep jest nieczynny do września z powodu wakacji. Przepraszamy za utrudnienia i zapraszamy po wakacjach! 🐾
        </div>
    </div>
`);

// Hide the toggle buttons (Wiszące / Niedostępne) since there are no products
$('.collection-toggle-wrapper').remove();

fs.writeFileSync('index.html', $.html(), 'utf-8');
console.log('Cleaned up product grid in index.html');
