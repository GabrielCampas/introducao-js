// o do while pode representar o "REPITA" do VisualG


const leia = require('readline-sync')
console.log("Bem vindo ao atendimento ao cliente")

let opcao = 0;
do { // faça
    console.log("Por favor, selecione uma opcao")
    console.log("1 - Iniciar atendimento");
    console.log("2 - Acompanhar meu pedido");
    console.log("3 - Falar com atendente");
    opcao = leia.questionInt("Digite a opcao: ");
} while (opcao <= 0 || opcao > 3); // enquanto. o operador " || " equivale ao "OU" do VisualG

switch (opcao) {
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