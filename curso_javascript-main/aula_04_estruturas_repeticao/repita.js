/**
 * Aula baseada na aula do Visualg abaixo:
 * https://github.com/tiagotas/VISUALG_Algoritmos_Exemplo/blob/main/AULA%2006%20-%20REPITA_ESCOLHA_CASO.ALG
 */

const leia = require('readline-sync');

console.log("Bem-vindo ao Pizza");

let opcao = 0;

do { // Faça
    console.log("Por favor, selecione uma opção")
    console.log("1 - Iniciar atendimento")
    console.log("2 - Acompanhar meu pedido")
    console.log("3 - Falar com atendente")
    opcao = leia.questionInt("Digite a opcao: ");
} while (opcao <= 0 || opcao > 3); // Enquanto

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
        console.log("Opção Inválida");
        break;
}