const prompt = require('prompt-sync')()

let num1 = Number(prompt("Informe o primeiro número: "))
let num2 = Number(prompt("Informe o segundo número: "))

let a = num1
let b = num2

do {
    let temp = b
    b = a % b
    a = temp
} while(b !== 0)

const MDC = a

console.log(`O maior divisor comum de ${num1} e ${num2} é ${MDC}`)