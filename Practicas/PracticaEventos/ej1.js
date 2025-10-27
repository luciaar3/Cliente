const resul = document.getElementById('resul');
const menu = document.getElementById('menu');

menu.onchange = function(){

    const opcion = menu.value;

    switch (opcion) {
        case "saludo":
            resul.textContent = "Holaaaaaaaaaaaaaaaa";
            break;
        
        case "caja":
            const caja = document.createElement('div');
            caja.textContent = "Nueva caja";
            caja.style.width = "150px";
            caja.style.height = "150px";
            caja.style.display = "flex";
            caja.style.alignContent = "center";
            caja.style.justifyContent = "center";
            caja.style.backgroundColor = "red";
            resul.appendChild(caja);
            break;

        case "aleatorio":
            const num = Math.floor(Math.random()*100) +1;
            resul.textContent = num;
            break;

        default:
            alert ("Selecciona una opción.");
            break;
    }

    document.getElementById("restablecer").onclick = function() {
        location.reload();
}   ;
}