let mostarPokemon= POKEMON.pokemon;
let information= document.getElementById("contenido");
//Mostrando tarjetas de pokemon
mostarPokemon.forEach(function(element)  {
  //Diseño de tarjetas y contenido
  let cards = `<div>
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
//const pasto= mostarPokemon.filter(mostarPokemon => mostarPokemon.type.includes("Grass"));
//console.log(pasto)
//const 

//let filterType= mostarPokemon.filter(pokemon => (pokemon.type(Grass)));
//console.log(filterType);

