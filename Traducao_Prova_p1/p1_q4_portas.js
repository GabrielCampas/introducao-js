// 2025_2_P1_Questao_4
// Jogo das portas em um castelo mágico.
// O jogador começa com 100 pontos e escolhe portas 1 a 5, ou 0 para sair.
// Cada porta altera a pontuação ou encerra o jogo.

const leia = require('readline-sync');

let porta;
let pontos = 100; // pontuação inicial

while (true) {
    console.log(`Você tem ${pontos} pontos.`);
    porta = leia.questionInt("Escolha uma porta (1 a 5) ou 0 para sair: ");

    if (porta === 0) {
        console.log("Você decidiu sair do castelo.");
        break; // Interrompe o jogo
    }

    // Estrutura de escolha para tratar cada porta
    switch (porta) {
        case 1:
            console.log("Sala do Fogo! Perdeu 10 pontos.");
            pontos = pontos - 10;
            break;
        case 2:
            console.log("Sala do Tesouro! Ganhou 50 pontos.");
            pontos = pontos + 50;
            break;
        case 3:
            console.log("Sala do Dragão! Fim de jogo.");
            // Interrompe o jogo imediatamente
            console.log(`Pontuação final: ${pontos}`);
            process.exit(0);
        case 4:
            console.log("Sala da Vida! Recuperou 20 pontos.");
            pontos = pontos + 20;
            break;
        case 5:
            console.log("Sala do Labirinto! Tente novamente.");
            break;
        default:
            console.log("Porta inválida!");
    }
}

// Ao sair (porta = 0), mostra a pontuação final
console.log("Pontuação final:", pontos);
