const num = document.getElementById('numero');
const enviar = document.getElementById('enviar');
const id = document.getElementById('id');
const titulo = document.getElementById('titulo');
const precio = document.getElementById('precio');
const title = document.getElementById('title');

enviar.addEventListener('click', () => {
  fetch(`https://dummyjson.com/products/${num.value}`) //api
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      return response.json(); //Así sale texto plano
    })
    .then((data) => {
      id.textContent = `ID:${data.id}`;
      titulo.textContent = `Nombre:${data.title}`;
      precio.textContent = `Precio:${data.price}`;

      const datos = {
        ID: `${data.id}`,
        nombre: `${data.title}`,
        precio: `${data.price}`,
      };
      //API de prueba
      return fetch('https://httpbin.org/post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(datos),
      })
        .then((response) => response.json())
        .then((data) => {
          title.textContent = `Esto devuelve el post : ${datos.nombre}`;
        });
    })
    .catch((error) => {
      console.error('Error en la petición:', error);
    });
});
