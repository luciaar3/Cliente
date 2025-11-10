        const nombreProducto = document.getElementById('nombreProducto');
        const direccion = document.getElementById('direccion');
        const boton = document.getElementById('comprar');
        const resul = document.getElementById('resultado');
        let ejecutado = false;

        function procesarPago(){
                    return new Promise  ((resolve, reject) => {
                        const intervalo = setTimeout(()=> {
                            if(nombreProducto.value){
                            ejecutado = true;
                            resolve(`Pago procesado correctamente para ${nombreProducto.value}`);
                        }else{
                            reject(Error(`No se puede procesar el pago sin producto`));
                        }
                        },1500);
                  });  
            };

        function enviarPedido(){
            return new Promise((resolve, reject) => {
                const time = setTimeout(() =>{
                    if(ejecutado){
                        if(direccion.value){
                            let num = Math.random();
                            if(num < 0.2){
                                reject(Error(`Error durante el envío, intente de nuevo`))
                            }else{
                                resolve(`Pedido enviado correctamente a ${direccion.value}`);
                            }
                        }else{
                            reject(Error(`Dirección de envío no válida`));
                        }
                    }
                },2000);
            });
        };  

        boton.addEventListener(('click'), () => {
                procesarPago()
                .then((respuesta) => {
                    resul.textContent = respuesta;
                    return enviarPedido();
                })
                .then((respuesta) => {
                    resul.textContent= respuesta;
                })
                .catch((error) => {
                    resul.textContent = error;
                })
        });