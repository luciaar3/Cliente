const nombres= ['Viki', 'Sole', 'Jessica', 'Jesus', 'Taylor'];
const edades = [3,18,35,56,80];
const mayoresDeEdad = [];

for (const i in nombres) {
    if (edades[i]>= 18){
        mayoresDeEdad[i] = nombres[i];
    }
}

for (const j in mayoresDeEdad) {
    console.log(mayoresDeEdad[j]);
}