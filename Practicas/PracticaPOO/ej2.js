class Ordenador {

    constructor(marca, modelo, memoria = 4, capacidad = 512, pulgadas = 17){
        this.marca = marca;
        this.modelo = modelo;
        this.memoria = memoria;
        this.capacidad = capacidad;
        this.pulgadas = pulgadas;
    }

    toString(){
        return 'Marca: '+this.marca+', Modelo: '+this.modelo+', Memória RAM: '+this.memoria+'GB, Capacidad de disco duro: '+this.capacidad+'GB, Pulgadas de pantalla: '+this.pulgadas+' pulgadas.';
    }


}

class Portatil extends Ordenador{

    constructor(marca, modelo, memoria = 4, capacidad = 256, pulgadas = 12, autonomia = 4){
        super(marca, modelo, memoria, capacidad, pulgadas);
        this.autonomia=autonomia;
    }

    toString(){
        return 'Marca: '+this.marca+', Modelo: '+this.modelo+', Memória RAM: '+this.memoria+'GB, Capacidad de disco duro: '+this.capacidad+'GB, Pulgadas de pantalla: '+this.pulgadas+' pulgadas, Autonomía: '+this.autonomia+'.';
    }
}

const ordenador1 = new Ordenador('Acer', 'Carrera');
const portatil1 = new Portatil('Samsung', '450-b');

console.log(ordenador1.toString());
console.log(portatil1.toString());

const p = document.getElementById('p');

const resul1 = document.createElement('p');
resul1.textContent = `Ordenador = ${ordenador1}`;
p.appendChild(resul1);

const resul2 = document.createElement('p');
resul2.textContent = `Portátil = ${portatil1}`
p.appendChild(resul2);