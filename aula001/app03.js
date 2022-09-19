let n1 = 20
let n2 = '5'

console.log("n1: ", typeof n1)
console.log("n2: ", typeof n2)
console.log(n1+n2)

// uma string + um número/string , o operador + será para concatenar e não para somar

console.log(n1-n2)

// NaN --> Not a Number
console.log(n1 + parseInt(n2))

console.log("n2: " , typeof n2)
n2 = parseInt(n2)
console.log("n2: ", typeof n2)