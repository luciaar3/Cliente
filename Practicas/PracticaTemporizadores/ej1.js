const contenido = document.getElementById('contenido');
const nombre = localStorage.getItem('nombre');

if (nombre) {
    contenido.innerHTML= `<h2>Bienvenido, ${nombre}</h2>`;
}
else {
    contenido.innerHTML = `
        <input type="text" id="ingresarNombre" placeholder="Escribe tu nombre">
        <button id="guardar">Guardar</button>`;
    document.getElementById('guardar').addEventListener('click', ()=> {
        const valor  = document.getElementById('ingresarNombre').value;

        if(valor){
            localStorage.setItem('nombre', valor);
            location.reload();
        }
    });
}
