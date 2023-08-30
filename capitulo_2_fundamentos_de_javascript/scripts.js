// Variáveis, tipos de dados e operadores

// Exercício 1
let idade = 25;
let peso = 70;

console.log("Idade: ", idade);
console.log("Peso: ", peso);

// Exercício 2
const PI = 3.14159;
console.log("PI: ", PI);

// Exercício 3
let númeroMáximo = Number.MAX_VALUE;
console.log("Número Máximo: ", númeroMáximo);

// Exercício 4
let nome = "João";
let sobrenome = "Silva";
let nomeCompleto = nome + " " + sobrenome;

console.log("Nome Completo: ", nomeCompleto);

// Exercício 5
let num1 = 10;
let num2 = 20;

let soma = num1 + num2;

console.log("Soma: ", soma);

// Exercício 6
let bool1 = true;
let bool2 = false;

console.log("AND: ", bool1 && bool2);
console.log("OR: ", bool1 || bool2);
console.log("NOT: ", !bool1);

// Exercício 7
let num1 = 10;
let num2 = 20;
let num3 = 30;

console.log("num1 < num2: ", num1 < num2);
console.log("num2 > num3: ", num2 > num3);
console.log("num1 == num3: ", num1 == num3);

// Exercício 8
let num = 10;
num++;

console.log("Número incrementado: ", num);

// Operadores Condicionais

// Exercício 9
function verificarNumero(num) {
  if (num > 0) {
    console.log("O número é positivo");
  } else if (num < 0) {
    console.log("O número é negativo");
  } else {
    console.log("O número é zero");
  }
}

verificarNumero(10); // Imprime: O número é positivo
verificarNumero(-5); // Imprime: O número é negativo
verificarNumero(0); // Imprime: O número é zero

// Exercício 10
function calcularMedia(nota1, nota2) {
  var media = (nota1 + nota2) / 2;
  if (media >= 7) {
    console.log("Aluno aprovado com a média: " + media);
  } else {
    console.log("Aluno reprovado com a média: " + media);
  }
}

calcularMedia(8, 6); // Imprime: Aluno aprovado com a média: 7
calcularMedia(5, 6); // Imprime: Aluno reprovado com a média: 5.5

// Exercício 11
function podeVotar(idade) {
  if (idade >= 18 && idade < 70) {
    console.log("Voto obrigatório.");
  } else if ((idade >= 16 && idade < 18) || idade >= 70) {
    console.log("Voto facultativo.");
  } else {
    console.log("Não vota.");
  }
}

podeVotar(15); // Imprime: Não vota.
podeVotar(16); // Imprime: Voto facultativo.
podeVotar(18); // Imprime: Voto obrigatório.
podeVotar(70); // Imprime: Voto facultativo.

// Exercício 12
function situacaoEstudante(mediaFinal) {
  if (mediaFinal >= 7) {
    console.log("Aprovado.");
  } else if (mediaFinal >= 5 && mediaFinal < 7) {
    console.log("Em recuperação.");
  } else {
    console.log("Reprovado.");
  }
}

situacaoEstudante(7); // Imprime: Aprovado.
situacaoEstudante(6); // Imprime: Em recuperação.
situacaoEstudante(4); // Imprime: Reprovado.

// Exercício 13
function calcularIMC(peso, altura) {
  var imc = peso / (altura * altura);
  if (imc < 18.5) {
    console.log("Abaixo do peso");
  } else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
  } else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso");
  } else {
    console.log("Obesidade");
  }
}

calcularIMC(60, 1.7); // Imprime: Peso normal
calcularIMC(80, 1.7); // Imprime: Sobrepeso
calcularIMC(90, 1.7); // Imprime: Obesidade

// Exercício 14
function verificarBissexto(ano) {
  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    console.log(ano + " é um ano bissexto");
  } else {
    console.log(ano + " não é um ano bissexto");
  }
}

verificarBissexto(2000); // Imprime: 2000 é um ano bissexto
verificarBissexto(2001); // Imprime: 2001 não é um ano bissexto
verificarBissexto(2100); // Imprime: 2100 não é um ano bissexto

// Exercício 15
function verificarPalindromo(palavra) {
  var palavraInvertida = palavra.split("").reverse().join("");
  if (palavra == palavraInvertida) {
    console.log(palavra + " é um palíndromo");
  } else {
    console.log(palavra + " não é um palíndromo");
  }
}

verificarPalindromo("arara"); // Imprime: arara é um palíndromo
verificarPalindromo("gato"); // Imprime: gato não é um palíndromo

