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
    listaDeNomes.splice(2,3)

    //Mostra o valor e o indice do Array
    listaDeNomes.forEach(function (item, indice) {
        console.log(item, indice);
    });

    //Adiciona elementos com tipos de dados diferentes
    listaDeNomes.push('André da Silva', 'Ricardo da Silva', 'joão da Silva', 10, true)
    console.log(listaDeNomes)

    // Typeof mostra o tipo de dados de um elemento
    console.log(typeof(listaDeNomes))
    console.log(typeof(listaDeNomes[5]))
    console.log(typeof(listaDeNomes[6]))


}

const percorrendoArray = function () {

    let listaDeProdutos = ['Mouse', 'Teclado', 'Monitor', 'Impressora','Mouse Pad', 'Gabinete', 'Processador', 'HD']

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

percorrendoArray()

//introducaoAoArray()