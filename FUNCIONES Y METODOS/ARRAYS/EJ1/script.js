'use strict'

/*
    programa que pida 6 números y los meta en un array.
    tiene que mostrar el array en consola y pantalla.
    mostrarlo ordenado.
    mostrarlos invertidos.
    mostrar cuantos elementos tiene el arreglo.
    búsqueda de valor introducido, decir si esta y donde esta.
*/
let arreglo = []

do{ let value = parseInt(prompt('dame un valor para el array',0))

    arreglo.push(value)

}while(arreglo.length <= 5);

console.log(arreglo)

document.write(arreglo + '<br>')

document.write(arreglo.sort() + '<br>')

document.write(arreglo.reverse() + '<br>')

document.write("<p>El largo del array es: " + arreglo.length + "</p>" + '<br>')

search = prompt("Dime un numero para buscar la posición en el arreglo:", 0)

document.write(`<p>La posición de la búsqueda es: ${arreglo.findIndex((element) => element === parseInt(search))}</p><br>`);
