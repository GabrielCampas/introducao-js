// 2025_2_P1_Questao_1_Prova_B
// Competição entre 10 alquimistas.
// Para cada alquimista: lê nome e qualidade da poção (0-100).
// Calcula média, encontra maior qualidade e conta categorias:
// Aprendizes (< 50), Mestres (50-79), Grandes Mestres (>= 80).

const leia = require('readline-sync');

// Variáveis de controle e dados
let i;
let nome;
let nomeMaiorQualidade;
let qualidade;
let somaQualidade;
let mediaQualidade;
let maiorQualidade;

// Contadores de categorias
let aprendizes;
let mestres;
let grandesMestres;

// Inicialização
somaQualidade = 0;
maiorQualidade = -1; // valor baixo para garantir atualização na primeira leitura
aprendizes = 0;
mestres = 0;
grandesMestres = 0;

// Laço para ler 10 alquimistas
for (i = 1; i <= 10; i++) {
    console.log("------------------------------------");
    console.log(`Alquimista ${i}`);
    nome = leia.question("Digite o nome: ");
    qualidade = leia.questionFloat("Digite a qualidade da poção (0-100): ");

    // Soma para média
    somaQualidade = somaQualidade + qualidade;

    // Verifica se esta é a maior qualidade até agora
    if (qualidade > maiorQualidade) {
        maiorQualidade = qualidade;
        nomeMaiorQualidade = nome;
    }

    // Classificação por categoria
    if (qualidade < 50) {
        aprendizes = aprendizes + 1;
    } else if (qualidade >= 50 && qualidade <= 79) {
        mestres = mestres + 1;
    } else {
        grandesMestres = grandesMestres + 1;
    }
}

// Média da qualidade das poções
mediaQualidade = somaQualidade / 10;

// Exibição dos resultados
console.log("====================================");
console.log("RESULTADO DA COMPETIÇÃO");
console.log("====================================");
console.log("Qualidade média das poções:", mediaQualidade);
console.log("Alquimista com a poção de maior qualidade:", nomeMaiorQualidade);
console.log("Total de Aprendizes (< 50):", aprendizes);
console.log("Total de Mestres (50-79):", mestres);
console.log("Total de Grandes Mestres (>= 80):", grandesMestres);
console.log("====================================");
