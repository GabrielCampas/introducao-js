//O que são
// Parametros / argumentos
// Variaveis locais e globais

// Funcao é um trecho de codigo enclausurado em algum lugar do código fonte, de maneira geral
// Ele só é executável quando chamado. 
// Para isso devemos declarar a função e quando precisar, fazer a chamada da função. Toda função tem retorno (return). Procedimento não tem retorno.

// Declaração da função com parametro: 
function saudacao(nome) {
    return `Ola ${nome}!`;
}

// Chamando a funcao e passando um argumento. O argumento é definido na hora que chamamos a funcao
// 'Tiago' substituirá o parametro 'nome' no console
console.log(saudacao("Tiago"));

// declaracao da funcao somar com dois parametros: "a" e "b"
function somar(a, b) {

    // Declaração da variável local "resultado
    let resultado = 0;

    // resultado soma a + b e retorna o resultado
    resultado = a + b;
    return resultado;
}

// Isso aparecerá no console, 5 e 5 substituem 'a' e 'b' e são somados
console.log(somar(5,5));

//console.log(resultado); da erro porque chamei fora do "cercadinho" da funcao
let x = somar(5,5);

console.log(`O valor de x e ${x}.`);



