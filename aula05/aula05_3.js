// exercicio triagulo

const prompt = require('prompt-sync')();

let lado1 = parseInt(prompt("Digite o lado 1 do triângulo: "))
let lado2 = parseInt(prompt("Digite o lado 2 do triângulo: "))
let lado3 = parseInt(prompt("Digite o lado 3 do triângulo: "))

if(lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1){
    console.log("É possível formar um triângulo.")
} else {
    console.log("Não é possível formar um triângulo.")
}