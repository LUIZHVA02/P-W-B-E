const calcularFatorial = function (valorFatorial){

    let fator = Number(valorFatorial)
    let resultado = 0
    let resultado2 = 0

    if(fator == 0 || valorFatorial == ''){
        console.log('ERRO. RESPOSTA INVÁLIDA.')
        console.log('NÃO EXISTE FATORIAL DE ZERO')
    } else if(fator == 1){
        console.log('ERRO. RESPOSTA INVÁLIDA.')
        console.log('NÃO É POSSÍVEL CALCULAR O FATORIAL DE 1')
    } else {
        for(resultado; fator>1;fator--){
            resultado = fator*(fator-1)
            resultado2 = resultado * (fator-2)
            console.log(resultado2)
        }
    }
}

calcularFatorial(6)
module.exports = {
    calcularFatorial
}