'use strict';

let myArray1 = [2,4,6,8, true, 3.56, 'Maria', 800, '2'];
let myArray2 = new Array('a','e','i','o','u');

myArray1.push(300,677)
//mismo resultado, diferente forma
let result = myArray1.concat(myArray2);
let result2 = [...myArray1, ...myArray2];
myArray1 = [...myArray1, ...myArray2, 78, 564];

console.log(...myArray1);

function print(par1,par2,par3){
    console.log(`Esto es una impresión de parametros ${par1} ${par2} ${par3}`)
};

print(...myArray1);

for (let i of myArray1) {
    // console.log(i);
}

myArray2.forEach(e => {
    // console.log(e);
});