import  { DataApi } from "./data.js";

//Instanciar el objeto, crear objeto
let myData = new DataApi();
const allData = await myData.getData();
console.log(allData);
console.log(myData.getInfoCompleta());
//console.log(myData.url);
//console.log(myData.infoCompleta);