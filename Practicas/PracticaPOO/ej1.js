class Rectangulo {
    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    crear(ancho, alto){
        if(ancho <= 0 || alto <= 0){
            this.ancho = 1;
            this.alto = 1;
            return ancho, alto;
        }
        this.ancho = ancho;
        this.alto = alto;
        return ancho, alto;
    }

    calcularArea(ancho, alto){
        const area = ancho * alto;
        return area;
    }

    copia() {

    }
}