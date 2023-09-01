/*
* Objetivo: função
Autora: Maria Luiza 
Data: 25/08/2023
Versão: 1.0
*/
var calcularDesconto = require('./modulo/descontocalculo')
var readline = require('readline');
var entradaDados = readline.createInterface ({
input: process.stdin,
output: process.stdout
});

console.log('********************************************************************')
console.log('******************Insira o código desejado**************************')
console.log('*************** 1- à vista com 8% de desconto     ******************')
console.log('*************** 2- à vista no cartão, 4% de desconto  **************')
console.log('*************** 3- 2x no cartão, preço normal sem juros ************')
console.log('*************** 4- 4x no cartão, preço acrescdo de 8%   *************')
console.log('********************************************************************')

entradaDados.question('insira o valor da venda: ' , function (valorVenda){
    let venda = valorVenda.replace(',','.');
    


    entradaDados.question('Insira o código: ' , function(codigodaVenda){
        let codigo = codigodaVenda;


    if(codigo == ''){
        console.log('*************************************************')
        console.log('ERRO: Preencha todos os campos de maneira CORRETA')
        console.log('*************************************************')
    
    }
    else if (isNaN(codigo)){
        console.log('*************************************************')
        console.log(  'ERRO: Preencha os campos apenas com números    ')
        console.log('*************************************************')
    } else if (codigo == "1"|| codigo =="2"|| codigo =="3"|| codigo =="4"){

        valorVenda = parseInt(valorVenda)

        resultado = calcularDesconto.desconto(valorVenda, codigodaVenda)

        
    } else{
        
        console.log('ERRO: digite um código valido ')
    }

});
    
    });


