'use strict';

//Función clásica:
function printinCad(cadena="No pasó parámetro"){
    //Template string
    // console.log(`Esto es una prueba de cadena ${cadena}`);
}

//Invocación
printinCad("Estoy pasando parámetro");

//Función tipo flecha
const operacion = (num1, num2=2) => {
    let result = Math.pow(num1,num2);
    return result;
}

console.log(operacion(3));

