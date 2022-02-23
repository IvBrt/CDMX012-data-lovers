import { drawResults } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";


let search = document.querySelector("#search");
//let all = document.getElementById("all");

function buscar() {
  let name = search.value;
  console.log(name);
}

search.addEventListener("keyup", buscar);

console.log(data.results);

// function genderMale(data) {
//   let male = [];

  // for (let i = 0; i < data.length; i++) {
  //   var currentMale = data[i];
  //   if (currentMale == male) {
  //     all.innerHTML += drawResults(male[i]);
  //   }

    //************************** FUNCION GENE ******************************
    // function getData(characterArray) {
    //   for (let i = 0; i <= characterArray.length-1; i++) {
    //     console.log(i, characterArray[i])
    //     all.innerHTML += drawResults(characterArray[i]);
    //   }
    // }

    // getData(data.results);
  

   let filterGender = document.getElementById("gender");
   let genderSct = document.getElementById("genderSection");

   // lo que queriamos hacer:  let dataRM = data.results.gender

   function btnGender(){ 
   data.results.forEach(dataRM =>{
    if(dataRM.gender == 'Male'){
      genderSct.innerHTML += drawResults(dataRM);  
    }
  })
}

  filterGender.addEventListener("click", btnGender)

  //********** 4 intento***************
  //function genderFilter (forMale){
    // for (let i = 0; i <= forMale.length-1; i++){
    //   // if(forMale[i] == data.results[i])
    //   // genderSct.innerHTML += drawResults(forMale[i]);
    // }
  //}
  
  //genderFilter(data.results); 

  //********* 3 intento ***************
  // let hombre = "male";
  
  // const resultado = data.filter(genero => genero.data == hombre);
  // console.log(drawResults);

  // filterGender.addEventListener("click", resultado);

  //********** 2 intento ***************

  // let male = "male";
  
  // function hombre (){
  //   let filtro = data.filter("male")
  //   if(filtro == male)
  //   genderSct.innerHTML = drawResults
  // }

  // filterGender.addEventListener("click",hombre);