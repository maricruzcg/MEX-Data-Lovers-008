// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

const mostrar = () => {
  let pokemon = POKEMON.pokemon;
  for(i = 0; i <= pokemon.length; i ++){
    let number = pokemon[i].num;
    let namePokemon = pokemon[i].name;
    let typePokemon = pokemon[i].type;

    console.log(number);
    console.log(namePokemon);
    document.write(typePokemon);

  }
  
};
mostrar();

window.mostrar = mostrar;