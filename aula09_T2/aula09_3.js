// array multidimensionais

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

let matriz2 = [
    [10, 11, 12],
    [13, 14, 15],
    [16, 17, 18]
]

console.table(matriz) // mostra na tela em tabela

let i = 0
let j = 0
let resultado = []

// for(i = 0; i < matriz.length; i++){
//     for(j = 0; j < matriz[i].length; j++){
//         console.log(`Elemento na posição [${i}][${j}]: ${matriz[i][j]}`)
//     }
// }

for(i = 0; i < matriz.length; i++){
    let somaLinha = []
    for(j = 0; j < matriz[i].length; j++){
        somaLinha.push(matriz[i][j] + matriz2[i][j])
    }

    resultado.push(somaLinha)
}

console.table(resultado)