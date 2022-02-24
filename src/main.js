import { drawResults } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

let search = document.querySelector("#search");
let drawSearch = document.getElementById("drawSearch");

function searchName() {
  let type = search.value;
  console.log(type);
  const filterForName = data.results.filter(nombre => {
    if(nombre.name == type){
      drawSearch.innerHTML += drawResults(nombre)
    }
  })
  
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

function btnFemale() {
  genderFemale.innerHTML = "";
  genderMale.innerHTML = "";

  data.results.forEach((dataRM) => {
    if (dataRM.gender == "Female") {
      genderFemale.innerHTML += drawResults(dataRM);
    }
  });
}

filterFemale.addEventListener("click", btnFemale);

