class Ordenador {

    constructor(marca, modelo, memoria = 4, capacidad = 512, pulgadas = 17){
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.capacidad = capacidad;
        this.pulgadas = pulgadas;
    }

    toString(){
        return 'Marca: '+this.marca+' Modelo: '+this.modelo+' Memória RAM: '+this.memoria+'GB Capacidad de disco duro: '+this.capacidad+'GB Pulgadas de pantalla: '+this.pulgadas+'pulgadas.';
    }


}

class Portatil{

    constructor(marca, modelo, memoria = 4, capacidad = 256, pulgadas = 12, autonomia = 4){
        super(marca, modelo, memoria, capacidad, pulgadas);
        this.autonomia=autonomia;
    }
}