//Pedir usuario adivinhar numero
prompt = require('prompt-sync')();
const numeroCorreto = Math.floor((Math.random() * 10))
let tentativa

do {
    tentativa = parseInt(prompt("Adivinhe o número de 1 a 10: "));
    if (tentativa < numeroCorreto){
        console.log("Tente um número maior")
    } else if (tentativa > numeroCorreto){
        console.log("Tente um número menor")
    }
} while (tentativa !== numeroCorreto)

console.log("Parabéns! você acertou")