const leia = require('readline-sync');

// Matriz 3x3 do jogo da velha
let jogo = [];
for (let i = 0; i < 3; i++) {
    jogo[i] = [" ", " ", " "];
}

let linha, coluna;
let jogador = "X";
let ganhador = "";

console.log(" JOGO DA VELHA ");
console.log("    |     |    ");
console.log("---------------");
console.log("    |     |    ");
console.log("---------------");
console.log("    |     |    ");

// Laço de jogadas de 1 até 9
for (let jogadas = 1; jogadas <= 9; jogadas++) {

    console.log();
    console.log(`Qual posição você quer por o ${jogador}?`);

    // Leitura e validação da linha (1 a 3)
    do {
        linha = leia.questionInt("Informe a linha (1 a 3): ");
    } while (linha <= 0 || linha > 3);

    // Leitura e validação da coluna (1 a 3)
    do {
        coluna = leia.questionInt("Informe a coluna (1 a 3): ");
    } while (coluna <= 0 || coluna > 3);

    // Ajuste para índices 0..2 na matriz JS
    let li = linha - 1;
    let co = coluna - 1;

    // Marca a posição escolhida com o jogador atual
    jogo[li][co] = jogador;

    // "Limpatela" do VisualG → console.clear()
    console.clear();

    console.log(" JOGO DA VELHA ");
    console.log(`Jogada ${jogadas} de 9: `);
    console.log(" ", jogo[0][0], " | ", jogo[0][1], " | ", jogo[0][2]);
    console.log("-----------");
    console.log(" ", jogo[1][0], " | ", jogo[1][1], " | ", jogo[1][2]);
    console.log("-----------");
    console.log(" ", jogo[2][0], " | ", jogo[2][1], " | ", jogo[2][2]);

    // Verificando quem ganhou linha a linha
    for (let i = 0; i < 3; i++) {
        if (jogo[i][0] === "X" && jogo[i][1] === "X" && jogo[i][2] === "X") {
            ganhador = "X";
            break;
        }
        if (jogo[i][0] === "O" && jogo[i][1] === "O" && jogo[i][2] === "O") {
            ganhador = "O";
            break;
        }
    }

    // Verificando quem ganhou coluna a coluna
    if (ganhador === "") {
        for (let i = 0; i < 3; i++) {
            if (jogo[0][i] === "X" && jogo[1][i] === "X" && jogo[2][i] === "X") {
                ganhador = "X";
                break;
            }
            if (jogo[0][i] === "O" && jogo[1][i] === "O" && jogo[2][i] === "O") {
                ganhador = "O";
                break;
            }
        }
    }

    // Se já houver ganhador, encerra o jogo
    if (ganhador !== "") {
        console.log();
        console.log(`Parabéns, o ${ganhador} ganhou!`);
        console.log();
        break;
    }

    // Alterna o jogador
    if (jogador === "X") {
        jogador = "O";
    } else {
        jogador = "X";
    }
}