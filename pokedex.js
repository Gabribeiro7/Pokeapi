const pokemonContainer = document.querySelector('#pokedex');
const iconTypes = ["bug", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass",
                     "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water", "dark"];

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

    // function myFunction() {
        
    //     const txtValue ="";
    //     const input = document.querySelector('myInput');
    //     const filter = input.value.toLowerCase();
    //     const divDeletable = document.querySelectorAll(".card");
        
      
       
    //     for (i = 0; i < divDeletable.length; i++) {

    //       h1 = divDeletable[i].querySelectorAll("h1");
    //       txtValue = h1.textContent || h1.innerText;
    //       if (txtValue.toLowerCase().indexOf(filter) > -1) {
    //         divDeletable[i].style.display = "";
    //       } else {
    //         divDeletable[i].style.display = "none";
    //       }
    //     }
    //   }

    
    

    function createPokemon(pokemon) {
        const card = document.createElement('div');
        card.classList.add('card');

        const numberId = document.createElement('p');
        numberId.classList.add("number-Id")
        numberId.textContent = pokemon.id;

        const spriteContainer = document.createElement('div');
        spriteContainer.classList.add('image-container');

        const sprite = document.createElement('img');
        sprite.src = pokemon.sprites.other.dream_world.front_default;
        sprite.classList.add("sprite-img")

        

        const namePokemon = document.createElement('h1');
        namePokemon.classList.add('card-name');
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
    card.appendChild(sprite);
    card.appendChild(namePokemon);
    card.appendChild(statistics);
    card.appendChild(typesPokemon);
   pokemonContainer.appendChild(card);
}

//* HereI'm gonna create a function to link the type icons to every pokemon that has that type







pokemon(151);