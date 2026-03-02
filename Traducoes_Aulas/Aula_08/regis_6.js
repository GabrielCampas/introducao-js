const leia = require('readline-sync');

// Equivalente ao "vetor[1..4] de registro" do VisualG → array de objetos
let funcionarios = [];
let i;
let indiceMaior = 0;
let maiorSalario = -1;

// Leitura dos dados e verificação do maior salário
for (i = 0; i < 4; i++) {

    console.log(`Nome do funcionário ${i + 1}: `);
    let nome = leia.question("");

    console.log("Salário: ");
    let salario = leia.questionFloat("");

    funcionarios[i] = {
        nome: nome,
        salario: salario
    };

    if (salario > maiorSalario) {
        maiorSalario = salario;
        indiceMaior = i;
    }

    console.log();
}

// Exibição do funcionário com maior salário
console.log("Funcionário com maior salário:");
console.log("Nome:", funcionarios[indiceMaior].nome);
console.log("Salário:", funcionarios[indiceMaior].salario.toFixed(2));