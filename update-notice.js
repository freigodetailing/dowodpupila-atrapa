const fs = require('fs');
const files = ['index.html', 'regulamin.html', 'polityka-prywatnosci.html', 'contact.html'];

files.forEach(file => {
    if (!fs.existsSync(file)) return;
    
    let html = fs.readFileSync(file, 'utf-8');

    // Replace the text
    html = html.replace(/Sklep tymczasowo nieczynny, zapraszamy ponownie w wrzesień\/październiku/g, 
                        'Sklep tymczasowo nieczynny. Zapraszamy ponownie we wrześniu / październiku.');

    fs.writeFileSync(file, html, 'utf-8');
    console.log(`Updated ${file}`);
});
