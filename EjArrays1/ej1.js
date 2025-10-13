const array =['rojo', 'verde', 'azul'];
for (const i in array) {
    console.log(array[i]);
}
console.log(' ');
array[1] = 'Morado';
for (const i in array) {
    console.log(array[i]);
}