const calculoIMC = function (letAltura, letPeso, letResultado) {
    
    let altura = Number(letAltura)
    let peso = Number(letPeso)
    let resultado = Number(letResultado)

    resultado = peso/(altura*altura)


    return resultado
}

module.exports = {
    calculoIMC
}

const situacaoIMC = function (letSituacao) {

    let situacao = letSituacao 

    if(resultado < 18.5){
        situacao = `Você Está Abaixo do Peso. \nSeu Peso é${resultado}`
        
    } else if(resultado >= 18.5 && resultado <24.9){
        situacao = `Peso Normal. \nSeu Peso é${resultado}`

    } else if(resultado >= 25.0 && resultado <29.9){
        situacao = `Acima do Peso(sobrepeso). \nSeu Peso é${resultado}`

    } else if(resultado >= 30.0 && resultado <34.9){
        situacao = `Obesidade I. \nSeu Peso é${resultado}`

    } else if(resultado >= 35.0 && resultado <39.9){
        situacao = `Obesidade II. \nSeu Peso é${resultado}`

    } else if(resultado >= 40.0){
        situacao = `Obesidade III. \nSeu Peso é${resultado}`
    }

    return situacao
}

module.exports = {
    situacaoIMC
}