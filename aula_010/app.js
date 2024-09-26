/*******************************************************************
* Objetivo: Criar uma API para responder dados de estados e cidades
* Data: 10/11/2023
* Autor: Luiz H. V. Arujo
* Versão: 1.0
*******************************************************************/

/** Instalações da dependência para criação da API
 *  express     - "npm install express --save" {
 *     Dependência do node para auxiliar na criação da API}
 * 
 *  cors        - "npm install cors --save" {
 *      [Dependência para manipular recursos de acesso, permissões, etc da API]
 *      [Trabalha com as informações no Head(Front-End - html)]}
 * 
 *  body-parser - "npm install body-parser --save" {
 *      [É uma dependência para auxiliar na chegada de dados na API]
 *      [Trabalha com as informações no Body(Front-End - html)]}
 */

/*** Métodos de Requisição de Dados
 * GET       - Pegar dados
 * POST      - Envia dados novos
 * PUT       - Altera dados existentes
 * DELETE    - Apagar dados existentes
 */

//Import das bibliotecas do projeto
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Cria um objeto App tendo como referência a classe do express
const app = express()


//request - Receber dados
//response - Devolver dados

//Função para configurar as permissões do cors
app.use ((request, response, next)=>{

    /*response.header('Access-Control-Allow-Origin', '*') {
        Qualquer um, todos, tem acesso para fazer requisições à API}*/

    /*response.header('Access-Control-Allow-Origin', '185.56.14.1, 185.56.15.1') {
        Apenas os endereços de IP pré-definidos tem acesso para fazer requisições à API}*/

    response.header('Access-Control-Allow-Origin', '*')

    /*response.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE') {
        Configura os Métodos que poderão ser utilizados na API}*/
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())

    next()
})

//EndPoints: Listar a sigla de todos os estados
app.get('/estados/sigla', cors(), async function(request, response, next){

    let controleListaEstados = require('./modulo/manipulandoArrayEJSON.js')

    let listaDeEstados = controleListaEstados.getListaDeEstados()


    if(listaDeEstados){
        response.json(listaDeEstados)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro:'Não foi possível encontrar um item'})
    }

})

//EndPoint: retorna os dados do estado filtrando pela sigla
app.get('/estado/sigla/:uf', cors(), async function(request, response, next){

    //Recebe uma variável encaminhada por parametro na URL da requisição
    let siglaEstado = request.params.uf

    let controleDadosEstado = require('./modulo/manipulandoArrayEJSON.js')
    let dadosCapital = controleDadosEstado.getDadosEstado(siglaEstado)

    if(dadosCapital){
        response.json(dadosCapital)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro:'Não foi possível encontrar um item'})
    }

})

app.get('/capital/estado', cors(), async function(request, response, next){

    let siglaEstado = request.query.uf

    let controleCapitalEstado = require('./modulo/manipulandoArrayEJSON.js')
    let capitalEstado = controleCapitalEstado.getCapitalEstado(siglaEstado)

    if(capitalEstado){
        response.json(capitalEstado)
        response.status(200)
    } else {
        response.status(404)
        response.json({erro:'Não foi possível encontrar um item'})
    }
})

app.listen(8081, function(){
    console.log('API funcionando e aguardando requisições')
})