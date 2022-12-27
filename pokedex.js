function renderPokemons(pokemonsList) {
    //Here I create a div thats gonna contain all my pokemon cards
    const divFather$$ = document.createElement("div");
    divFather$$.classList.add("div_father");
    
        //Here I create a loop to run through the pokemon's list and urls and give me the data i need to exibit
        for (const pokemon of pokemonsList) {
            // I called a fetch function, so it can give me the data inside every pokemon url
            fetch(`${pokemon.url}`).then((res) => res.json())
            .then((result) => {
                //here I create variables with the path to each data I'm gonna use
                let id = result.id;
                let name = result.name;
                let height = result.height/10;
                let weight = result.weight/10;
                let type = result.types[0].type.name;
                let image = result.sprites.other.dream_world.front_default;

                
                // Here I create a div thas gonna contain the pokemons data and give it a class
                const div$$ = document.createElement("div");
                div$$.classList.add("card");

                // I create a h3 thats gonna show the pokemon's ID/number, gave it a class and a text context with it's location.
                const id$$ = document.createElement("h3");
                id$$.classList.add("card_id");
                id$$.textContent = (id);

                // I create a h1 thats gonna show the pokemon's name, gave it a class and a text context with it's location.
                const name$$ = document.createElement("h1");
                name$$.classList.add("card_name");
                name$$.textContent = (name);

                // Here I create a div thats gonna be the container of our pokemon image, also gave it a class
                //TODO const imgContainer$$ = document.createElement("div");
                //TODO imgContainer$$.classList.add("card_Img_Container");

                // Here I create a variable that contains the image 
                const image$$ = document.createElement("img");

                image$$.setAttribute("src", image);
                
                //Here I create another div, thats gonna contain the statiscs of each pokemon
                const statistics$$ = document.createElement("div");
                statistics$$.classList.add("card_stats");

                // I create a "p" thats gonna show us the pokemon height follewed by "m", representing the value in the chosen metric system
                const height$$ = document.createElement("p");
                height$$.textContent = (height + " m");

                // I create a "p" thats gonna show us the pokemon weight follewed by "kg", representing the value in the chosen metric system
                const weight$$ = document.createElement("p");
                weight$$.textContent = (weight + " kg" );

                //Here I create another div, thats gonna contain the type of each pokemon
                const type$$ = document.createElement("div");
                type$$.textContent = (type);
                type$$.classList.add("card_Types");
                

                //Here I'm gonna put each element created inside the card div, and after the card div inside the divFather.
                //TODO imgContainer$$.appendChild(img$$);
                statistics$$.appendChild(height$$);
                statistics$$.appendChild(weight$$);
                div$$.appendChild(id$$);
                div$$.appendChild(name$$);
                div$$.appendChild(image$$)
                //TODO div$$.appendChild(imgContainer$$);
                div$$.appendChild(statistics$$);
                div$$.appendChild(type$$);
                divFather$$.appendChild(div$$);
            }        
                    
            
    )};
            //TODO And here I'm putting every div that contains all the data inside one and only div "father"
            document.body.appendChild(divFather$$);
}

function getPokemons() {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
        .then(function (response) {
            return response.json();
        })
        .then(function (result) {

            //TODO console.log(result.results);
            renderPokemons(result.results);
        })
};

function init () {
    getPokemons();
}

window.onload = init;