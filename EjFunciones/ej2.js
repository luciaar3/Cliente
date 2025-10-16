const productos =[{nombre:"Camiseta", precio:20},{nombre:
"Pantalón", precio: 30 }, { nombre: "Zapatos", precio: 50 } ];

productos.forEach(function(elemento, indice){
    elemento.precio += elemento.precio * 0.10;
});
console.log ("Este es el array: ", productos);