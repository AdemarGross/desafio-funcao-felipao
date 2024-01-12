function saldo(vitoria, derrota){
    let resultado = vitoria - derrota
    
    if(resultado <=10){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de ferro")
    }
    else if(10< resultado && resultado <=20){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de bronze")
    }
    else if(20< resultado && resultado <=50){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de prata")
    }
    else if(50< resultado && resultado <=80){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de ouro")
    }
    else if(80< resultado && resultado <=90){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de diamante")
    }
    else if(90< resultado && resultado <=100){
    console.log("O Herói tem de saldo de " + resultado + " está no nível de ferro")
    }
    else{
    console.log("O Herói tem de saldo de " + resultado + " está no nível de Imortal")
    }
    }
    
    saldo(200,50)