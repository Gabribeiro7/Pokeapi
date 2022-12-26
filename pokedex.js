const listPokedex = document.querySelector("#pokedex")

function getPokemons(){

    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(function(response) { // sacar de la bolsa
        return response.json();
      })

};

getPokemons();
