console.log("ping tipoDeDatos.js");

// Tipos de datos en JavaScript

let numeros = 44;
let string = "Cadena de texto";
let booleano = true; //false
let nulo = null; 
let indefinido; //undefined
let array = [2, 18, "texto", true];
let objeto = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30
}

console.log(numeros);
console.log(typeof(numeros));
console.log(typeof(string));
console.log(typeof(booleano));
console.log(typeof(nulo));
console.log(typeof(indefinido));
console.log(typeof(array));
console.log(typeof(objeto));

let num1 = 33;
let num2 = "22";
num2 = Number(num2);
console.log(num1 + num2);

let pi = "3.14159 es el valor de pi"; //Si intentamos convertir esta cadena a número, obtendremos NaN (Not a Number)

let piNumber = Number(pi);
console.log(piNumber, typeof(piNumber));

let piParseInt = parseInt(pi);
console.log(piParseInt, typeof(piParseInt));

let piParseFloat = parseFloat(pi);
console.log(piParseFloat, typeof(piParseFloat));
