let persona ={
    nombre:"Juan",
    edad:30,
    profesion:"Ingeniero",
    presentarse:function(){
        return `Esta es la persona ${persona.nombre} que se dedica a ${persona.profesion}`;
    },

    cumplirAnios:function(){
        return this.edad += 1;
    }
};

console.log(persona.presentarse());
console.log(persona.cumplirAnios());