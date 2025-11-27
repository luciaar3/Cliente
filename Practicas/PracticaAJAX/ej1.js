    const img = document.getElementById('image');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const direccion = document.getElementById('direccion');
    const pais = document.getElementById('pais');

    fetch('https://randomuser.me/api/') //api
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
                return response.json(); //Así sale texto plano
            })
        .then((data) => {
            const user = data.results[0];

            img.src = user.picture.large;
            nombre.textContent = `${user.name.first} ${user.name.last}`;
            email.textContent += `${user.email}`;
            direccion.textContent = `${user.location.street.number} ${user.location.street.name}`;
            pais.textContent = `${user.location.state} (${user.location.country})`;
        })
        .catch((error) => {
            console.error('Error en la petición:', error);
        });