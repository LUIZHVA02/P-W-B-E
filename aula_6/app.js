var calcularTabuada = require('./modulo/calcularTabuada')

var readline=require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

entradaDeDados.question('Digite o número a ser multiplicado: ', function (valorTabuada) {
    let tabuada = valorTabuada

    entradaDeDados.question('Digite o menor número multiplicador: ', function (valorContadorInicial) {
        let contadorInicial = valorContadorInicial

        entradaDeDados.question('Digite o maior valor multiplicador: ',function (valorContadorFinal) {
            let contadorFinal = valorContadorFinal

            calcularTabuada.gerarTabuada(tabuada, contadorInicial, contadorFinal)
        })
    })
});