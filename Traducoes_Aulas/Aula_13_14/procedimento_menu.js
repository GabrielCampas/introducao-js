// PROCEDIMENTO_MENU
// Exemplo de procedimento que apenas exibe um menu,
// sem ler a opção diretamente dentro dele.

// A variável 'opcao' poderia ser global ou lida externamente.
// Aqui apenas demonstramos várias chamadas ao procedimento.

function menu() {
    console.log("Menu de Navegação");
    console.log("1) Opção");
    console.log("2) Opção");
    console.log("3) Opção");
    console.log();
}

// Programa principal
console.log("Bem-vindo ao Sistema");
menu();
console.log("Escolheu: (opção seria lida aqui, se necessário)");
menu();
menu();
menu();
