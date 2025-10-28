class Animal {

    constructor(nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    }

    emitirSonido(){
        return `sonido genérico`;
    }
}

class Perro extends Animal{

    constructor(nombre, edad){
        super(nombre, edad);
    }

    emitirSonido(){
        return `Guau!`;
    }
}

const neo = new Perro ("Neo", 23);

console.log(neo.emitirSonido())