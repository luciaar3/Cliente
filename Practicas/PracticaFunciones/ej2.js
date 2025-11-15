let palabraa = "";
let palabrasArray = [];
do{
    palabraa = prompt("Introduce una palabra:");
    if(palabraa !== null && palabraa !== ""){
        palabrasArray.push(palabraa);
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

let texto = "";
const result = contPalabras(palabrasArray);
for(let [palabra, cantidad] of result){
    texto += `${palabra}: ${cantidad}<br>`;
};

let id = document.getElementById("resul");
id.innerHTML = texto;