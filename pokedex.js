const pokemonContainer = document.querySelector('#pokedex');
const baseURL$$ = `https://pokeapi.co/api/v2/pokemon/`;
const divSearchPokemon$$ = document.querySelector("#search-pokemon");
const buttonDelete$$ = document.querySelector("#delete");
const buttonSearch$$ = document.querySelector('#search');
const pokemonInput$$ = document.querySelector('#inputPokemon');
const numberPokemons$$ = document.querySelector('#numberPokemons');
const buttonDeleteAll$$ = document.querySelector('#buttonDeleteAll');
const buttonSearchNumberPokemons$$ = document.querySelector('#searchNumberPokemon');
const pokemons = []; //Este es el array donde se guardaran los elementos añadidos para despues eliminarlos



// Buscador de Pokemons
buttonSearch$$.addEventListener('click', insertPokemon);

function insertPokemon() {
  window.fetch(`${baseURL$$}${pokemonInput$$.value.toLowerCase()}`)
  .then(response => {
      if (response.status === 404) {
        alert("The pokemon doesn't exist")
      } else {
       return  response.json();
      }
     }
  )
  .then ( data=> {
    
    createPokemonInSearch(data);
    pokemons.push(data); // Cuando le de al boton de insertar me hara un push en el array que cree de pokemon
    
  })
  
}




buttonDelete$$.addEventListener('click', deletePokemon);
function deletePokemon() {
  divSearchPokemon$$.innerHTML=``; // Hacer un innerhtml en el contenedor de html donde se imprime los pokemons, sirve para vaciarlo
 pokemons.pop(); //Si quisiera borrar elemento por elemento utilizaríae esto
 for (const pokemon of pokemons) { //Esta funcion sirve para cuando terminamos de borrar , volver a pintar los pokemons que quedan en el array
  createPokemonInSearch(pokemon); //En este caso no es necesario porque vamos a borrar todos , si utilizaramos .pop tendria sentido
 }
  
}

buttonDeleteAll$$.addEventListener('click', deleteAll);
function deleteAll() {
  divSearchPokemon$$.innerHTML=``;
  pokemons.splice(0);//Sirve para borrar todos los elementos
}


function createPokemonInSearch(pokemon) {

  const card = document.createElement('div');
  card.classList.add('card-container');

  const numberId = document.createElement('p');
  numberId.classList.add("number-Id")
  numberId.textContent = pokemon.id;

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('image-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.other.dream_world.front_default;
  sprite.classList.add("sprite-img")
  spriteContainer.appendChild(sprite);

  const namePokemon = document.createElement('h1');
  namePokemon.classList.add('name');
  namePokemon.textContent = pokemon.name;

  const statistics = document.createElement("div");
  statistics.classList.add("card-stats");

  let height = pokemon.height/10;
  const heightPokemon = document.createElement("p");
  heightPokemon.textContent = (height + " m");

  let weight = pokemon.weight/10;
  const weightPokemon = document.createElement('p');
  weightPokemon.textContent = (weight + " kg");

  const typesPokemon = document.createElement('p');

// Aqui cree un array vacio para meter cada uno de los tipos de cada pokemon
  let arrayTypesPokemon=[];
  for (let i = 0; i < pokemon.types.length; i++) {
    arrayTypesPokemon.push(pokemon.types[i].type.name);
    
  }
    typesPokemon.textContent = arrayTypesPokemon;
  statistics.appendChild(heightPokemon);
  statistics.appendChild(weightPokemon);  
  card.appendChild(numberId);
  card.appendChild(spriteContainer);
  card.appendChild(namePokemon);
  card.appendChild(statistics);
  card.appendChild(typesPokemon);
  divSearchPokemon$$.appendChild(card); 


}


function pokemonNumbers(id) {
  window.fetch(`${baseURL$$}${id}`)
  .then(response => response.json())
  .then(data => {
    createPokemon(data);
  })
}


buttonSearchNumberPokemons$$.addEventListener('click',pokemon);

function pokemon() {
  console.log('clicaste ');
  for (let i = 1; i < numberPokemons$$.value; i++) {
    pokemonNumbers(i);
    console.log('clicaste ');
    
  }
}






function createPokemon(pokemon) {

  const card = document.createElement('div');
  card.classList.add('card-container');

  const spriteContainer = document.createElement('div');
  spriteContainer.classList.add('image-container');

  const sprite = document.createElement('img');
  sprite.src = pokemon.sprites.front_default;

  spriteContainer.appendChild(sprite);

  const numberId = document.createElement('p');
  numberId.textContent = pokemon.id;

  const namePokemon = document.createElement('p');
  namePokemon.classList.add('name');
  namePokemon.textContent = pokemon.name;

  const weightPokemon = document.createElement('p');
  weightPokemon.textContent= pokemon.weight;


  const typesPokemon = document.createElement('p');
// Aqui cree un array vacio para meter cada uno de los tipos de cada pokemon
  let arrayTypesPokemon=[];
  for (let i = 0; i < pokemon.types.length; i++) {
    arrayTypesPokemon.push(pokemon.types[i].type.name);
    
  }
    typesPokemon.textContent = arrayTypesPokemon;
    
 
  card.appendChild(spriteContainer);
  
  card.appendChild(numberId);
  card.appendChild(namePokemon);
  card.appendChild(weightPokemon);
  card.appendChild(typesPokemon);
  pokemonContainer.appendChild(card); 


}