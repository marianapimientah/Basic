'use strict';

//Objeto literal de JS

let myObject = {
    nombres: 'Mariana',
    apellido: 'Pimienta',
    edad: 20,
    genero: 'femenino' 
}

console.log(myObject.nombres);


Object.entries(myObject).forEach((e) => console.log(e));
Object.entries(myObject).forEach(([key, value])=> console.log(key, value));
Object.values(myObject).forEach((key=> console.log(key)));