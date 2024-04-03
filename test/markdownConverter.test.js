const fs = require('fs');
const assert = require('assert');
const {
    convertMarkdownToHtml,
    convertMarkdownToAnsi,
    formatForAnsi
} = require('../index'); // Assuming your code is in another file named yourMarkdownConverter.js

describe('Markdown to HTML Conversion', function () {
    it('should convert Markdown to HTML correctly', function () {
        const markdownText = '**bold** _italic_ ```code``` `monospace`';
        const expectedHtml = '<b>bold</b> <i>italic</i> <pre>code</pre> <tt>monospace</tt>';
        const html = convertMarkdownToHtml(markdownText);
        assert.strictEqual(html, expectedHtml);
    });

    it('should return null if unclosed Markdown tags are found', function () {
        const markdownText = '**unclosed';
        const html = convertMarkdownToHtml(markdownText);
        assert.strictEqual(html, null);
    });
});

describe('Markdown to ANSI Conversion', function () {
    it('should convert Markdown to ANSI correctly', function () {
        const markdownText = '**bold** _italic_ ```code``` `monospace`';
        const expectedAnsi = '\x1b[1mbold\x1b[0m \x1b[3mitalic\x1b[0m \x1b[7mcode\x1b[0m \x1b[7mmonospace\x1b[0m';
        const ansiText = convertMarkdownToAnsi(markdownText);
        assert.strictEqual(ansiText, expectedAnsi);
    });
});

describe('Format for ANSI', function () {
    it('should format text for ANSI output correctly', function () {
        const text = 'formatted';
        const expectedFormattedText = '\x1b[7mformatted\x1b[0m';
        const formattedText = formatForAnsi(text);
        assert.strictEqual(formattedText, expectedFormattedText);
    });
});
