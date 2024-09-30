"use strict"
function exibirMensagem(){
    if(true){
        var escopoFuncao = 'Javascript'
        let escopoBloco = 'C++'
        console.log(escopoBloco) // C++
    }
    console.log(escopoFuncao) // Javascript
    //console.log(escopoBloco) erro
}
exibirMensagem()