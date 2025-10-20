const personas = [ { nombre: "Juan", edad: 17 }, { nombre: "Ana", edad: 22 },
{ nombre: "Pedro", edad: 19 }, { nombre: "Laura", edad: 16 } ];

let may18  = personas.filter(persona => persona.edad > 18);
console.log(may18);

let edadesmult= may18.map(persona => persona.edad * 2);
console.log(edadesmult);

let suma = edadesmult.reduce((acum, edad) => acum + edad, 0);
console.log(suma);