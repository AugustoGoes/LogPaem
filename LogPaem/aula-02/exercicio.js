// --------------------------------------------------------------
// TESTE PASSADO v

//  var dinheiro = 6;
//  var hotdog = 10;
//  var pipoca = 7;
//  var refri = 5;

//  var comprarhotdog = dinheiro - hotdog;
//  var comprarpipoca = dinheiro - pipoca;
//  var comprarrefri = dinheiro - refri;



//  if (dinheiro >= hotdog) {
//      comprarhotdog
//  } else if (dinheiro >= pipoca) {
//      comprarpipoca
//  } else {
//      comprarrefri
// }
// alert
// --------------------------------------------------------------
// Exercícios:
// 1. Crie variáveis para armazenar o valor dos seguintes alimentos;
// Pastel custa 10 reais
// Cachorro quente custa 10 reais
// Pipoca custa 5 reais
// Refrigerante custa 3 reais e 50 centavos
// Canjica custa 4 reais e 50 centavos
// Paçoca custa 3 reais
// Quentão custa 5 reais

// A) Informe ao usuário a lista de alimentos.
var Carteira = 50

var Pastel = 10;
var Hotdog = 7;
var Pipoca = 5;
var Refrigerante = 3.50;
var Canjica = 4.50;
var Paçoca = 3;
var Quentao = 5;

alert ("Você tem R$50,00. \nLista de alimentos:" + 
"\n" + "\n" +
" • Pastel R$" + Pastel + "┊" +
"\n • Cachorro Quente R$" + Hotdog + "┊" +
"\n • Pipoca R$" + Pipoca + "┊" +
"\n • Refrigerante R$" + Refrigerante + "┊" +
"\n • Canjica R$" + Canjica + "┊" +
"\n • Paçoca R$" + Paçoca + "┊" +
"\n • Quentão R$" + Quentao + "┊"
);



