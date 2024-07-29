document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const paragraphs = document.querySelectorAll('.text');
    const changeTextBtn = document.getElementById('changeTextBtn');
    const changeColorBtn = document.getElementById('changeColorBtn');
    const printTextBtn = document.getElementById('printTextBtn');
    const output = document.getElementById('output');
  
    // Change the text of the title with harshal
    changeTextBtn.addEventListener('click', () => {
      title.textContent = 'Hello JavaScript!';
    });
  
    // Change the color of all paragraphs with harshal
    changeColorBtn.addEventListener('click', () => {
      paragraphs.forEach(paragraph => {
        paragraph.style.color = 'red';
      });
    });
  
    // Print the text of all paragraphs with harshal
    printTextBtn.addEventListener('click', () => {
      output.textContent = '';
      paragraphs.forEach(paragraph => {
        output.textContent += paragraph.textContent + ' ';
      });
    });
  });
  