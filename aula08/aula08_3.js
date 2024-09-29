// reverter array

function reverterArray(vetor){
    let vetorResultado = []
    for (let i = vetor.length - 1; i >= 0; i++){
        vetorResultado.push(vetor[i])
    }
    return vetorResultado
}

console.log("O vetor invertido é: ", reverterArray([1, 2, 3, 4]))