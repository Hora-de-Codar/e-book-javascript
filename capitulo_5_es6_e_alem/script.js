
// Exercício 111

function apresentacao(nome, sobrenome, idade) {
    return `Olá, meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.`;
}

console.log(apresentacao("João", "Silva", 30));  // Saída: "Olá, meu nome é João Silva e tenho 30 anos."

// Exercício 112

function comparaValores(valorA, valorB) {
    let comparacao = valorA === valorB ? "igual" : (valorA > valorB ? "maior" : "menor");
    return `O valor ${valorA} é ${comparacao} ao valor ${valorB}.`;
}

console.log(comparaValores(5, 3));  // Saída: "O valor 5 é maior ao valor 3."
console.log(comparaValores(2, 2));  // Saída: "O valor 2 é igual ao valor 2."

// Exercício 113

function listaEnumerada(itens) {
    return itens.map((item, index) => `${index + 1}. ${item}`).join(', ');
}

console.log(listaEnumerada(['maçã', 'banana', 'uva']));  // Saída: "1. maçã, 2. banana, 3. uva"

// Exercício 114

function descricaoLivro(livro) {
    return `O livro '${livro.titulo}' foi escrito por ${livro.autor} em ${livro.ano}.`;
}

console.log(descricaoLivro({ titulo: 'O Principe', autor: 'Maquiavel', ano: 1532 }));  // Saída: "O livro 'O Principe' foi escrito por Maquiavel em 1532."

// Exercício 115

const helloWorld = name => `Hello, ${name}!`;

console.log(helloWorld("Alice"));  // Esperado: "Hello, Alice!"
console.log(helloWorld("Bob"));    // Esperado: "Hello, Bob!"

// Exercício 116

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));  // Esperado: 20
console.log(multiply(3, 7));  // Esperado: 21

// Exercício 117

const today = () => new Date().toDateString();

console.log(today());  // Retorna a data atual no formato: "Wed Jul 26 2023"

// Exercício 118

const sumArray = numbers => numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sumArray([1, 2, 3, 4]));  // Esperado: 10
console.log(sumArray([5, 5, 5]));     // Esperado: 15

// Exercício 119

const personalizedMessage = ({ name, age }) => `Hello, my name is ${name} and I am ${age} years old.`;

console.log(personalizedMessage({ name: "Alice", age: 30 }));  // Esperado: "Hello, my name is Alice and I am 30 years old."
console.log(personalizedMessage({ name: "Bob", age: 25 }));    // Esperado: "Hello, my name is Bob and I am 25 years old."

// Exercício 120

const incrementer = base => () => ++base;

const incrementBy5 = incrementer(5);
console.log(incrementBy5());  // Esperado: 6
console.log(incrementBy5());  // Esperado: 7

// Exercício 121

const concatFirstString = firstString => secondString => firstString + secondString;

const helloString = concatFirstString("Hello ");
console.log(helloString("World!"));  // Esperado: "Hello World!"
console.log(helloString("Alice!"));  // Esperado: "Hello Alice!"

// Exercício 122

