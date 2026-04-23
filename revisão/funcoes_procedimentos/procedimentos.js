//procedimentos usam function mas nao precisam de return

// PROCEDIMENTO
function oi(nome)
{
    console.log(`Olá ${nome}!`);
}

oi("Gabriel");

// --------------

// FUNCAO
function saudacao(nome)
{
    return `Olá ${nome}!`;
}

console.log(saudacao("Gabriel"));

// --------------

// FUNCAO E PROCEDIMENTO JUNTOS
function descobre_idade(ano_atual, ano_nascimento)
{
    return ano_atual - ano_nascimento;
}

function diz_idade(idade)
{
    let msg = `Voce tem ${idade} anos!`;
    console.log(msg);
}

diz_idade(descobre_idade(2025, 2006));