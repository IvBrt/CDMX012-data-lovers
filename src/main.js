import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

//Crear evento del boton

let search = document.querySelector("#search");

 function buscar(){
    let name = search.value;
    //console.log(name);
 }

 search.addEventListener("keyup",buscar)

 console.log(data.results)

 function getData(data){
     for(let i=0;i<=data.length;i++){
         console.log(data[i])
     }
 }

 getData(data.results);