// 2025_2_P1_Questao_3
// Sistema de cadastro de heróis com três notas.
// Calcula a média e classifica situação: Aprovado, Recuperação ou Eliminado.
// Permite repetir para vários heróis até o usuário responder 'N' ou 'n'.

const leia = require('readline-sync');

let nome;
let n1, n2, n3;
let media;
let continuar;

while (true) {
    // Leitura dos dados do herói
    nome = leia.question("Nome do herói: ");
    n1 = leia.questionFloat("Nota 1: ");
    n2 = leia.questionFloat("Nota 2: ");
    n3 = leia.questionFloat("Nota 3: ");

    // Cálculo da média
    media = (n1 + n2 + n3) / 3;
    console.log("Média:", media);

    // Classificação pela média
    if (media >= 7) {
        console.log("Situação: Aprovado");
    } else if (media >= 4) {
        console.log("Situação: Recuperação");
    } else {
        console.log("Situação: Eliminado");
    }

    // Pergunta se deseja cadastrar outro herói
    continuar = leia.question("Deseja cadastrar outro herói? (S/N): ");

    if (continuar === "N" || continuar === "n") {
        // Interrompe o laço, como no 'Interrompa' do VisualG
        break;
    }
}
