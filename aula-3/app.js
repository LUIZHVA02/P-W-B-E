var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log('')

entradaDeDados.question('Digite seu nome: ', function(nomeUsuario){
    let nome = nomeUsuario

    entradaDeDados.question('Digite a primeira nota do aluno: ', function(primeiraNota){
        let nota1 = primeiraNota

        entradaDeDados.question('Digite a segunda nota do aluno: ', function(segundaNota){
            let nota2 = segundaNota

            entradaDeDados.question('Digite a terceira nota do aluno: ', function(terceiraNota){
                let nota3 = terceiraNota

                entradaDeDados.question('Digite a quarta nota do aluno: ', function(quartaNota){
                    let nota4 = quartaNota
                    
                    if(nota1 == '' || nota2 == '' || nota3 == '' || nota4 == '' ){
                        console.log(`ERRO. NOTA PENDENTE`)
                    } else {

                        var floatNota1 = parseFloat(nota1)
                        var floatNota2 = parseFloat(nota2)
                        var floatNota3 = parseFloat(nota3)
                        var floatNota4 = parseFloat(nota4)
                        var media = (floatNota1 + floatNota2 + floatNota3 + floatNota4) / 4
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
                        console.log(`A primeira nota do aluno ${nome} é: ${floatNota1}`)
                        console.log(`A segunda nota do aluno ${nome} é: ${floatNota2}`)
                        console.log(`A terceira nota do aluno ${nome} é: ${floatNota3}`)
                        console.log(`A quarta nota do aluno ${nome} é: ${floatNota4}`)
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