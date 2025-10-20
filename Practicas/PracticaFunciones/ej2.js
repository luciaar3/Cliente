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

    array.forEach(p => {
        if(mapa.has(p)){
            mapa.set(p, mapa.get(p) +1);
        }else{
            mapa.set(p, 1);
        }
    });
    return mapa;
}
const resul = contPalabras(palabrasArray);
console.log (resul);
