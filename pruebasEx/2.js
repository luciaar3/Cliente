const lista = document.getElementById('lista');
const mensaje = document.getElementById('mensaje');

let peliculas = new Set();

function pedirPelicula() {
    let palabra;
    do {
        palabra = prompt("Introduce una pelicula: ");
        if (palabra !== null && palabra !== "") {
            peliculas.add(palabra);
        }
    } while (palabra !== null && palabra !== "");
}
localStorage.setItem("peliculas", JSON.stringify([...peliculas]));

function mostrarPeliculas() {
    const pelis = [...peliculas];

    lista.innerHTML = "";

    for (let index = 0; index < pelis.length; index++) {

        let li = document.createElement("li");

        li.textContent = pelis[index];

        li.addEventListener(('dblclick'), () => {
            li.remove();
            peliculas.delete(pelis[index]);
            localStorage.setItem("peliculas", JSON.stringify([...peliculas]));
        });
        lista.appendChild(li);
    }
}



pedirPelicula();
mostrarPeliculas();