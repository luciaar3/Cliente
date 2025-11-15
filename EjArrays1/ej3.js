let nombres= ['Viki', 'Sole', 'Jessica', 'Jesus', 'Taylor'];
let edades = [25,18,35,56,80];
let mayoresDeEdad = [];

for (const i in nombres) {
    if(edades[i] >= 18){
    mayoresDeEdad[i] = nombres[i];
    }else{
        delete nombres[i];
    }
}
for (const j in mayoresDeEdad) {
    console.log(mayoresDeEdad[j]);
}