function multiplicacao(m, ...p) {
    console.log(m)
    console.log(p)

    let resultado = 0

    p.forEach(elemento => resultado += m * elemento)

    return resultado
}

console.log(multiplicacao(5, 7, 12, 3, 50))