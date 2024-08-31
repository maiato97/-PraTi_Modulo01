/* Pesquisa Binária

Desenvolvam um algoritmo que seja capaz de receber uma lista, e um valor correto.
E execute uma pesquisa binária para encontrar o valor certo.

*/

function binarySearch(arr, element) {
    let begin = 0
    let end = arr.length - 1 

    while (begin <= end) {
        let middle = Math.floor((begin + end) / 2)

        if (arr[middle] === element) {
            return middle
        } else if (arr[middle] < element) {
            begin = middle + 1
        } else {
            end = middle - 1
        }
    }
    return null
}

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const chosenNumber = 8

if (binarySearch(list, chosenNumber)){
    console.log(`O número ${chosenNumber} foi encontrado na lista.`)
} else {
    console.log(`O número ${chosenNumber} não foi encontrado na lista.`)
}
