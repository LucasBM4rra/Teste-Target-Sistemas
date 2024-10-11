// Questão número 1:

/*
function fibonacci(num) {
  if (num < 0) {
    return `${num} não pertence a sequencia de Fibonacci`;
  }

  let a = 0;
  let b = 1;

  while (a <= num) {
    if (a === num) {
      return `${num} pertence a sequencia de Fibonacci`;
    }
    let next = a + b;
    a = b;
    b = next;
  }

  return `${num} não pertence a sequencia de Fibonacci`;
}

const numero = 4;
console.log(fibonacci(numero));

--------------------------------------------------------------------------
*/

// Questão número 2:

/*
function verificaString(string) {
    const verifica = /a/gi;
    const ocorrencias = string.match(verifica);

    if (ocorrencias) {
        const quantidade = ocorrencias.length;
        return `A letra 'a' aparece ${quantidade} vez(es) na string`;
    }else {
        return `A letra 'a' não foi encontrada na string`
    }
}

const texto = "teste";
console.log(verificaString(texto));

--------------------------------------------------------------------------
*/

// Questão número 3:

/*
let INDICE = 12;
let SOMA = 0;
let K = 1;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);

--------------------------------------------------------------------------
*/

// Questão número 4:

/*

// a) 1, 3, 5, 7, 9 -- a sequencia está aumentando de 2 em 2
// b) 2, 4, 8, 16, 32, 64, 128 -- a sequencia está aumentando multiplicando o número anterior por 2
// c) 0, 1, 4, 9, 16, 25, 36, 49 -- a sequencia está aumentando por quadrados perfeitos 
// d) 4, 16, 36, 64, 100 -- a sequencia está aumentando por quadrados de números pares
// e) 1, 1, 2, 3, 5, 8, 13 -- a sequencia está aumentando de acordo com a sequencia de Fibonacci em que o número é a soma dos dois anteriores.
// f) 2,10, 12, 16, 17, 18, 19, 20 -- a sequencia é entre números que aumentam em saltos maiores (10, 12, 16) e depois uma série de números consecutivos (17, 18, 19).

--------------------------------------------------------------------------
*/

// Questão número 5:

// Interruptores = A, B, C
// Lampadas = 1, 2, 3

// Ligo o interruptor A e deixo ligado por um tempo, depois eu desligo ele e ligo o interruptor B.
// A lampada que estiver acesa é controlada pelo interruptor B(já que ele está ligado), agora para decidir a outra é só eu tocar a lampada apagada e a que estiver mais quente é a do interruptor A
// consequentemente a ultima que sobrar que estiver mais fria é do interruptor C pelo fato de que ela nunca foi ligada

// então interruptor B controla a lampada acesa, o interruptor A controla a lampada mais quente e o interruptor C controla a lampada mais fria
