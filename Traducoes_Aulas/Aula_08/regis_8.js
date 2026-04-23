const leia = require('readline-sync');

// Equivalente ao "vetor[1..3] de registro" do VisualG → array de objetos
let filmes = [];
let media;
let soma = 0;
let i;

// Leitura dos dados e soma das notas
for (i = 0; i < 3; i++) {

    console.log(`Título do filme ${i + 1}: `);
    let titulo = leia.question("");

    console.log("Nota (0 a 10): ");
    let nota = leia.questionFloat("");

    filmes[i] = {
        titulo: titulo,
        nota: nota
    };

    soma = soma + nota;

    console.log();
}

// Cálculo da média
media = soma / 3;

// Exibição dos filmes acima da média
console.log(`Filmes com nota acima da média (${media.toFixed(2)}):`);
for (i = 0; i < 3; i++) {
    if (filmes[i].nota > media) {
        console.log(filmes[i].titulo, "- Nota:", filmes[i].nota.toFixed(2));
    }
}
