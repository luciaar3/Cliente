let texto = [];
for (let index = 1; index <= 50; index++) {
    
    let comb = [];

    while(comb.length < 6){

        let numero =Math.floor(Math.random() * 49) +1;
        if(!comb.includes(numero)){
            comb.push(numero);
        }
    }

    texto .push(comb);
}
let salida ="";
for (let i = 0; i < texto.length; i++) {
    salida += `${i +1} : ${texto[i]}<br>`;
    
}

let id = document.getElementById("resul");
id.innerHTML = salida;