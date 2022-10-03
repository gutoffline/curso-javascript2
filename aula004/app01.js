/* 
DOM - Document Object Model 
- Árvore que é cirada com os elementos HTML
- Através dessa árvore eu consigo navegar e selecionar/modificar elementos 
- document.getElementById("id do elemento") --> seleciona um elemento através do ID
- document.querySelector("")
    -- ("#id do elemento")
    -- (".classe do elemento")
    -- ("tag")
*/

function Multiplicar(){
    let n1 = document.querySelector("#n1").value
    let n2 = document.querySelector("#n2").value
    let resultado = n1 * n2
    document.querySelector("#resultado").innerHTML = `<strong>${resultado}</strong>`
}
