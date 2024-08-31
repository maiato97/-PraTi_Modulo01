const prompt = require("prompt-sync")()
// Escreva algoritmo 50 primeiros numeros primos maior que 100.
// Obs.: Número primo é divisivel somente por 1 e ele mesmo.

// Solicitar números ao usuário até que ele insira um valor negativo.

let num

do {
    num = Number(prompt("Digite um número: "))
} while (num >= 0)
