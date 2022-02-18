import { drawResults } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';

//Crear evento del boton

let search = document.querySelector("#search");
let all = document.getElementById("all");
 function buscar(){
    let name = search.value;
    //console.log(name);
 }

 search.addEventListener("keyup",buscar)

 console.log(data.results)

 function getData(data){
     for(let i=0;i<=data.length;i++){
         all.innerHTML += drawResults(data[i])
     }
 }

 getData(data.results);