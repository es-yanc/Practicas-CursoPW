console.log("ping condicionales.js");

// Condicionales
if(2 == 3){
    console.log("Operacion logica verdadera"); // Si la condicion es verdadera, se ejecuta el bloque de codigo
} else {
    console.log("Operacion logica falsa"); // Si la condicion es falsa, se ejecuta el bloque de codigo
}

let color  //window.prompt("color del semaforo"); // El metodo prompt() muestra un cuadro de dialogo que solicita al usuario que ingrese un valor, y devuelve el valor ingresado como una cadena de texto.   

if(color == "verde"){
    console.log("Avanzar"); // Si la condicion es verdadera, se ejecuta el bloque de codigo
} else if(color == "amarillo"){
    console.log("Precaucion"); // Si la condicion es verdadera, se ejecuta el bloque de codigo
} else if(color == "rojo"){
    console.log("Detener"); // Si la condicion es verdadera, se ejecuta el bloque de codigo
} else {
    console.error("[Error] - semaforo roto"); // Si la condicion es falsa, se ejecuta el bloque de codigo
}

// cargar monto de compra ("window prompt") / > $50.000 descuento del 25% / > $20.000 descuento de 10%, sino ningun descuento - devolver valor por consola ("console.log()")

let montoCompra = window.prompt("Ingrese el monto de su compra");

if(montoCompra > 50000){
    console.log("Dcto del 25% - Total a pagar: " + (montoCompra * 0.75)); // Si la condicion es verdadera, se ejecuta el bloque de codigo
}else if(montoCompra > 20000){
    console.log("Dcto del 10% - Total a pagar: " + (montoCompra * 0.90)); // Si la condicion es verdadera, se ejecuta el bloque de codigo
}else if(montoCompra <= 20000){
    console.log("No hay descuento - Total a pagar: " + montoCompra); // Si la condicion es verdadera, se ejecuta el bloque de codigo
}