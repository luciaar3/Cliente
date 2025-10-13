const palabras = ["ana", "radar", "javascript", "reconocer", "oro", "palindromo", "salas"];

for (let i = 0; i < palabras.length; i++) {
    let palabra = palabras[i];
    let alReves = "";

    // construyo la palabra al revés
    for (let j = palabra.length - 1; j >= 0; j--) {
        alReves += palabra[j];
    }

    // comparo original vs invertida
    if (palabra === alReves) {
        console.log(palabra + " es palíndromo");
    }
}