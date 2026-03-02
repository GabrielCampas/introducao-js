const leia = require('readline-sync');

// Tipo TProduto → objeto em JavaScript
function criarProduto() {
    return {
        quantidade_vendida: 0,   // total em kilos vendidos
        valor_unitario: 0,       // preço por kilo vendido
        total_unitario: 0,       // qnt * valor do kilo
        aliquota_comissao: 0,    // porcentagem de comissão
        valor_comissao: 0        // valor em R$ da comissão
    };
}

let vendas_mussarela = criarProduto();
let vendas_mortadela = criarProduto();
let vendas_presunto = criarProduto();
let vendas_p_peru = criarProduto();

let total_vendas = 0;
let total_comissao = 0;

// Definindo os preços unitários de cada produto:
vendas_mussarela.valor_unitario = 56.2;
vendas_mortadela.valor_unitario = 25.9;
vendas_presunto.valor_unitario = 78.2;
vendas_p_peru.valor_unitario = 89.6;

// Definindo as alíquotas de comissão:
vendas_mussarela.aliquota_comissao = 0.03; //  3%
vendas_mortadela.aliquota_comissao = 0.08; //  8%
vendas_presunto.aliquota_comissao = 0.05; //  5%
vendas_p_peru.aliquota_comissao = 0.10; // 10%

console.log("PROGRAMA DE CÁLCULO DE COMISSÃO DE VENDEDOR");
console.log("");

// Obtendo as quantidades vendidas pelo vendedor
vendas_mussarela.quantidade_vendida = leia.questionFloat(
    "Informe a quantidade de mussarela vendida (Kg): "
);
vendas_mortadela.quantidade_vendida = leia.questionFloat(
    "Informe a quantidade de mortadela vendida (Kg): "
);
vendas_presunto.quantidade_vendida = leia.questionFloat(
    "Informe a quantidade de presunto vendida (Kg): "
);
vendas_p_peru.quantidade_vendida = leia.questionFloat(
    "Informe a quantidade de peito de peru vendida (Kg): "
);

// Calculando os valores vendidos pelo vendedor
vendas_mussarela.total_unitario =
    vendas_mussarela.quantidade_vendida * vendas_mussarela.valor_unitario;

vendas_mortadela.total_unitario =
    vendas_mortadela.quantidade_vendida * vendas_mortadela.valor_unitario;

vendas_presunto.total_unitario =
    vendas_presunto.quantidade_vendida * vendas_presunto.valor_unitario;

vendas_p_peru.total_unitario =
    vendas_p_peru.quantidade_vendida * vendas_p_peru.valor_unitario;

// Calculando a comissão do vendedor
vendas_mussarela.valor_comissao =
    vendas_mussarela.total_unitario * vendas_mussarela.aliquota_comissao;

vendas_mortadela.valor_comissao =
    vendas_mortadela.total_unitario * vendas_mortadela.aliquota_comissao;

vendas_presunto.valor_comissao =
    vendas_presunto.total_unitario * vendas_presunto.aliquota_comissao;

vendas_p_peru.valor_comissao =
    vendas_p_peru.total_unitario * vendas_p_peru.aliquota_comissao;

// Calculando a comissão total por ACUMULADORES
total_comissao = vendas_mussarela.valor_comissao;
total_comissao = total_comissao + vendas_mortadela.valor_comissao;
total_comissao = total_comissao + vendas_presunto.valor_comissao;
total_comissao = total_comissao + vendas_p_peru.valor_comissao;

// Calculando o valor total das vendas com acumulador
total_vendas = vendas_mussarela.total_unitario;
total_vendas = total_vendas + vendas_mortadela.total_unitario;
total_vendas = total_vendas + vendas_presunto.total_unitario;
total_vendas = total_vendas + vendas_p_peru.total_unitario;

// Mostrando os valores calculados
console.log("");
console.log("____________________________________");
console.log("Mussarela Vendida");
console.log(
    "Quantidade:",
    vendas_mussarela.quantidade_vendida.toFixed(2),
    "Kg"
);
console.log(
    "Valor Total: R$",
    vendas_mussarela.total_unitario.toFixed(2)
);
console.log(
    "Comissão: R$",
    vendas_mussarela.valor_comissao.toFixed(2)
);
console.log("____________________________________");

console.log("Mortadela Vendida");
console.log(
    "Quantidade:",
    vendas_mortadela.quantidade_vendida.toFixed(2),
    "Kg"
);
console.log(
    "Valor Total: R$",
    vendas_mortadela.total_unitario.toFixed(2)
);
console.log(
    "Comissão: R$",
    vendas_mortadela.valor_comissao.toFixed(2)
);
console.log("____________________________________");

console.log("Presunto Vendido");
console.log(
    "Quantidade:",
    vendas_presunto.quantidade_vendida.toFixed(2),
    "Kg"
);
console.log(
    "Valor Total: R$",
    vendas_presunto.total_unitario.toFixed(2)
);
console.log(
    "Comissão: R$",
    vendas_presunto.valor_comissao.toFixed(2)
);
console.log("____________________________________");

console.log("Peito de Peru Vendido");
console.log(
    "Quantidade:",
    vendas_p_peru.quantidade_vendida.toFixed(2),
    "Kg"
);
console.log(
    "Valor Total: R$",
    vendas_p_peru.total_unitario.toFixed(2)
);
console.log(
    "Comissão: R$",
    vendas_p_peru.valor_comissao.toFixed(2)
);
console.log("____________________________________");

console.log("VALORES TOTAIS");
console.log("Total do Valor Vendido: R$", total_vendas.toFixed(2));
console.log("Total da Comissão: R$", total_comissao.toFixed(2));
console.log("____________________________________");