/*
    Construa um array de números e calcule a soma total dos números 
    e imprima cada número multiplicado por 2.
*/

let numeros = [10, 20, 30]
let soma = 0

numeros.forEach((valor) => {
    soma += valor
    console.log(`A multiplicação do valor ${valor} do array por 2 é: `, valor * 2)
})

console.log("A soma dos valores do array é: ", soma)