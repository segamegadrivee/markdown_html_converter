
# Markdown to HTML Converter

This Node.js script reads content from a Markdown file (`input.md`), processes it, and generates an HTML file (`output.html`). The goal is to convert Markdown-formatted text into its corresponding HTML representation.

## Usage

1. **Installation**: Ensure you have Node.js installed on your system.

2. **Setup**:
   - Place your Markdown content in a file named `input.md`.
   - Run the script using `node index.js`.

3. **Conversion Process**:
   - The script performs the following transformations on the Markdown content:
     - Replaces bold text (`**...**`) with `<b>...</b>`.
     - Replaces italic text (`_..._`) with `<i>...</i>`.
     - Replaces preformatted code blocks (```...```) with `<pre>...</pre>`.
     - Replaces monospace font (``...``) with `<tt>...</tt>`.
     - Wraps paragraphs in `<p>...</p>` tags.
   - It also checks for unclosed Markdown tags and reports any issues.

4. **Output**:
   - If there are no unclosed tags, the converted HTML is saved in `output.html`.
   - Otherwise, an error message is displayed, and HTML generation is aborted.

## Example

Suppose your `input.md` contains the following Markdown:

```markdown
**Bold Text**
_Italic Text_
```

The script will generate the following HTML:

```html
<b>Bold Text</b>
<i>Italic Text</i>
```

---

