'use strict';
const myArray1 = [2,4,6,8, true, 3.56, 'Maria', 800, '2'];
let myArray2 = new Array('a','e','i','o','u');
const cadena = ['enero - febrero - marzo']

// console.log(myArray1[6]);
// console.log(myArray2[3]);

// let resultArray = cadena.split('-');
// console.log(resultArray);

let result = myArray1.find((e) => e === true);
// console.log(result);

result = myArray1.findIndex((e) => e === 'Maria');

result = myArray1.filter((e) => e % 2 === 0);

console.log(result);
