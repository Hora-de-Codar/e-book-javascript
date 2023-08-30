// Objetos: Propriedades, Métodos e Herança

// Exercício 76
let obj = {}; // Criação de um objeto vazio

obj.numero = 10; // Adicionando uma propriedade numérica
obj.texto = "Olá, mundo!"; // Adicionando uma propriedade string
obj.booleano = true; // Adicionando uma propriedade booleana

console.log(obj); // Deve imprimir { numero: 10, texto: 'Olá, mundo!', booleano: true }

// Exercício 77
let livro = {
  titulo: "O Hobbit",
  autor: "J.R.R. Tolkien",
  numeroDePaginas: 310,

  descricao: function () {
    console.log(
      `O livro ${this.titulo}, escrito por ${this.autor}, tem ${this.numeroDePaginas} páginas.`
    );
  },
};

livro.descricao(); // Deve imprimir: 'O livro O Hobbit, escrito por J.R.R. Tolkien, tem 310 páginas.'

// Exercício 78
let cachorro = {
  raca: "Labrador",
  nome: "Rex",
  idade: 3,

  idadeEmAnosHumanos: function () {
    return this.idade * 7;
  },
};

console.log(cachorro.idadeEmAnosHumanos()); // Deve imprimir: 21

// Exercício 79
let carro = {
  marca: "Ford",
  modelo: "Mustang",
  ano: 1969,
  velocidadeAtual: 0,

  acelerar: function () {
    this.velocidadeAtual += 10;
  },

  frear: function () {
    this.velocidadeAtual -= 10;
    if (this.velocidadeAtual < 0) {
      this.velocidadeAtual = 0;
    }
  },

  obterVelocidadeAtual: function () {
    return this.velocidadeAtual;
  },
};

carro.acelerar();
console.log(carro.obterVelocidadeAtual()); // Deve imprimir: 10

carro.frear();
console.log(carro.obterVelocidadeAtual()); // Deve imprimir: 0

// Exercício 80
let estudante = {
  nome: "João",
  notas: [10, 8, 9, 7],

  calcularMedia: function () {
    let soma = 0;
    for (let i = 0; i < this.notas.length; i++) {
      soma += this.notas[i];
    }
    return soma / this.notas.length;
  },
};

console.log(estudante.calcularMedia()); // Deve imprimir: 8.5

// Exercício 81
let contaBancaria = {
  saldo: 1000,

  depositar: function (valor) {
    this.saldo += valor;
  },

  sacar: function (valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
    } else {
      console.log("Saldo insuficiente.");
    }
  },

  obterSaldo: function () {
    return this.saldo;
  },
};

contaBancaria.depositar(500);
console.log(contaBancaria.obterSaldo()); // Deve imprimir: 1500

contaBancaria.sacar(200);
console.log(contaBancaria.obterSaldo()); // Deve imprimir: 1300

// Exercício 82
let circulo = {
  raio: 5,

  calcularArea: function () {
    return Math.PI * Math.pow(this.raio, 2);
  },

  calcularCircunferencia: function () {
    return 2 * Math.PI * this.raio;
  },
};

console.log(circulo.calcularArea()); // Deve imprimir: 78.53981633974483
console.log(circulo.calcularCircunferencia()); // Deve imprimir: 31.41592653589793

// Exercício 83
let tempo = {
  horas: 2,
  minutos: 30,
  segundos: 15,

  converterParaSegundos: function () {
    return this.horas * 3600 + this.minutos * 60 + this.segundos;
  },
};

console.log(tempo.converterParaSegundos()); // Deve imprimir: 9015

// Exercício 84
let retangulo = {
  altura: 5,
  largura: 10,

  calcularArea: function () {
    return this.altura * this.largura;
  },
};

console.log(retangulo.calcularArea()); // Deve imprimir: 50

// Exercício 85
let quadrado = Object.create(retangulo);
quadrado.largura = 5;
quadrado.altura = 5;

