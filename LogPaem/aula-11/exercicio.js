let escolha;
escolha = lerNumero('Digite qual sera a conversão' +
'\n1 - Celsius -> Fahrenheit' +
'\n2 - Fahrenheit -> Celsius');

switch (escolha) {
    case 1: {
        let celsius = lerNumero('Digite a temperatura em celsius que deseja converter para fahrenheit.');
        let resultado = celsiusToFahrenheit(celsius);
        alert('O resultado da conversão de ' + celsius +
        ' Celsius é ' + resultado + ' Fahrenheit.');
    };
        break;

    case 2: {
        let fahrenheit = lerNumero('Digite a temperatura em fahrenheit que deseja converter para celsius.')
        let resultado = fahrenheitToCelsius(fahrenheit);
        alert('O resultado da conversão de ' + fahrenheit +
        ' Fahrenheit é ' + resultado + ' Celsius');
    };
        break;

    default: {
        alert('Essa função não foi definida')
    } break;
}

function lerNumero(mensagem) {
    return parseInt(prompt(mensagem))
}

function celsiusToFahrenheit(celsius) {
    return celsius * 1.8 + 32;
}

function fahrenheitToCelsius(fahrenheit){
    return (fahrenheit - 32) / 1.8;
}