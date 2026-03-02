// as "FUNCAO" do VisualG são chamadas function em js e precisam de return

// o que são?
// Parametros / argumentos
// Variaveis locais / globais

const leia = require('readline-sync')

// declaracao da funcao com parametro
function saudacao(nome)
{
    return `Olá ${nome}`;
}

// chamando a funcao
console.log(saudacao("Gabriel"));

// declaracao da funcao somar com 2 parametros: "a" e "b"
function somar(a, b)
{
    // declaracao da variavel local "resultado"
    let resultado = 0;
    resultado = a + b;
    return resultado;
}

console.log( somar(5, 5));
// console.log(resultado); <- vai dar erro

let x = somar(5, 5);

console.log("O valor de X é: " + x);