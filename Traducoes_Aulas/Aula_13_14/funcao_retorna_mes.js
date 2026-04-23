// FUNCAO_RETORNA_MES
// Função que recebe um número e retorna o nome do mês correspondente
// (comportamento limitado aos casos 1 a 4 como no algoritmo original).

function mes(numero) {
    let nome_mes;
    switch (numero) {
        case 1:
            nome_mes = "Janeiro";
            break;
        case 2:
            nome_mes = "Fevereiro";
            break;
        case 3:
            nome_mes = "Março";
            break;
        case 4:
            nome_mes = "Abril";
            break;
        default:
            nome_mes = "Mês inválido";
    }
    return nome_mes;
}

// Programa principal
console.log(mes(1));
console.log(mes(2));
console.log(mes(3));
console.log();

for (let i = 1; i <= 12; i++) {
    console.log(mes(i));
}
