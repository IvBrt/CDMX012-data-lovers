import { drawResults } from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";

function onSpecieSelect(event){
  document.getElementById("specieSection").innerHTML = ""
  data.results.forEach(dataRM =>{
    if(dataRM.species == event.target.id){
      document.getElementById("specieSection").innerHTML += drawResults(dataRM);
    }
  })
}

let buttons = document.getElementsByClassName("subcategories");
Array.from(buttons).forEach(element=>{element.addEventListener("click", onSpecieSelect)});

window.onload = function bringImg(){
  const images = document.getElementsByClassName("image");
  for(var i = 0; i < images.length; i++) {
    images[i].addEventListener("click", openImage.bind(images[i], i), false);
  }
}

function openImage(image) {
  console.log(image);
  document.getElementById("overlay").style.display = "block";
}
console.log(images);
