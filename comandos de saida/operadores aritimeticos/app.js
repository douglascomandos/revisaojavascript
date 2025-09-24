let numero = parseFloat(prompt("Digite um número:"))

let soma = numero + 5
let subtracao = numero - 5
let multiplicacao = numero * 2
let divisao = numero / 2
let modulo = numero % 3

console.log(10 / 3)
console.log(10 % 3)

document.getElementById('resultado').innerHTML = `
    Soma: ${soma} <br>
    Subtracao: ${subtracao}<br>
    Multiplicacao: ${multiplicacao}<br>
    Divisao: ${divisao}<br>
    Modulo: ${modulo}
`