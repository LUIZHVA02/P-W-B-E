/*********************************************************************
 * Objetivo: aprender a trabalhar com estrutura de dados Array e JSON
 * Data: 29/09/2023
 * Autor: Luiz Vidal
 * Versão: 1.0
 *********************************************************************/

// [] -> Colchetes representam uma estrutura Array
// {} -> Chaves representam uma estrutura JSON

const introducaoAoArray = function () {
    //Criando um Array manualmente
    let listaDeNomes = ['José', 'Ana', 'luiz', 'Maria', 'Carlos', 'Eduardo']

    //Exibe os dados do Array
    console.log(listaDeNomes)

    //Exibe os dados do Array como tabela
    console.table(listaDeNomes)

    //Retorna a quantidade de itens em um Array
    console.log(listaDeNomes.length)

    //Adiciona elementos novos no final do Array
    listaDeNomes.push('Roberto')

    // Adiciona elementos novos no inicio da lista
    listaDeNomes.unshift('Oliveira')
    console.table(listaDeNomes)

    // Remove o ultimo elemento do Array
    listaDeNomes.pop()
    console.table(listaDeNomes)

    // Remove o primeiro elemento do Array
    listaDeNomes.shift()
    console.table(listaDeNomes)

    //Remove um elemento baseado no índice, podendo escolher a quantidade de itens a serem excluídos
    //Exemplo: splice(2,3) -> 2 é refente ao índice e 3 -> é refente a quantidade de itens
    listaDeNomes.splice(2, 3)

    //Mostra o valor e o indice do Array
    listaDeNomes.forEach(function (item, indice) {
        console.log(item, indice);
    });

    //Adiciona elementos com tipos de dados diferentes
    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'joão da Silva', 10, true)
    console.log(listaDeNomes)

    // Typeof mostra o tipo de dados de um elemento
    console.log(typeof (listaDeNomes))
    console.log(typeof (listaDeNomes[5]))
    console.log(typeof (listaDeNomes[6]))


}

const percorrendoArray = function () {

    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    // let cont = 0

    // while(cont < listaDeProdutos.length){
    //     console.log(`Nome do Produto: ${listaDeProdutos[cont]}`)
    //     cont++
    // }

    // for(let cont = 0; cont < listaDeProdutos.length; cont++){
    //     console.log(`Nome do Produto: ${listaDeProdutos[cont]}`)
    // }

    // ForEach
    // listaDeProdutos.forEach(function(produto, indice){
    //     console.log((indice+1) + ' - Nome do Produto:' + produto)
    // })

    // indexOf Retorna o indice do elemento que foi encontrado
    // Caso o item buscado não exista, retorna sempre -1
    console.log(listaDeProdutos.indexOf('Impressora'))

    //Retorna verdadeiro ou falso
    console.log(listaDeProdutos.includes('Mouse'))

}

const filtrarProduto = function (nomeProduto) {
    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora', 'Mouse Pad', 'Gabinete', 'Processador', 'HD']

    let nome = String(nomeProduto)

    let status = false

    // if(listaDeProdutos.indexOf(nome) >= 0){
    //     status = true
    // } else {
    //     status = false
    // }
    // return status

    // return listaDeProdutos.includes(nome)

    listaDeProdutos.forEach(function (produto) {

        if (produto.toUpperCase() == nome.toUpperCase()) {
            status = true
        }

    })

    return status
}

//console.log(filtrarProduto('mouse'))
// percorrendoArray()

//introducaoAoArray()

const manipulandoArrayJson = function () {
    /* 
        [] -> Representa um array
        {} -> Representa um JSON
            ex: {atributo: valor}
                {nome: José, telefone: 79889798798}
    */


    //Criando objetos JSon
    let contato00 = { nome: 'José da Silva', telefone: '79889798798', email: 'jose@gmail.com' }
    let contato01 = { nome: 'Maria da Silva', telefone: '45645465654', email: 'maria@gmail.com' }
    let contato02 = { nome: 'João da Silva', telefone: '68463513574', email: 'joao@gmail.com' }

    //Adicionando elementos individuais nos objetos JSon
    contato00.celular = '977779858'
    contato00.data_nascimento = '05/10/2000'

    contato01.celular = '951354843'

    //Criando um array de dados com o JSon
    let arrayContatos = [contato00, contato01, contato02]

    //console.table(arrayContatos)

    // console.log(arrayContatos[1].nome)

    arrayContatos.forEach(function (dadosContato) {

        console.log('###################################\n')
        console.log('Nome: ' + dadosContato.nome)
        console.log('Email: ' + dadosContato.email)

        if(dadosContato.celular != undefined){
            console.log('Celular: ' + dadosContato.celular)
        }

        console.log('Telefone: ' + dadosContato.telefone)

        if(dadosContato.data_nascimento != undefined){
            console.log('Data de Nascimento: ' + dadosContato.data_nascimento)
        }
        console.log('')

    })
}

// manipulandoArrayJson()

const cadastrarProdutos = function() {

    //Criar o objeto Array 
    let arrayProdutos = []

    //Cria o objeto JSON para colocar o array de produtos
    let jsonProdutos = {}

    let listaDeMarcas =
        [
            { id: 1, nome_marca: 'Dell' },
            { id: 2, nome_marca: 'Apple' },
            { id: 3, nome_marca: 'Lenovo' },
            { id: 4, nome_marca: 'Positivo' },
            { id: 5, nome_marca: 'Razer' },
            { id: 6, nome_marca: 'Logitech' },
            { id: 7, nome_marca: 'Multilaser' }
        ]


    let listaDeCategorias =
        [
            { id: 1, nome_categoria: 'Periférico', descricao_categoria: '' },
            { id: 2, nome_categoria: 'Hardware', descricao_categoria: '' },
            { id: 3, nome_categoria: 'Computador', descricao_categoria: '' },
            { id: 4, nome_categoria: 'Games', descricao_categoria: '' }
        ]


    let listaDeSituacao =
        [
            { id: 1, situacao: 'Novo' },
            { id: 2, situacao: 'Semi-novo' }
        ]


    let listaDeCores =
        [
            { id: 1, nome_cor: 'Branco' },
            { id: 2, nome_cor: 'Preto' },
            { id: 3, nome_cor: 'Cinza' },
            { id: 4, nome_cor: 'Vermelho' },
            { id: 5, nome_cor: 'Azul' }
        ]


    
    let produto1 =
    {
        nome: 'Mouse',
        descricao: 'Mouse Óptico com fio',
        qtde: 50,
        valor: 60.00,
        marca: listaDeMarcas[0],
        categoria: listaDeCategorias[0],
        situacao_produto: listaDeSituacao[0],
        cor: [
            // {cor: listaDeCores[0], qtde: 5},
            // {cor: listaDeCores[1], qtde: 20},

            listaDeCores[0],
            listaDeCores[1],
            listaDeCores[2]
        ]
    }

    let produto2 =
    {
        nome: 'Teclado',
        descricao: 'Teclado Mecânico com fio',
        qtde: 30,
        valor: 549.99,
        marca: listaDeMarcas[4],
        categoria: listaDeCategorias[0],
        situacao_produto: listaDeSituacao[0],
        cor: listaDeCores

    }


    //Adiciona os produtos em um array de produtos
    arrayProdutos.push(produto1)
    arrayProdutos.push(produto2)

    //Adiciona o array com todos os produtos em um JSON
    jsonProdutos.lista_produtos = arrayProdutos

    //Retorna a quantidade de itens no JSON
    jsonProdutos.count = arrayProdutos.length

    console.log(jsonProdutos)
}

cadastrarProdutos()