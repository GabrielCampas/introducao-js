// INTEGRAÇÃO_CONCEITOS_CLINICA - Versão simples
// Sem pergunta de continuar, apenas preenche as 5 posições.

const leia = require('readline-sync');

// Tipo TPaciente
function criarPaciente(nome = "", idade = 0, peso = 0, dt_con = "") {
    return { nome, idade, peso, dt_con };
}

// Vetor e variáveis
const Pacientes = new Array(5).fill(null).map(() => criarPaciente());
let opcao = -1;

// Procedimento mostrar()
function mostrar() {
    for (let i = 0; i < 5; i++) {
        console.log("----------------------------");
        console.log("Na posição", i + 1, "existe:");
        console.log("Nome:", Pacientes[i].nome);
        console.log("Idade:", Pacientes[i].idade);
        console.log("Peso:", Pacientes[i].peso);
        console.log("Dt_Con:", Pacientes[i].dt_con);
    }
}

// Procedimento cadastrar()
function cadastrar() {
    for (let i = 0; i < 5; i++) {
        console.log("----------------------------");
        console.log("Na posição", i + 1, "terá:");
        console.log("Digite o nome do paciente:");
        Pacientes[i].nome = leia.question("> ");
    }
}

// Programa principal
do {
    console.log("SISTEMA DA CLINICA");
    console.log("1 - Ver pacientes do dia");
    console.log("2 - Cadastrar Paciente");
    console.log("0 - Sair do Sistema");
    opcao = leia.questionInt("Digite a opção: ");

    switch (opcao) {
        case 0:
            break;
        case 1:
            mostrar();
            break;
        case 2:
            cadastrar();
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 0);

console.log("Saiu do sistema");
