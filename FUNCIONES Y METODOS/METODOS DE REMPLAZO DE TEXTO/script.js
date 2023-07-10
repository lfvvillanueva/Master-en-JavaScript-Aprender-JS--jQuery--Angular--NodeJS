// Ejemplo de uso de los métodos de reemplazo de texto en JavaScript

// Obtener una cadena de texto del usuario
const originalString = prompt('Ingresa una cadena de texto:');

// Reemplazar la primera aparición de un valor en una cadena usando el método replace()
const searchValue = prompt('Ingresa el valor a buscar:');
const replaceValue = prompt('Ingresa el valor de reemplazo:');
const replacedString = originalString.replace(searchValue, replaceValue);
document.write('Reemplazo de la primera coincidencia: ' + replacedString + '<br>');

// Reemplazar todas las apariciones de un valor en una cadena usando el método replaceAll()
const searchValueAll = prompt('Ingresa el valor a buscar para reemplazo total:');
const replaceValueAll = prompt('Ingresa el valor de reemplazo para reemplazo total:');
const replacedAllString = originalString.replaceAll(searchValueAll, replaceValueAll);
document.write('Reemplazo de todas las coincidencias: ' + replacedAllString + '<br>');

// Reemplazar utilizando una expresión regular
const pattern = new RegExp(prompt('Ingresa el patrón de búsqueda (expresión regular):'), 'g');
const replacedRegexString = originalString.replace(pattern, replaceValue);
document.write('Reemplazo con expresión regular: ' + replacedRegexString + '<br>');

// Reemplazar utilizando una función de reemplazo
const replacedCustomString = originalString.replace(pattern, (match) => {
  return match.toUpperCase(); // Reemplazar por el valor en mayúsculas
});
document.write('Reemplazo personalizado: ' + replacedCustomString + '<br>');
