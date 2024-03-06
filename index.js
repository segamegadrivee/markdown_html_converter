const fs = require('fs');

// Зчитуємо вміст з файлу .md
const markdownText = fs.readFileSync('input.md', 'utf8');

// Функція для перетворення Markdown на HTML
function convertMarkdownToHtml(markdownText) {


}

// Перетворюємо Markdown на HTML
const html = convertMarkdownToHtml(markdownText);

// Записуємо результат у вихідний файл .html
fs.writeFileSync('output.html', html, 'utf8');

console.log('Markdown успішно перетворено на HTML і збережено у файлі output.html');
