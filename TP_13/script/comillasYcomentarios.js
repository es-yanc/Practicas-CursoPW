console.log("ping con comillasYcomentarios.js")

// Comentarios de linea
// Se activa linea por linea
// Se genera con "ctrl + }" o con "ctrl + ç cedilla"

/* Comentario multilinea
para bloques de codigo
se genera con "alt + shift + a" o */

// Comillas para literales

console.log("comillado doble permite 'comilla simple'");
console.log('comillado simple permite "comilla doble"');
console.log(`backsticks comillas 'simples' y "dobles"`); // backsticks o template literals permiten ambos tipos de comillas

// Insertar variables en un string con backsticks

const ejemplo = "texto de ejemplo";
console.log("Agregando " + ejemplo + " con comillas dobles");
console.log('Agregando ' + ejemplo + ' con comillas simples');
console.log(`Agregando ${ejemplo} con backsticks`);

