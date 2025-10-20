const numeros = [2, 4, 5, 6, 1, 3, 2];

let suma = numeros.reduce((acu, valor)=> acu + valor, 0);
console.log(suma);