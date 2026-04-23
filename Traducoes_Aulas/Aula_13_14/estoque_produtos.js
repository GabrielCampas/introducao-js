// Sistema de Estoque com registro Produto, procedimentos e função de busca.
// O código original em VisualG tinha algumas inconsistências de nomes,
// aqui foi feita uma adaptação coerente e comentada para estudo.

const leia = require('readline-sync');

// Tipo Produto (registro)
function criarProduto(codigo = 0, nome = "", quantidade = 0, preco = 0) {
    return { codigo, nome, quantidade, preco };
}

// Vetor global de produtos e contador de produtos cadastrados
const produtos = new Array(100).fill(null).map(() => criarProduto());
let cont = 0; // quantos produtos realmente estão em uso

// Procedimento para cadastrar um produto
function cadastrarProduto() {
    if (cont === 100) {
        console.log("Estoque cheio! Não é possível adicionar mais produtos.");
        return;
    }

    const p = criarProduto();

    console.log("Digite o código do produto:");
    p.codigo = leia.questionInt("> ");

    console.log("Digite o nome do produto:");
    p.nome = leia.question("> ");

    console.log("Digite a quantidade em estoque:");
    p.quantidade = leia.questionInt("> ");

    console.log("Digite o preço unitário:");
    p.preco = leia.questionFloat("> ");

    // Armazena no vetor e incrementa o contador
    produtos[cont] = p;
    cont++;

    console.log("Produto cadastrado com sucesso!");
}

// Procedimento para exibir o estoque
function exibirEstoque() {
    if (cont === 0) {
        console.log("Não há produtos cadastrados.");
        return;
    }

    console.log("======= ESTOQUE ATUAL =======");
    for (let i = 0; i < cont; i++) {
        console.log("Código:", produtos[i].codigo);
        console.log("Nome:", produtos[i].nome);
        console.log("Quantidade:", produtos[i].quantidade);
        console.log("Preço: R$", produtos[i].preco.toFixed(2));
        console.log("--------------------------");
    }
}

// Função para buscar produto pelo código
// Retorna o índice no vetor ou -1 se não encontrar
function buscarProduto(codigo) {
    for (let i = 0; i < cont; i++) {
        if (produtos[i].codigo === codigo) {
            return i;
        }
    }
    return -1;
}

// Procedimento para atualizar o estoque de um produto
function atualizarEstoque() {
    console.log("Digite o código do produto que deseja atualizar:");
    const codigo = leia.questionInt("> ");

    const indice = buscarProduto(codigo);

    if (indice === -1) {
        console.log("Produto não encontrado.");
    } else {
        console.log("Digite a nova quantidade em estoque:");
        const novaQuantidade = leia.questionInt("> ");
        produtos[indice].quantidade = novaQuantidade;
        console.log("Estoque atualizado com sucesso!");
    }
}

// Programa principal com menu
function menuEstoque() {
    let opcao = -1;

    do {
        console.log("\nMenu:");
        console.log("1. Cadastrar produto");
        console.log("2. Exibir estoque");
        console.log("3. Buscar produto");
        console.log("4. Atualizar estoque");
        console.log("0. Sair");
        opcao = leia.questionInt("Escolha uma opção: ");

        switch (opcao) {
            case 1:
                cadastrarProduto();
                break;
            case 2:
                exibirEstoque();
                break;
            case 3: {
                console.log("Digite o código do produto:");
                const codigo = leia.questionInt("> ");
                const indice = buscarProduto(codigo);
                if (indice === -1) {
                    console.log("Produto não encontrado.");
                } else {
                    console.log("Produto encontrado:");
                    console.log("Código:", produtos[indice].codigo);
                    console.log("Nome:", produtos[indice].nome);
                    console.log("Quantidade:", produtos[indice].quantidade);
                    console.log("Preço: R$", produtos[indice].preco.toFixed(2));
                }
                break;
            }
            case 4:
                atualizarEstoque();
                break;
            case 0:
                console.log("Saindo do programa...");
                break;
            default:
                console.log("Opção inválida!");
        }
    } while (opcao !== 0);
}

// Descomente a linha abaixo se quiser executar diretamente este módulo:
// menuEstoque();
