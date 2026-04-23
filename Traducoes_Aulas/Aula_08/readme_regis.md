# Exercícios de Registros em JavaScript

Este conjunto de arquivos contém a conversão direta de exercícios
originalmente desenvolvidos em VisualG, utilizando o conceito de
**registro**, para **JavaScript com Node.js e a biblioteca
`readline-sync`**.

Os registros do VisualG foram convertidos para **objetos JavaScript**, e
os vetores de registros para **arrays de objetos**. Todos os códigos
mantêm a lógica original e foram adaptados apenas na sintaxe e nos
índices.

## Requisitos

Antes de executar qualquer exercício, instale a biblioteca:

npm install readline-sync

Para executar qualquer exercício:

node nome_do_arquivo.js

## Lista de Exercícios

### regis_1.js --- Cadastro de Pessoa

Lê nome, idade e altura de uma pessoa utilizando um objeto JavaScript
como equivalente ao registro do VisualG.

### regis_2.js --- Produto com Desconto

Lê o nome e o preço de um produto, calcula automaticamente um desconto
de 10% e exibe o valor original e o valor com desconto.

### regis_3.js --- Aluno com Três Notas

Lê o nome de um aluno e três notas, calcula a média automaticamente e
informa se o aluno foi aprovado ou reprovado.

### regis_4.js --- Lista de Livros

Utiliza um vetor de registros convertido em um array de objetos para
armazenar três livros (título, autor e ano). Ao final, exibe a lista
completa.

### regis_5.js --- Cadastro de Carros

Armazena cinco carros (modelo e ano) em um vetor de registros e exibe
apenas aqueles com ano superior a 2015.

### regis_6.js --- Funcionário com Maior Salário

Lê dados de quatro funcionários (nome e salário), identifica
automaticamente qual possui o maior salário e exibe seus dados.

### regis_8.js --- Filmes Acima da Média

Armazena três filmes (título e nota), calcula a média das notas e exibe
apenas os filmes que ficaram acima dessa média.

### regis_9.js --- Artilheiro do Time

Cadastra cinco jogadores (nome e gols marcados) e identifica
automaticamente o artilheiro da equipe.

### regis_10.js --- Análise de Idades de Alunos

Armazena o nome e a idade de cinco alunos, calcula a idade média da
turma, identifica o aluno mais novo e conta quantos alunos possuem 18
anos ou mais.

## Observação Técnica

-   registro do VisualG → objeto JavaScript\
-   vetor de registros → array de objetos\
-   leia → readline-sync\
-   índices do VisualG (1..N) → JavaScript (0..N-1)

Todos os arquivos são voltados para fins didáticos e mantêm fidelidade
total à lógica original.

Bons estudos.
