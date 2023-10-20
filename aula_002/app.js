/***************************************************************
 * Objetivo: Manipular entrada de dados via teclado no terminal 
 * Autor: Luiz H Vidal Araujo
 * Data: 04/08/2023
 * Versão: 1.0
 **************************************************************/

//Importação da biblioteca readline, que recebe dados digitados pelo usuário no terminal
var readline = require('readline')

//Cria um elemento para entrada de dados do usuário via teclado
var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log(``)
//Solicita a entrada de dados no terminal, através de uma função de CallBack do método question
entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    //Recebe na variavel nome o conteúdo digitado pelo usuário
    var nome = nomeUsuario

    entradaDeDados.question('Digite sua idade: ', function(idadeUsuario){
        var idade = idadeUsuario

        entradaDeDados.question('Digite seu telefone: ', function(telefoneUsuario){
            var telefone = telefoneUsuario

            entradaDeDados.question('Digite seu email: ', function(emailUsuario){
                var email = emailUsuario
                console.log(``)
                //Exibe na tela um texto e a variável
                console.log(`Bem Vindo ao Aplicativo,  ${nome}`)
                console.log(`A idade do usuário ${nome} é: ${idade}`)
                console.log(`O telefone do usuário ${nome} é: ${telefone}`)
                console.log(`O email do usuário ${nome} é: ${email}`)
                console.log(``)
                //Encerrar a entrada de dados pelo usuário
                entradaDeDados.close()
            })
        })

    })
})