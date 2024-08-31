const prompt = require("prompt-sync")()

console.log("Calculadora Simples: Operadores abaixo")
console.log("+ = soma \n- = subtração \n* = multiplicação \n/ = divisão")

let op = prompt("Digite o operador conforme mostrado acima: ")
let n1 = Number(prompt("Digite um número: "))
let n2 = Number(prompt("Digite outro número: "))
let result

if (op === "+"){
    result = n1 + n2 
} else if (op === "-"){
    result = n1 - n2
} else if (op === "*"){
    result = n1 * n2
} else if (op === "/"){
    if (n2 !== 0){
        result = n1 / n2
    } else {
        console.log("ERRO! Divisão por zero!")
    } 
} else {
    console.log("ERRO! Operador ou números inválidos!")
}

console.log("O resultado da operação é: ",n1, op, n2,"=",result)