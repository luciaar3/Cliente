let palabra;
let palabras = [];

do{
    palabra = prompt("Introduce una palabra:");
    if(palabra !== null && palabra !== ""){
        palabras.push(palabra);
    }

}while(palabra !== null && palabra !== "");

function convertir(palabrasArray){
    let mapPal = new Map();

    for (const palabra of palabrasArray) {
        if (!mapPal.has(palabra)){
            mapPal.set(palabra , 1);
        }else{
            mapPal.set(palabra, mapPal.get(palabra) +1);
        }
    }
    return mapPal;
}
console.log(convertir(palabras));