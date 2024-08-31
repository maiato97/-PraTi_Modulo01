//Fazer um algoritmo para receber numeros decimais até que o usuário digite 0 e fazer
//a média aritmética desses números.

const prompt = require("prompt-sync")()

let num = Number(prompt("Digite o primeiro número: "))
let soma = 0
let i = 0

while(num !== 0){
    soma += num
    i++
    num = Number(prompt("Digite um número decimal: "))
}
console.log("A média aritmética é: ", soma/i)