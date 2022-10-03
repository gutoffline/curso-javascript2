// Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';

function CadastrarCliente(){
    let nome = document.querySelector("#nome").value
    if(nome.length < 3){
        document.querySelector("#erro-nome").innerHTML = "<em>O nome deve possuir mais de 3 caracteres</em>"
        document.querySelector("#nome").focus()
        return
    }else{
        document.querySelector("#erro-nome").innerHTML = "" 
    }

    

    alert("Cadastro efetuado com sucesso!!!")
}