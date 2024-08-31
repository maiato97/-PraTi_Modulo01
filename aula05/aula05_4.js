prompt = require('prompt-sync')();

let n1 = parseInt(prompt("Digite o primeiro numero: "));
let n2 = parseInt(prompt("Digite o segundo numero: "));
let op = prompt("Insira a operação desejada (+, -, /, *)");

let resultado

switch(op){
    case '+':
        resultado = n1 + n2;
        break;
    case '-':
        resultado = n1 - n2;
        break;
    case '*':
        resultado = n1 * n2;
        break;
    case '/':
        if (n2 !== 0){
            resultado = n1 / n2;
        } else {
            console.log("Erro: divisão por zero.");
            resultado = undefined;
        }
        break;
    default:
        console.log("Operação inválida");
        break;
}



/*if(op === '+'){
    resultado = n1 + n2
} else if(op === '-'){
    resultado = n1 - n2
} else if(op === '*'){
    resultado = n1 * n2
} else if(op === '/'){
    if (n2 !== 0){
        resultado = n1 / n2;
    } else {
        console.log("Erro: divisão por zero.");
        resultado = undefined;
    }
} else {
    console.log("Operação inválida")
}*/

if (resultado !== undefined) {
    console.log("Resultado:", resultado);
}