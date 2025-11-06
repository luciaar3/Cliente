const contenido = document.getElementById('contenido');
const nombre = localStorage.getItem('nombre');

if (nombre) {
    contenido.innerHTML= `<h2>Bienvenido, ${nombre}</h2>`;
}

document.getElementById('guardar').addEventListener('click', ()=> {
    const valor  = document.getElementById('ingresarNombre').value;

    if(valor){
        localStorage.setItem('nombre', valor);
        location.reload();
    }
});
