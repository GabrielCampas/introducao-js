# Exercícios de Funções e Procedimentos em JavaScript

Este pacote contém a tradução de vários exemplos de **funções**, **procedimentos** e **registros**
escritos originalmente em VisualG, adaptados para **JavaScript (Node.js)** com uso de `readline-sync`
quando há entrada de dados.

Todos os arquivos têm comentários explicativos, mantendo a lógica original para fins didáticos.

## Requisitos

Antes de executar qualquer arquivo, instale a biblioteca:

```bash
npm install readline-sync
```

Para executar um exercício:

```bash
node nome_do_arquivo.js
```

---

## Arquivos incluídos

### churrasco_itens_menu.js
Sistema de cadastro de itens de churrasco usando:
- registro `Ingrediente` (representado como objeto JavaScript);
- vetor de até 50 itens;
- função auxiliar `pegarProxPosicaoVazia()`;
- procedimentos `add`, `update`, `removeItem` e `show`;
- menu principal com laço `do...while`.

Simula uma lista de compras de churrasco com inclusão, edição, remoção e exibição tabular dos itens.

---

### escopo_variaveis.js
Demonstra a diferença entre **variável global** e **variável local** usando um procedimento `mostrarValor`.
Mostra que a variável local com o mesmo nome não altera o valor da variável global.

---

### procedimento_mostrar_dobro.js
Exemplo de procedimento com parâmetro que:
- recebe um número;
- calcula o dobro dentro do procedimento;
- exibe o resultado;
- mostra que a variável original fora do procedimento não é alterada (passagem por valor).

---

### variavel_global.js
Exemplo simples de variável global `nome` acessada dentro de um procedimento `mostrarNome`.

---

### variavel_local.js
Exemplo simples com procedimento `teste` que declara uma variável local `idade` e exibe seu valor.

---

### funcao_calculadora_1.js
Função `somar(x, y)` com dois parâmetros, retornando a soma. O programa chama a função três vezes
com valores diferentes e exibe os resultados.

---

### funcao_calculadora_2.js
Versão alternativa da calculadora com:
- variáveis globais `primeiro_num`, `segundo_num`, `res`;
- função `somar()` sem parâmetros, que usa as variáveis globais;
- leitura dos números via teclado;
- demonstração de exibição de `res` antes e depois da chamada da função.

---

### funcao_media.js
Função `media(p1, p2)` que recebe duas notas e retorna a média. O valor retornado é armazenado
em uma variável e exibido no final.

---

### funcao_imc.js
Função `calcularImc()` que:
- lê peso e altura do usuário;
- calcula o IMC (`peso / (altura^2)`);
- retorna o valor calculado;
- o programa principal exibe o IMC.

---

### funcao_retorna_mes.js
Função `mes(numero)` que recebe um inteiro e retorna o nome do mês correspondente para os casos 1 a 4,
retornando `"Mês inválido"` nos demais. O programa testa a função com valores específicos e com um laço de 1 a 12.

---

### procedimento_calculadora.js
Calculadora usando **procedimentos**:
- variáveis globais para operandos e resultado;
- procedimentos `somar`, `subtrair`, `multiplicar`, `dividir` (apenas soma e subtração usados, como no original);
- menu simples para o usuário escolher a operação;
- exibição do resultado ao final.

---

### procedimento_imc.js
Procedimento `calcular_imc()` que:
- lê peso e altura (variáveis locais);
- calcula o IMC e armazena o valor em uma variável global `imc`;
- o programa principal exibe o IMC com duas casas decimais.

Também ilustra que variáveis locais não são acessíveis fora do procedimento.

---

### procedimentos_basicos.js
Coleção de exemplos de procedimentos:
- `teste()` – sem parâmetros;
- `teste2(msg)` – com parâmetro de mensagem;
- `teste3(num1, num2)` – soma dois números e exibe o resultado;
- `teste4(num, msg)` – recebe parâmetros de tipos diferentes (número e texto).

---

### procedimento_menu.js
Exemplo de procedimento `menu()` que apenas exibe um menu de navegação.
O programa principal chama o menu várias vezes, ilustrando reutilização de código.

---

### estoque_produtos.js
Sistema de estoque com:
- tipo `Produto` (código, nome, quantidade, preço);
- vetor global `produtos` com capacidade para 100 itens;
- variável global `cont` indicando quantos produtos foram cadastrados;
- procedimentos `cadastrarProduto`, `exibirEstoque`, `atualizarEstoque`;
- função `buscarProduto(codigo)` que retorna o índice do produto ou -1;
- menu com opções de cadastrar, exibir, buscar, atualizar e sair.

O código foi levemente ajustado em relação ao pseudocódigo original para ficar coerente e executável em JavaScript.

---

### procedimentos_parametro.js
Demonstra passagem de valores por parâmetro em um procedimento `somar(x, y)`.
Lê dois números do usuário, chama o procedimento e também chama com valores literais.

---

### clinica_1.js
Versão do sistema da clínica com:
- tipo `TPaciente` (nome, idade, peso, dt_con);
- vetor `Pacientes` de 5 posições;
- procedimento `mostrar()` para exibir todos os pacientes;
- procedimento `cadastrar()` que preenche as posições vazias e pergunta se o usuário deseja continuar;
- menu principal com opções para ver pacientes e cadastrar.

---

### clinica_2.js
Versão simplificada do sistema da clínica:
- mesmo tipo `TPaciente` e vetor de 5 posições;
- `mostrar()` para exibição dos pacientes;
- `cadastrar()` que preenche todas as posições sem perguntar se deve continuar;
- menu com opções para ver pacientes, cadastrar e sair.

---

## Observação

Os exemplos focam em:

- diferença entre **funções** e **procedimentos** (com e sem retorno);
- **escopo de variáveis** (global x local);
- **passagem de parâmetros**;
- uso de **registros** (objetos) e vetores de registros;
- simulação de pequenos sistemas (churrasco, estoque, clínica).

A ideia é servir como ponte direta entre a lógica aprendida no VisualG e sua aplicação em JavaScript.

Bons estudos!
