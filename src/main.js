let mostarPokemon= POKEMON.pokemon;
let information= document.getElementById("col-10 contenido-cards");
//Mostrando tarjetas de pokemon
mostarPokemon.forEach(function(element)  {
  //Diseño de tarjetas y contenido
  let cards = `<div id="tarjetas">
  <img src="${element.img}">
  <p>No.${element.num}</p>
  <p>${element.name}</p>
  <p>${element.type}</p>
  <p>Debilidad: ${element.weaknesses}</p>
</div>`
//Llamando variable para mostrar
  information.insertAdjacentHTML("beforeEnd", cards);
});

//Funcion para filtrar por tipo
const pasto= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Grass"));
//console.log(pasto)
const insecto= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Bug"));
//console.log(insecto)
const hielo= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Ice"));
//console.log(hielo)
const suelo= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Ground"));
//console.log(suelo)
const lucha= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Fighting"));
//console.log(lucha)
const hada= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Fairy"));
console.log(hada)

