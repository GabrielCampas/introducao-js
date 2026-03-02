const leia = require('readline-sync');

let tabuleiro = [];
let jogador = "X";
let jogadas = 0;
let vencedor = false;

function venceu(jog) {
    for (let i = 0; i < 3; i++) {
        if (tabuleiro[i][0] === jog && tabuleiro[i][1] === jog && tabuleiro[i][2] === jog) return true;
        if (tabuleiro[0][i] === jog && tabuleiro[1][i] === jog && tabuleiro[2][i] === jog) return true;
    }

    if (tabuleiro[0][0] === jog && tabuleiro[1][1] === jog && tabuleiro[2][2] === jog) return true;
    if (tabuleiro[0][2] === jog && tabuleiro[1][1] === jog && tabuleiro[2][0] === jog) return true;

    return false;
}

function mostrarTabuleiro() {
    console.clear();
    for (let i = 0; i < 3; i++) {
        console.log(" ", tabuleiro[i][0], " ", tabuleiro[i][1], " ", tabuleiro[i][2]);
    }
}

for (let i = 0; i < 3; i++) {
    tabuleiro[i] = ["-", "-", "-"];
}

while (jogadas < 9 && !vencedor) {
    mostrarTabuleiro();
    console.log(`Vez do jogador ${jogador}`);

    let linha = leia.questionInt("Informe linha (1 a 3): ");
    let coluna = leia.questionInt("Informe coluna (1 a 3): ");

    if (linha >= 1 && linha <= 3 && coluna >= 1 && coluna <= 3) {
        if (tabuleiro[linha - 1][coluna - 1] === "-") {
            tabuleiro[linha - 1][coluna - 1] = jogador;
            jogadas++;

            if (venceu(jogador)) {
                vencedor = true;
                mostrarTabuleiro();
                console.log(`Jogador ${jogador} venceu!`);
            } else {
                jogador = (jogador === "X") ? "O" : "X";
            }
        } else {
            console.log("Posição já ocupada.");
        }
    } else {
        console.log("Posição inválida.");
    }
}

if (!vencedor) {
    mostrarTabuleiro();
    console.log("Empate! Ninguém venceu.");
}