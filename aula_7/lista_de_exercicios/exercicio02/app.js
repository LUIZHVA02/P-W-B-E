var mediasEscolares = require('./modulo/mediasEscolares')

var readline = require ('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o nome do aluno(a): ', function(aluno){
    let nomeAluno = aluno

    entradaDeDados.question('Digite o nome do professor(a): ', function(professor){
        let nomeDoProfessor = professor
        
        entradaDeDados.question('Digite o gênero do aluno(a)(M)Masculino (F)Feminino: ', function(generoAluno){
            let sexoAluno = generoAluno
        
            entradaDeDados.question('Digite o gênero do professor(a)(M)Masculino (F)Feminino: ', function(generoProfessor){
                let sexoProfessor = generoProfessor
                
                entradaDeDados.question('Digite o nome do curso: ', function(curso){
                    let nomeCurso = curso
                
                    entradaDeDados.question('Digite o nome da disciplina: ', function(disciplina){
                        let nomeDisciplina = disciplina
                        
                        entradaDeDados.question('Digite a primeira nota: ', function(valorNota1){
                            let nota1 = Number (valorNota1)
    
                            entradaDeDados.question('Digite a segunda nota: ',function(valorNota2){
                                let nota2 = Number (valorNota2)

                                entradaDeDados.question('Digite a primeira nota: ', function(valorNota3){
                                    let nota3 = Number (valorNota3)
            
                                    entradaDeDados.question('Digite a segunda nota: ',function(valorNota4){
                                        let nota4 = Number (valorNota4)

                                            console.log('')
                                            console.log('/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/')
                                            console.log('')
                                            
                                        mediasEscolares.mediaComum (nomeAluno, sexoAluno, nomeDoProfessor, 
                                                                        sexoProfessor, nomeCurso, nomeDisciplina,
                                                                        nota1, nota2, nota3, nota4)

                                            console.log('')
                                            console.log('/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/')
                                            console.log('')
                                        
                                        if(media >= 50 && media < 69){

                                            entradaDeDados.question('Digite a nota do exame: ', function(exame){
                                                let notaExame = Number (exame)
                                        
                                                mediasEscolares.notaDoExame (notaExame)
                                            
                                            })                                    
                                        }
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
