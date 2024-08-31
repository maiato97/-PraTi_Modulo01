// Calcule a media de 3 notas e determine o conceito com if/else:

const prompt = require('prompt-sync')()

let notas
let media
let conceito

// let n1 = Number(prompt("Digite a primeira nota: "))
// let n2 = Number(prompt("Digite a segunda nota: "))
// let n3 = Number(prompt("Digite a terceira nota: "))
// media = (n1+n2+n3) / 3

for (let i = 1; i <= 3; i++){
    notas = Number(prompt("Digite uma nota: "))
    notas += notas
    media = notas/i
}

if (media >= 90){
    console.log(`A média das notas ${media.toFixed(2)}`)
    conceito = 'A'
} else if (media < 90){
    console.log(`A média das notas é ${media.toFixed(2)}`)
    conceito = 'B'
} else if (media < 70){
    console.log(`A média das notas é ${media.toFixed(2)}`)
    conceito = 'C'
} else if (media < 50){
    console.log(`A média das notas é ${media.toFixed(2)}`)
    conceito = 'D'
} else if (media < 30){
    console.log(`A média das notas é ${media.toFixed(2)}`)
    conceito = 'E'
} else {
    console.log(`A média das notas é ${media.toFixed(2)}`)
}

console.log(conceito)