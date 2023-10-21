// var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var frase = prompt("Digite aqui a frase para criptografar.")
// var shift = Number(prompt("Quantas letras avançar?"))
// var criptografada = []

// for (var i =0; i < frase.length; i++){
//procurar alfabeto a letra atual da frase
// var posicaoAtual;
// }

var alfabeto = retornaAlfabetoMinusculo();

var textoCriptografar = prompt("Informe a frase!").toLowerCase();

var valorCriptografia = 3;

var textoCriptografado = "";

function funcaocriptografia() {

    for (var i = 0; i < textoCriptografar.length; i++) {
        var caracter = textoCriptografar.charAt(i);

        if (caracter == " ") {
            textoCriptografado += caracter;
        } else {
            textoCriptografado += retornaCaracterCriptografado(
                caracter,
                valorCriptografia);

        }
    }
    return textoCriptografado
}

function funcaoDEScriptografia(textodesCriptografado) {

    for (var i = 0; i < funcaocriptografia.length; i++) {
        var caracter = funcaocriptografia.charAt(i);

        if (caracter == " ") {
            textodesCriptografado += caracter;
        } else {
            textodesCriptografado += retornaCaracterCriptografado(
                caracter,
                valorCriptografia);

        }
    }
    return textodesCriptografado
}

function retornaCaracterCriptografado(caracter, valor) {
    var posicaoCaracter = alfabeto.indexOf(caracter);

    posicaoCaracter += valor;

    var caracterCriptografado = alfabeto[posicaoCaracter % alfabeto.length];

    return caracterCriptografado;
}

alert(funcaocriptografia());

var descriptografar = prompt("Deseja descriptografar? Y|N")
if (descriptografar == "Y") {
    valorCriptografia = -3;
    alert(funcaoDEScriptografia())
}

function retornaAlfabetoMinusculo() {
    return ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
}




// var alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
// var palavra = prompt("Escreva a palavra para ser criptografada.")
// var fraseArray = palavra.split('')
// console.log (fraseArray)

// for (let i = 0; i < alfabeto.length; i++){
//     if(fraseArray == alfabeto[i]){
//         fraseArray [0] = alfabeto[palavr == alfabeto+3]
//         console.log (fraseArray)
//         console.log (alfabeto)
//     }
//     //console.log(palavra[i] +=alfabeto[i])
// }

// var textoCriptografado = "";
// for (var i = 0; i < textoCriptografar.length; i++) {
//     var caracter = textoCriptografar.charAt(i);

//     if (caracter == " ") {
//         textoCriptografado += caracter;
//     } else {
//         textoCriptografado += retornaCaracterCriptografado(
//             caracter,
//             valorCriptografia);

//     }
// }