quadrado.calcularArea = function () {
  return this.largura * this.largura;
};

console.log(quadrado.calcularArea()); // Deve imprimir: 25

// Exercício 86
let livro = {
  titulo: "1984",
  autor: "George Orwell",
  paginas: 328,

  exibirLivro: function () {
    console.log(
      this.titulo +
        ", escrito por " +
        this.autor +
        ", com " +
        this.paginas +
        " páginas"
    );
  },
};

livro.exibirLivro(); // Deve imprimir: 1984, escrito por George Orwell, com 328 páginas

// Arrays: Métodos e Operações

// Exercício 87
function combineAndFilter(pares, impares) {
  return pares.concat(impares).filter((num) => num % 5 === 0);
}

const pares = [2, 4, 10, 12, 20];
const impares = [1, 3, 5, 15, 25];
console.log(combineAndFilter(pares, impares)); // [10, 20, 5, 15, 25]

// Exercício 88
function calculateTotalWithTax(prices) {
  return prices
    .map((price) => price * 1.1)
    .reduce((acc, curr) => acc + curr, 0);
}

const prices = [10, 20, 30, 40];
console.log(calculateTotalWithTax(prices)); // 110

// Exercício 89
function longestWord(string) {
  return string
    .split(" ")
    .reduce((acc, curr) => (curr.length > acc.length ? curr : acc), "");
}

const sentence = "Essa frase tem muitas palavras, qual é a maior?";
console.log(longestWord(sentence)); // "palavras"

// Exercício 90
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

const numbers = [1, 2, 3, 2, 4, 3, 5, 6, 7, 5, 8];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5, 6, 7, 8]

// Exercício 91
function sortByStringLength(arr) {
  return arr.sort((a, b) => b.length - a.length);
}

const words = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(sortByStringLength(words)); // ["elderberry", "banana", "cherry", "apple", "date"]

// Exercício 92
function extractPropertyValues(arr, key) {
  return arr.map((obj) => obj[key]);
}

const users = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Doe", age: 20 },
];
console.log(extractPropertyValues(users, "name")); // ["John", "Jane", "Doe"]

// Exercício 93
function findMedian(arr) {
  arr.sort((a, b) => a - b);
  const middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[middle - 1] + arr[middle]) / 2;
  }
  return arr[middle];
}

const numbers = [5, 2, 9, 1, 5, 6];
console.log(findMedian(numbers)); // 5

// Execício 94
function filterByStringLength(arr, n) {
  return arr.filter((word) => word.length > n);
}

const words = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(filterByStringLength(words, 5)); // ["banana", "elderberry"]

// Exercício 95
function concatenateArrays(arr1, arr2) {
  return arr1.concat(arr2);
}

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

console.log(concatenateArrays(firstArray, secondArray)); // [1, 2, 3, 4, 5, 6]

// Exercício 96
function isSubarray(mainArray, subArray) {
  return mainArray.join(",").includes(subArray.join(","));
}

const mainArr = [1, 2, 3, 4, 5];
const subArr1 = [2, 3, 4];
const subArr2 = [2, 4, 5];
console.log(isSubarray(mainArr, subArr1)); // true
console.log(isSubarray(mainArr, subArr2)); // false

// Exercício 97
function mostFrequentItem(arr) {
  const frequency = {};
  let maxCount = 0;
  let mostFrequent;

  for (let item of arr) {
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }

    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequent = item;
    }
  }

  return mostFrequent;
}

const numbers = [1, 2, 3, 2, 4, 3, 5, 2];
console.log(mostFrequentItem(numbers)); // 2

// Exercício 98
function filterOutWords(words, forbiddenWords) {
  return words.filter((word) => !forbiddenWords.includes(word));
}

const allWords = ["apple", "banana", "cherry", "date"];
const forbidden = ["banana", "date"];
console.log(filterOutWords(allWords, forbidden)); // ["apple", "cherry"]

