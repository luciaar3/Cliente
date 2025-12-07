const video = document.getElementById('video');
    const info = document.getElementById('info');

    video.addEventListener("click", (e) => {
            if (video.paused) {
                video.play();
            } else {
                video.pause();
            }
        });

        video.addEventListener("contextmenu", mostrarDuracion);

        // Función que muestra la duración del vídeo
        function mostrarDuracion(event) {
            event.preventDefault(); // Evita el menú del navegador

            let total = video.currentTime;
            let minutos = Math.floor(total / 60);
            let segundos = Math.floor(total % 60);

            info.textContent = "Duración: " + minutos + " min " + segundos + " s";
        }