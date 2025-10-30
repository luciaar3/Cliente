class Rectangulo {
    constructor(ancho, alto){
        if(ancho <= 0){
            this.ancho = 1;
        }else{
            this.ancho = ancho
        }

        if(alto <= 0){
            this.alto = 1;
        }else{
            this.alto = alto;
        }
    }

    cambiarDimensiones(ancho, alto){

        if(ancho <= 0){
            this.ancho = 1;
        }else{
            this.ancho = ancho
        }

        if(alto <= 0){
            this.alto = 1;
        }else{
            this.alto = alto;
        }
    }

    calcularArea(){
        const area = this.ancho * this.alto;
        return area;
    }

    copia() {
        const copia = new Rectangulo(this.ancho, this.alto);
        return copia;
    }

    comparar(segRectangulo){
        if(this.calcularArea() > segRectangulo.calcularArea()){
            return 'mayor';
        }else if(this.calcularArea() === segRectangulo.calcularArea()){
            return 'igual';
        }else{
            return 'menor';
        }
    }
}
const r1 = new Rectangulo(6,8);
console.log(r1.calcularArea());
r1.cambiarDimensiones(3,4);
console.log(r1);

const r2 = new Rectangulo(-1, 6);
console.log(r2);

const copiar1 = r1.copia();
console.log(copiar1);

console.log(r1.comparar(copiar1));
