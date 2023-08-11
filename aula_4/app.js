var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

console.log('')

entradaDeDados.question('Digite o primeiro número: ', function(primeiroNumero){
    let numero1 = Number (primeiroNumero)

    entradaDeDados.question('Digite o segundo número: ', function(segundoNumero){
        let numero2 = Number (segundoNumero)
            console.log('')
            
        
            if(isNaN(numero1)||isNaN(numero2)){
                console.log('ERRO. DIGITE APENAS NÚMEROS!')}
                else{
                entradaDeDados.question('As operações disponiveis são: \nAdição(+) Subtração(-) Divisão(/) Multiplicação(x)\nDigite a operação desejada: ', function(resposta){
                    var operacao = resposta
                   
                    if(operacao =='+'){
                        let resultado = Number(numero1) + Number(numero2)
                        console.log(`O resultado de ${numero1} + ${numero2} é: ${resultado}`)
    
                    } else if(operacao=='-'){
                        resultado = Number(numero1) - Number(numero2)
                        console.log(`O resultado de ${numero1} - ${numero2} é: ${resultado}`)
    
                    } else if(operacao=='/'){
                        resultado == Number(numero1) / Number(numero2)
                        console.log(`O resultado de ${numero1} / ${numero2} é: ${resultado}`)
    
                    } else if(operacao=='x'){
                        resultado = Number(numero1) * Number(numero2)
                        console.log(`O resultado de ${numero1} X ${numero2} é: ${resultado}`)

                    } else{
                        console.log('ERRO. POR FAVOR DIGITE UMA RESPOSTA VÁLIDA')
                    }
            
            })
        
        }
            
    })

})