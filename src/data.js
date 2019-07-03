// esta es una función de ejemplo
// puedes ver como agregamos la función a nuestro objeto global window

<<<<<<< HEAD
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
  
=======
const mostrar= () => {
  let pokemon= POKEMON.pokemon;
  
  for(i=0; i<= pokemon.length;i++) {
    let numero= pokemon[i].num;
    let nombre= pokemon[i].name;
    let imagen= pokemon[i].img;
    let tipo= pokemon[i].type;
    let debilidades= pokemon[i].weaknesses;
    //document.write(numero);
    //document.write(nombre);
    //document.write(imagen);
    //document.write(tipo);
    //document.write(debilidades);
  
  }
  
  //return 'pokemon';

>>>>>>> b86a7ff0ecfb750f7bb7bef14ebd0195a352aaad
};
mostrar();

<<<<<<< HEAD
=======
// mostrar();
>>>>>>> b86a7ff0ecfb750f7bb7bef14ebd0195a352aaad
window.mostrar = mostrar;