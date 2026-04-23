// 2025_2_P1_Questao_2_Prova_B
// Sistema de registro de gemas mágicas em uma "arca".
// Tipos: F (Força), S (Sabedoria), P (Poder) ou "parar" para encerrar.
// Cada tipo soma em contadores e gera pontos específicos.
// No final, mostra total de cada gema, pontos acumulados e nível de poder da arca.

const leia = require('readline-sync');

// Variáveis para dados de entrada
let tipoGema;
let quantidade;

// Contadores para cada tipo de gema
let totalForca = 0;
let totalSabedoria = 0;
let totalPoder = 0;

// Acumulador de pontos
let pontosAcumulados = 0;

do {
    console.log("------------------------------------");
    tipoGema = leia.question("Digite o tipo da gema (F, S, P) ou 'parar' para sair: ");

    // Converte para maiúscula para facilitar a comparação (equivalente a maiusc)
    tipoGema = tipoGema.toUpperCase();

    if (tipoGema !== "PARAR") {
        quantidade = leia.questionInt("Digite a quantidade: ");

        // Estrutura de escolha para processar o tipo de gema
        switch (tipoGema) {
            case "F": // Gema de Força
                totalForca = totalForca + quantidade;
                pontosAcumulados = pontosAcumulados + (quantidade * 2);
                break;
            case "S": // Gema de Sabedoria
                totalSabedoria = totalSabedoria + quantidade;
                pontosAcumulados = pontosAcumulados + (quantidade * 5);
                break;
            case "P": // Gema de Poder
                totalPoder = totalPoder + quantidade;
                pontosAcumulados = pontosAcumulados + (quantidade * 12);
                break;
            default:
                console.log("Tipo de gema inválido! Tente novamente.");
        }
    }
} while (tipoGema !== "PARAR");

// Exibe resultados finais
console.log("====================================");
console.log("RELATÓRIO DA ARCA MÁGICA");
console.log("====================================");
console.log("Total de Gemas de Força:", totalForca);
console.log("Total de Gemas de Sabedoria:", totalSabedoria);
console.log("Total de Gemas de Poder:", totalPoder);
console.log("------------------------------------");
console.log("Total de pontos acumulados:", pontosAcumulados);
console.log("------------------------------------");

// Classifica nível de poder da arca
process.stdout.write("Nível de poder da arca: ");
if (pontosAcumulados <= 60) {
    console.log("Fraco");
} else if (pontosAcumulados > 60 && pontosAcumulados <= 120) {
    console.log("Forte");
} else {
    console.log("Supremo");
}
console.log("====================================");
