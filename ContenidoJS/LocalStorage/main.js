//Capturar botones

const btnRojo = document.getElementById('rojo');
const btnMarron = document.getElementById('marron');
const btnAzul = document.getElementById('azul');
const btnBorrar = document.getElementById('borrar');
const body = document.body;

//Generar los eventos a los botones

btnRojo.addEventListener('click', () => {
    let color = '#f54242';
    localStorage.setItem('fondo', color);
    body.style.backgroundColor = color;
});
btnMarron.addEventListener('click', () => {
    let color = '#8c553e';
    localStorage.setItem('fondo', color);
    body.style.backgroundColor = color;
});
btnAzul.addEventListener('click', () => {
    let color = '#54c3e8';
    localStorage.setItem('fondo', color);
    body.style.backgroundColor = color;
});
btnBorrar.addEventListener('click', () => {
    localStorage.removeItem('fondo');
    body.style = "none";
});