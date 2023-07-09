'USE STRICT'

var number = 444;
var text = "welcome to the course";
var text2 = "It's a nice course";

// Obtener la longitud de una cadena de texto
var textI = prompt("Enter a word to know its length");
var length = textI.length;

document.write("<p>The length of the word " + textI + " is " + length + "</p>");

var chain = "<p>The length of the word " + textI + " is " + length + "</p>";

document.write(chain.toUpperCase()+"<br>");

document.write(chain.toLowerCase()+"<br>");
