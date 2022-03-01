

import { drawResults } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

//Declarar variables globales o constantes globales

let search = document.querySelector("#search");

let drawSearch = document.getElementById("drawSearch");
const test = document.getElementById("overlay");

let filterGenderless = document.getElementById("genderless");
let genderGenderless = document.getElementById("genderGenderless");

document.getElementById("sesos").addEventListener("click", Overlay, false);


function searchName() {
  drawSearch.innerHTML = "";
  const boxValue = search.value.toLowerCase();
  if(boxValue === ""){
    alert("¡Escribe algo!");
  } else {
  for(let names of data.results){
    let drawName = names.name.toLowerCase()
    if(drawName.indexOf(boxValue) !== -1){
      drawSearch.innerHTML += drawResults(names);
    }
  }
 }
}

search.addEventListener("keyup", searchName);

//console.log(data.results);

//************************** FUNCION GENE ******************************
// function getData(characterArray) {
//   for (let i = 0; i <= characterArray.length-1; i++) {
//     console.log(i, characterArray[i])
//     all.innerHTML += drawResults(characterArray[i]);
//   }
// }

// getData(data.results);

let filterMale = document.getElementById("male");
let genderMale = document.getElementById("genderMale");

// lo que queriamos hacer:  let dataRM = data.results.gender

function btnMale() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "Male") {
      genderMale.innerHTML += drawResults(dataRM);
    }
  });
}

filterMale.addEventListener("click", btnMale);

let filterFemale = document.getElementById("female");
let genderFemale = document.getElementById("genderFemale");

function  btnFemale() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "Female") {
      genderFemale.innerHTML += drawResults(dataRM);
      
    }

  });
  data.results.forEach((dataRM) =>{
    if(dataRM.gender == "Female"){
      let prueba = "image"+dataRM.id
      console.log(prueba);
      document.getElementById(prueba).addEventListener("click", Overlay, true);
    }
  }

  )

}

filterFemale.addEventListener("click", btnFemale);

let filterUnknown = document.getElementById("unknown");
let genderUnknown = document.getElementById("genderUnknown");

function btnUnknown() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";
  genderUnknown.innerHTML = "";
  genderGenderless.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "unknown") {
      genderUnknown.innerHTML += drawResults(dataRM);

    }
  });
}

filterUnknown.addEventListener("click", btnUnknown);




function btnGenderless() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";
  genderUnknown.innerHTML = "";
  genderGenderless.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "Genderless") {
      genderGenderless.innerHTML += drawResults(dataRM);
      }
  });
}

filterGenderless.addEventListener("click", btnGenderless);


// funcion por nombre exacto 

// let search = document.querySelector("#search");
// let drawSearch = document.getElementById("drawSearch");

// function searchName() {
//   let type = search.value;
//   console.log(type);
//   const filterForName = data.results.filter((nombre) => {
//     if (nombre.name == type) {
//       drawSearch.innerHTML += drawResults(nombre);
//     }
//   });
// }

// search.addEventListener("keyup", searchName);

// mensaje 
// `<div class ="nothing"> 
//     ¡Escribe algo por favor!
//     </div>`



const btneps = document.getElementById("eps");


 btneps.addEventListener("click", Overlay);
 test.addEventListener("click",offOverlay);

 function  Overlay() {
  alert("sdsds");
  test.style.display = "block";
}

function offOverlay() {
  test.style.display = "none";
}