// Exercício 16
function maiorNumero(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    console.log(n1 + " é o maior número");
  } else if (n2 > n1 && n2 > n3) {
    console.log(n2 + " é o maior número");
  } else {
    console.log(n3 + " é o maior número");
  }
}

maiorNumero(1, 2, 3); // Imprime: 3 é o maior número
maiorNumero(5, 3, 4); // Imprime: 5 é o maior número
maiorNumero(7, 8, 7); // Imprime: 8 é o maior número

// Exercício 17
function parOuImpar(numero) {
  if (numero % 2 == 0) {
    console.log(numero + " é par");
  } else {
    console.log(numero + " é ímpar");
  }
}

parOuImpar(2); // Imprime: 2 é par
parOuImpar(3); // Imprime: 3 é ímpar

// Exercício 18
function podeDirigir(idade) {
  if (idade >= 18) {
    console.log("Pode dirigir.");
  } else {
    console.log("Não pode dirigir");
  }
}

podeDirigir(15); // Imprime: Não pode dirigir
podeDirigir(18); // Imprime: Pode dirigir
podeDirigir(36); // Imprime: Pode dirigir

// Exercício 19
function dentroDoIntervalo(numero, limiteInferior, limiteSuperior) {
  if (numero >= limiteInferior && numero <= limiteSuperior) {
    console.log(numero + " está dentro do intervalo");
  } else {
    console.log(numero + " está fora do intervalo");
  }
}

dentroDoIntervalo(5, 1, 10); // Imprime: 5 está dentro do intervalo
dentroDoIntervalo(15, 1, 10); // Imprime: 15 está fora do intervalo

// Exercício 20
function classificarAluno(nota) {
  if (nota >= 90) {
    console.log("A");
  } else if (nota >= 80) {
    console.log("B");
  } else if (nota >= 70) {
    console.log("C");
  } else if (nota >= 60) {
    console.log("D");
  } else {
    console.log("F");
  }
}

classificarAluno(95); // Imprime: A
classificarAluno(82); // Imprime: B
classificarAluno(74); // Imprime: C
classificarAluno(62); // Imprime: D
classificarAluno(55); // Imprime: F

// Exercício 21
function determinarEstacao(mes) {
  if (mes < 3 || mes === 12) {
    console.log("Verão");
  } else if (mes < 6) {
    console.log("Outono");
  } else if (mes < 9) {
    console.log("Inverno");
  } else {
    console.log("Primavera");
  }
}

determinarEstacao(12); // Imprime: Verão
determinarEstacao(4); // Imprime: Outono
determinarEstacao(7); // Imprime: Inverno
determinarEstacao(10); // Imprime: Primavera

// Exercício 22
function determinarDiasNoMes(mes) {
  switch (mes) {
    case 2:
      console.log("28 ou 29 dias");
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      console.log("30 dias");
      break;
    default:
      console.log("31 dias");
  }
}

determinarDiasNoMes(2); // Imprime: 28 ou 29 dias
determinarDiasNoMes(4); // Imprime: 30 dias
determinarDiasNoMes(1); // Imprime: 31 dias

// Exercício 23
function verificaSemafaro(cor) {
  if (cor === "verde") {
    console.log("Siga em frente.");
  } else if (cor === "amarelo") {
    console.log("Atenção, diminua a velocidade.");
  } else if (cor === "vermelho") {
    console.log("Pare seu veículo.");
  } else {
    console.log("Envie uma cor válida.");
  }
}

verificaSemafaro("verde"); // Imprime: Siga em frente
verificaSemafaro("amarelo"); // Imprime: Atenção, diminua a velocidade
verificaSemafaro("vermelho"); // Imprime: Pare seu veículo
verificaSemafaro("azul"); // Impime: Envie uma cor válida

// Laços de Repetição

// Exercíco 24
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Exercício 25
let i = 10;
while (i >= 1) {
  console.log(i);
  i--;
}

// Exercício 26
let i = 1;
do {
  if (i % 2 != 0) {
    console.log(i);
  }
  i++;
} while (i <= 20);

// Exercício 27
for (let i = 1; i <= 10; i++) {
  console.log("5 x " + i + " = " + 5 * i);
}

// Exercício 28
let i = 1;
let soma = 0;
while (i <= 100) {
  soma += i;
  i++;
}
console.log(soma);

// Exercício 29
let i = 1;
do {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
} while (i <= 100);

