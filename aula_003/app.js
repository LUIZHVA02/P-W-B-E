var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log('')

entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    let nome = nomeUsuario

    entradaDeDados.question('Digite a primeira nota do aluno: ', function(primeiraNota){
        let nota1 = Number (primeiraNota)

        entradaDeDados.question('Digite a segunda nota do aluno: ', function(segundaNota){
            let nota2 = Number (segundaNota)

            entradaDeDados.question('Digite a terceira nota do aluno: ', function(terceiraNota){
                let nota3 = Number (terceiraNota)

                entradaDeDados.question('Digite a quarta nota do aluno: ', function(quartaNota){
                    let nota4 = Number (quartaNota)

                    if(primeiraNota == '' || segundaNota == '' || terceiraNota == '' || quartaNota == '' ){
                        console.log(`ERRO. NOTA PENDENTE`)
                    } 
                
                    
                    else if(isNaN(primeiraNota)||isNaN(segundaNota)||isNaN(terceiraNota)||isNaN(quartaNota)){
                        console.log(`ERRO. É OBRIGATÓRIA A ENTRADA APENAS DE NÚMEROS`)
                    } 
                    
                    else if(nota1 > 10 || nota2 > 10 || nota3 > 10 || nota4 > 10 ||
                            nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0){
                                console.log(`ERRO. POR FAVOR INSIRA UM VALOR MENOR OU IGUAL A 10`)
                    }
                    
                    else {
                        
                        media = (nota1 + nota2 + nota3 + nota4) / 4
                        const aprovado = 'Aprovado'
                        const reprovado = 'Reprovado'
                        var situacao = reprovado

                        if (media <= 5) {
                            situacao = reprovado
                        } else if (media > 5) {
                            situacao = aprovado
                        }


                        console.log(``)
                        console.log(`O nome do aluno é: ${nome}`)
                        console.log(`A primeira nota do aluno ${nome} é: ${primeiraNota}`)
                        console.log(`A segunda nota do aluno ${nome} é: ${segundaNota}`)
                        console.log(`A terceira nota do aluno ${nome} é: ${terceiraNota}`)
                        console.log(`A quarta nota do aluno ${nome} é: ${quartaNota}`)
                        console.log(`A média do aluno ${nome} é: ${media} `)
                        console.log(`O aluno ${nome} está: ${situacao}`)
                        console.log(``)
                    }
                    entradaDeDados.close()
                    })
                })
            })
        })
    })