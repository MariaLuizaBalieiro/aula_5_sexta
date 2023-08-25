/*
* Objetivo: função
Autora: Maria Luiza 
Data: 25/08/2023
Versão: 1.0
*/
var readline = require('readline');
var entradaDados = readline.createInterface ({
input: process.stdin,
output: process.stdout
});

console.log ('*********************************************************')
entradaDados.question('insira o valor da venda' , function (valorVenda){
    let venda = valorVenda.replace(',','.');


    entradaDados.question('Insira o código;' , function(codigodaVenda){
        let codigo = codigodaVenda;

        console.log('********************************************************************')
        console.log('******************Insira o código desejado**************************')
        console.log('*************** 1- à vista com 8% de desconto     ******************')
        console.log('*************** 2- à vista no cartão, 4% de desconto  **************')
        console.log('*************** 3- 2x no cartão, preço normal sem juros ************')
        console.log('*************** 4- 4x no cartão, preço acrescdo de 8%   *************')
        console.log('********************************************************************')
    });
});

