export function printText(ref, letter, size, grad) {
   const span = document.createElement('span')
   span.className = 'span'
   span.textContent = letter
   span.style.fontSize = size
   span.style.backgroundImage = grad
   span.style.backgroundClip = 'text';
   span.style.color = 'transparent';
   span.style.fontWeight = 'bold';
   ref.appendChild(span);
}

export function splitInLines(text, maxLetters) {
   const lines = [];
   let currentLine = '';
   let words = text.split(' ');

   for (const word of words) {
      if (currentLine.length + word.length + 1 <= maxLetters) {
         currentLine += word + ' ';
         if (currentLine.length >= maxLetters) {
            lines.push(currentLine.trim());
            currentLine = '';
         }
      } else {
         lines.push(currentLine.trim());
         currentLine = word + ' ';
         }
         }
}