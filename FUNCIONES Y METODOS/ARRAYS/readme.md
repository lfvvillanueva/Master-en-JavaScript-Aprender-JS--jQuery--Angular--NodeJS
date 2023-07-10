# Arrays en JavaScript

Un array (arreglo) en JavaScript es un objeto global que se utiliza para almacenar varios valores en una única variable. Permite almacenar una colección de elementos de cualquier tipo, como números, cadenas, objetos y hasta otros arrays.

## Creación de Arrays

Puedes crear un array utilizando la notación de corchetes:

```javascript
let miArray = [1, 2, 3];
```

O puedes usar el constructor Array:

```javascript
let miArray = new Array(1, 2, 3);
```

Ambos códigos producen el mismo resultado: un array que contiene los números 1, 2 y 3.

## Acceso a los Elementos

Puedes acceder a cualquier elemento de un array indicando su índice (la posición del elemento en el array) entre corchetes. Los índices en JavaScript comienzan desde 0.

```javascript
let primerElemento = miArray[0];  // 1
let segundoElemento = miArray[1]; // 2
```

## Longitud del Array

Para obtener la cantidad de elementos en un array, usas la propiedad `.length`.

```javascript
let longitud = miArray.length; // 3
```

## Adición y Eliminación de Elementos

Para agregar elementos al final de un array, usas el método `.push()`. Para eliminar el último elemento, usas el método `.pop()`. También existen los métodos `.unshift()` para agregar elementos al inicio y `.shift()` para eliminar el primer elemento.

```javascript
miArray.push(4);     // miArray ahora es [1, 2, 3, 4]
miArray.pop();       // miArray ahora es [1, 2, 3]
miArray.unshift(0);  // miArray ahora es [0, 1, 2, 3]
miArray.shift();     // miArray ahora es [1, 2, 3]
```

## Iteración sobre un Array

Puedes recorrer un array con un bucle `for`.

```javascript
for(let i = 0; i < miArray.length; i++) {
  console.log(miArray[i]);
}
```

Otra opción es usar el método `.forEach()`, que ejecuta una función para cada elemento del array.

```javascript
miArray.forEach(function(elemento) {
  console.log(elemento);
});
```

## Métodos de Arrays

Los arrays en JavaScript tienen muchos métodos útiles. A continuación, algunos de ellos:

- `.join(separator)`: Une todos los elementos de un array en una cadena de texto.

  ```javascript
  let array = ['Hola', 'mundo'];
  let texto = array.join(' '); // 'Hola mundo'
  ```

- `.slice(inicio, fin)`: Devuelve una copia de una porción del array.

  ```javascript
  let array = [1, 2, 3, 4, 5];
  let subArray = array.slice(1, 4); // [2, 3, 4]
  ```

- `.splice(inicio, numeroElementos, elementos)`: Cambia el contenido de un array eliminando, reemplazando o agregando elementos.

  ```javascript
  let array = [1, 2, 3, 4, 5];
  array.splice(2, 1, 'tres'); // array es [1, 2, 'tres', 4, 5]
  ```

- `.sort(funcionOrdenamiento)`: Ordena los elementos de un array en su lugar y devuelve el array.

  ```javascript
  let array = [2, 1, 3];
  array.sort(); // array es [1, 2, 3]
  ```

- `.reverse()`: Invierte el orden de los elementos de un array.

  ```javascript
  let array = [1, 2, 3];
  array.reverse(); // array es [3, 2, 1]
  ```

- `.filter(funcionFiltro)`: Crea un nuevo array con todos los elementos que pasen una prueba (proporcionada como función).

  ```javascript
  let array = [1, 2, 3, 4, 5];
  let pares = array.filter(n => n % 2 == 0); // pares es [2, 4]
  ```

- `.map(funcionTransformacion)`: Crea un nuevo array con los resultados de la llamada a la función proporcionada aplicada a cada elemento del array.

  ```javascript
  let array = [1, 2, 3];
  let cuadrados = array.map(n => n * n); // cuadrados es [1, 4, 9]
  ```

- `.reduce(funcionReduccion, valorInicial)`: Aplica una función a un acumulador y a cada valor de la lista (de izquierda a derecha) de forma que lo reduzca a un único valor.

  ```javascript
  let array = [1, 2, 3, 4, 5];
  let suma = array.reduce((acumulador, valor) => acumulador + valor, 0); // suma es 15
  ```

Y muchos más. Cada uno de estos métodos tiene un propósito específico y se usa para diferentes casos de uso.

## Arrays Multidimensionales

Un array puede contener otros arrays, creando lo que se conoce como arrays multidimensionales.

```javascript
let miArray2D = [[1, 2], [3, 4]];
let primerElementoDelPrimerArray = miArray2D[0][0]; // 1
```

Los arrays son una herramienta muy poderosa en JavaScript, proporcionando una forma eficiente de almacenar, acceder y manipular colecciones de datos. Conocer en profundidad sus propiedades y métodos te permitirá resolver una amplia gama de problemas de programación.