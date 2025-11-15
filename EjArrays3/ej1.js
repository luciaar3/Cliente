let numeros = [4, 5, 6, 12, 4, 6];

//let [num1] = [...numeros];

let[num1,num2, ...resto] = [...numeros];
console.log(num1);
console.log(num2);
console.log(resto);