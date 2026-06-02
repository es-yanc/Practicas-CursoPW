console.log("ping operadores.js")

// Operadores Aritméticos
let numA = 20;
let numB = 8;
console.log(numA + numB);
console.log(numA - numB);
console.log(numA * numB);
console.log(numA / numB);
console.log(numA % numB);

let numC = 10;
numC = numC + 2;
numC += 2; // numC = numC + 2;
numC -= 5; // numC = numC - 5;
numC *= 2; // numC = numC * 2;
numC /= 3; // numC = numC / 3;
numC++; // numC = numC + 1;
numC--; // numC = numC - 1;
console.log(numC);

// Operadores logicos
let datoA = 10;
let datoB = 20;
let datoc = 20
let datoD = "20";

console.log(datoA > datoB); // false
console.log(datoA < datoB); // true

// Igualdad simple
let datoC = 20;
console.log(datoA == datoB); // false
console.log(datoB == datoC); // true
console.log(datoA != datoB); // true
console.log(datoB != datoC); // false
console.log(datoC == datoD); // true

// Igualdad estricta
console.log(datoC === datoD); // false
console.log(datoC === Number(datoD)); // true

// and y or (&& y ||)
console.log(2 == 2 && 3 == 3); // true
console.log(2 == 2 && 3 == 4); // false
console.log(2 == 2 || 3 == 4); // true
console.log(2 == 1 || 3 == 4); // false

// Inverción de valores booleanos
console.log(!true);