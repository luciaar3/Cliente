class Coche {

    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    detalles() {
        return `Marca: ${this.marca} Modelo: ${this.modelo} Año: ${this.ano}`;
    }

}

const c1 = new Coche("Subaru", "asdasd", 2015);
console.log(c1.detalles());

const c2 = new Coche("Mazda", "n-30", 2005);
console.log (c2.detalles());