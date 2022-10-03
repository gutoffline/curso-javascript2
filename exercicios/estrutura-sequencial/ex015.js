/*
Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
salário bruto.
quanto pagou ao INSS.
quanto pagou ao sindicato.
o salário líquido.
calcule os descontos e o salário líquido, conforme a tabela abaixo:
+ Salário Bruto : R$
- IR (11%) : R$
- INSS (8%) : R$
- Sindicato ( 5%) : R$
= Salário Liquido : R$
*/
function CalcularSalario(){
    salarioHora = parseFloat(document.querySelector("#salarioHora").value)
    totalHoras = parseFloat(document.querySelector("#totalHorasTrabalhadas").value)
    salarioBruto = (salarioHora * totalHoras)
    ir = salarioBruto * (11/100)
    inss = salarioBruto * (8/100)
    sindicato = salarioBruto * (5/100)
    salarioLiquido = salarioBruto  - ir - inss - sindicato

    salarioBruto = salarioBruto.toLocaleString('pt-br',{minimumFractionDigits: 2})
    ir = ir.toLocaleString('pt-br',{minimumFractionDigits: 2})
    inss = inss.toLocaleString('pt-br',{minimumFractionDigits: 2})
    sindicato = sindicato.toLocaleString('pt-br',{minimumFractionDigits: 2})
    salarioLiquido = salarioLiquido.toLocaleString('pt-br',{minimumFractionDigits: 2})

    document.querySelector("#resultado").innerHTML = ''
    document.querySelector("#resultado").innerHTML = '+ Salário Bruto : R$'+ salarioBruto
    document.querySelector("#resultado").innerHTML += '- IR (11%) : R$'+ ir
    document.querySelector("#resultado").innerHTML += '- INSS (8%) : R$'+ inss
    document.querySelector("#resultado").innerHTML += '- Sindicato ( 5%) : R$'+ sindicato
    document.querySelector("#resultado").innerHTML += '= Salário Liquido : R$'+ salarioLiquido
}