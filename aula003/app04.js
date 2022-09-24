let pokemonsNome = ["pikachu", "charmander", "bulbasouro", "squirtle"]

let pokemonsFoto = [
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png",
    "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"
]

for(let i = 0; i < pokemonsNome.length; i++){
    document.write("<div class='umpokemon'>")
    document.write(`<h3>${pokemonsNome[i]}</h3>`)
    document.write(`<img src="${pokemonsFoto[i]}" alt="${pokemonsNome[i]}">`)
    
    document.write("</div>")
}
