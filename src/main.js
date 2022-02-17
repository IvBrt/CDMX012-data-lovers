import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

console.log(example, data);

//Crear evento del boton

let search = document.querySelector("#search");

 function buscar(){
    let name = search.value;
    console.log(name);
 }

 search.addEventListener("keyup",buscar)