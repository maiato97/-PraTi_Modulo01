// let date = new Date()

// console.log(date.getDate())
// console.log(date.getMonth() + 1) //pq começa do zero
// console.log(date.getFullYear())

// console.log(date.toString())

// date.setDate(date.getDate() + 720)
// console.log(date.toString())

// date.setFullYear(date.getFullYear() + 726)
// console.log(date.toString())

let date1 = new Date(2024, 7, 6)
let date2 = new Date(2023, 7, 6)
console.log(date1.toString())

console.log(date1.getTime())

let miliseconds_between_dates = Math.abs(date1.getTime() - date2.getTime())
console.log(miliseconds_between_dates)

let miliseconds_per_day = (1 * 24 * 60 * 60 * 1000)
console.log(`Um dia tem ${miliseconds_per_day} milisegundos`)

console.log(`A diferença entre as datas é de ${Math.ceil(miliseconds_between_dates/miliseconds_per_day)} dias.`)

//Inverter uma string
//Contar vogais
//Gerar número aleatório
//Dias entre duas datas
//Formatar data
