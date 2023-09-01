var valorAtualizado = require('./modulo/valorAtualizado')

var readline = require ('readline')

var entradaDeDados = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

entradaDeDados.question('Digite o valor da venda:', function(valorOriginal){
    let valorVendaStr = valorOriginal.replace('.',',')
    let resultado

    entradaDeDados.question('Digite o código de pagamento (1 à 4):', function(codigoPagamentosStr){
        let prestacoesStr = codigoPagamentosStr.replace('.',',')

        let valorVenda = Number(valorVendaStr)
        let pagamento = Number(prestacoesStr)
        resultado = valorAtualizado.atualizacaoValor(valorVenda, pagamento,resultado)
             
            
    })

})