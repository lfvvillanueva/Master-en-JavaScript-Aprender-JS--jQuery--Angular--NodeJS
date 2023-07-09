| Tipo de dato     | Método                    | Ejemplo de uso                                              | Forma de uso                                                  |
|------------------|---------------------------|-------------------------------------------------------------|---------------------------------------------------------------|
| Cadenas de texto | `length`                  | `'Hola'.length`                                             | Obtener la longitud de una cadena de texto                    |
|                  | `toUpperCase()`           | `'Hola'.toUpperCase()`                                      | Convertir una cadena de texto a mayúsculas                    |
|                  | `toLowerCase()`           | `'Hola'.toLowerCase()`                                      | Convertir una cadena de texto a minúsculas                    |
|                  | `charAt(index)`            | `'Hola'.charAt(1)`                                          | Obtener el carácter en una posición específica de la cadena    |
|                  | `split(separator)`        | `'Hola,amigo'.split(',')`                                   | Dividir una cadena en un arreglo de subcadenas                 |
|                  | `indexOf(searchValue)`    | `'Hola,amigo'.indexOf('amigo')`                              | Encontrar la posición de una subcadena dentro de la cadena     |
|                  | `substr(start, length)`   | `'Hola'.substr(1, 2)`                                       | Obtener una subcadena de la cadena original                    |
|                  | `replace(search, replace)` | `'Hola,amigo'.replace('amigo', 'amiga')`                     | Reemplazar una subcadena por otra en la cadena                 |
| Números          | `toFixed(digits)`         | `(3.1416).toFixed(2)`                                       | Redondear un número decimal a una cantidad de dígitos          |
|                  | `parseInt(string)`        | `parseInt('10')`                                            | Convertir una cadena a un número entero                        |
|                  | `parseFloat(string)`      | `parseFloat('3.14')`                                        | Convertir una cadena a un número decimal                       |
|                  | `Math.abs(number)`        | `Math.abs(-5)`                                              | Obtener el valor absoluto de un número                         |
|                  | `Math.round(number)`      | `Math.round(3.7)`                                           | Redondear un número al entero más cercano                      |
|                  | `Math.floor(number)`      | `Math.floor(4.9)`                                           | Redondear hacia abajo un número al entero más cercano          |
|                  | `Math.ceil(number)`       | `Math.ceil(2.1)`                                            | Redondear hacia arriba un número al entero más cercano         |
| Arreglos         | `length`                  | `[1, 2, 3].length`                                           | Obtener la longitud de un arreglo                             |
|                  | `push(element)`           | `[1, 2].push(3)`                                            | Agregar un elemento al final de un arreglo                     |
|                  | `pop()`                   | `[1, 2, 3].pop()`                                           | Eliminar y obtener el último elemento de un arreglo            |
|                  | `shift()`                 | `[1, 2, 3].shift()`                                         | Eliminar y obtener el primer elemento de un arreglo            |
|                  | `unshift(element)`        | `[2, 3].unshift(1)`                                         | Agregar un elemento al inicio de un arreglo                    |
|                  | `join(separator)`         | `[1, 2, 3].join(',')`                                       | Unir los elementos de un arreglo en una cadena separada por el separador |
|                  | `slice(start, end)`       | `[1, 2, 3].slice(1, 3)`                                     | Obtener una porción de un arreglo                              |
| Objetos          | `hasOwnProperty(prop)`    | `person.hasOwnProperty('name')`                             | Verificar si un objeto tiene una propiedad específica           |
|                  | `Object.keys(obj)`        | `Object.keys({a: 1, b: 2})`                                  | Obtener un arreglo con las claves de un objeto                  |
|                  | `Object.values(obj)`      | `Object.values({a: 1, b: 2})`                                | Obtener un arreglo con los valores de un objeto                 |
|                  | `Object.entries(obj)`     | `Object.entries({a: 1, b: 2})`                               | Obtener un arreglo de pares clave-valor de un objeto            |
|                  | `JSON.stringify(obj)`     | `JSON.stringify({name: 'John', age: 30})`                   | Convertir un objeto a una cadena JSON                           |
|                  | `JSON.parse(string)`      | `JSON.parse('{"name":"John","age":30}')`                    | Convertir una cadena JSON a un objeto                           |
| Booleanos        | `toString()`              | `true.toString()`                                            | Convertir un valor booleano a una cadena                       |
|                  | `Boolean(value)`          | `Boolean(0)`                                                | Convertir un valor a su equivalente booleano                   |
|                  | `!` (negación lógica)     | `!true`                                                     | Negar un valor booleano                                        |
|                  | `&&` (AND lógico)         | `true && false`                                             | Evaluar una expresión lógica AND                               |
|                  | `||` (OR lógico)          | `true || false`                                             | Evaluar una expresión lógica OR                                |
|                  | `===` (igualdad estricta) | `5 === '5'`                                                 | Comparar si dos valores son estrictamente iguales               |
|                  | `!==` (desigualdad)       | `5 !== '5'`                                                 | Comparar si dos valores no son iguales                         |
