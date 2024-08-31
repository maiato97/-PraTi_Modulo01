const prompt = require('prompt-sync')()

let n1 = parseInt(prompt("Digite o primeiro numero: "))
let n2 = parseInt(prompt("Digite o segundo numero: "))
let n3 = parseInt(prompt("Digite o terceiro numero: "))

if (n1 > n2 && n1 > n3){
    console.log("O primeiro número é maior.")
} else if (n2 > n1 && n2 > n3){
    console.log("O segundo número é maior.")
} else if (n3 > n1 && n3 > n2){
    console.log("O terceito número é maior.")
} else {
    console.log("ERRO! Os números são iguais")
}