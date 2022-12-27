const pokemonContainer = document.querySelector('#pokedex');

function fetchPokemon(id) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then( response  => response.json() )
  .then( data => {
    createPokemon(data);
    // console.log(data);
  })
}

function pokemon(number) {
  for (let i = 1; i < number; i++) {
    fetchPokemon(i);
    
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

pokemon(150);

