const palabra =[''];
const contador = new Map();

palabra.forEach((palabra)) => {
    if(contador.has(palabra)){
        contador.set(palabra, contador.get(palabra) +1);
    }else{
        contador.set(palabra, 1);
    }
}