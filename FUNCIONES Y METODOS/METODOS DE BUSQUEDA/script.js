var str = prompt('Dame una palabra y te dire distintos datos de busqueda de texto en JS')

document.write(str.indexOf("amigo"));
document.write(str.lastIndexOf("amigo")); 
document.write(str.includes("amigo"));  // Output: true
// Output: 6
