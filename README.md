# JSDoc - Övning 1
I denna övning ska du skriva JSDOC-kommentarer till följande funktioner. Tänk på att inkludera:

* Beskrivning av vad funktionen gör
* Parametrar och deras typer
* Returvärde och dess typ

## Lösningsförslag
Lösningsförslag finns i filen **main.js**.

```javascript
function calculateArea(width, height) {
  return width * height;
}

function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

function isAdult(age) {
  return age >= 18;
}