const leia = require('readline-sync');

console.log("Bem vindo ao Sistema da Pizzaria");
console.log("Selecione uma opção:");
console.log("1 - Iniciar atendimento");
console.log("2 - Acompanhar pedido");
console.log("3 - Falar com atendente");
console.log("4 - Fazer uma reclamação");

let opcao = leia.questionInt("Digite a opção: ");

switch (opcao) {
    case 1:
        console.log("Vamos iniciar o seu atendimento");
        break;

    case 2:
        console.log("Vamos acompanhar o pedido");
        break;

    case 3:
    case 4:
        console.log("Vamos falar com atendente");
        break;

    default:
        console.log("Opção inválida!");
}

console.log("Fim do script");
