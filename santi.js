


const iconosTipos = ["bug", "dragon", "electric", "fairy", "fighting", "fire", "flying", "ghost", "grass", "ground", "ice", "normal", "poison", "psychic", "rock", "steel", "water"];
let inputAnterior;
let string = "";

fetch("https://pokeapi.co/api/v2/pokemon/?limit=151").then((res) => res.json())
.then((myRes) => {

    const pokemons = myRes.results;
    
    pintarTodasLasCartas(pokemons, string);

    const boton$$ = document.querySelector(".buscar");

    boton$$.addEventListener("click", () => buscador(pokemons));

    const divFilter$$ = document.querySelector(".filtroTipos");
    const imagenesTipos$$ = divFilter$$.querySelectorAll("img");

    for (const imagenTipo of imagenesTipos$$) {

        let tipo = imagenTipo.className;
        
        imagenTipo.addEventListener("click", () => filtrar(tipo, pokemons));

    }


});

 bconstuscador = (pokemons) => {

    const input$$ = document.querySelector("input");
    const divEliminable$$ = document.querySelectorAll(".carta");

    for (let i = 0; i < divEliminable$$.length; i++) {

        const compararNombre$$ = divEliminable$$[i].querySelector("h1");

        if (input$$.value.toLowerCase() != compararNombre$$.textContent) {
            
            divEliminable$$[i].remove();

        } else if (inputAnterior != input$$.value.toLowerCase()){

            divEliminable$$[i].style = ("background-color: gold; width: 200px; height: 300px; margin-bottom: 70px");

        }
        
    }

    inputAnterior = input$$.value.toLowerCase();

    pintarTodasLasCartas(pokemons, inputAnterior);

};

const pintarTodasLasCartas = (pokemons, estoNoDeboImprimirlo) => {

    const divPrincipal$$ = document.createElement("div");

    divPrincipal$$.classList.add("album");

    for (const pokemon of pokemons) {
        
        fetch(`${pokemon.url}`).then((res) => res.json())
        .then((myRes) => {
                
                let id = myRes.id;
                let nombre = myRes.name;
                let altura = myRes.height/10;
                let peso = Math.round(myRes.weight/10 * 100) / 100;
                let imagen = myRes.sprites.other.dream_world.front_default;

                if (!estoNoDeboImprimirlo.includes(nombre)) {

                    const div$$ = document.createElement("div");
                    const divStats$$ = document.createElement("div");
                    const id$$ = document.createElement("h3");
                    const nombre$$ = document.createElement("h1");
                    const altura$$ = document.createElement("p");
                    const peso$$ = document.createElement("p");
                    const imagen$$ = document.createElement("img");
                    const divTipos$$ = document.createElement("div");

                    imprimirTipos(myRes, divTipos$$);

                    div$$.classList.add("carta");

                    id$$.textContent = (id);
                    nombre$$.textContent = (nombre);
                    altura$$.textContent = (altura + " m");
                    peso$$.textContent = (peso + " Kg");
                    imagen$$.setAttribute("src", imagen);

                    imagen$$.classList.add("imagenes");
                    divStats$$.classList.add("stats");
                    divTipos$$.classList.add("tipos");

                    divStats$$.appendChild(altura$$);
                    divStats$$.appendChild(peso$$);
                    div$$.appendChild(id$$);
                    div$$.appendChild(nombre$$);
                    div$$.appendChild(imagen$$);
                    div$$.appendChild(divStats$$);
                    div$$.appendChild(divTipos$$);
                    divPrincipal$$.appendChild(div$$);
                    
                }
                
            });

    }

    document.body.appendChild(divPrincipal$$);

};



const imprimirTipos = (pokemon, div) => {

    for (const tipo of pokemon.types) {
        
        for (const tipoImagen of iconosTipos) {
            
            if (tipoImagen === tipo.type.name) {
                
                const imagenTipo = document.createElement("img");

                imagenTipo.classList.add("tipo");
                imagenTipo.setAttribute("src", "./imgs/icons/" + tipoImagen + ".svg");
                imagenTipo.classList.add(`${tipoImagen}`);

                div.appendChild(imagenTipo);

            }

        }

    }

}

const filtrar = (tipo, pokemons) => {

    const divEliminable$$ = document.querySelectorAll(".carta");
    let pokemonsQueNoDeboDuplicar = "";

    for (let i = 0; i < divEliminable$$.length; i++) {

        let tipoDefinitivo = "";

        for (let j = 0; j < divEliminable$$[i].lastChild.childNodes.length; j++) {
            
            const tiposDeCadaPokemon$$ = divEliminable$$[i].lastChild.childNodes[j].className;

            for (let k = 5; k < tiposDeCadaPokemon$$.length; k++) {
                
                tipoDefinitivo += tiposDeCadaPokemon$$[k];
                
            }
            
        }

        if (tipoDefinitivo.includes(tipo)) {
                
            divEliminable$$[i].style = ("background-color: #0059b3; color: white; border-color: white");
            const h1$$ = divEliminable$$[i].querySelector("h1");
            pokemonsQueNoDeboDuplicar += h1$$.textContent + " ";
            console.log(pokemonsQueNoDeboDuplicar);
            

        } else {

            divEliminable$$[i].remove();

        } 
        
    }

    pintarTodasLasCartas(pokemons, pokemonsQueNoDeboDuplicar);

}










