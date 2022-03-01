
export const drawResults = (character) => {
  return ` <section class="card">
   <img src="${character.image}" alt="" id="image${character.id}" class="imagen">
   <h3>${character.name}</h3>
   <h3>${character.species}</h3>
   <h3>${character.gender}</h3> 
  </section>`;
};


export const anotherExample = (information) => {
  return ` <section class="info">
  <img src="${information.image}" alt="" id="imagen">
  <h3>Specie: ${information.species}</h3>
  <h3>Gender: ${information.gender}</h3>
  </section>`;
};
