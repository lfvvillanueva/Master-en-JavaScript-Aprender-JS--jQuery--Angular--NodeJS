'use strict'

var nombres = prompt("Ingresa tu/tus nombres")
var apellidos = prompt("Ingresa tus apellidos")

var texto = `
<h1> Hola que tal</h1>
<h2> El nombre que introdujiste es: ${nombres} </h2>
<h2> Los apellidos son: ${apellidos} </h2>
`;

document.write(texto);

