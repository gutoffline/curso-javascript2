function QuemEhEssePokemon(pokemon){
    if(pokemon == "pikachu"){
        document.querySelector("#mensagem").innerHTML = "Parabéns, você acertou"
    }else{
        document.querySelector("#mensagem").innerHTML =  "Infelizmente você errou."
    }
    document.querySelector("#pokemon-imagem").style.filter="brightness(1)"
    document.querySelector("#nome-pokemon").innerHTML = "Pikachu"
}