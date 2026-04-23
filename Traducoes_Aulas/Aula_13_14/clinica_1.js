// INTEGRAÇÃO_CONCEITOS_CLINICA - Versão com cadastro condicional
// Usa registro TPaciente, vetor de pacientes e procedimentos mostrar() e cadastrar().

const leia = require('readline-sync');

// Tipo TPaciente
function criarPaciente(nome = "", idade = 0, peso = 0, dt_con = "") {
    return { nome, idade, peso, dt_con };
}

// Vetor global de pacientes e variáveis de controle
const Pacientes = new Array(5).fill(null).map(() => criarPaciente());
let opcao = -1;

// Procedimento mostrar() - exibe todos os pacientes
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

// Procedimento cadastrar() - cadastra pacientes até o usuário parar
function cadastrar() {
    for (let i = 0; i < 5; i++) {
        console.log("----------------------------");
        if (!Pacientes[i].nome) {
            console.log("Na posição", i + 1, "terá:");
            console.log("Digite o nome do paciente:");
            Pacientes[i].nome = leia.question("> ");

            console.log("Cadastrar mais? S/n");
            const continuar = leia.question("> ");
            if (continuar === "n" || continuar === "N") {
                break;
            }
        }
    }
}

// Programa principal
do {
    console.log("SISTEMA DA CLINICA");
    console.log("1 - Ver pacientes do dia");
    console.log("2 - Cadastrar Paciente");
    console.log("3 - Atualizar Cadastro (não implementado neste exemplo)");
    console.log("4 - Remover Paciente (não implementado neste exemplo)");
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
            console.log("Opção ainda não implementada ou inválida.");
    }
} while (opcao !== 0);

console.log("Saiu do sistema");
