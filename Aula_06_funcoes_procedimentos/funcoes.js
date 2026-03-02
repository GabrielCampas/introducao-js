//O que são
// Parametros / argumentos
// Variaveis locais e globais

// Funcao é um trecho de codigo enclausurado em algum lugar do código fonte, de maneira geral. Ele só é executável quando chamado. 
// PAra isso devemos declarar a função e quando precisar, fazer a chamada da função. Toda função tem retorno (return). Procedimento não tem retorno.

// Declaração da função com parametro: 

function saudacao(nome) {
    return `Olá ${nome}!`;
}

// Chamando a funcao e passando um argumento. O argumento é definido na hora que chamamos a funcao

console.log(saudacao("Tiago"));

// declaracao da funcao somar com dois parametros: "a" e "b"
function somar(a, b) {

    // Declaração da variável local "resultado
    let resultado = 0;
    resultado = a + b;
    return resultado;
}

console.log(somar(5,5));

//console.log(resultado); da erro porque chamei fora do "cercadinho" da funcao

let x = somar(5,5);

console.log("O valor de X é: " + x);