function informacoes(nome, idade, cidade = "Desconhecido") {
    return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`;
}

console.log(informacoes("Carlos", 25));          // Nome: Carlos, Idade: 25, Cidade: Desconhecido
console.log(informacoes("Ana", 30, "São Paulo")); // Nome: Ana, Idade: 30, Cidade: São Paulo

// Exercício 123

function soma(...nums) {
    return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(soma(1, 2, 3, 4));  // 10
console.log(soma(5, 5, 10));    // 20

// Exercício 124

function copiaProfunda(obj) {
    return {...obj};
}

const original = { nome: "Lucas", idade: 20 };
const copia = copiaProfunda(original);
console.log(copia);             // { nome: 'Lucas', idade: 20 }
original.nome = "Rafael";
console.log(copia.nome);       // Lucas

// Exercício 125

function combinarArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

console.log(combinarArrays([1, 2, 3], [4, 5, 6]));  // [1, 2, 3, 4, 5, 6]

// Exercício 126

function filtrarNumeros(...args) {
    return args.filter(arg => typeof arg === "number");
}

console.log(filtrarNumeros(1, "a", 3, "b", 5));  // [1, 3, 5]

// Exercício 127

function mesclarObjetos(obj1, obj2) {
    return {...obj1, ...obj2};
}

const objeto1 = { nome: "Lucas" };
const objeto2 = { idade: 30 };
console.log(mesclarObjetos(objeto1, objeto2));  // { nome: "Lucas", idade: 30 }

// Exercício 128

function criarCarro(modelo, marca = "Desconhecido", ano = new Date().getFullYear()) {
    return { marca, modelo, ano };
}

console.log(criarCarro("Civic"));                   // { marca: "Desconhecido", modelo: "Civic", ano: 2023 }
console.log(criarCarro("Civic", "Honda", 2020));    // { marca: "Honda", modelo: "Civic", ano: 2020 }

// Exercício 129

function unirArrays(...arrays) {
    return [].concat(...arrays);
}

console.log(unirArrays([1, 2], [3, 4], [5, 6]));  // [1, 2, 3, 4, 5, 6]

// Exercício 130

function stringParaArray(str) {
    return [...str];
}

console.log(stringParaArray("Hello"));  // ["H", "e", "l", "l", "o"]

// Exercício 131

function filtrarPorChaves(arrayObjetos, chaves) {
    return arrayObjetos.map(obj => {
        let novoObj = {};
        chaves.forEach(chave => {
            if(obj[chave] !== undefined) novoObj[chave] = obj[chave];
        });
        return novoObj;
    });
}

const data = [{ nome: "Lucas", idade: 30, cidade: "São Paulo" }, { nome: "Ana", idade: 25 }];
console.log(filtrarPorChaves(data, ["nome", "cidade"]));  // [{ nome: "Lucas", cidade: "São Paulo" }, { nome: "Ana" }]

// Exercício 132

function extrairDadosPessoa(pessoa) {
    const { nome, idade } = pessoa;
    return `Nome: ${nome}, Idade: ${idade}`;
}

const pessoa = { nome: "Lucas", idade: 30, cidade: "São Paulo" };
console.log(extrairDadosPessoa(pessoa)); // Nome: Lucas, Idade: 30

// Exercício 133

function extrairValores(array) {
    const [primeiro = null, segundo = null, terceiro = null] = array;
    return [primeiro, segundo, terceiro];
}

console.log(extrairValores([1, 2])); // [1, 2, null]
console.log(extrairValores([1, 2, 3, 4])); // [1, 2, 3]

// Exercício 134

function extrairCidade(usuario) {
    const { endereco: { cidade } } = usuario;
    return cidade;
}

const usuario = { nome: "Lucas", endereco: { rua: "Rua A", cidade: "São Paulo", estado: "SP" } };
console.log(extrairCidade(usuario)); // São Paulo

// Exercício 135

function exibirInformacoes({ nome, idade }) {
    return `Nome: ${nome}, Idade: ${idade}`;
}

const pessoa2 = { nome: "Ana", idade: 25 };
console.log(exibirInformacoes(pessoa2)); // Nome: Ana, Idade: 25

// Exercício 136

function separarNumeros(primeiro, segundo, terceiro, ...resto) {
    return [primeiro, segundo, terceiro, resto];
}

console.log(separarNumeros(1, 2, 3, 4, 5, 6)); // [1, 2, 3, [4, 5, 6]]

// Exercício 137

let a = 5;
let b = 10;
[a, b] = [b, a];

console.log(a); // 10
console.log(b); // 5

// Exercício 138

function extrairValoresAninhados(array) {
    const [[, valor1], [valor2]] = array;
    return [valor1, valor2];
}

console.log(extrairValoresAninhados([[1, 2, 3], [4, 5]])); // [2, 4]

// Exercício 139

function renomearVariaveis(obj) {
    const { a: alpha, b: beta } = obj;
    return { alpha, beta };
}

const objeto = { a: "valorA", b: "valorB" };
console.log(renomearVariaveis(objeto)); // { alpha: "valorA", beta: "valorB" }

// Exercício 140

class Tempo {
    constructor(horas = 0, minutos = 0, segundos = 0) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }

    somar(tempo) {
        let totalSegundos = this.segundos + tempo.segundos;
        let totalMinutos = this.minutos + tempo.minutos;
        let totalHoras = this.horas + tempo.horas;

        if (totalSegundos >= 60) {
            totalMinutos += Math.floor(totalSegundos / 60);
            totalSegundos %= 60;
        }
        if (totalMinutos >= 60) {
            totalHoras += Math.floor(totalMinutos / 60);
            totalMinutos %= 60;
        }

        return new Tempo(totalHoras, totalMinutos, totalSegundos);
    }

    subtrair(tempo) {
        let totalSegundos = this.segundos - tempo.segundos;
        let totalMinutos = this.minutos - tempo.minutos;
        let totalHoras = this.horas - tempo.horas;

        if (totalSegundos < 0) {
            totalMinutos -= Math.ceil(Math.abs(totalSegundos) / 60);
            totalSegundos = 60 - (Math.abs(totalSegundos) % 60);
        }
        if (totalMinutos < 0) {
            totalHoras -= Math.ceil(Math.abs(totalMinutos) / 60);
            totalMinutos = 60 - (Math.abs(totalMinutos) % 60);
        }

        return new Tempo(totalHoras, totalMinutos, totalSegundos);
    }
}

const tempo1 = new Tempo(1, 20, 30);
const tempo2 = new Tempo(0, 50, 40);
let resultado = tempo1.somar(tempo2);
console.log(`${resultado.horas}h:${resultado.minutos}m:${resultado.segundos}s`); // 2h:11m:10s

resultado = tempo1.subtrair(tempo2);
console.log(`${resultado.horas}h:${resultado.minutos}m:${resultado.segundos}s`); // 0h:29m:50s

// Exercício 141

class Voador {
    voar() {
        return "Estou voando!";
    }
}

class Nadador {
    nadar() {
        return "Estou nadando!";
    }
}

class Pato extends Voador {
    constructor() {
        super();
        const nadador = new Nadador();
        this.nadar = nadador.nadar.bind(this);
    }
}

const pato = new Pato();
console.log(pato.voar()); // Estou voando!
console.log(pato.nadar()); // Estou nadando!

// Exercício 142

class Animal {
    falar() {
        return "O animal faz um som";
    }
}

class Cão extends Animal {
    falar() {
        return "O cão late";
    }
}

class Gato extends Animal {
    falar() {
        return "O gato mia";
    }
}

const cão = new Cão();
console.log(cão.falar()); // O cão late

const gato = new Gato();
console.log(gato.falar()); // O gato mia

// Exercício 143

class Forma {
    area() {
        throw new Error("Método 'area' deve ser implementado por subclasses!");
    }
}

class Círculo extends Forma {
    constructor(raio) {
        super();
        this.raio = raio;
    }

    area() {
        return Math.PI * this.raio * this.raio;
    }
}

class Retângulo extends Forma {
    constructor(largura, altura) {
        super();
        this.largura = largura;
        this.altura = altura;
    }

    area() {
        return this.largura * this.altura;
    }
}

const círculo = new Círculo(5);
console.log(círculo.area()); // 78.53981633974483

const retângulo = new Retângulo(4, 6);
console.log(retângulo.area()); // 24

// Exercício 144

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this._idade = idade;
    }

    get idade() {
        return this._idade;
    }

    set idade(valor) {
        if (valor < 0) {
            console.log("Idade não pode ser negativa!");
            return;
        }
        this._idade = valor;
    }
}

const pessoa = new Pessoa("João", 30);
console.log(pessoa.idade); // 30

pessoa.idade = -5; // Idade não pode ser negativa!
console.log(pessoa.idade); // 30

// Exercício 145

class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }

    falar() {
        return `${this.nome} está falando.`;
    }
}

class Vendedor extends Pessoa {
    constructor(nome) {
        super(nome);
        this.totalVendas = 0;
    }

    vender() {
        this.totalVendas++;
        return `${this.nome} fez uma venda.`;
    }
}

const vendedor = new Vendedor("Carlos");
console.log(vendedor.vender()); // Carlos fez uma venda.
console.log(vendedor.totalVendas); // 1

// Exercício 146

class Calculadora {
    static somar(a, b) {
        return a + b;
    }
}

console.log(Calculadora.somar(5, 3)); // 8

// Exercício 147

class Carro {
    constructor(tipo) {
        this.tipo = tipo;
    }

    static criarSedan() {
        return new Carro('Sedan');
    }
}

const sedan = Carro.criarSedan();
console.log(sedan.tipo); // Sedan

// Exercício 148

class Conta {
    constructor(saldo) {
        this.saldo = saldo;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            throw new Error('Saldo insuficiente.');
        }
        this.saldo -= valor;
        return this.saldo;
    }
}

const conta = new Conta(100);
console.log(conta.sacar(50)); // 50

try {
    conta.sacar(100);
} catch (e) {
    console.log(e.message); // Saldo insuficiente.
}

// Exercício 149

class Segredo {
    #mensagemSecreta = "Esta é uma mensagem secreta!";

    revelarSegredo() {
        return this.#mensagemSecreta;
    }
}

const segredo = new Segredo();
console.log(segredo.revelarSegredo()); // Esta é uma mensagem secreta!

// Exercício 150

class Veículo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
}

class Carro extends Veículo {
    constructor(marca, modelo, numPortas) {
        super(marca, modelo);
        this.numPortas = numPortas;
    }
}

const carro = new Carro("Toyota", "Corolla", 4);
console.log(carro); // { marca: 'Toyota', modelo: 'Corolla', numPortas: 4 }

// Exercício 151

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

delay(1000).then(() => console.log('Resolvido após 1 segundo!'));

// Exercício 152

async function fetchData(input) {
    if (input === "error") {
        throw new Error("Entrada inválida!");
    }
    return `Dados para ${input}`;
}

fetchData("data")
    .then(data => console.log(data))
    .catch(err => console.error(err.message));

fetchData("error")
    .then(data => console.log(data))
    .catch(err => console.error(err.message));

// Exercício 153

function promise1() {
    return new Promise(resolve => setTimeout(() => resolve("Resultado 1"), 1000));
}

function promise2() {
    return new Promise(resolve => setTimeout(() => resolve("Resultado 2"), 1500));
}

Promise.all([promise1(), promise2()])
    .then(results => console.log(results))
    .catch(err => console.error(err.message)); // ["Resultado 1","Resultado 2"]

// Exercício 154

async function handleErrors(promise) {
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(`Erro: ${error.message}`);
    }
}

const successfulPromise = Promise.resolve("Sucesso!");
const failingPromise = Promise.reject(new Error("Falha!"));

handleErrors(successfulPromise);  // Deve imprimir "Sucesso!"
handleErrors(failingPromise);     // Deve imprimir "Erro: Falha!"

// Exercício 155

async function fetchDataFromAPI(url) {
    let response = await fetch(url);
    if (response.status !== 200) {
        throw new Error("Falha na obtenção dos dados");
    }
    return await response.json();
}

// Teste (este é apenas um exemplo, e o URL pode precisar ser modificado)
fetchDataFromAPI("https://api.example.com/data")
    .then(data => console.log(data))
    .catch(err => console.error(err.message));

// Exercício 156

function firstResolvedPromise(promises) {
    return Promise.race(promises);
}

const p1 = new Promise(resolve => setTimeout(() => resolve("Primeira"), 500));
const p2 = new Promise(resolve => setTimeout(() => resolve("Segunda"), 1000));

firstResolvedPromise([p1, p2]).then(result => console.log(result)); // Deve imprimir "Primeira"

// Exercício 157

async function fetchSequentialData(firstURL, secondURLGenerator) {
    let firstData = await fetchDataFromAPI(firstURL);
    let secondURL = secondURLGenerator(firstData);
    return await fetchDataFromAPI(secondURL);
}

// Suponha que a primeira API retorne um ID que é necessário para a segunda chamada de API
fetchSequentialData("https://api.example.com/first", data => `https://api.example.com/second/${data.id}`)
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

// Exercício 158

class DataLoader {
    constructor(apiURL) {
        this.apiURL = apiURL;
        this.data = null;
    }

    async loadData() {
        this.data = await fetchDataFromAPI(this.apiURL);
    }
}

// Nescessário uma API válida para testar
const loader = new DataLoader("https://api.example.com/data");
loader.loadData()
    .then(() => console.log(loader.data))
    .catch(err => console.error(err.message));

// Exercício 159

function rejectAfterDelay(ms) {
    return new Promise((_, reject) => setTimeout(() => reject(new Error("Rejeitado após timeout!")), ms));
}

rejectAfterDelay(1000).catch(err => console.error(err.message)); // Deve imprimir "Rejeitado após timeout!"

// Exercício 160

async function processInSequence(urls) {
    let results = [];
    for (let url of urls) {
        let data = await fetchDataFromAPI(url);
        results.push(data);
    }
    return results;
}

// Nescessário uma API válida para testar
const urls = ["https://api.example.com/data1", "https://api.example.com/data2"];
processInSequence(urls)
    .then(data => console.log(data))
    .catch(err => console.error(err.message));

// Exercício 161

function* fibonacci() {
    let [prev, curr] = [0, 1];
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fib = fibonacci();
console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3

// Exercício 162

function* arithmeticSequence(start, reason, n) {
    for (let i = 0; i < n; i++) {
        yield start;
        start += reason;
    }
}

const sequence = arithmeticSequence(1, 2, 5);
console.log([...sequence]); // [1, 3, 5, 7, 9]

// Exercício 163

function* paginate(array, batchSize) {
    for (let i = 0; i < array.length; i += batchSize) {
        yield array.slice(i, i + batchSize);
    }
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pages = paginate(items, 4);
console.log(pages.next().value); // [1, 2, 3, 4]
console.log(pages.next().value); // [5, 6, 7, 8]
console.log(pages.next().value); // [9, 10]

// Exercício 164

function* primeGenerator() {
    function isPrime(num) {
        for(let i = 2; i * i <= num; i++)
            if(num % i === 0) return false; 
        return num > 1;
    }

    let num = 2;
    while (true) {
        if (isPrime(num)) yield num;
        num++;
    }
}

const primes = primeGenerator();
console.log(primes.next().value); // 2
console.log(primes.next().value); // 3
console.log(primes.next().value); // 5
console.log(primes.next().value); // 7

// Exercício 165

function* alternateEvenOdd(array) {
    let evens = array.filter(x => x % 2 === 0);
    let odds = array.filter(x => x % 2 !== 0);
    let index = 0;
    
    while (index < evens.length || index < odds.length) {
        if (index < evens.length) yield evens[index];
        if (index < odds.length) yield odds[index];
        index++;
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const alternated = alternateEvenOdd(numbers);
console.log([...alternated]); // [2, 1, 4, 3, 6, 5, 8, 7]

// Exercício 166

function* geometricSequence(a, r, n) {
    for (let i = 0; i < n; i++) {
        yield a;
        a *= r;
    }
}

const sequence = geometricSequence(1, 2, 5);
console.log([...sequence]); // [1, 2, 4, 8, 16]

// Exercício 167

function* range(start, stop = null, step = 1) {
    if (stop === null) {
        stop = start;
        start = 0;
    }

    for (let i = start; i < stop; i += step) {
        yield i;
    }
}

console.log([...range(5)]);       // [0, 1, 2, 3, 4]
console.log([...range(2, 5)]);    // [2, 3, 4]
console.log([...range(0, 10, 2)]); // [0, 2, 4, 6, 8]

// Exercício 168

function* zip(...iterables) {
    const iterators = iterables.map(iterable => iterable[Symbol.iterator]());
    while (true) {
        const items = iterators.map(iterator => iterator.next());
        if (items.some(item => item.done)) break;
        yield items.map(item => item.value);
    }
}

const a = [1, 2, 3];
const b = ['a', 'b', 'c'];
console.log([...zip(a, b)]); // [[1, 'a'], [2, 'b'], [3, 'c']]

// Exercício 169

function* fibonacci(n) {
    let [prev, curr] = [0, 1];
    while (curr <= n) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

console.log([...fibonacci(100)]); // [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// Exercício 170

function* enumerate(iterable) {
    let index = 0;
    for (const value of iterable) {
        yield [index, value];
        index++;
    }
}

const letters = ['a', 'b', 'c'];
console.log([...enumerate(letters)]); // [[0, 'a'], [1, 'b'], [2, 'c']]

// Exercício 171

function* arithmeticSequence(a, d, n) {
    for (let i = 0; i < n; i++) {
        yield a;
        a += d;
    }
}

const sequence = arithmeticSequence(1, 2, 5);
console.log([...sequence]); // [1, 3, 5, 7, 9]

// Exercício 172

function filterOdd(numbers) {
    return numbers.filter(n => n % 2 !== 0);
}

console.log(filterOdd([1, 2, 3, 4, 5])); // [1, 3, 5]
console.log(filterOdd([10, 12, 15]));   // [15]

// Exercício 173

function findGreaterThanTen(numbers) {
    return numbers.find(n => n > 10);
}

console.log(findGreaterThanTen([1, 2, 12, 8, 15])); // 12

// Exercício 174

function findJavaScriptIndex(strings) {
    return strings.findIndex(s => s === "JavaScript");
}

console.log(findJavaScriptIndex(["Java", "Python", "JavaScript", "C++"])); // 2

// Exercício 175

function areAllPositive(numbers) {
    return numbers.every(n => n > 0);
}

console.log(areAllPositive([1, 2, 3, 4, 5])); // true
console.log(areAllPositive([-1, 2, 3, 4, 5])); // false

// Exercício 176

function doubleValues(numbers) {
    return numbers.map(n => n * 2);
}

console.log(doubleValues([1, 2, 3, 4]));  // [2, 4, 6, 8]

// Exercício 177

function doesInclude(array, element) {
    return array.includes(element);
}

console.log(doesInclude(['a', 'b', 'c'], 'b'));  // true
console.log(doesInclude(['a', 'b', 'c'], 'z'));  // false

// Exercício 178

function hasSmallerThanTen(numbers) {
    return numbers.some(n => n < 10);
}

console.log(hasSmallerThanTen([15, 20, 25]));  // false
console.log(hasSmallerThanTen([5, 20, 25]));   // true

// Exercício 179

function stringToArray(str) {
    return Array.from(str);
}

console.log(stringToArray('hello'));  // ['h', 'e', 'l', 'l', 'o']

// Exercício 180

function concatArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(concatArrays([1, 2], [3, 4]));  // [1, 2, 3, 4]

// Exercício 181

function findOlderThan20(people) {
    return people.find(person => person.age > 20);
}

const samplePeople = [
    {name: 'Alice', age: 18},
    {name: 'Bob', age: 21},
    {name: 'Charlie', age: 19}
];

console.log(findOlderThan20(samplePeople));  // {name: 'Bob', age: 21}

// Exercício 182

function areAllPositive(numbers) {
    return numbers.every(n => n > 0);
}

console.log(areAllPositive([1, 2, 3]));  // true
console.log(areAllPositive([-1, 2, 3])); // false

// Exercício 183

function filterEvens(numbers) {
    return numbers.filter(n => n % 2 === 0);
}

console.log(filterEvens([1, 2, 3, 4]));  // [2, 4]

// Exercício 184

function joinWords(words) {
    return words.join(' ');
}

console.log(joinWords(['Hello', 'World']));  // 'Hello World'

// Exercício 185

function findDivisibleBy5(numbers) {
    return numbers.findIndex(n => n % 5 === 0);
}

console.log(findDivisibleBy5([2, 4, 7, 10, 11]));  // 3