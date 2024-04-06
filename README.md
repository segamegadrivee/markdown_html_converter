
# Markdown to HTML Converter

This Node.js script reads content from a Markdown file (`input.md`), processes it, and generates an HTML file (`output.html`). The goal is to convert Markdown-formatted text into its corresponding HTML representation.

## Usage

## Installation

1. **Installation**: Ensure you have Node.js installed on your system. After cloning the repository, navigate to the project directory and run the following command to install dependencies:

    ```
    npm install
    ```

    This will install all the necessary dependencies for the project.



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

 
5. **Convert to HTML (default) or ANSI**:

   You can convert your text to either HTML or ANSI format using the following commands:

   - To convert to HTML (default):
     ```
     node .\index.js --format html
     ```

   - To convert to ANSI:
     ```
     node .\index.js --format ansi
     ```

   After running the respective command, the converted output will be available for further use.



6. **Manual Testing**:
   To perform manual testing of the program, you can use the following command:

    ```
    npx mocha
    ```

    This command will execute the test suite using Mocha, allowing you to verify the functionality of the program manually.


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

