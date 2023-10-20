var readline = require('readline')

//Cria objeto para realizar as entradas de dados
var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('')

//Entrada de dados do primeiro valor
entradaDeDados.question('Digite o primeiro número: ', function (primeiroNumero) {
    
    let numero1 = primeiroNumero.replace(',','.')

    //Entrada de dados do segundo valor
    entradaDeDados.question('Digite o segundo número: ', function (segundoNumero) {
        let numero2 = segundoNumero.replace(',','.')

        console.log('')


        if (isNaN(numero1) || isNaN(numero2) || numero1 == '' || numero2 == '') {
            console.log('ERRO. DIGITE APENAS NÚMEROS!')
        }
        else {
            //Entrada de dados referente a operação matemática a ser realizada
            entradaDeDados.question('As operações disponiveis são: \nAdição(+) Subtração(-) Divisão(/) Multiplicação(x)\nDigite a operação desejada: ', function (resposta) {
                var operacao = resposta

                numero1 = Number(numero1)
                numero2 = Number(numero2)

                if (operacao == '+') {
                    let resultado = numero1 + numero2
                    console.log(`O resultado de ${numero1} + ${numero2} é: ${resultado}`)

                } else if (operacao == '-') {
                    resultado = numero1 - numero2
                    console.log(`O resultado de ${numero1} - ${numero2} é: ${resultado}`)

                } else if (operacao == '/') {

                    if(numero2 == 0){
                        console.log('ERRO. Não é possível dividir um número por 0')
                    } else {
                        resultado = numero1 / numero2
                        console.log(`O resultado de ${numero1} / ${numero2} é: ${resultado}`)
                    }

                } else if (operacao == 'x' || operacao == 'X') {
                    resultado = numero1 * numero2
                    console.log(`O resultado de ${numero1} X ${numero2} é: ${resultado}`)

                } else {
                    console.log('ERRO. POR FAVOR DIGITE UMA RESPOSTA VÁLIDA')
                }

            })

        }

    })

})