// 2025_2_P1_Questao_3_Prova_B
// Registro de domadores de dragão com três notas de prova.
// Calcula média e define situação: "Apto", "Em observação" ou "Inapto".
// Permite registrar vários domadores enquanto o usuário responder 'S'/'s'.

const leia = require('readline-sync');

let nome;
let situacao;
let nota1, nota2, nota3, media;
let continuar; // controle de repetição

do {
    console.log("====================================");
    console.log("REGISTRO DE DOMADOR DE DRAGÃO");
    console.log("====================================");

    nome = leia.question("Nome do domador: ");
    nota1 = leia.questionFloat("Nota da 1ª prova (0-10): ");
    nota2 = leia.questionFloat("Nota da 2ª prova (0-10): ");
    nota3 = leia.questionFloat("Nota da 3ª prova (0-10): ");

    // Cálculo da média das provas
    media = (nota1 + nota2 + nota3) / 3;

    // Define situação de acordo com a média
    if (media >= 7) {
        situacao = "Apto";
    } else if (media >= 4 && media < 7) {
        situacao = "Em observação";
    } else {
        situacao = "Inapto";
    }

    // Exibe o resultado para o domador atual
    console.log("------------------------------------");
    console.log("Domador:", nome);
    console.log("Média:", media);
    console.log("Situação:", situacao);
    console.log("------------------------------------");

    // Pergunta se deseja continuar
    continuar = leia.question("Deseja registrar outro domador (S/N)? ");
    // O laço continua enquanto maiúscula de continuar for "S"
} while (continuar.toUpperCase() === "S");
