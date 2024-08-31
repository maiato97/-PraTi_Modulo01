// let option = 1

// switch(option) {
//     case 1:
//         console.log("Você selecionou a primeira opção")
//         break
//     case 2:
//         console.log("Você selecionou a segunda opção")
//         break
//     default:
//         console.log("Você não escolheu opção")
// }

// Exercicio: Verificar dias da semana com swith case

const prompt = require("prompt-sync")()

console.log("1 - Sunday \n2 - Monday \n3 - Tuesday \n4 - Wednesday \n5 - Thursday \n6 - Friday \n7 - Saturday")

let dweek = parseInt(prompt("Enter a day of week: "))

switch(dweek){
    case 1:
        console.log("Sunday")
        break
    case 2:
        console.log("Monday")
        break
    case 3:
        console.log("Tuesday")
        break
    case 4:
        console.log("Wednesday")
        break
    case 5:
        console.log("Thursday")
        break
    case 6:
        console.log("Friday")
        break
    case 7:
        console.log("Saturday")
        break
    default:
        console.log("ERROR! Choose an option between 1 and 7")
}