        const valor = document.getElementById('contenido');
        const mensaje = document.getElementById('mensaje');

        let precio = 100;

        const intervalo = setInterval(()=> {

            const cambio = Math.floor(Math.random()*11)-5;

            precio += cambio;
            valor.textContent= `Precio : ${precio}`;

            if(precio >= 120){
                mensaje.textContent = `Máximo Alcanzado!`;
                clearInterval(intervalo);
            }else if(precio <= 80){
                mensaje.textContent = `Mínimo alcanzado!`;
                clearInterval(intervalo);
            }

        },1000);