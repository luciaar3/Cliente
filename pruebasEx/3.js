const lista = document.getElementById('lista');
const mensaje = document.getElementById('mensaje');

let peliculas = new Set();

function pedirPeliculas(){
    let palabra;
    do {
        palabra = prompt("Introduce una pelicula");
        if(palabra !== null && palabra !== ""){
            peliculas.add(palabra);
        }
        
    } while (palabra !== null && palabra !== "");
}

function mostrarPeliculas(){
    let pelis = [...peliculas];

    lista.innerHTML= "";
    
    for (let index = 0; index < pelis.length; index++) {

        const li = document.createElement('li');
        li.textContent = pelis[index];

        li.addEventListener('dblclick', () =>{
            li.remove();
            peliculas.delete(pelis[index]);

            guardarPeliculas();
            mostrarPeliculas();
        })

        lista.appendChild(li);

        
    }
}

function guardarPeliculas(){
    localStorage.setItem("peliculas", JSON.stringify([...peliculas]));
}

function retraso(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Cargado con exito');
        }, 2000);
    })
}

mensaje.textContent = "Cargando contenido...";

pedirPeliculas();
guardarPeliculas();
retraso().then((msg) =>{
    mostrarPeliculas()
    mensaje.textContent = msg;
});
