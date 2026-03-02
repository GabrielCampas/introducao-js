/**
 * Aula baseada na aula do Visualg abaixo:
 * 
 */

// O que são
// Parametros / argumentos
// Variaveis locais / globais

// declaração da função com parâmetro
function saudacao(nome)
{
    return `Olá meu ${nome}!`;
}

// Chamando a função e passando um argumento
console.log( saudacao("Tiago") );

// Declaração da função somar com dois parâmetros: "a" e "b"
function somar(a, b)
{
    // Declaração da variavel local "resultado"
    let resultado = 0;

    resultado = a + b;

    return resultado;
}

console.log( somar(5, 5) );
// console.log( resultado ); se executar vai dar erro.

let x = somar(5, 5);

console.log("O valor de X é: " + x);





