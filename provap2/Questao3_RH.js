const leia = require('readline-sync');

let funcionarios = [];
let notas = []; // Será uma matriz (array de arrays)

// Entrada de dados
for (let i = 0; i < 3; i++) {
    let nome = leia.question(`Nome do funcionario ${i+1}: `);
    funcionarios[i] = nome;
    
    console.log(`Notas para ${nome}:`);
    
    // Inicializando a matriz de notas... Note que inicializamos na posicão i, a mesma do nome do funcionario.
    // Exemplo de como seria a matriz:
    //   i   | 0  |  1  |  2
    // ------------------------
    // Joao  | 8  |  10 |  10
    // Jose  | 10 |  8  |  6   
    // Maria | 10 |  9  |  8
    // ------------------------
    notas[i] = [];

    notas[i][0] = leia.questionFloat(" - Pontualidade: ");
    notas[i][1] = leia.questionFloat(" - Produtividade: ");
    notas[i][2] = leia.questionFloat(" - Trabalho em Equipe: ");
    
    //notas.push(notasFuncionario); // Adiciona a linha na matriz
    console.clear(); // Opcional, para limpar o terminal
}

console.log("\n--- FUNCIONÁRIOS QUE RECEBERÃO BÔNUS ---");

// Processamento
for (let i = 0; i < 3; i++) {
    let soma = 0;
    // Percorre as colunas da linha atual
    for (let j = 0; j < 3; j++) {
        soma += notas[i][j];
    }
    
    let media = soma / 3;
    
    if (media >= 8) {
        console.log(`BÔNUS APROVADO: ${funcionarios[i]} (Média: ${media.toFixed(1)})`);
    }
}