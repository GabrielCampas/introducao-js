const leia = require('readline-sync');

let qnt_mussarela, qnt_mortadela, qnt_presunto, qnt_peito_peru;
let valor_mussarela, valor_mortadela, valor_presunto, valor_peito_peru;
let comissao_mussarela, comissao_mortadela, comissao_presunto, comissao_peito_peru;
let total_vendas, total_comissao;

console.log("PROGRAMA DE CÁLCULO DE COMISSÃO DE VENDEDOR");
console.log(""); // pulando uma linha

// Obtendo as quantidades vendidas pelo vendedor
console.log("Informe a quantidade de mussarela vendida: ");
qnt_mussarela = leia.questionFloat("");

console.log("Informe a quantidade de mortadela vendida: ");
qnt_mortadela = leia.questionFloat("");

console.log("Informe a quantidade de presunto vendida: ");
qnt_presunto = leia.questionFloat("");

console.log("Informe a quantidade de peito de peru: ");
qnt_peito_peru = leia.questionFloat("");

// Calculando os valores vendidos pelo vendedor
valor_mussarela  = qnt_mussarela * 56.2;
valor_mortadela  = qnt_mortadela * 25.9;
valor_presunto   = qnt_presunto * 78.2;
valor_peito_peru = qnt_peito_peru * 89.6;

// Calculando a comissão do vendedor
comissao_mussarela  = valor_mussarela * 0.03;
comissao_mortadela  = valor_mortadela * 0.08;
comissao_presunto   = valor_presunto * 0.05;
comissao_peito_peru = valor_peito_peru * 0.1;

// Calculando a comissão total por ACUMULADORES
total_comissao = comissao_mussarela;
total_comissao = total_comissao + comissao_mortadela;
total_comissao = total_comissao + comissao_presunto;
total_comissao = total_comissao + comissao_peito_peru;

// Calculando o valor total das vendas com acumulador
total_vendas = valor_mussarela;
total_vendas = total_vendas + valor_mortadela;
total_vendas = total_vendas + valor_presunto;
total_vendas = total_vendas + valor_peito_peru;

// Mostrando os valores calculados
console.log(""); // pulando uma linha

console.log("____________________________________");
console.log("Mussarela Vendida");
console.log("Quantidade:", qnt_mussarela, "Kg");
console.log("Valor Total: R$", valor_mussarela.toFixed(2));
console.log("Comissão: R$", comissao_mussarela.toFixed(2));
console.log("____________________________________");

console.log("Mortadela Vendida");
console.log("Quantidade:", qnt_mortadela, "Kg");
console.log("Valor Total: R$", valor_mortadela.toFixed(2));
console.log("Comissão: R$", comissao_mortadela.toFixed(2));
console.log("____________________________________");

console.log("Presunto Vendido");
console.log("Quantidade:", qnt_presunto, "Kg");
console.log("Valor Total: R$", valor_presunto.toFixed(2));
console.log("Comissão: R$", comissao_presunto.toFixed(2));
console.log("____________________________________");

console.log("Peito de Peru Vendido");
console.log("Quantidade:", qnt_peito_peru, "Kg");
console.log("Valor Total: R$", valor_peito_peru.toFixed(2));
console.log("Comissão: R$", comissao_peito_peru.toFixed(2));
console.log("____________________________________");

console.log("VALORES TOTAIS");
console.log("Total do Valor Vendido: R$", total_vendas.toFixed(2));
console.log("Total da Comissão: R$", total_comissao.toFixed(2));
console.log("____________________________________");