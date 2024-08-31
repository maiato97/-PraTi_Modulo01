// array multidimensionais/matriz

let listaCoisas = Array()

listaCoisas['Frutas'] = Array()
listaCoisas['Viagem'] = Array()

listaCoisas['Frutas'][0] = "Morango" // array posição frutas, na posição 0 a variavel morango
listaCoisas['Frutas'][1] = "Uva"
listaCoisas['Frutas'][2] = "Laranja"
listaCoisas['Frutas'][3] = "Bergamota"

listaCoisas['Viagem'][0] = "Passagens"
listaCoisas['Viagem'][1] = "Malas"

//inserção de elementos no final do array
listaCoisas['Frutas'].push('Banana')

//inserção de elementos no começo da array
listaCoisas['Frutas'].unshift('Limão')

//exclusão de elementos no final do array
listaCoisas['Frutas'].pop()

//exclusão de elementos no começo do array
listaCoisas['Frutas'].shift()

console.log(listaCoisas)