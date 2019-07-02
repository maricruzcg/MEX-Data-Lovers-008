let mostarPokemon= POKEMON.pokemon;
let informacion= document.getElementById("root");

mostarPokemon.forEach(function(element)  {
    console.log('lol');
    
  //document.write(element.type);
  //document.write(element.num)
  informacion.insertAdjacentHTML("beforeEnd", <p>${element.num}</p>)

})

console.log(informacion)

