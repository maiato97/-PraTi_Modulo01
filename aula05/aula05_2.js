// Maior de dois numeros

const prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Insira o primeiro numero: "));
let n2 = parseInt(prompt("Insira o segundo numero: "));

if(n1 > n2){
    console.log("O primeiro número é maior")
}  else if (n2 > n1){
        console.log("O segundo número é maior")
}  else {
    console.log("Os números são iguais")
}