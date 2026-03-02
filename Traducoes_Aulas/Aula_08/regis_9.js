const leia = require('readline-sync');

// Equivalente ao "vetor[1..5] de registro" do VisualG → array de objetos
let jogadores = [];
let i;
let indiceMaior = 0;
let maxGols = -1;

// Leitura dos dados e verificação do artilheiro
for (i = 0; i < 5; i++) {

    console.log(`Nome do jogador ${i + 1}: `);
    let nome = leia.question("");

    console.log("Gols marcados: ");
    let gols = leia.questionInt("");

    jogadores[i] = {
        nome: nome,
        gols: gols
    };

    if (gols > maxGols) {
        maxGols = gols;
        indiceMaior = i;
    }

    console.log();
}

// Exibição do artilheiro
console.log("Artilheiro:", jogadores[indiceMaior].nome);
console.log("Gols:", jogadores[indiceMaior].gols);

