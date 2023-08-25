// Modelo mais simples para criar funções
function calculadora (numero1, numero2, tipoCalculo){
    let valor1 = numero1
    let valor2 = numero2
    let operacao = tipoCalculo
    let resultado

                    // Versão 2 - Utilizando o Switch

                    switch (operacao) {
                    case "somar":
                    case "+":

                        resultado = numero1 + numero2
                        if(resultado){
                            console.log(`O resultado de ${numero1.toFixed(2).replace(".",",")} + ${numero2.toFixed(2).replace(".",",")} é: ${resultado.toFixed(2).replace(".",",")}`)
                        }
                        
                        break;
                
                    case "subtrair":
                    case "-":

                        resultado = numero1 - numero2
                        if(resultado){
                            console.log(`O resultado de ${numero1.toFixed(2).replace(".",",")} - ${numero2.toFixed(2).replace(".",",")} é: ${resultado.toFixed(2).replace(".",",")}`)
                        }
                        break;

                    case "dividir":
                    case "/":

                        if(numero2 == 0){
                        console.log('ERRO. Não é possível dividir um número por 0')
                    } else if (resultado) {
                        resultado = numero1 / numero2
                        console.log(`O resultado de ${numero1.toFixed(2).replace(".",",")} / ${numero2.toFixed(2).replace(".",",")} é: ${resultado.toFixed(2).replace(".",",")}`)
                    }

                        break;

                    case "multiplicar":
                    case "x":

                        resultado = numero1 * numero2
                        
                        
                        if(resultado){
                            console.log(`O resultado de ${numero1.toFixed(2).replace(".",",")} X ${numero2.toFixed(2).replace(".",",")} é: ${resultado.toFixed(2).replace(".",",")}`)
                        }
                        break;

                    default:

                        console.log('ERRO. POR FAVOR DIGITE UMA RESPOSTA VÁLIDA') 
                        break;
                }
                
                if (resultado != undefined)
                    return resultado
                else
                    return false

} module.exports = {
    calculadora
}