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
console.log(r1);

const r3 = new Rectangulo(2,9);
r3.cambiarDimensiones(3,4);


const r2 = new Rectangulo(-1, 6);
console.log(r2);

const copiar1 = r1.copia();
console.log(copiar1);

console.log(r1.comparar(copiar1));

const p = document.getElementById('p');

const resul1 = document.createElement('p');
resul1.textContent = `Calcular área de r1 -> r1: ancho=${r1.ancho}, alto=${r1.alto}, área=${r1.calcularArea()}`;
p.appendChild(resul1);

const resul4 = document.createElement('p');
resul4.textContent = `Crear copia de r1 -> r1: ancho=${r1.ancho}, alto=${r1.alto},  copiar1: ancho=${copiar1.ancho}, alto=${copiar1.alto}`;
p.appendChild(resul4);

const resul5 = document.createElement('p');
resul5.textContent = `Comparar r1 y copia r1 -> ${r1.comparar(copiar1)}`;
p.appendChild(resul5);

const resul3 = document.createElement('p');
resul3.textContent = `Comprobar dimensiones de r2 -> r2 : ancho Anterior= -1, alto Anterior= 6, cambio: ancho= ${r2.ancho}, alto= ${r2.alto}`;
p.appendChild(resul3);

const resul2 = document.createElement('p');
resul2.textContent = `Cambiar dimensiones de r3 -> r3: ancho Anterior= 2, alto Anterior= 9, cambio; ancho= ${r3.ancho}, alto= ${r3.alto}`;
p.appendChild(resul2);