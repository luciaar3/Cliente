let palabra;
let palabrasArray = [];
do{
    palabra = prompt("Introduce una palabra:");
    if(palabra !== null && palabra !== ""){
        palabrasArray.push(palabra);
    }else{
        console.log ("Debes de introducir una palabra.");
    }

}while(palabra !== null && palabra !== "");

const contPalabras = (array) => {
    const mapa = new Map();

    array.forEach(palabra => {
        if(mapa.has(palabra)){
            mapa.set(palabra, mapa.get(palabra) +1);
        }else{
            mapa.set(palabra, 1);
        }
    });
    return mapa;
}
const resul = contPalabras(palabrasArray);
console.log (resul);
