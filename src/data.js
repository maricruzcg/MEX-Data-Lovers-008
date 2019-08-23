window.data ={

  showPokemon: (pokemon) => {
    let cardPokemon= []; //variable vacia para crear array con nueva informacion
    
    for(let i=0; i< pokemon.length;i++) { //bucle para buscar en la data informacion especifica
      let number= pokemon[i].num;
      let name= pokemon[i].name;
      let image= pokemon[i].img;
      let type= pokemon[i].type;
      let debility= pokemon[i].weaknesses;

      //hacer nuevo array y añadir cada elemento
      cardPokemon.push(
        {
          number,
          name,
          image,
          type,
          debility
        }
      );
    
    }
    return cardPokemon;
    
  },
  
//Filtrado por tipo

// let arrayType = (showPokemon) => {
//   const newArray = showPokemon.filter(pokemon => pokemon.type[0] == "Fire");
//   console.log(newArray);
// }
// arrayType(showPokemon);


  filterData: (data, selectType) => {
    const filterType = data.filter(pokemon => pokemon.type[0] === selectType);
    return filterType;

  },
  // estadisticas : (data) => {
  //   console.log(data)
  // },

  // sortData: (data, sortOrder) => {

  //   if(sortOrder == "A") { //Se utilza if para indicarle que cuan inicie con A aplique el orden A-Z
  //     return data.sort((a,b) => {a.name.localeCompare(b.name)});
    
  //   } else if(sortOrder == "Z") {
  //     return data.sort((a,b) => {b.name.localeCompare(a.name)});
  //   }

  //   sortData(show);
  // }

  sortData: (data, sortOrder) => {

    let orderPok = data.sort ((a,b) => {
      if (sortOrder === "A") {
        if (a.name > b.name){
          return 1;
        }
      }else if (sortOrder === "Z") {
        if (a.name < b.name) {
          return 1;
        }
      }else if (sortOrder === "inferior"){
        if (a.number > b.number){
          return 1;
        }
      }else if (sortOrder === "superior"){
        if (a.number < b.number) {
          return 1;
        }
      }
    });
    return orderPok;

  // },
  // computeStats: (data) => {
  //   // return 
  //   // console.log(data);

    // const typeCompute = data.filter(pokemon => pokemon.type.includes === selectType);
    // console.log(typeCompute);

  }

};
