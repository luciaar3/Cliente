let data = [
{name: "Nacho", telephone: "966112233", age: 40},
{name: "Ana", telephone: "911223344", age: 35},
{name: "Mario", phone: "611998877", age: 15},
{name: "Laura", telephone: "633663366", age: 17}
];

data.push({name: "Pedro", telephone: "611944444", age: 25},
{name: "Julia", phone: "633232323", age: 37});
console.log(data);

data.sort((a, b)=> a.age- b.age);
console.log(data);

data.sort(function (a, b) {
  if (a.nombre < b.nombre) return -1;
  if (a.nombre > b.nombre) return 1;
  return 0;
});

console.log(data);
// 6. mayores de 30 años
let may30 = data.filter(function (persona) {
  return persona.edad >= 30;
});
console.log('Mayores de 30');
console.log(may30);