/*********************************************************************************
 * Objetivo: Realizar o calculo de uma tabuada através de estruturas de repetição
 * Data: 01/09/2023
 * Autor: Luiz Henrique Vidal Araujo
 * versão: 1.0
********************************************************************************/

const gerarTabuada = function(valorTabuada,contadorInicial,contadorFinal){
    let tabuada = Number(valorTabuada)
    let contInicial = Number(contadorInicial)
    let contFinal = Number(contadorFinal)
    let resultado
    let status = false
    
    if (contFinal < contInicial) {
        contInicial = contadorFinal
        contFinal = contadorInicial
    } 
    if (contadorInicial == '' || contadorFinal == '' || valorTabuada == '') {
        console.log('ERRO. Por Favor Insira Apenas Números')

    } else if (isNaN(contInicial) || isNaN(contFinal) || isNaN(tabuada)) {
        console.log('ERRO. Por Favor Insira Apenas Números')

    } else {
        // while (contInicial <= contFinal) {
        //     resultado = tabuada * contInicial
        //     console.log(`${tabuada} X ${contInicial} = ${resultado}`)

        //     //contInicial = contInicial + 1
        //     contInicial++
        //     //contInicial+=1
            
        //     status = true
        // }

        for(; contInicial<=contFinal;contInicial++){
            resultado = tabuada * contInicial
            console.log(`${tabuada} X ${contInicial} = ${resultado}`)

            status = true
        }
    }

    return status
} 

module.exports = {
    gerarTabuada
}