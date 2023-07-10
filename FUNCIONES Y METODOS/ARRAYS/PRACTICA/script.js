'use strict'

let Nombre =["Luis","Francisco","Venegas","Villanueva"]

let palabra = parseInt(prompt("Mi nombre tiene 4 palabras, dime un numero del 1 al 4 para conocer la palabra",0))

if(palabra > 3){
    alert("solo puedes introducir un valor entre el 0 y el 3")
}else{
    alert(Nombre[palabra]);
};

for(let i = 0; i < Nombre.length; i++){
    document.write(Nombre[i]+"<br>")
};
