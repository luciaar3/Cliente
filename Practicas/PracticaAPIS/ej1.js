const cuenta = document.getElementById('cuenta');
        
        function mostrarCuenta() {
          let cont = 5;
            const intervalo = setInterval(() => {
            cuenta.textContent = cont;
            cont--;

            if (cont === 0) {
                clearInterval(intervalo);
                mostrarNotificacion();
            }
            }, 1000);
        }
        mostrarCuenta();
        // Función para mostrar la notificación
        function mostrarNotificacion() {
            let n = new Notification('Información', {
            body: '¡Puedes ir a mi nuevo video si haces clic!',
        });
            // Evento que se dispara al hacer clic en la notificación
            n.addEventListener('click', () => {
                window.location.href = 'ej1_1.html';
            });
        }
        // Comprobar el estado del permiso de notificaciones
        let permiso = Notification.permission;
            if (permiso === 'default') {
                Notification.requestPermission().then((resp) => {
            if (resp === 'granted') {
                mostrarNotificacion();
            }
                });
            } else if (permiso === 'granted') {
                mostrarNotificacion();
            }