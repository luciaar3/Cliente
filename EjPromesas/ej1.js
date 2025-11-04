function sumarAsync(a, b){
    return new Promise(function (resolver, rechazar){
        a = 5;
        b = 'hola';
        if(isNaN(a)|| isNaN(b)) rechazar(Error('Debe de ser un número'))
            else resolver('La suma es:'+(a+b))
    })
}

sumarAsync()
    .then((respuesta) =>{
        console.log(respuesta)
    })
    .catch((error) =>{
        console.log(error.message)
    })