let miVariable = 123;
console.log(miVariable);

miVariable = 456;
console.log(miVariable);

const nombre = "Yan";
console.log(nombre);

// nombre = "Juan";  // Esto causaría un error porque las variables const no pueden ser reasignadas

const apellido = "Escudero";
console.log(nombre, apellido);

/* const nombreUsuario = window.prompt("Ingrese su nombre:");
console.log(nombreUsuario); */

//Scoop - alcance global y local

let color = "rojo";
console.log(color);
{
    color = "gris"; // Modifica la variable color declarada en el ámbito global
    console.log(color); // Accede a la variable color declarada en el ámbito global
    let numero = 17;
}
console.log(color); // Esto causará un error porque numero no está definido en este ámbito