// B) Peça qual alimento ele quer comprar.
var escolha = prompt("Qual alimento quer?").toLowerCase();
if (escolha == "pastel") {
    var gasto1 = Pastel
    var sobra1 = Carteira - Pastel
    var escolhi1 = ("pastel")
    alert ("Você escolheu pastel. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "cachorro quente") {
    var escolhi1 = ("cachorro-quente")
    var sobra1 = Carteira - Hotdog
    var gasto1 = Hotdog
    alert ("Você escolheu cachorro-quente. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "pipoca") {
    var sobra1 = Carteira - Pipoca
    var escolhi1 = ("pipoca")
    var gasto1 = Pipoca
    alert ("Você escolheu pipoca. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "refrigerante") {
    var escolhi1 = ("refrigerante")
    var sobra1 = Carteira - Refrigerante
    var gasto1 = Refrigerante
    alert ("Você escolheu refrigerante. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "canjica") {
    var sobra1 = Carteira - Canjica
    var escolhi1 = ("canjica")
    var gasto1 = Canjica
    alert ("Você escolheu canjica. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "paçoca") {
    var sobra1 = Carteira - Paçoca
    var escolhi1 = ("paçoca")
    var gasto1 = Paçoca
    alert ("Você escolheu paçoca. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "quentão") {
    var sobra1 = Carteira - Quentao
    var escolhi1 = ("quentao")
    var gasto1 = Quentao
    alert ("Você escolheu quentão. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1) }


// C) Informe o gasto total.
// FEITA NA B JÁ.


// D) Repita os itens "a", "b" e "c" 3 vezes, atualizando o gasto total

alert ("Você tem R$" + sobra1 +  "." + "\nLista de alimentos:" + 
"\n" + "\n" +
" • Pastel R$" + Pastel + "┊" +
"\n • Cachorro Quente R$" + Hotdog + "┊" +
"\n • Pipoca R$" + Pipoca + "┊" +
"\n • Refrigerante R$" + Refrigerante + "┊" +
"\n • Canjica R$" + Canjica + "┊" +
"\n • Paçoca R$" + Paçoca + "┊" +
"\n • Quentão R$" + Quentao + "┊"
);

var escolha = prompt("Qual alimento quer?").toLowerCase();
if (escolha == "pastel") {
    var sobra2 = sobra1 - Pastel
    var escolhi2 = ("pastel")
    var gasto2 = gasto1 + Pastel
    alert ("Você escolheu " + escolhi1 + " e pastel. " + "\nGasto total de R$" + gasto2 + ". \nSobra R$" + sobra2)
} else if (escolha == "cachorro quente") {
    var sobra2 = sobra1 - Hotdog
    var escolhi2 = ("cachorro-quente")
    var gasto2 = gasto1 + Hotdog
    alert ("Você escolheu " + escolhi1 + " e cachorro-quente. " + "\nGasto total de R$" + gasto2 + ". \nSobra R$" + sobra2)
} else if (escolha == "pipoca") {
    var sobra2 = sobra1 - Pipoca
    var escolhi2 = ("pipoca")
    var gasto2 = gasto1 + Pipoca
    alert ("Você escolheu " + escolhi1 + " e pipoca. " + "\nGasto total de R$" + gasto2 + ". \nSobra R$" + sobra2)
} else if (escolha == "refrigerante") {
    var sobra2 = sobra1 - Refrigerante
    var escolhi2 = ("refrigerante")
    var gasto2 = gasto1 + Refrigerante
    alert ("Você escolheu " + escolhi1 + " e refrigerante. " + "\nGasto total de R$" + gasto2 + ". \nSobra R$" + sobra2)
} else if (escolha == "canjica") {
    var sobra2 = sobra1 - Canjica
    var escolhi2 = ("canjica")
    var gasto2 = gasto1 + Canjica
    alert ("Você escolheu " + escolhi1 + " e canjica. " + "\nGasto total de R$" + gasto2 + ". \nSobra R$" + sobra2)
} else if (escolha == "paçoca") {
    var sobra2 = sobra1 - Paçoca
    var escolhi2 = ("paçoca")
    var gasto2 = gasto1 + Paçoca
    alert ("Você escolheu " + escolhi1 + " e paçoca. " + "\nGasto total de R$" + gasto2 + ". \nSobra R$" + sobra2)
} else if (escolha == "quentão") {
    var sobra2 = sobra1 - Quentao
    var escolhi2 = ("quentão")
    var gasto2 = gasto1 + Quentao
    alert ("Você escolheu " + escolhi1 + " e quentão. " + "\nGasto total de R$" + gasto2 + ". \nSobra R$" + sobra2) }

alert ("Você tem R$" + sobra2 +  "." + "\nLista de alimentos:" + 
"\n" + "\n" +
" • Pastel R$" + Pastel + "┊" +
"\n • Cachorro Quente R$" + Hotdog + "┊" +
"\n • Pipoca R$" + Pipoca + "┊" +
"\n • Refrigerante R$" + Refrigerante + "┊" +
"\n • Canjica R$" + Canjica + "┊" +
"\n • Paçoca R$" + Paçoca + "┊" +
"\n • Quentão R$" + Quentao + "┊"
);

var escolha = prompt("Qual alimento quer?").toLowerCase();
if (escolha == "pastel") {
    var sobra3 = sobra2 - Pastel
    var gasto3 = gasto2 + Pastel
    alert ("Você escolheu " + escolhi1 + ", " + escolhi2 + " e pastel. " + "\nGasto total de R$" + gasto3 + ". \nSobra R$" + sobra3)
} else if (escolha == "cachorro quente") {
    var sobra3 = sobra2 - Hotdog
    var gasto3 = gasto2 + Hotdog
    alert ("Você escolheu " + escolhi1 + ", " + escolhi2 + " e cachorro-quente. " + "\nGasto total de R$" + gasto3 + ". \nSobra R$" + sobra3)
} else if (escolha == "pipoca") {
    var sobra3 = sobra2 - Pipoca
    var gasto3 = gasto2 + Pipoca
    alert ("Você escolheu " + escolhi1 + ", " + escolhi2 + " e pipoca. " + "\nGasto total de R$" + gasto3 + ". \nSobra R$" + sobra3)
} else if (escolha == "refrigerante") {
    var sobra3 = sobra2 - Refrigerante
    var gasto3 = gasto2 + Refrigerante
    alert ("Você escolheu " + escolhi1 + ", " + escolhi2 + " e refrigerante. " + "\nGasto total de R$" + gasto3 + ". \nSobra R$" + sobra3)
} else if (escolha == "canjica") {
    var sobra3 = sobra2 - Canjica
    var gasto3 = gasto2 + Canjica
    alert ("Você escolheu " + escolhi1 + ", " + escolhi2 + " e canjica. " + "\nGasto total de R$" + gasto3 + ". \nSobra R$" + sobra3)
} else if (escolha == "paçoca") {
    var sobra3 = sobra2 - Paçoca
    var gasto3 = gasto2 + Paçoca
    alert ("Você escolheu " + escolhi1 + ", " + escolhi2 + " e paçoca. " + "\nGasto total de R$" + gasto3 + ". \nSobra R$" + sobra3)
} else if (escolha == "quentão") {
    var sobra3 = sobra2 - Quentao
    var gasto3 = gasto2 + Quentao
    alert ("Você escolheu " + escolhi1 + ", " + escolhi2 + " e quentão. " + "\nGasto total de R$" + gasto3 + ". \nSobra R$" + sobra3) }
    