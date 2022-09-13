'use strict';
//Seleccionar elementos del DOM
let myTitle = document.getElementById('titulo');

//Seleccionar por el name
let tagname = document.getElementById('art1');

//Seleccionar por etiqueta
let etiqueta = document.getElementsByTagName('h3');

//QuerySelector
let queryContainer  = document.querySelector('#container');

//QuerySelector class
let myMenu = document.querySelector('.menu');

//QuerySelector etiqueta
let myOl = document.querySelector('ol');

//All
let all = document.querySelectorAll('article');

//Crear elementos
let miParrafo = document.createElement('p');
miParrafo.id="parrafo";
miParrafo.className = "parrafo";
miParrafo.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laudantium voluptas harum nisi sequi odit, repudiandae incidunt dolorum quas esse libero nobis rerum deleniti sit quos maiores reprehenderit sunt eveniet?"

//Insertar elemento en el DOM
document.body.appendChild(miParrafo);