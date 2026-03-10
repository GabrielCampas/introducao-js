// exercicio de desconto usando if.
const leia = require('readline-sync');

console.log("=== FINALIZE SUA COMPRA ===");
let nomeitem = leia.question(`Digite o nome do item a ser comprado: `);
let valoritem = leia.questionFloat(`Digite o valor do item a ser comprado: `);
console.log(" ")
console.log("Selecione seu metodo de pagamento: ");
let opcao = leia.question(`1 - Pix (10% de desconto) \n2 - Dinheiro (5% de desconto): `);

// fazer a variavel desconto começar como zero
let desconto = 0; 
// fazer a variavel do valor descontado começar com o valor do item
let valorDescontado = valoritem;

// opcao PIX
if (opcao == 1) {
    desconto = valoritem * 0.1; 
    valorDescontado = valoritem - desconto;
    console.log("")
    console.log(`Seu metodo de pagamento foi PIX. \nO preco de seu produto e R$${valorDescontado}.`);
}

// opcao DINHEIRO
else if (opcao == 2) {
    desconto = valoritem * 0.05;
    valorDescontado = valoritem - desconto;
    console.log("")
    console.log(`Seu metodo de pagamento foi DINHEIRO. \nO preco de seu produto e R$${valorDescontado}.`);
}

// nenhuma das 2 opcoes
else {
    console.log("")
    console.log("Opcao invalida, nenhum desconto sera aplicado a sua compra. Valor: R$" + valorDescontado + ".");
    valorDescontado = valoritem;
}
