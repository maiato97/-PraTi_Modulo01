const prompt = require('prompt-sync')()

let num = Number(prompt("Digite um número: "))

if (num > 0){
    console.log("O número é positivo!")
} else if (num < 0){
    console.log("O número é negativo!")
} else if (num === 0){
    console.log("O número é ZERO!")
} else {
    console.log("ERRO! Necessário digitar um número!")
}