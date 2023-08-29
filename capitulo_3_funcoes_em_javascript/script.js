
// Execício 1

function imprimirOlaMundo() {
    console.log("Olá, Mundo!");
}
imprimirOlaMundo(); // "Olá, Mundo!"

// Execício 2

function somarNumeros(num1, num2) {
    return num1 + num2;
}
console.log(somarNumeros(3, 4)); // Saída: 7

// Execício 3

function quadrado(num) {
    return num * num;
}
console.log(quadrado(5)); // Saída: 25

// Execício 4

function parOuImpar(num) {
    if (num % 2 === 0) {
        return 'par';
    } else {
        return 'ímpar';
    }
}
console.log(parOuImpar(5)); // Saída: "ímpar"

// Execício 5

function maiorNumero(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}
console.log(maiorNumero(3, 5, 4)); // Saída: 5

// Execício 6

function inverterString(str) {
    return str.split('').reverse().join('');
}
console.log(inverterString('hello')); // Saída: "olleh"

// Execício 7

function calcularFatorial(num) {
    let fatorial = 1;
    for(let i = 2; i <= num; i++) {
        fatorial *= i;
    }
    return fatorial;
}

console.log(calcularFatorial(5)); // Saída: 120

// Execício 8

function calcularFibonacci(n) {
    let a = 0;
    let b = 1;

    for(let i = 2; i <= n; i++) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b;
}

console.log(calcularFibonacci(7)); // Saída: 13

// Execício 9

function verificarPrimo(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(verificarPrimo(7)); // Saída: true

// Execício 10

function ordenarDecrescente(array) {
    return array.sort((a, b) => b - a);
}
console.log(ordenarDecrescente([5, 2, 1, 3, 4])); // Saída: [5, 4, 3, 2, 1]

// Execício 11

function menorNumero(array) {
    return Math.min(...array);
}

console.log(menorNumero([5, 2, 1, 3, 4])); // Saída: 1

// Execício 12

function maiorNumero(array) {
    return Math.max(...array);
}
console.log(maiorNumero([5, 2, 1, 3, 4])); // Saída: 5

// Execício 13

function somaImpares(array) {
    return array.reduce((soma, num) => num % 2 !== 0 ? soma + num : soma, 0);
}
console.log(somaImpares([5, 2, 1, 3, 4])); // Saída: 9

// Execício 14

function somaPares(array) {
    return array.reduce((soma, num) => num % 2 === 0 ? soma + num : soma, 0);
}

console.log(somaPares([5, 2, 1, 3, 4])); // Saída: 6

// Execício 15

function duplicarNumeros(array) {
    return array.map(num => num * 2);
}

console.log(duplicarNumeros([5, 2, 1, 3, 4])); // Saída: [10, 4, 2, 6, 8]

// Execício 16

function quadradoNumeros(array) {
    return array.map(num => num * num);
}

console.log(quadradoNumeros([5, 2, 1, 3, 4])); // Saída: [25, 4, 1, 9, 16]

// Execício 17

function raizQuadradaNumeros(array) {
    return array.map(num => Math.sqrt(num));
}

console.log(raizQuadradaNumeros([25, 4, 1, 9, 16])); // Saída: [5, 2, 1, 3, 4]

// Execício 18

function repetirString(num) {
    return 'Olá '.repeat(num);
}
console.log(repetirString(3)); // Saída: 'Olá Olá Olá'

// Execício 19

function primosAteN(num) {
    let primos = [];
    for(let i = 2; i <= num; i++) {
        if(isPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function isPrimo(num) {
    for(let i = 2; i < num; i++) {
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

console.log(primosAteN(10)); // Saída: [2, 3, 5, 7]

// Execício 20

function contarPalavras(str) {
    return str.split(' ').length;
}
console.log(contarPalavras("Olá, Mundo!")); // Saída: 2

// Execício 21

function somaComCallback(array, callback) {
    return array.map(callback).reduce((a, b) => a + b, 0);
}

let numeros = [1, 2, 3, 4, 5];
let callback = num => num * 2;

console.log(somaComCallback(numeros, callback)); // Saída: 30

// Execício 22

function filtrarPorCallback(array, callback) {
    return array.filter(callback);
}

let numeros = [1, 2, 3, 4, 5];
let callback = num => num % 2 === 0;

console.log(filtrarPorCallback(numeros, callback)); // Saída: [2, 4]

// Execício 23

function mapearArrays(array, callback) {
    return array.map(callback);
}

let arrays = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let callback = arr => arr.reduce((a, b) => a + b, 0);

console.log(mapearArrays(arrays, callback)); // Saída: [6, 15, 24]

// Execício 24

function filtrarNumeros(array, callback) {
    return array.filter(callback);
}

let numeros = [1, 2, 3, 4, 5];
let callback = num => num > 3;

console.log(filtrarNumeros(numeros, callback)); // Saída: [4, 5]

// Execício 25

function executarCallback(n, callback) {
    for (let i = 0; i < n; i++) {
        callback(i);
    }
}

let callback = i => console.log(`Execução ${i+1}`);

executarCallback(5, callback); // Saída: "Execução 1", "Execução 2", "Execução 3", "Execução 4", "Execução 5"


// Execício 26

function aplicarCallbacks(callback, valor) {
    return callback.map(callback => callback(valor));
}

let callback = [num => num * 2, num => num * num, num => num / 2];
let valor = 4;

console.log(aplicarCallbacks(callback, valor)); // Saída: [8, 16, 2]

// Execício 27

function executarDepois(callback, tempo) {
    setTimeout(callback, tempo);
}

let callback = () => console.log("Executado!");

executarDepois(callback, 2000); // Saída: "Executado!" após 2 segundos

// Execício 28

function aplicarCallbacksNTimes(n, callback, valorInicial) {
    let valor = valorInicial;
    for(let i = 0; i < n; i++){
        callback.forEach(callback => {
            valor = callback(valor);
        });
    }
    return valor;
}

let callback = [num => num * 2, num => num + 1];
let valorInicial = 1;

console.log(aplicarCallbacksNTimes(2, callback, valorInicial)); // Saída: 7

// Execício 29

function aplicarCallbacksComIntervalo(n, callback, valorInicial) {
    let valor = valorInicial;
    let i = 0;
    let intervalId = setInterval(() => {
        if(i < callback.length) {
           valor = callback[i](valor);
        i++;
        } else {
           clearInterval(intervalId);
           console.log(valor);
        }
    }, n);
}

let callback = [num => num * 2, num => num + 1];
let valorInicial = 1;

aplicarCallbacksComIntervalo(2000, callback, valorInicial); // Saída: valor após 2 segundos por callback

// Execício 30

function mapearSemAlterar(array, callback) {
    return array.map(callback);
}

let numeros = [1, 2, 3, 4, 5];
let callback = num => num * 2;

console.log(mapearSemAlterar(numeros, callback)); // Saída: [2, 4, 6, 8, 10]
console.log(numeros); // Saída: [1, 2, 3, 4, 5]

// Execício 31

function aplicarCallbacksInversamente(callback, valor) {
    return callback.reverse().map(callback => callback(valor));
}

let callback = [num => num * 2, num => num * num, num => num / 2];
let valor = 4;

console.log(aplicarCallbacksInversamente(callback, valor)); // Saída: [2, 16, 8]