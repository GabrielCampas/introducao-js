// Sistema de Churrasco com registro (Ingrediente), procedimentos e função auxiliar.
// Tradução do algoritmo em VisualG para JavaScript (Node.js + readline-sync).

const leia = require('readline-sync');

// "Tipo Ingrediente = Registro"
// Em JavaScript, usamos um objeto com estas propriedades.
function criarIngrediente(nome = "", qnt = 0, preco = 0, total = 0) {
    return { nome, qnt, preco, total };
}

// Vetor de 50 ingredientes (equivalente a vetor[1..50] de Ingrediente)
const itens = new Array(50).fill(null).map(() => criarIngrediente());

// Opção do menu principal
let opcao = -1;

// Função que retorna a próxima posição vazia no vetor "itens".
// No VisualG, ele considera vazio quando nome = "".
function pegarProxPosicaoVazia() {
    for (let i = 0; i < 50; i++) {
        if (!itens[i].nome) { // vazio se string vazia ou undefined
            // Retornamos o índice real (0..49)
            return i;
        }
    }
    // Se não tiver posição vazia, retornamos -1
    return -1;
}

// Procedimento add() - Adicionar novo item ao churrasco.
function add() {
    console.clear();

    const i = pegarProxPosicaoVazia();

    if (i === -1) {
        console.log("Lista cheia, não é possível adicionar mais itens.");
        console.log();
        return;
    }

    console.log("Adição de Produto ao Churrasco");
    console.log("Posição na lista (vetor):", i + 1); // +1 para o usuário

    const nome = leia.question("Informe o nome do Produto: ");
    const qnt = leia.questionFloat("Informe a Quantidade: ");
    const preco = leia.questionFloat("Informe o Preço: ");

    itens[i].nome = nome;
    itens[i].qnt = qnt;
    itens[i].preco = preco;
    itens[i].total = qnt * preco;

    console.clear();
    console.log("Item adicionado com sucesso!");
    console.log();
}

// Procedimento show() - Mostrar a lista de itens do churrasco.
function show() {
    console.clear();
    console.log(" i  |    PRODUTO    |  PREÇO  |   QNT  |   TOTAL  |");
    console.log(" ------------------------------------------------");

    for (let i = 0; i < 50; i++) {
        if (itens[i].nome) { // só mostra se tiver nome preenchido
            // toFixed(2) para valores monetários
            const precoStr = itens[i].preco.toFixed(2).padStart(7, " ");
            const qntStr = itens[i].qnt.toString().padStart(6, " ");
            const totalStr = itens[i].total.toFixed(2).padStart(7, " ");
            const nomePadded = itens[i].nome.padEnd(13, " ").slice(0, 13);

            process.stdout.write(String(i + 1).padStart(2, " "));
            process.stdout.write("  | " + nomePadded);
            process.stdout.write(" | " + precoStr);
            process.stdout.write(" |" + qntStr);
            process.stdout.write(" | " + totalStr);
            console.log(" |");
            console.log(" ------------------------------------------------");
        }
    }
    console.log();
}

// Procedimento update() - Editar um item existente.
function update() {
    show();

    console.log("Qual item você quer editar?");
    const indiceDigitado = leia.questionInt("Digite o valor de i (1 a 50): ");

    // Converte para índice de array (0..49)
    const i = indiceDigitado - 1;

    if (i < 0 || i >= 50 || !itens[i].nome) {
        console.log("Posição inválida ou vazia.");
        return;
    }

    const nome = leia.question("Informe o nome do Produto: ");
    const qnt = leia.questionFloat("Informe a Quantidade: ");
    const preco = leia.questionFloat("Informe o Preço: ");

    itens[i].nome = nome;
    itens[i].qnt = qnt;
    itens[i].preco = preco;
    itens[i].total = qnt * preco;

    console.clear();
    console.log("OK - Item editado com sucesso!");
    console.log();
}

// Procedimento remove() - Remover um item da lista.
function removeItem() {
    show();

    console.log("Qual item você quer remover?");
    const indiceDigitado = leia.questionInt("Digite o valor de i (1 a 50): ");
    const i = indiceDigitado - 1;

    if (i < 0 || i >= 50 || !itens[i].nome) {
        console.log("Posição inválida ou vazia.");
        return;
    }

    let confirmacao = "";
    do {
        console.log(`Tem certeza que deseja remover ${itens[i].nome}? S/n`);
        confirmacao = leia.question("> ");
    } while (confirmacao !== "s" && confirmacao !== "S");

    if (confirmacao === "s" || confirmacao === "S") {
        // Zera o registro
        itens[i].nome = "";
        itens[i].preco = 0;
        itens[i].qnt = 0;
        itens[i].total = 0;

        console.clear();
        console.log("OK - Item removido com sucesso!");
        console.log();
        show();
    }
}

// ------------------
// Programa principal
// ------------------
do {
    console.log("Sistema de Churrasco");
    console.log("Escolha uma opção:");
    console.log(" 1 - Adicionar Item ao Churrasco");
    console.log(" 2 - Ver Lista de Itens");
    console.log(" 3 - Editar Produto da Lista");
    console.log(" 4 - Remover Item da Lista");
    console.log(" 0 - Sair");
    opcao = leia.questionInt("Digite sua opção: ");

    switch (opcao) {
        case 1:
            add();
            break;
        case 2:
            show();
            break;
        case 3:
            update();
            break;
        case 4:
            removeItem();
            break;
        case 0:
            // sair
            break;
        default:
            console.log("Opção inválida.");
    }
} while (opcao !== 0);

console.log("Bye.");
