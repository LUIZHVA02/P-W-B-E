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


}

introducaoAoArray()