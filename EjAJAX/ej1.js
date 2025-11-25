fetch('https://jsonplaceholder.typicode.com/users') //api
.then((response) => {
if (response.ok) {
response.json(); // Parsear la respuesta como JSON
}})
.then((data) => {
console.log('Datos recibidos:', data);
});