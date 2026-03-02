const leia = require('readline-sync');

console.log("Bem-vindo ao cálculo da média");
console.log("Informe as notas a seguir:");

let primeira_nota = leia.questionFloat("Digite a nota 1:");
let segunda_nota = leia.questionFloat("Digite a nota 2:");

let media = (primeira_nota + segunda_nota) / 2;

console.log("Sua média é: " + media);

if (media >= 8.5)
    console.log("Sua menção é A");
else {

    // Se (média >= 7.5) E (media <= 8.4) Então
    //     Escreval("Sua menção é B")
    // Fimse

    if (media >= 7.5 && media <= 8.4) {
        console.log("Sua menção é B");
    } // A chave é o "fimse". Não precisaria, mas colocamos. 

    if (media >= 6.5 && media <= 7.4) {
        console.log("Sua menção é C");
    }

    if (media >= 5 && media <= 6.4) {
        console.log("Sua menção é D");
    }

    if (media < 5)
        console.log("Sua menção é E");

} // Fechamento do else da linha 15

console.log("Fim do script");