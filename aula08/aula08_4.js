// somar elementos de matriz

function somaMatriz(matriz){
    let soma = 0
    for(let i = 0; i < matriz.length; i++){
        for(let j = 0; j <matriz[i].length; j++)
            soma += matriz[i][j]
    }
    return soma
}

console.log("A soma dos elementos contidos na nossa matriz é: ", somaMatriz([[1, 2], [3, 4]]))