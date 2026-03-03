// O procedimento 'oi' tem o parametro nome
function oi(nome) {
    console.log(`Ola ${nome}!`)
}

// Aluno substitui o nome
oi("Gabriel");

// Função descobre idade tem o parametro 'ano_atual' e 'ano_nascimento'
function descobre_idade(ano_atual, ano_nascimento) {

    // retorna o 'ano_atual' menos o 'ano_nascimento' 
    return ano_atual - ano_nascimento;
}

// O procedimento 'diz_idade' tem o parametro idade
function diz_idade(idade) {
    // A variável local 'msg' guarda esse texto
    let msg = `Voce tem ${idade} anos!`;
    // exibe a mensagem
    console.log(msg);
}

// Chamando o procedimento 'diz_idade' com o 'descobre_idade' dentro dele
// -----------------------2026 e 2006 substituirão os parametros 'ano_atual' e 'ano_nascimento', respectivamente
diz_idade(descobre_idade(2026, 2006));

