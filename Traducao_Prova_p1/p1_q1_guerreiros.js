// 2025_2_P1_Questao_1
// Competição entre 10 guerreiros.
// Lê a pontuação de cada guerreiro, calcula média geral,
// conta reprovados (< 50), destaques (>= 80) e encontra a maior pontuação.

const leia = require('readline-sync');

// Variáveis de controle e acumuladores
let i;
let pontos;
let maior_ponto;
let total;
let reprovados;
let media;
let destaques;
let nomemax; // aqui representa o índice (posição) do guerreiro com maior pontuação
let nome;   // nome digitado (não é armazenado em vetor, apenas lido)

// Inicializações equivalentes ao 'inicio' do VisualG
total = 0;
maior_ponto = -1; // começa com valor baixo para garantir que o primeiro seja maior
reprovados = 0;
destaques = 0;

// Laço para os 10 guerreiros
for (i = 1; i <= 10; i++) {
    console.log(`Nome do guerreiro ${i}: `);
    nome = leia.question("> "); // em VisualG: leia(nome)

    pontos = leia.questionInt("Pontuação: "); // em VisualG: leia(pontos)

    // Acumula a pontuação total para depois calcular a média
    total = total + pontos;

    // Atualiza maior pontuação, se necessário
    if (pontos > maior_ponto) {
        maior_ponto = pontos;
        nomemax = i; // guarda o índice do guerreiro
    }

    // Contagem de reprovados e destaques
    if (pontos < 50) {
        reprovados = reprovados + 1;
    } else {
        if (pontos >= 80) {
            destaques = destaques + 1;
        }
    }
}

// Cálculo da média geral
media = total / 10;

// Saída dos resultados
console.log("Média geral:", media);
console.log("Guerreiros reprovados:", reprovados);
console.log("Guerreiros destaques:", destaques);
console.log("Maior pontuação:", maior_ponto);
// Se quiser ver qual posição foi a maior, pode descomentar a linha abaixo:
// console.log("Guerreiro com maior pontuação está na posição:", nomemax);
