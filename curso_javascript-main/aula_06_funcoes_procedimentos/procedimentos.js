

function oi(nome)
{
    console.log(`Olá ${nome}!`);
}

oi("Aluno");

// -----------------------------------

function saudacao(nome)
{
    return `Olá meu ${nome}!`;
}

console.log( saudacao("Tiago") );

// ************************************************

function descobre_idade(ano_anual, ano_nascimento)
{
    return ano_anual - ano_nascimento;
}

function diz_idade(idade)
{
    let msg = `Você tem ${idade} anos!`;
    console.log(msg);
}

diz_idade( descobre_idade(2025, 1990) );



















