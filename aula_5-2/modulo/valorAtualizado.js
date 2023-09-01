function atualizacaoValor (valorVenda, pagamento,resultado){
    let codigoPagamentos = Number(pagamento)
    let vendas = Number(valorVenda)
    let valorAtualizado = resultado

    if(codigoPagamentos == 1){
        valorAtualizado = (vendas-((vendas/100)*8))
        console.log('O seu valor atualizado é: ' + valorAtualizado)

    } else if (codigoPagamentos == 2){
        valorAtualizado = (vendas-((vendas/100)*4))
        console.log('O seu valor atualizado é: ' + valorAtualizado)
    } else if (codigoPagamentos == 3){
        valorAtualizado = vendas
        console.log('O seu valor atualizado é: ' + valorAtualizado)

    } else if (codigoPagamentos == 4){
        valorAtualizado = (vendas+((vendas/100)*8))
        console.log('O seu valor atualizado é: ' + valorAtualizado + '\n')

    } else{
        console.log('ERRO. POR FAVOR DIGITE UMA RESPOSTA VÁLIDA') 
    }

    return valorAtualizado
} module.exports = {
    atualizacaoValor
}

// codigo Pagamento 1 = À vista, 8% de desconto
// codigo Pagamento 2 = À vista no cartão, 4% de desconto
// codigo Pagamento 3 = Em 2 vezes, preço normal sem juros
// codigo Pagamento 4 = Em 4 vezes, preço acrescido de 8%