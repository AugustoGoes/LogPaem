numero = 20;
texto = "texto"
texto2 = 'texto'
bin = true
bin2 = true
nome = "Lucas"
// nome = "Pedro"

 x = numero > 10
if (numero > 10){
    
}

if(numero < 10 ){

}

if (numero > 10 && texto2 == 'texto'){
    console.log("certo")
}

if (numero < 20 || texto2 == 'texto'){
    console.log("certo1")
}

if(bin){
    console.log ("ok")
}

if (bin == true){
    console.log("ok")
} else if(bin2 == true){
    console.log("ok 2")
} else {
    console.log ("ok 3")
}

switch (nome){
    case "rafael":
    case "Lucas":
        console.log("Sua senha é 123")

        break;
    case "Lucas":
        console.log("Sua senha é 12345");
        break;
    case "lucas":
        console.log("Sua senha é 321");
        break;

    default:
        console.log ('Sua senha é 007');

}

