
let url = 'https://pokeapi.co/api/v2/pokemon?limit=151'
fetch(url)
    .then(response => response.json())
    .then(function(dados){
        for(let i=0; i<dados.results.length; i++){
            fnPegaUmPokemon(dados.results[i].url)
        }
    })


function fnPegaUmPokemon(urlPokemon){
    fetch(urlPokemon)
    .then(response => response.json())
    .then(function(dadosPokemon){
        console.log(dadosPokemon)
        fnCriarCartao(dadosPokemon.name, dadosPokemon.id, dadosPokemon.types,dadosPokemon.sprites.front_default)
    })
}

function fnCriarCartao(nome, numero, tipo, foto){
    let listaPokemon = document.querySelector(".lista-pokemon")
    listaPokemon.innerHTML += "<li class='um-pokemon'>"
    listaPokemon.innerHTML += `<img src="${foto}">`
    listaPokemon.innerHTML += `<h3>${nome}</h3>`
    listaPokemon.innerHTML += `<h4>${tipo}</h4>`
    listaPokemon.innerHTML += `<h4>${numero}</h4>`
    listaPokemon.innerHTML += `</li>`
}