// Exercício 99
function combineInPairs(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4];
console.log(combineInPairs(numbers)); // [[1,2], [1,3], [1,4], [2,3], [2,4], [3,4]]

// Exercício 100
function chunkArray(arr, n) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
  }
  return chunks;
}

const items = [1, 2, 3, 4, 5, 6, 7];
console.log(chunkArray(items, 3)); // [[1,2,3], [4,5,6], [7]]

// Exercício 101
function sumUniqueValues(arr) {
  return arr
    .filter((num) => arr.indexOf(num) === arr.lastIndexOf(num))
    .reduce((acc, curr) => acc + curr, 0);
}

const numbers2 = [1, 2, 3, 2, 3, 4, 5];
console.log(sumUniqueValues(numbers2)); // 1 + 4 + 5 = 10

// Exercício 102
function joinStrings(arr) {
  return arr.join(",");
}

const fruits = ["apple", "banana", "cherry"];
console.log(joinStrings(fruits)); // "apple,banana,cherry"

// JSON

// Exercício 103
function objetoParaJson(obj) {
  return JSON.stringify(obj);
}

const objetoTeste = { nome: "João", idade: 25 };
console.log(objetoParaJson(objetoTeste)); // "{'nome':'João','idade':25}"

// Exercício 104
function jsonParaObjeto(jsonStr) {
  return JSON.parse(jsonStr);
}

const jsonStringTeste = '{"nome":"João","idade":25}';
console.log(jsonParaObjeto(jsonStringTeste));
// {
//   "nome": "João",
//   "idade": 25
// }

// Exercício 105
function acessarPropriedade(jsonStr, prop) {
  const obj = JSON.parse(jsonStr);
  return obj[prop];
}

const jsonStringTeste = '{"nome":"João","idade":25}';
console.log(acessarPropriedade(jsonStringTeste, "nome")); // "João"

// Execício 106
function adicionarPropriedade(jsonStr, chave, valor) {
  const obj = JSON.parse(jsonStr);
  obj[chave] = valor;
  return obj;
}

const jsonStringTeste = '{"nome":"João","idade":25}';
console.log(adicionarPropriedade(jsonStringTeste, "profissao", "Engenheiro"));
// {
//  "nome": "João",
//  "idade": 25,
//  "profissao": "Engenheiro"
// }

// Execício 107
function filtrarEConverter(obj) {
  return JSON.stringify(obj, ["nome", "idade"]);
}

const objetoTeste = { nome: "João", senha: "12345", idade: 25 };
console.log(filtrarEConverter(objetoTeste)); // "{'nome':'João','idade':25}"

// Exercício 108
function formatarJson(obj) {
  return JSON.stringify(obj, null, 2);
}

const objetoTeste = { nome: "João", idade: 25 };
console.log(formatarJson(objetoTeste));
// "{
//   'nome': 'João',
//   'idade': 25
// }"

// Execício 109
function adicionarAoArray(jsonStr, novoObjeto) {
  const arr = JSON.parse(jsonStr);
  arr.push(novoObjeto);
  return arr;
}

const jsonStringTeste =
  '[{"nome":"João","idade":25},{"nome":"Maria","idade":30}]';
console.log(adicionarAoArray(jsonStringTeste, { nome: "Pedro", idade: 22 }));
// [
//  {
//   nome: "João",
//   idade: 25,
//  },
//  {
//   nome: "Maria",
//   idade: 30,
//  },
//  {
//   nome: "Pedro",
//   idade: 22,
//  },
// ];

// Exercício 110
function alterarEConverter(obj) {
  const alterarValor = (key, value) => {
    if (key === "idade") return value + 1;
    return value;
  };
  return JSON.stringify(obj, alterarValor);
}

const objetoTeste = { nome: "João", idade: 25 };
console.log(alterarEConverter(objetoTeste)); // "{'nome':'João','idade':26}"
