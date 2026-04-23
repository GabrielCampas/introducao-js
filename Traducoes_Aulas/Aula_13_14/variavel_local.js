// ExemploVariavelLocal
// Demonstra variável local declarada dentro de um procedimento.

// variável global (não usada diretamente aqui, mas mantida pela fidelidade ao algoritmo)
let nome;

function teste() {
    // variável local
    let idade = 30;
    console.log("Idade:", idade);
}

// Programa principal
teste();
