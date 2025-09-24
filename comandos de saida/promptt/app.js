let nome = prompt('Qual é o seu nome?')
let sobrenome = prompt('Qual é o seu sobrenome?')

document.getElementById('variavel').innerHTML = `Você digitou: ${nome} ${sobrenome}`
console.log(nome, sobrenome)