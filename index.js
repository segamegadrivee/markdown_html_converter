const fs = require('fs');

// Зчитуємо вміст з файлу .md
const markdownText = fs.readFileSync('input.md', 'utf8');

// Функція для перетворення Markdown на HTML
function convertMarkdownToHtml(markdownText) {

    // Замінюємо жирний текст
    markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    // Замінюємо курсив
    markdownText = markdownText.replace(/\_\s?([^\n]+)\_/g, '<i>$1</i>');
    // Замінюємо преформатований текст
    markdownText = markdownText.replace(/```([^`]+)```/g, '<pre>$1</pre>');
    // Замінюємо моноширинний шрифт
    markdownText = markdownText.replace(/`([^`]+)`/g, '<tt>$1</tt>');
    // Замінюємо параграфи
    markdownText = markdownText.replace(/([^\n]+\n?)/g, '\n<p>$1</p>\n');

    return markdownText;

}

// Перетворюємо Markdown на HTML
const html = convertMarkdownToHtml(markdownText);

// Записуємо результат у вихідний файл .html
fs.writeFileSync('output.html', html, 'utf8');

console.log('Markdown успішно перетворено на HTML і збережено у файлі output.html');
