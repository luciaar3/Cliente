function primeraTarea(valor){
    valor = 10;
    return Promise.resolve(valor);
}
function segundaTarea(valor){
    const nuevoVal = valor *2;
    return Promise.resolve(nuevoVal);
    
}
function terceraTarea(nuevoVal){
    const ultimVal = nuevoVal +5;
    return Promise.resolve(ultimVal);
}

primeraTarea()
.then((resul1) =>{
    return segundaTarea(resul1);
})
.then((resul2) =>{
    return terceraTarea(resul2);
})
.then((resultadoFinal) =>{
    console.log('Rsultado final: ',resultadoFinal);
})