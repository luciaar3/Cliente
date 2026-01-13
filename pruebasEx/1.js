const lista = document.getElementById('lista');
const mensaje = document.getElementById('mensaje');

let palabra;
let peliculas = new Set();

do {
    palabra = prompt("Introduce un título de una película:");

    if (palabra !== null && palabra !== "") {
        peliculas.add(palabra);
    }
} while (palabra !== null && palabra !== "");


localStorage.setItem("peliculas", JSON.stringify([...peliculas]));

function mostrarPeliculas() {
    const listaPel = [...peliculas];

    lista.innerHTML = "";

    for (let index = 0; index < listaPel.length; index++) {

        let li = document.createElement('li');

        li.textContent = listaPel[index];

        li.addEventListener('dblclick', () => {
            li.remove();
            peliculas.delete(listaPel[index]);
            localStorage.setItem("peliculas", JSON.stringify([...peliculas]));
        });

        lista.appendChild(li);
    };
}

function retraso() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Contenido cargado");
        }, 5000);
    });
}


mensaje.textContent = "Cargando contenido...";

retraso().then((msj) => {
    mensaje.textContent = msj;
    mostrarPeliculas()
})





