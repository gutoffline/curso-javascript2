//Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.

let numero = prompt("Digite uma nota entre 0 e 10")
while(numero < 0 || numero > 10){
    numero = prompt("Valor inválido\nDigite uma nota entre 0 e 10")
}

alert("Parabéns")