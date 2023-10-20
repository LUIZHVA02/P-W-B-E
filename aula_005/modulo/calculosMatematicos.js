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

                        resultado = valor1 + valor2
                        if(resultado){
                            console.log(`O resultado de ${valor1.toFixed(2).replace(".",",")} + ${valor2.toFixed(2).replace(".",",")} é: ${resultado.toFixed(2).replace(".",",")}`)
                        }
                        
                        break;
                
                    case "subtrair":
                    case "-":

                        resultado = valor1 - valor2
                        if(resultado){
                            console.log(`O resultado de ${valor1.toFixed(2).replace(".",",")} - ${valor2.toFixed(2).replace(".",",")} é: ${resultado.toFixed(2).replace(".",",")}`)
                        }
                        break;

                    case "dividir":
                    case "/":

                        if(valor2 == 0){
                        console.log('ERRO. Não é possível dividir um número por 0')
                    } else if (resultado) {
                        resultado = valor1 / valor2
                        console.log(`O resultado de ${valor1.toFixed(2).replace(".",",")} / ${valor2.toFixed(2).replace(".",",")} é: ${resultado.toFixed(2).replace(".",",")}`)
                    }

                        break;

                    case "multiplicar":
                    case "x":

                        resultado = valor1 * valor2
                        
                        
                        if(resultado){
                            console.log(`O resultado de ${valor1.toFixed(2).replace(".",",")} X ${valor2.toFixed(2).replace(".",",")} é: ${resultado.toFixed(2).replace(".",",")}`)
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