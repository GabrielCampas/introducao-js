const leia = require('readline-sync');

// Utilizando switch para criar opções pro usuário

console.log("Bem vindo ao Sistema da Pizzaria");
console.log("Selecione uma opcao:");
console.log("1. Iniciar atendimento");
console.log("2. Acompanhar pedido");
console.log("3. Falar com atendente");
console.log("4. Fazer uma reclamação");

// O número da opção será armazenado em 'opcao'
let opcao = leia.questionInt("Digite a opcao: ");

// O operador switch nos permite criar "casos", e em cada caso colocamos o que a opção realizará
switch (opcao) {
    
    // Opção 1
    case 1:
        console.log("Vamos iniciar o seu atendimento.");
        break;

    // Opção 2
    case 2:
        console.log("Vamos acompanhar o pedido.");
        break;

    // Opção 3
    case 3:
        console.log("Vamos falar com atendente.");
        break;

    // Opção 4
    case 4:
        console.log("Vamos realizar uma reclamação.")

    // Nenhuma das opções
    default:
        console.log("Opcao invalida!");
}

console.log("Fim do script");
