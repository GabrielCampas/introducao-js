

function oi(nome) {
    console.log(`Olá ${nome}!`)
}

oi("Aluno");

function descobre_idade(ano_atual, ano_nascimento) {
    return ano_atual - ano_nascimento;
}

function diz_idade(idade)
{
    let msg = `Você tem ${idade} anos!`;
    console.log(msg);
}

diz_idade( descobre_idade(2025, 1981));

