const mediaComum = function
    (nomeAluno, sexoAluno, nomeDoProfessor,
        sexoProfessor, nomeCurso, nomeDisciplina,
        nota1, nota2, nota3, nota4) {


    let studentsName = nomeAluno
    let teachersName = nomeDoProfessor
    let studentsGender = sexoAluno
    let teachersGender = sexoProfessor
    let coursesName = nomeCurso
    let className = nomeDisciplina
    let grade1 = Number(nota1)
    let grade2 = Number(nota2)
    let grade3 = Number(nota3)
    let grade4 = Number(nota4)
    let media = (grade1 + grade2 + grade3 + grade4) / 4
    let situacaoA = ''

    if (nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 ||
        nota3 < 0 || nota3 > 100 || nota4 < 0 || nota4 > 100) {

        console.log('Erro. O Valor Inserido é Inválido!!!')

    } else if (studentsGender == '' || studentsName == '' || teachersGender == '' ||
        teachersName == '' || coursesName == '' || className == '' ||
        grade1 == '' || grade2 == '' || grade3 == '' || grade4 == '') {

        console.log('Erro. Nenhum Valor Inserido!!!')
    }

    if (media >= 70) {
        situacaoA = 'aprovado'

    } if (media < 50) {
        situacaoA = 'reprovado'

    }
    return media, sexoProfessor, sexoAluno, situacaoA, nomeAluno, sexoAluno, nomeDoProfessor,
    sexoProfessor, nomeCurso, nomeDisciplina, nota1, nota2, nota3, nota4
}

const mediaDoExame = (nota1, nota2, nota3, nota4, notaExame) => {

    let grade1 = Number(nota1)
    let grade2 = Number(nota2)
    let grade3 = Number(nota3)
    let grade4 = Number(nota4)
    let examsGrade = Number(notaExame)
    let media = (grade1 + grade2 + grade3 + grade4) / 4
    let situacaoB = ''
    let media2 = (media + examsGrade) / 2

    if (media2 < 60) {
        situacaoB = 'reprovado'

    } else if (media2 >= 60) {
        situacaoB = 'aprovado em exame'
    }

    return situacaoB, examsGrade
}

const relatorioAluno1 = (nomeAluno, sexoAluno, nomeDoProfessor,
                        sexoProfessor, nomeCurso, nomeDisciplina,
                        nota1, nota2, nota3, nota4, notaExame, situacaoA) => {

    let studentsName = nomeAluno
    let teachersName = nomeDoProfessor
    let studentsGender = sexoAluno
    let teachersGender = sexoProfessor
    let coursesName = nomeCurso
    let className = nomeDisciplina
    let grade1 = Number(nota1)
    let grade2 = Number(nota2)
    let grade3 = Number(nota3)
    let grade4 = Number(nota4)
    let examsGrade = Number(notaExame)
    let media = (grade1 + grade2 + grade3 + grade4) / 4
    let situacao1 = situacaoA
    let media2 = (media + examsGrade) / 2

    if (studentsGender == 'M' && teachersGender == 'M') {
        console.log(`O Aluno ${studentsName} foi ${situacao1} na Disciplina ${className}`)
        console.log(`Curso: ${coursesName}`)
        console.log(`Professor: ${teachersName}`)
        console.log(`Notas do Aluno: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
        console.log(`Média Final: ${media}`)
        console.log(`Média Final do Exame: ${media2}`)

    } else if (studentsGender == 'F' && teachersGender == 'M') {

        console.log(`A Aluna ${studentsName} foi ${situacao1} na Disciplina ${className}`)
        console.log(`Curso: ${coursesName}`)
        console.log(`Professor: ${teachersName}`)
        console.log(`Notas da Aluna: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
        console.log(`Média Final: ${media}`)
        console.log(`Média Final do Exame: ${media2}`)

    } else if (studentsGender == 'M' && teachersGender == 'F') {

        console.log(`O Aluno ${studentsName} foi ${situacao1} na Disciplina ${className}`)
        console.log(`Curso: ${coursesName}`)
        console.log(`Professora: ${teachersName}`)
        console.log(`Notas do Aluno: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
        console.log(`Média Final: ${media}`)
        console.log(`Média Final do Exame: ${media2}`)

    } else if (studentsGender == 'F' && teachersGender == 'F') {

        console.log(`A Aluna ${studentsName} foi ${situacao1} na Disciplina ${className}`)
        console.log(`Curso: ${coursesName}`)
        console.log(`Professora: ${teachersName}`)
        console.log(`Notas da Aluna: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
        console.log(`Média Final: ${media}`)
        console.log(`Média Final do Exame: ${media2}`)
    }

}

const relatorioAluno2 = (nomeAluno, sexoAluno, nomeDoProfessor,
    sexoProfessor, nomeCurso, nomeDisciplina,
    nota1, nota2, nota3, nota4, notaExame, situacaoB) => {

let studentsName = nomeAluno
let teachersName = nomeDoProfessor
let studentsGender = sexoAluno
let teachersGender = sexoProfessor
let coursesName = nomeCurso
let className = nomeDisciplina
let grade1 = Number(nota1)
let grade2 = Number(nota2)
let grade3 = Number(nota3)
let grade4 = Number(nota4)
let examsGrade = Number(notaExame)
let media = (grade1 + grade2 + grade3 + grade4) / 4
let situacao2 = situacaoB
let media2 = (media + examsGrade) / 2

if (studentsGender == 'M' && teachersGender == 'M') {
console.log(`O Aluno ${studentsName} foi ${situacao2} na Disciplina ${className}`)
console.log(`Curso: ${coursesName}`)
console.log(`Professor: ${teachersName}`)
console.log(`Notas do Aluno: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
console.log(`Média Final: ${media}`)
console.log(`Média Final do Exame: ${media2}`)

} else if (studentsGender == 'F' && teachersGender == 'M') {

console.log(`A Aluna ${studentsName} foi ${situacao2} na Disciplina ${className}`)
console.log(`Curso: ${coursesName}`)
console.log(`Professor: ${teachersName}`)
console.log(`Notas da Aluna: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
console.log(`Média Final: ${media}`)
console.log(`Média Final do Exame: ${media2}`)

} else if (studentsGender == 'M' && teachersGender == 'F') {

console.log(`O Aluno ${studentsName} foi ${situacao2} na Disciplina ${className}`)
console.log(`Curso: ${coursesName}`)
console.log(`Professora: ${teachersName}`)
console.log(`Notas do Aluno: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
console.log(`Média Final: ${media}`)
console.log(`Média Final do Exame: ${media2}`)

} else if (studentsGender == 'F' && teachersGender == 'F') {

console.log(`A Aluna ${studentsName} foi ${situacao2} na Disciplina ${className}`)
console.log(`Curso: ${coursesName}`)
console.log(`Professora: ${teachersName}`)
console.log(`Notas da Aluna: ${grade1}, ${grade2}, ${grade3}, ${grade4}, ${examsGrade}`)
console.log(`Média Final: ${media}`)
console.log(`Média Final do Exame: ${media2}`)
}

}
module.exports = {
    mediaComum,
    mediaDoExame,
    relatorioAluno1,
    relatorioAluno2
}