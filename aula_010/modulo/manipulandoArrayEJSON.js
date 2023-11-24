const { json } = require('express')
var estados_cidades = require('./estados_cidades')

const getListaDeEstados = function () {
    /**********************************************
    *
    ● Criar uma função (getListaDeEstados) que 
    retorna a lista de todos os estados do Brasil. 
    *
    **********************************************/

    let jsonEstados = {}
    let arrayEstados = []
    let caminhoEstados = estados_cidades.estadosCidades.estados


    caminhoEstados.forEach(function (sigla, indice) {
        arrayEstados.push(caminhoEstados[indice].sigla)
    })

    jsonEstados.uf = arrayEstados
    jsonEstados.quantidade = arrayEstados.length

    console.log(jsonEstados)
    return jsonEstados
}
// getListaDeEstados()

const getDadosEstado = function (estadoEscolhido) {
    /**********************************************
    *
    ● Criar uma função (getDadosEstado) que retorna 
    as informações referente a um estado do Brasil, 
    onde a sigla do estado será o critério de filtro. 
    *
    **********************************************/
    let siglaEstado = estadoEscolhido.toUpperCase()
    let caminhoEstados = estados_cidades.estadosCidades.estados
    let jsonSigla = {}
    let status = false

    caminhoEstados.forEach(function (caminhoEstados) {
        if (caminhoEstados.sigla.includes(siglaEstado)) {
            jsonSigla.uf = caminhoEstados.sigla
            jsonSigla.descricao = caminhoEstados.nome
            jsonSigla.capital = caminhoEstados.capital
            jsonSigla.regiao = caminhoEstados.regiao

        }
        status = true
    })

    if (status = true) {
        console.log(jsonSigla)
        return jsonSigla
    } else {
        return false
    }



}
// getDadosEstado('Sp') 

const getCapitalEstado = function (estadoEscolhido) {
    /**********************************************
    *
    ● Criar uma função (getCapitalEstado) que retorna 
    as informações referente a capital de um estado do 
    Brasil, onde a sigla do estado será o critério de
    filtro. 
    *
    **********************************************/
    let siglaEstado = estadoEscolhido.toUpperCase()
    let caminhoEstados = estados_cidades.estadosCidades.estados
    let jsonSigla = {}

    caminhoEstados.forEach(function (caminhoEstados) {
        if (caminhoEstados.sigla.includes(siglaEstado)) {
            jsonSigla.uf = caminhoEstados.sigla
            jsonSigla.descricao = caminhoEstados.nome
            jsonSigla.capital = caminhoEstados.capital
        }

    })
    console.log(jsonSigla)
    return jsonSigla
}
// getCapitalEstado('ac')

const getEstadosRegiao = function (regiaoEscolhida) {
    /**********************************************
    *
    ● Criar uma função (getEstadosRegiao) que retorna 
    as informações referente aos estados do Brasil 
    conforme a sua região, onde a região será o
    critério de filtro.
    *
    **********************************************/
    let nomeRegiao = regiaoEscolhida.toUpperCase()
    let caminhoEstados = estados_cidades.estadosCidades.estados
    let jsonRegiao = {}
    let arrayEstados = []

    jsonRegiao.regiao = nomeRegiao

    caminhoEstados.forEach(function (estados) {

        if (estados.regiao.toUpperCase().includes(nomeRegiao)) {

            let jsonSiglaDesc = {}
            jsonSiglaDesc.uf = estados.sigla
            jsonSiglaDesc.descricao = estados.nome

            arrayEstados.push(jsonSiglaDesc)
        }

    })
    jsonRegiao.estados = arrayEstados

    console.log(jsonRegiao)
    return jsonRegiao

}
// getEstadosRegiao('SUL')

const getCapitalPais = function () {
    /**********************************************
    *
    ● Criar uma função (getCapitalPais) que retorna 
    as informações referente aos estados que formam 
    a capital do Brasil. 
    *
    **********************************************/

    let caminhoEstados = estados_cidades.estadosCidades.estados
    let jsonCapitais = {}
    let arrayCapitais = []

    caminhoEstados.forEach(function (estados) {

        if (estados.capital_pais) {
            let jsonCapitalAtual = {}

            jsonCapitalAtual.capital_atual = estados.capital_pais.capital
            jsonCapitalAtual.uf = estados.sigla
            jsonCapitalAtual.descricao = estados.nome
            jsonCapitalAtual.capital = estados.capital
            jsonCapitalAtual.regiao = estados.regiao
            jsonCapitalAtual.capital_pais_ano_inicio = estados.capital_pais.ano_inicio
            jsonCapitalAtual.capital_pais_ano_termino = estados.capital_pais.ano_fim

            arrayCapitais.push(jsonCapitalAtual)

        }


    })
    jsonCapitais.capitais = arrayCapitais

    console.log(jsonCapitais)
    return jsonCapitais


}

// getCapitalPais() 

const getCidades = function (estadoEscolhido) {
    /**********************************************
    *
    ● Criar uma função (getCidades) que retorna uma 
    lista de cidades, filtrado pela sigla do estado.  
    *
    **********************************************/

    let siglaCidade = estadoEscolhido.toUpperCase()

    let jsonCidades = {}
    let arrayCidades = []
    let caminhoEstados = estados_cidades.estadosCidades.estados
    let jsonCidadesEstado = {}
    
    caminhoEstados.forEach(function (estados) {

        if (estados.sigla.toUpperCase().includes(siglaCidade)) {

            jsonCidadesEstado.uf = estados.sigla
            jsonCidadesEstado.descricao = estados.nome
            jsonCidadesEstado.quantidade_cidades = estados.cidades.length
            
            estados.cidades.forEach(function (cidade) {
                arrayCidades.push(cidade.nome)
            })
            jsonCidades = jsonCidadesEstado
            jsonCidades.cidades = arrayCidades
        }

    })

    console.log(jsonCidades)
    return jsonCidades

}

getCidades('ac')

module.exports = {
    getListaDeEstados,
    getDadosEstado,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
    getCidades
}