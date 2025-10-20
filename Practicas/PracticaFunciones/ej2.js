let palabraa = "";
let palabrasArray = [];
do{
    palabraa = prompt("Introduce una palabra:");
    if(palabraa !== null && palabraa !== ""){
        palabrasArray.push(palabraa);
    }else{
        console.log ("Debes de introducir una palabra.");
    }

}while(palabraa !== null && palabraa !== "");

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
