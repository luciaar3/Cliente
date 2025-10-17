let frecuencias = Array(10).fill(0);

for (let index = 1; index <= 10000; index++) {
    let numeros = Math.floor(Math.random() *10) +1;
    frecuencias[numeros -1]++;
}

for (let index = 0; index < frecuencias.length; index++) {
    console.log("Número ", index + 1,":", frecuencias[index]);
}