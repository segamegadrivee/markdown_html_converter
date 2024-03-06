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

// Convert Markdown to HTML
const html = convertMarkdownToHtml(markdownText);

if (html !== null) {
    // Write the result to the output.html file
    fs.writeFileSync('output.html', html, 'utf8');
    console.log('Markdown successfully converted to HTML and saved in the output.html file.');
} else {
    console.error('Error: Unclosed Markdown tags detected. HTML generation aborted.');
}
