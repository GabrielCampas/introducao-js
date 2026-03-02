// PROCEDIMENTO - Exemplos gerais de procedimentos com e sem parâmetros.

// Subrotina simples sem parâmetro
function teste() {
    console.log("Olá mundo");
}

// Subrotina com parâmetro
function teste2(msg) {
    console.log(msg);
}

// Subrotina com variável local
function teste3(num1, num2) {
    let res = num1 + num2;
    console.log("resultado é:", res);
}

// Subrotina com parâmetros de tipos diferentes
function teste4(num, msg) {
    console.log("num:", num, " msg:", msg);
}

// Programa principal
teste();
teste2("Sala maravilhosa");
teste3(6, 9);
teste4(6, "Tá acabando o semestre");
