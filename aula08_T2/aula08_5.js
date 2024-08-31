// contar primeiros 50 numeros primos depois de 100

let cont = 0
let tot = 0
let num = 101

do{
    
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            tot++
        }
    }    
        if (tot === 2) {
            cont++
            console.log(`O número ${num} é primo`)
        }
        tot = 0
        num += 2

} while (cont <50)