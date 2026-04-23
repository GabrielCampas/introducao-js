// 2025_2_P1_Questao_2
// Sistema de contagem de moedas mágicas.
// Tipos: B (bronze), P (prata), O (ouro) ou "sair" para encerrar.
// Cada tipo soma em um contador e converte em pontos.
// No final, mostra as quantidades, total de pontos e nível.

const leia = require('readline-sync');

let tipo;
let qtd;
let bronze = 0;
let prata = 0;
let ouro = 0;
let pontos = 0;

while (true) {
    // Lê tipo de moeda ou comando para encerrar
    tipo = leia.question("Digite tipo de moeda (B/P/O) ou 'sair': ");

    if (tipo === "sair") {
        // Sai do laço, como o Interrompa do VisualG
        break;
    }

    // Lê quantidade da moeda
    qtd = leia.questionInt("Quantidade: ");

    // Estrutura de escolha para tipo de moeda
    switch (tipo) {
        case "B":
            bronze = bronze + qtd;
            pontos = pontos + (qtd * 1);
            break;
        case "P":
            prata = prata + qtd;
            pontos = pontos + (qtd * 5);
            break;
        case "O":
            ouro = ouro + qtd;
            pontos = pontos + (qtd * 10);
            break;
        default:
            console.log("Tipo inválido!");
    }
}

// Exibe o resumo das moedas e pontos
console.log("Moedas de Bronze:", bronze);
console.log("Moedas de Prata:", prata);
console.log("Moedas de Ouro:", ouro);
console.log("Total de Pontos:", pontos);

// Classifica o nível com base no total de pontos
if (pontos <= 50) {
    console.log("Nível: Fraco");
} else if (pontos <= 100) {
    console.log("Nível: Médio");
} else {
    console.log("Nível: Lendário");
}
