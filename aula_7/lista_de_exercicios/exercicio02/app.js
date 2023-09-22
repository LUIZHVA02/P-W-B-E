var mediasEscolares = require('./modulo/mediasEscolares')

var readline = require ('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o nome do aluno(a): ', function(nomeAluno){
    let aluno = nomeAluno

    entradaDeDados.question('Digite o nome do professor(a): ', function(nomeDoProfessor){
        let professor = nomeDoProfessor
        
        entradaDeDados.question('Digite o gênero do aluno(a): ', function(generoAluno){
            let sexoAluno = generoAluno
        
            entradaDeDados.question('Digite o gênero do professor(a): ', function(generoProfessor){
                let sexoProfessor = generoProfessor
                
                entradaDeDados.question('Digite o nome do curso: ', function(nomeCurso){
                    let curso = nomeCurso
                
                    entradaDeDados.question('Digite o nome da disciplina: ', function(nomeDisciplina){
                        let disciplina = nomeDisciplina
                        
                        entradaDeDados.question('Digite a primeira nota: ', function(valorNota1){
                            let nota1 = Number (valorNota1)
    
                            entradaDeDados.question('Digite a segunda nota: ',function(valorNota2){
                                let nota2 = Number (valorNota2)

                                entradaDeDados.question('Digite a primeira nota: ', function(valorNota3){
                                    let nota3 = Number (valorNota3)
            
                                    entradaDeDados.question('Digite a segunda nota: ',function(valorNota4){
                                        let nota4 = Number (valorNota4)
                                        
                                        mediasEscolares.distribuirDados (nomeAluno, sexoAluno, nomeDoProfessor, 
                                                                        sexoProfessor, nomeCurso, nomeDisciplina,
                                                                        nota1, nota2, nota3, nota4, notaExame)
                                    })
                                })
                            })
                        })                       
                    })
                })
            })
        })
    }) 
})
