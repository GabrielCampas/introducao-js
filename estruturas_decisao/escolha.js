/**
 * revisao baseada na aula do VisualG
 */

const leia = require('readline-sync');

console.log("Bem vindo ao Sistema da Pizzaria");
console.log("Por favor, selecione uma opcao:");
console.log("1 - Iniciar atendimento");
console.log("2 - Acompanhar meu pedido");
console.log("3 - Falar com atendente");
console.log("4 - Fazer uma reclamacao");
let opcao = leia.questionInt("Digite a opcao: ");

//a estrutura "ESCOLHA" do VisualG é chamada de switch em js

switch(opcao) {
    case 1:
        console.log("Vamos iniciar seu atendimento")
    break;

    case 2:
        console.log("Vamos acompanhar o pedido");
    break;

    case 3:
        console.log("Vamos falar com o atendente");
    break;
    
    case 4:
        console.log("Realize uma reclamacao")
    break;
}

