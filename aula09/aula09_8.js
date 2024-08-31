/*
let nome = 'Carol'
let idade = 27
let sexo = 'Feminino'

let objeto = {
    nome,
    idade,
    sexo
}

console.log(objeto)
*/
let bicicletaFactory = function(cor, tipo, marca) {
    return {
        cor,
        tipo,
        marca
    }
}

let bicicleta1 = bicicletaFactory('Azul', 'Speed', 'Caloi')
let bicicleta2 = bicicletaFactory('Preto', 'Mountain', 'BMX')

console.log("Dados Bicicleta 1: ", bicicleta1)
console.log("Dados Bicicleta 2: ", bicicleta2)