/* 
OBJETIVO: Criar uma lista de pokemons
- consulta em uma api
- pegar um pokemon
- montar um cartao de pokemon
- colocar na tela o card
*/
function fnPegarPokemons(){
    $.ajax({
        type: "GET",
        url: "https://pokeapi.co/api/v2/pokemon?limit=151",
        //data: "data",
        dataType: "json",
        success: function (dados) {
            $(".lista-pokemons").html("")
            let dadosPokemons = dados.results
            for (let i = 0; i < dadosPokemons.length; i++) {
                fnPegarUmPokemon(dadosPokemons[i].url)
            }
        },
        beforeSend: function(){
            $(".lista-pokemons").html("Aguarde, carregando os dados")
        }
    });
}

function fnPegarUmPokemon(url){
    $.ajax({
        type: "GET",
        url: url,
        dataType: "json",
        success: function (dados) {
            let Pokemon = {
                "nome": dados.name,
                "id" : dados.id,
                "foto" : dados.sprites.front_default,
                "tipo" : dados.types[0].type.name,
                "info":"novo"
            }
            fnMontarCartao(Pokemon)
        }
    });
}

function fnMontarCartao(Pokemon){
    let cartao
    cartao = `<li class="card ${Pokemon.tipo}">`
    cartao += `<h3>${Pokemon.nome}</h3>` 
    cartao += `<p><img src="${Pokemon.foto}"></p>` 
    cartao += `<p>${Pokemon.tipo}</p>`
    cartao += `<h4>${Pokemon.id}</h4>`
    cartao += `</li>` 
    $('.lista-pokemons').append(cartao)
}


fnPegarPokemons()