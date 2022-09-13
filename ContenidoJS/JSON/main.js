'use strict';
let cadJSON = {"names":"Juan Adres"};

//[] -> Arreglo, {} -> Objeto
let datos = [
    {
        "names": "Juan Adres",
        "lastName": "Vargas",
        "age": 34,
        "courses": ["Programming", "Logical", "Mathematical"],
        "single": true
    },
    {
        "names": "Mario Adres",
        "lastName": "Vega",
        "age": 19,
        "courses": ["Programming", "Logical", "Mathematical"],
        "single": true
    },
];

Object.entries(datos).forEach((e) => console.log(e));

