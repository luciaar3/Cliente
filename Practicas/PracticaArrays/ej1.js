for (let index = 1; index <= 50; index++) {
    
    let comb = [];

    while(comb.length < 6){

        let numero =Math.floor(Math.random() * 49) +1;
        if(!comb.includes(numero)){
            comb.push(numero);
        }
    }

    console.log (comb)
}
