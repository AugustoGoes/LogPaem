var numero1 = parseInt(prompt("Digite o primeiro número para comparar."))
var numero2 = parseInt(prompt("Digite o segundo número para comparar."))
var numero3 = parseInt(prompt("Digite o terceiro número para comparar."))

let escolha;
escolha = lerNumero('Deseja saber qual deles é o maior ou qual é o menor?' +
'\n1 - Maior' +
'\n2 - Menor');

switch (escolha) {
    case 1: {
        let resultado = maiorNumero(numero1, numero2, numero3);
        alert("O maior número é " + resultado)
    };
        break;

    case 2: {
        let resultado = menorNumero(numero1, numero2, numero3);
        alert("O menor número é " + resultado)
    };
        break;

    default: {
        alert('Essa função não foi definida')
    } break;
}

function lerNumero(mensagem) {
    return parseInt(prompt(mensagem))
}

function maiorNumero(numero1, numero2, numero3){
    if (numero1 > numero2 && numero1 > numero3){
        return numero1
    } else if (numero2 > numero1 && numero2 > numero3){
        return numero2
    } else {
        return numero3
    }
}

function menorNumero(numero1, numero2, numero3){
    if (numero1 < numero2 && numero1 < numero3){
        return numero1
    } else if (numero2 < numero1 && numero2 < numero3){
        return numero2
    } else {
        return numero3
    }
}