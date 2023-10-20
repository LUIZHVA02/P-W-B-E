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


    estados_cidades.estadosCidades.estados.forEach(function (sigla, indice) {
        arrayEstados.push(estados_cidades.estadosCidades.estados[indice].sigla)
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

    jsonSigla = {}
    arraySigla = []
    let i = 0

    estados_cidades.estadosCidades.estados.forEach(function(sigla, i){
        estados_cidades.estadosCidades.estados[i].sigla

        console.log(i)
    })
    
    while (estadoEscolhido != estados_cidades.estadosCidades.estados[i].sigla) {
        

        i++
    }
    jsonSigla.push(estados_cidades.estadosCidades.estados[i].sigla,
                    estados_cidades.estadosCidades.estados[i].nome,
                    estados_cidades.estadosCidades.estados[i].capital,
                    estados_cidades.estadosCidades.estados[i].regiao)

    console.log(jsonSigla)
    return jsonSigla
}
getDadosEstado()

const getCapitalEstado = function () {
    /**********************************************
    *
    ● Criar uma função (getCapitalEstado) que retorna 
    as informações referente a capital de um estado do 
    Brasil, onde a sigla do estado será o critério de
    filtro. 
    *
    **********************************************/
}

const getEstadosRegiao = function () {
    /**********************************************
    *
    ● Criar uma função (getEstadosRegiao) que retorna 
    as informações referente aos estados do Brasil 
    conforme a sua região, onde a região será o
    critério de filtro.
    *
    **********************************************/
}

const getCapitalPais = function () {
    /**********************************************
    *
    ● Criar uma função (getCapitalPais) que retorna 
    as informações referente aos estados que formam 
    a capital do Brasil. 
    *
    **********************************************/
}

const getCidades = function () {
    /**********************************************
    *
    ● Criar uma função (getCidades) que retorna uma 
    lista de cidades, filtrado pela sigla do estado.  
    *
    **********************************************/
}