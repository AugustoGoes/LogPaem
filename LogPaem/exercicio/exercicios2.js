var num;
do {
    var num = prompt("De uma nota maior que 0 e menor que 10.");
} while(num <= 0 || num >= 10);


var nome;
var senha;

do {
    var nome = prompt("Digite seu nome de usário.");
    var senha = prompt("Digite sua senha");
    if (senha == nome ){
        alert ("Sua senha não pode ser igual seu nome.")
    } else if (nome != "jorge"){
        alert ("Nome de usuário incorreto.")
    } else if (senha != "senhasegura") {
        alert ("Senha incorreta.")
    }

} while(nome != "jorge" || senha == "jorge" || senha != "senhasegura")