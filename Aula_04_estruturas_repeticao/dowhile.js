const leia = require('readline-sync');

// Utilizando 'let'
console.log("Bem-vindo ao SysMatemática");

let opcao = 0;

do { // faça
    console.log("Por favor, selecione uma opcao");
    console.log("1 - Iniciar atendimento");
    console.log("2 - Acompanhar meu pedido");
    console.log("3 - Falar com atendente");
    opcao = leia.questionInt("Digite a opcao: ");
} while (opcao <= 0 || opcao > 3); // enquanto


switch (opcao) {
    case 1:
        console.log("Vamos iniciar seu atendimento");
        break;
    case 2:
        console.log("Vamos acompanhar o pedido");
        break;
    case 3:
        console.log("Vamos acompanhar o pedido");
        break;
    default:
        console.log("Opção Invalida");
        break;
}

