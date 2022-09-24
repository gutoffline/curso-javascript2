//Faça um Programa que pergunte em que turno você estuda. Peça para digitar M-matutino ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!" ou "Valor Inválido!", conforme o caso.

let turno = 'A'

if(turno == 'M'){
    console.log("Bom dia!")
}else if(turno == 'V'){
    console.log("Boa tarde!")
}else if(turno == 'N'){
    console.log("Boa noite!")
}else{
    console.log("Valor Inválido!")
}