// let teste = function(){
//     console.log('Olá, mundo!')
// }

// teste()

// function showFunction(sucessCallback, errorCallback) {
//     if(true){
//         sucessCallback("Requisição bem sucedida")
//     } else {
//         errorCallback("Erro na requisição")
//     }
// }

// let sucessCallback = function(message) {
//     console.log(message)
// }

// let errorCallback = function(message) {
//     console.error(message)
// }

// showFunction(sucessCallback, errorCallback)

// 1. Soma dos Elementos de um Array

let lista = [10, 20, 30, 40]

let ArrSoma = function() {
    let soma = 0

    for(let i = 0; i < lista.length; i++){
        soma += lista[i]
    }

    return soma
}

console.log(ArrSoma(lista))

//2. Encontre o Maior Número em um Array

let ArrMax = function() {
    let max = lista[0]

    for(let j = 0; j < lista.length; j++){
        if(lista[j] > max){
            max = lista[j]
        }
    }

    return max
}

console.log(ArrMax(lista))

//3. Reverter um Array

let ArrReverso = function(){
    let reverso = []

    for(let k = lista.length - 1; k >= 0; k--){
        reverso.push(lista[k])
    }

    return reverso
}

console.log(ArrReverso(lista))

//4. Criem um novo array contendo apenas os números pares

 let arr = [1, 2, 3, 4]

 let ArrPares = function() {
    let pares = []

    for (let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            pares.push(arr[i])
        }
    }
    return pares
}

console.log(ArrPares(arr))

//5. Contar Ocorrências de um Valor

const prompt = require("prompt-sync")()

let vet = [10, 10, 7, 5, 10]
let value = Number(prompt("Digite um valor a procurar: "))

let ArrOcorrencias = function(value, vet) {
    let count = 0

    for(let c = 0; c < vet.length; c++){
        if(vet[c] === value){
            count++
        }
    }
    return count
}

let contarOcorrencias = ArrOcorrencias(value, vet) // variavel que mostra o valor do count da função, usando o "value" que tem no meu "vet".

console.log(`O valor ${value} ocorre ${contarOcorrencias} vezes no vetor.`)