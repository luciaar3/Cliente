// Variables globales
let peliculas = [];
const lista = document.getElementById('lista');
const mensaje = document.getElementById('mensaje');

// ---------- 1. Pedir títulos ----------
function pedirPeliculas() {
  let titulo;
  do {
    titulo = prompt(
      'Introduce el título de una película (deja vacío o cancela para terminar):'
    );
    if (titulo) peliculas.push(titulo);
  } while (titulo);
}

// ---------- 2. Eliminar duplicados y mostrar ----------
function mostrarPeliculas() {
  peliculas = [...new Set(peliculas)];
  lista.innerHTML = '';

  peliculas.forEach((titulo) => {
    const li = document.createElement('li');
    li.textContent = titulo;

    li.addEventListener('dblclick', () => eliminarPelicula(titulo));
    // li.remove();

    lista.appendChild(li);
  });
}

// ---------- 3. Guardar y cargar del almacenamiento ----------
function guardarPeliculas() {
  localStorage.setItem('peliculas', JSON.stringify(peliculas));
}

function cargarPeliculas() {
  const guardadas = JSON.parse(localStorage.getItem('peliculas'));
  // console.log(guardadas);
  if (guardadas) {
    // Añade cada elemento del array recuperado
    for (let peli of guardadas) {
      peliculas.push(peli);
    }
  }
  //if (guardadas) peliculas.push(...guardadas);
}

// 4. Doble clic para marcar vista

function eliminarPelicula(titulo) {
  peliculas = peliculas.filter((p) => p !== titulo);
  guardarPeliculas();
  mostrarPeliculas(); // Redibuja la lista actualizada
}

// ---------- 5. Promesa ----------
function cargarDatosConRetraso() {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Datos cargados'), 2000);
  });
}

// ---------- Al cargar la página ----------
mensaje.textContent = 'Cargando datos...';

pedirPeliculas();
cargarPeliculas();
guardarPeliculas();
cargarDatosConRetraso().then((msj) => {
  mensaje.textContent = msj;
  mostrarPeliculas();
});
