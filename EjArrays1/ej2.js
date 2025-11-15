let paises = ['España', 'Francia', 'Alemania', 'Italia'];
for (const i in paises) {
    console.log(paises[i]);
}
console.log(' ');
delete paises[0];
for (const i in paises) {
    console.log(paises[i]);
}