/**
 * Beräknar arean av en rektangel
 * @param {number} width - Rektangelns bredd
 * @param {number} height - Rektangelns höjd
 * @returns {number} Rektangelns area
 */
function calculateArea(width, height) {
  return width * height;
}

/**
 * Kombinerar för- och efternamn till ett fullständigt namn
 * @param {string} firstName - Förnamn
 * @param {string} lastName - Efternamn
 * @returns {string} Fullständigt namn
 */
function getFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

/**
 * Kontrollerar om en person är myndig (över 18 år)
 * @param {number} age - Personens ålder
 * @returns {boolean} True om personen är 18 eller äldre, annars false
 */
function isAdult(age) {
  return age >= 18;
}
