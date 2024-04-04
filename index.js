const fs = require('fs');

// Read the content from the .md file
const markdownText = fs.readFileSync('input.md', 'utf8');

// Function to convert Markdown to HTML
function convertMarkdownToHtml(markdownText) {

    // Replace bold text
    markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
    // Replace italic
    markdownText = markdownText.replace(/\_\s?([^\n]+)\_/g, '<i>$1</i>');
    // Replace preformatted text
    markdownText = markdownText.replace(/```([^`]+)```/g, '<pre>$1</pre>');
    // Replace monospace font
    markdownText = markdownText.replace(/`([^`]+)`/g, '<tt>$1</tt>');
    // Replace paragraphs
    markdownText = markdownText.replace(/([^\n]+\n?)/g, '\n<p>$1</p>\n');

    // Check for unclosed tags
    const unclosedTags = markdownText.match(/(_[^_]+|(\*\*[^*]+)|(`[^`]+`)|(```[^`]+```)|(`[^`]+))/g);
    if (unclosedTags) {
        console.error('Unclosed Markdown tags found:');
        // unclosedTags.forEach((tag) => {
        //     console.error(tag);  
        // });
        return null; // Do not proceed with HTML generation
    }

    return markdownText;
}

// Function to convert Markdown to ANSI
function convertMarkdownToAnsi(markdownText) {
    // Replace bold text with ANSI escape codes for bold
    markdownText = markdownText.replace(/\*\*(.*?)\*\*/g, '\x1b[1m$1\x1b[0m');

    // Replace italic text with ANSI escape codes for italic
    markdownText = markdownText.replace(/\_\s?([^\n]+)\_/g, '\x1b[3m$1\x1b[0m');

    // Replace preformatted text with ANSI escape codes for reverse (inverted colors)
    markdownText = markdownText.replace(/```([^`]+)```/g, '\x1b[7m$1\x1b[0m');

    // Replace monospace font with ANSI escape codes for reverse (inverted colors)
    markdownText = markdownText.replace(/`([^`]+)`/g, '\x1b[7m$1\x1b[0m');

    // Return the converted text
    return markdownText;
}

// Convert Markdown to HTML
const html = convertMarkdownToHtml(markdownText);

// Convert Markdown to ANSI
const ansiText = convertMarkdownToAnsi(markdownText);

// Parse command line arguments
const args = process.argv.slice(2);
const formatIndex = args.indexOf('--format');
let outputFormat = 'ansi'; // Default output format

if (formatIndex !== -1 && args.length > formatIndex + 1) {
    outputFormat = args[formatIndex + 1];
}

// Function to format text for ANSI output
sole using ANSI escape codes
console.log(formatForAnsi(ansiText));
    } else {
    // Write the result to the output.html file
    fs.writeFileSync('output.html', html, 'utf8');
    console.log('Markdown successfully converted to HTML and saved in the output.html file.');
}
} else {
    console.error('Error: Unclosed Markdown tags detected. HTML generation aborted.');
}



module.exports = {
    convertMarkdownToHtml,
    convertMarkdownToAnsi,
    formatForAnsi
};
