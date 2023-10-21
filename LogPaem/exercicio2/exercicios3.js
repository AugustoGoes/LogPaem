// exercício 1. Faça um script que verifique se uma letra digitada num campo de prompt é vogal ou consoante.

var letra;
var parar = false
do {
    var letra = prompt("Digite uma letra e o programa dirá se é vogal ou consoante.").toLowerCase();
    if (isNaN(letra) == false) {
        alert("Entrada inválida.")
    }
    else if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
        alert("É uma vogal.")
    } else {
        alert("É uma consoante.")
    }


    var respostaContinuar =
        prompt("Deseja continuar? (S/N)")
    if (respostaContinuar == "N" || respostaContinuar == "n") (
        parar = true
    )
} while (parar == false)

//exercício 2. Faça um script que pede duas notas de um aluno. Em seguida ele deve calcular a média do aluno  edar o seguinte resultado
// • A mensagem "Aprovado", se a média alcançada for maior ou igual a sete.
// • A mensagem "Reprovado", se a média for menor do que sete.
// • A mensagem "Aprovado com Distinção.", se a média for igual a dez.

var nota1;
var nota2;
var parar2 = false

do {
    var nota1 = prompt("Qual foi a primeira nota?")
    if (isNaN(nota1) == true) {
        alert("Entrada inválida.")
    } else {
        var nota2 = prompt("Qual foi a segunda nota?")
        if (isNaN(nota2) == true) {
            alert("Entrada inválida.")
        } else {
            var soma = parseInt(nota1) + parseInt(nota2)
            var media = soma / 2
            if (media <= 7) {
                alert("Reprovado. Sua média foi: " + media)
            } else if (media == 10) {
                alert("Aprovado com distinção. Sua média foi: " + media)
            } else {
                alert("Aprovado. Sua média foi: " + media)
            }
        }
    }
    var respostaContinuar2 =
        prompt("Deseja continuar? (S/N)")
    if (respostaContinuar2 == "N" || respostaContinuar2 == "n") (
        parar2 = true
    )
} while (parar2 == false)

// exercício 3. Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.

var num1 = 80
var num2 = 30
var num3 = 50

if (num1 >= num2, num1 >= num3) {
    var resultado = (num1 + " é o maior.")
} else if (num2 >= num1, num2 >= num3) {
    var resultado = (num2 + " é o maior.")
} else {
    var resultado = (num3 + " é o maior.")
}

if (num1 <= num2, num1 <= num3) {
    var resultado2 = (num1 + " é o menor.")
} else if (num2 <= num1, num2 <= num3) {
    var resultado2 = (num2 + " é o menor.")
} else {
    var resultado2 = (num3 + " é o menor.")
}

alert(resultado + " " + resultado2)

// exercício 4. Faça um script que pede dois interior e ármazene eles em duas variáveis. Em seguida, troque o valor das variáveis, invertendo e exibindo o antes e o depois em uma janela de alert.

var num4 = prompt("De um número inteiro.")
var num5 = prompt("De mais um número inteiro.")

alert("Antes: " + num4 + (".") + " Depois: ", num4 = num5, + num4)

// exercício 5. Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles
// --------- Já feito na linha 60-82

// exercício 6. Faça um script que leia três números e mostre-os em ordem decrescente.

var num6 = 100
var num7 = 150
var num8 = 200

if (num6 >= num7 && num6 >= num8) {
    var primeiro = num6
} else if (num7 >= num6 && num7 >= num8){
    var primeiro = num7
} else {
    var primeiro = num8
}

if (num6 <= primeiro && num6 <= num7 && num6 >= num8) {
    var segundo2 = num6
} else if (num7 <= primeiro && num7 >= num6 && num7 >= num8){
    var segundo2 = num7
} else {
    var segundo2 = num8
}

if (num6 <= segundo2 && num6 <= num7 && num6 >= num8) {
    var terceiro2 = num6
} else if (num7 <= segundo2 && num7 >= num6 && num7 >= num8){ 
    var terceiro2 = num7
} else {
    var terceiro2 = num8
}

alert(primeiro + ", " + segundo2 + ", " + terceiro2)