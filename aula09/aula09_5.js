/*  Você tem uma lista de objetos que representam diferentes tipos
    de veículos e suas características. Seu objetivo é primeiro usar o FOR IN para listar
    todas as propriedades e valores de cada veículo. Depois, utilizar o FOR OF para listar
    apenas os modelos dos veículos.
*/

const veiculo1 = {
    marca: 'Fiat',
    modelo: 'Palio',
    ano: '2020',
    cor: 'Branco',
    preco: 40500
}

const veiculo2 = {
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: '2021',
    cor: 'Preto',
    preco: 61000
}

const veiculos = [veiculo1, veiculo2]

for (let dados in veiculos){
    console.log(veiculos[dados])
}

console.log("\n")

for (let veiculo of veiculos){
    console.log(`Modelo veículo: ${veiculo.modelo}`)
}