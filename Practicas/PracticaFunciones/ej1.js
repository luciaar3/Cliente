let palabra;
let palabras =[];
do{
    let palabra = prompt("Introduce una palabra:");
    if(palabra !== null && palabra !== ""){
        palabras.push(palabra);
    }else{
        console.log ("Debes de introducir alguna palabra.");
    }

}while(palabra !== null && palabra !== "");