let palabra = "";
let palabras =new Set();
do{
    palabra = prompt("Introduce una palabra:");
    if(palabra !== null && palabra !== ""){
        palabras.add(palabra);
    }else{
        console.log ("Debes de introducir una palabra.");
    }

}while(palabra !== null && palabra !== "");

let lista =[...palabras];
lista.sort((a,b) => b.localeCompare(a, "es"));
console.log(lista);

let id= document.getElementById("resul");
id.textContent = lista.join(", ");