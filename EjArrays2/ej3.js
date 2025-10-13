let colores = ["rojo", "verde", "azul", "amarillo", "naranja", "violeta"];
let tresColores = colores.slice(1, 5);
console.log(tresColores);

colores.splice(3, 2, 'negro', 'blanco');
console.log(colores);