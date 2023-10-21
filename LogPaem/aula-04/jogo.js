// jogo acertar o numero

//numero sorteado
var numero = parseInt((Math.random() * 100) % 50);
alert(numero)

// resposta do usuário

var quantidadeTentativas = 5
var acertou = false

do {
    var resposta = parseInt(prompt("Qual foi o número sorteado?"))
    if (isNaN(resposta)) {
        alert("Resposta inválida.")
    } else if (resposta == numero) {
        alert("Parabéns! Você acertou.");
        acertou = true
    } else {
        alert("Você errou! Tente novamente.")
        quantidadeTentativas = quantidadeTentativas - 1;
        alert("Você possuí mais " + quantidadeTentativas + " tentativas.");
    }
} while (quantidadeTentativas > 0 && acertou == false)

if(quantidadeTentativas == 0 && acertou == false){
    alert("Game over! Você perdeu. O valor era "+ numero + ".")
}

