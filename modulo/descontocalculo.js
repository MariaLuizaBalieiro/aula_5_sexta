function desconto(valorVenda, codigodaVenda){
    let venda = valorVenda;
    let codigo = codigodaVenda;
    let resultado;

    if(codigo == "1"){
        resultado = venda - ((8/ 100) * venda)
        console.log ('O valor final com os desconto aplicado é de: ' + resultado)
    }
    else if (codigo == "2"){
        resultado = venda - ((4/ 100) * venda)
        console.log('O valor final com o desconto aplicado é de: ' + resultado)
    }
    else if (codigo == "3"){
        resultado = venda / 2
        console.log('o valor final das parcelas com 2% de desconto aplicado é de: ' + resultado)
    }
    else if (codigo == "4"){
        resultado = (((8/ 100) * venda) + venda) /4
        console.log('O valor final das parcelas com o acrescimo  de 4% aplicado é de: ' +resultado)
    }
    
    if (resultado != undefined)
    return resultado;
    else 
    return false;
}

module.exports = {
    desconto
}