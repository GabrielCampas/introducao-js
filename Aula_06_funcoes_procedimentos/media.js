// No começo, nota 1 e 2 recebem o valor zero
let n1 = 0;
let n2 = 0;

// O procedimento (não tem return) ler notas fará:
function ler_notas() {
    const leia = require('readline-sync');

    // 'n1' agora receberá o valor da nota 1 
    n1 = leia.questionFloat("Digite a n1: ");

    // 'n2' agora receberá o valor da nota 2
    n2 = leia.questionFloat("Digite a n2: ");
}

// A função media tem os parametros 'primeira_nota' e 'segunda_nota'
function media(primeira_nota, segunda_nota) {

    // a variável local 'soma_notas' recebe os valores da primeira e segunda nota e os soma
    let soma_notas = primeira_nota + segunda_nota;

    // a variável local media recebe a o valor (já somado) das notas e o divide por 2
    let media = soma_notas / 2;

    // retorna a media
    return media;
}

// Chamando o procedimento 'ler_notas()'
ler_notas();

// Mostrando no console a media final
console.log(`A media do aluno e: ${media(n1, n2)}`);

