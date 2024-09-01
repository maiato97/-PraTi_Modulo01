let fruitsList = Array()

fruitsList[0] = 'Maça'
fruitsList[1] = 'Banana'
fruitsList[2] = 'Melancia'
fruitsList[3] = 'Uva'
fruitsList[4] = 'Morango'

console.log(fruitsList)

function ordenarArray(array){

    return array.sort() //método ordena array de strings
}

console.log(ordenarArray(fruitsList))

let index = fruitsList.indexOf('Morango')

if ( index === -1){
    console.log('Elemento não existe')
} else {
    console.log(`O elemento existe e está na posição: ${index}`)
}

let numberList = []

numberList[0] = 10
numberList[1] = 12
numberList[2] = 0
numberList[3] = 16
numberList[4] = 7
numberList[5] = 9

console.log(numberList.sort((a, b) => a - b)) // a e b vao percorrendo todo o array e comparando, neste caso se o resultado por positivo, o b vem anter de a.