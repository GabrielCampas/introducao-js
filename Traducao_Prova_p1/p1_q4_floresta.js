// 2025_2_P1_Questao_4_Prova_B
// Jogo da Floresta Misteriosa.
// O jogador começa com 100 pontos de vida (PV) e escolhe trilhas 1 a 5 ou 0 para sair.
// Cada trilha altera os pontos de vida ou encerra o jogo.

const leia = require('readline-sync');

let pontosVida;
let escolha;
let jogoAtivo;

// Inicialização
pontosVida = 100;
jogoAtivo = true;

console.log(`Você entra na Floresta Misteriosa com ${pontosVida} pontos de vida.`);

// Loop principal do jogo
while (jogoAtivo) {
    console.log("====================================");
    console.log(`Você tem ${pontosVida} pontos de vida.`);
    console.log("Escolha uma trilha:");
    console.log("1 - Riacho Curativo");
    console.log("2 - Pântano Sombrio");
    console.log("3 - Clareira Iluminada");
    console.log("4 - Covil da Fera");
    console.log("5 - Bosque Ilusório");
    console.log("0 - Sair da Floresta");
    escolha = leia.questionInt("Sua escolha: ");
    console.log("------------------------------------");

    // Processa a escolha do jogador
    switch (escolha) {
        case 1: // Riacho Curativo
            pontosVida = pontosVida + 20;
            console.log("Você bebe a água do riacho e se sente revigorado. Ganhou 20 PV.");
            break;
        case 2: // Pântano Sombrio
            pontosVida = pontosVida - 15;
            console.log("O ar pesado do pântano drena sua energia. Perdeu 15 PV.");
            break;
        case 3: // Clareira Iluminada
            pontosVida = pontosVida + 40;
            console.log("A luz do sol na clareira te fortalece. Ganhou 40 PV.");
            break;
        case 4: // Covil da Fera
            console.log("Você encontrou o Covil da Fera... FIM DE JOGO!");
            jogoAtivo = false; // Encerra o jogo
            break;
        case 5: // Bosque Ilusório
            console.log("Você se perde em um bosque de ilusões e volta ao início. Tente de novo.");
            break;
        case 0: // Sair da floresta
            console.log(`Você decidiu sair da floresta. Sua vida final é de ${pontosVida} pontos.`);
            jogoAtivo = false; // Encerra o jogo
            break;
        default:
            console.log("Opção inválida! Escolha uma trilha de 1 a 5 ou 0 para sair.");
    }
}
