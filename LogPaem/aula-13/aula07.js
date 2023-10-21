
//function NOME(PARM){
//}
//var num=1;
//nome(num);
//nome;

// function lancarDados(){
//     return Math.floor(Math.random() * 6) + 1;
// }

// function simularUmMilhaoDeLançamentos(){
//     const frequencia = {
//         1: 0,
//         2: 0,
//         3: 0,
//         4: 0,
//         5: 0,
//         6: 0,
//     };
//     for (let i = 0; i < 1000000; i++) {
//         const resultado = lancarDados();
//         frequencia[resultado]++;
// }
// return frequencia;

// }
// const resultadoDaSimulação = simularUmMilhaoDeLançamentos();

// prompt("Frequencia dos numeros:");
// for (let numero = 1; numero <= 6; numero++){
//     alert('Numero ${numero}: ${resultadoDaSimulação[numero]} ');
// }

// MATCH FLOOR: que dizer arredondar para baixo

// var teste = Math.random()
// var conta = Math.trunc(teste * 6)
// var valores = []

var teste = Math.random()
var conta = Math.trunc(teste * 6)
var valores = [[], [], [], [], [], []]


for ( i = 0; i < 1000000; i++) {
    var teste = Math.random()
var conta = Math.trunc(teste * 6)


switch (conta){
    case 1:
    valores[0].push(conta)
    break;
    
    case 2:
    valores[1].push(conta)
    break;

    case 3: 
    valores[2].push(conta)
    break;

    case 4:
    valores[3].push(conta)
    break;
    
    case 5:
    valores[4].push(conta)
    break;
    default:
    valores[5].push(conta)
}
}

alert("Caiu na casa: " + valores[0].length + teste)
alert("Caiu na casa: " + valores[1].length + teste)
alert("Caiu na casa: " + valores[2].length + teste)
alert("Caiu na casa: " + valores[3].length + teste)
alert("Caiu na casa: " + valores[4].length + teste)
alert("Caiu na casa: " + valores[5].length + teste)




