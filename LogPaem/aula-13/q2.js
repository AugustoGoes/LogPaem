// 2. Crie uma função que identifique e remova os caracteres ponto (.), e o caracter virgula (,) do texto.
function retirePontoEVirgula(){
    var textoSemPontoEVirgula = texto.replace(/[.,]/g,'');
    return textoSemPontoEVirgula;
}

var texto = "O rato, o gato. o peixe, a foca. o leao";
var textoSemPontoEVirgula = retirePontoEVirgula(texto);
console.log ("Texto sem ponto e virgula:", textoSemPontoEVirgula);