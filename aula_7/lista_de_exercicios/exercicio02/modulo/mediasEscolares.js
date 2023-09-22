const distribuirDados = function 
    (nomeAluno, sexoAluno, nomeDoProfessor, 
    sexoProfessor, nomeCurso, nomeDisciplina,
    nota1, nota2, nota3, nota4, notaExame) {
    
    let studentsName = nomeAluno
    let teachersName = nomeDoProfessor
    let studentsGender = sexoAluno
    let teachersGender = sexoProfessor
    let coursesName = nomeCurso
    let className = nomeDisciplina
    let grade1 = Number (nota1)
    let grade2 = Number (nota2)
    let grade3 = Number (nota3)
    let grade4 = Number (nota4)
    let examsGrade = Number (notaExame)
    let media = (grade1+grade2+grade3+grade4)/4
    let media2 = (average + examsGrade)/2
    let situacao

    if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || 
        nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100 ||
        notaExame < 0 || notaExame > 100){

        console.log('Erro. O Valor Inserido é Inválido!!!')

    } else if (studentsGender == '' || studentsName == '' || teachersGender == '' || 
                teachersName == '' || coursesName == '' || className == '' || 
                grade1 == '' || grade2 == '' || grade3 == '' || grade4 == '' || 
                examsGrade == '' || average){

                console.log('Erro. Nenhum Valor Inserido!!!')
    }

    if(media > 70){
        situacao = 'aprovado'

    } else if(media < 50){
        situacao = 'reprovado'

    } else if(media > 50 && media < 69){
        
        if(media2 < 60){
            situacao = 'reprovado'

        } else if (media2>=60) {
            situacao = 'aprovado em exame'    
        }
    }

    if(studentsGender == 'Masculino' && teachersGender == 'Masculino'){
        console.log(`O Aluno ${studentsName} foi ${situacao} na Disciplina ${className}`)
        console.log(`Curso: ${coursesName}`)
        console.log(`Professor: ${teachersName}`)
        console.log(`Notas do Aluno: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
        console.log(`Média Final: ${media}`)
        console.log(`Média Final do Exame: ${media2}`)

    } else if(studentsGender == 'Feminino' && teachersGender == 'Masculino'){

        console.log(`A Aluna ${studentsName} foi ${situacao} na Disciplina ${className}`)
        console.log(`Curso: ${coursesName}`)
        console.log(`Professor: ${teachersName}`)
        console.log(`Notas da Aluna: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
        console.log(`Média Final: ${media}`)
        console.log(`Média Final do Exame: ${media2}`)

    } else if(studentsGender == 'Masculino' && teachersGender == 'Feminino'){
        
        console.log(`O Aluno ${studentsName} foi ${situacao} na Disciplina ${className}`)
        console.log(`Curso: ${coursesName}`)
        console.log(`Professora: ${teachersName}`)
        console.log(`Notas do Aluno: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
        console.log(`Média Final: ${media}`)
        console.log(`Média Final do Exame: ${media2}`)

    } else if(studentsGender == 'Feminino' && teachersGender == 'Feminino'){
        
        console.log(`A Aluna ${studentsName} foi ${situacao} na Disciplina ${className}`)
        console.log(`Curso: ${coursesName}`)
        console.log(`Professora: ${teachersName}`)
        console.log(`Notas da Aluna: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
        console.log(`Média Final: ${media}`)
        console.log(`Média Final do Exame: ${media2}`)
    }
}

module.exports = {
    distribuirDados
}

