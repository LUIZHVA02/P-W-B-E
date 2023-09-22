const calcularMedia = function 
(nomeAluno, sexoAluno, nomeDoProfessor, 
    sexoProfessor, nomeCurso, nomeDisciplina, 
        nota1, nota2, nota3, nota4, media) {
    
    let studentsName = nomeAluno
    let teachersName = nomeDoProfessor
    let studentsGender = sexoAluno
    let teachersGender = sexoProfessor
    let coursesName = nomeCurso
    let className = nomeDisciplina
    let grade1 = nota1
    let grade2 = nota2
    let grade3 = nota3
    let grade4 = nota4
    let average = media

    entradaDados.question('Digite o nome do aluno: '(nomeAluno){
        
            average = (grade1+grade2+grade3+grade4)/4

    })
}