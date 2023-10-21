// 3. Crie uma função que separe o texto em palavras por meio do caracter espaço em branco (pode utilizar dentro da sua própria função a função split)
function EspaçoEmBranco (EmBranco){
    var EmBranco = texto.split(' ');
    return EmBranco;
}

var texto = "Crie uma função que separe o texto em palavras por meio do caracter espaço em branco";
var EmBranco = EspaçoEmBranco(texto);
console.log("Texto: ", EmBranco);

