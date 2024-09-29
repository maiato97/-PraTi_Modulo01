// soma dos elementos de um array

let lista = [10, 20, 30, 40]
let soma = 0

// for(let i = 0; i < lista.length; i++){
//     soma += lista[i]
// }

// console.log(soma)

// Encontre o maior número em um array.

let max = lista[0]

for(let j = 0; j < lista.length; j++){
    if(lista[j] > max){
        max = lista[j]
    }
}

console.log(max)


// inverter um array

let reverso = []

for(let k = lista.length - 1; k >= 0; k--){
    reverso.push(lista[k])
}

console.log(reverso)