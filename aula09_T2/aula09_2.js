// Crie um novo array contendo apenas os números pares.

// let arr = [1, 2, 3, 4]
// let pares = []

// for (let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//         pares.push(arr[i])
//     }
// }

// console.log(pares)

// contar ocorrencias de um valor 

const prompt = require("prompt-sync")()

let vet = [10, 10, 7, 5, 10]
let count = 0
let value = Number(prompt("Digite um valor a procurar: "))

for(let c = 0; c < vet.length; c++){
    if(vet[c] === value){
        count++
    }
}

console.log(`O valor ${value} ocorre ${count} vezes no vetor.`)