// Exercício 30
for (let num = 2; num <= 100; num++) {
  let isPrime = true;
  for (let div = 2; div < num; div++) {
    if (num % div == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) {
    console.log(num);
  }
}

// Exercício 31
let min = 1;
let max = 100;
let chute = Math.floor((max + min) / 2);
let numeroPensado = 50;

while (chute !== numeroPensado) {
  if (chute > numeroPensado) {
    max = chute;
  } else {
    min = chute;
  }
  chute = Math.floor((max + min) / 2);
}
console.log("O número pensado é: " + chute);

// Exercício 32
let escolhaUsuario = "pedra";
let escolhaComputador;
let resultado;
do {
  let aleatorio = Math.floor(Math.random() * 3);
  switch (aleatorio) {
    case 0:
      escolhaComputador = "pedra";
      break;
    case 1:
      escolhaComputador = "papel";
      break;
    default:
      escolhaComputador = "tesoura";
  }

  if (
    (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
    (escolhaUsuario === "papel" && escolhaComputador === "pedra") ||
    (escolhaUsuario === "tesoura" && escolhaComputador === "papel")
  ) {
    resultado = "Usuário ganhou!";
  } else if (escolhaUsuario === escolhaComputador) {
    resultado = "Empate!";
  } else {
    resultado = "Computador ganhou!";
  }
  console.log(
    "Usuário: " +
      escolhaUsuario +
      " - Computador: " +
      escolhaComputador +
      " - Resultado: " +
      resultado
  );
} while (resultado === "Empate!");

// Exercício 33
let num1 = 0;
let num2 = 1;
console.log(num1);
console.log(num2);
for (let i = 2; i < 10; i++) {
  let nextNum = num1 + num2;
  console.log(nextNum);
  num1 = num2;
  num2 = nextNum;
}

// Exercício 34
let num = 1;
while (num <= 100) {
  if (num % 3 === 0 && num % 5 === 0) {
    console.log("FizzBuzz");
  } else if (num % 3 === 0) {
    console.log("Fizz");
  } else if (num % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(num);
  }
  num++;
}

// Exercício 35
for (let n = 1; n <= 10; n++) {
  let triangular = (n * (n + 1)) / 2;
  console.log(triangular);
}

// Exercício 36
for (let i = 1; i <= 100; i++) {
  let soma = 0;
  for (let j = 1; j < i; j++) {
    if (i % j === 0) {
      soma += j;
    }
  }
  if (soma === i) {
    console.log(i);
  }
}

// Exercício 37
let somaQuadrados = 0;
let i = 1;
while (i <= 10) {
  somaQuadrados += i * i;
  i++;
}
console.log(somaQuadrados);

// Exercício 38
let somaCubos = 0;
let i = 1;
do {
  somaCubos += i * i * i;
  i++;
} while (i <= 10);
console.log(somaCubos);

// Exercício 39
let numero = 5; // Altere este valor para o número desejado.
let fatorial = 1;
for (let i = 1; i <= numero; i++) {
  fatorial *= i;
}
console.log(`O fatorial de ${numero} é ${fatorial}`);

// Exercício 40
let original = "Hello"; // Altere este valor para a string desejada.
let invertida = "";
let i = original.length - 1;
while (i >= 0) {
  invertida += original[i];
  i--;
}
console.log(`A string "${original}" invertida é "${invertida}"`);

// Exercício 41
let numero = 10; // Altere este valor para o número desejado.
let binario = "";
do {
  binario = (numero % 2) + binario;
  numero = Math.floor(numero / 2);
} while (numero > 0);
console.log(`O número em binário é ${binario}`);

// Exercício 42
let binario = "1010"; // Altere este valor para o número binário desejado.
let decimal = 0;
for (let i = binario.length - 1, j = 0; i >= 0; i--, j++) {
  decimal += parseInt(binario[i]) * Math.pow(2, j);
}
console.log(`O número em decimal é ${decimal}`);

// Exercício 43
let numero = 12321; // Altere este valor para o número desejado.
let reverso = 0;
let temp = numero;
while (temp > 0) {
  let digito = temp % 10;
  reverso = reverso * 10 + digito;
  temp = Math.floor(temp / 10);
}

// Exercício 44
let matriz1 = [
  [1, 2],
  [3, 4],
]; // Altere estes valores para as matrizes desejadas.
let matriz2 = [
  [5, 6],
  [7, 8],
];
let soma = [];
let i = 0;
do {
  let j = 0;
  soma[i] = [];
  do {
    soma[i][j] = matriz1[i][j] + matriz2[i][j];
    j++;
  } while (j < matriz1[i].length);
  i++;
} while (i < matriz1.length);
console.log(`A soma das matrizes é ${JSON.stringify(soma)}`);
