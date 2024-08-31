// calculadora usando callback e switch case
let soma = function(num1, num2) {
    return num1 + num2
}

let subtracao = function(num, num2) {
    return num1 - num2
}

let multiplicacao = function(num1, num2) {
    return num1 * num2
}

let divisao = function(num1, num2) {
    return num1/num2
}

function calculadora(operacao, num1, num2, soma, subtracao, multiplicacao, divisao) {
    switch(operacao){
        case "+":
            let resultSoma = soma(num1, num2)
            return resultSoma
        case "-":
            let resultSubtracao = subtracao(num1, num2)
            return resultSubtracao
        case "*":
            let resultMulti = multiplicacao(num1, num2)
            return resultMulti
        case "/":
            if(num2 === 0) {
                console.log("O divisor não pode ser zero.")
            } else {
                let resultDivisao = divisao(num1, num2)
                return resultDivisao // não precisa break se existe return pois para o codigo.
            }
    }
}

const prompt = require('prompt-sync')()

let operacao = prompt("Digite a operação desejada (+, -, *, /): ")
let num1 = parseInt(prompt("Digite o primeiro numero: "))
let num2 = parseInt(prompt("Digite o segundo numero: "))

console.log(calculadora(operacao, num1, num2, soma, subtracao, multiplicacao, divisao))



