function exibirArtigo(callbackSucesso, callbackErro) {
    if(true) {
        callbackSucesso('Funções de callback em caso de sucesso')
    } else {
        callbackErro('Função de callback em caso de erro')
    }
}

let callbackSucesso = function(titulo) {
    console.log(titulo)
}

let callbackErro = function(erro) {
    console.log(erro)
}

exibirArtigo(callbackSucesso, callbackErro)
