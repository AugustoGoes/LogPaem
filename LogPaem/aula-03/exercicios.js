var sobra1 = 50

var Pastel = 10;
var Hotdog = 7;
var Pipoca = 5;
var Refrigerante = 3.50;
var Canjica = 4.50;
var Paçoca = 3;
var Quentao = 5;
var gasto1 = 0;
var parar = false

do {
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



// B) Peça qual alimento ele quer comprar.
var escolha = prompt("Qual alimento quer?").toLowerCase();
if (escolha == "pastel") {
    var gasto1 = gasto1 + Pastel
    var sobra1 = sobra1 - Pastel
    var escolhi1 = ("pastel")
    alert ("Você escolheu pastel. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "cachorro quente") {
    var escolhi1 = ("cachorro-quente")
    var sobra1 = sobra1 - Hotdog
    var gasto1 = Hotdog
    alert ("Você escolheu cachorro-quente. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "pipoca") {
    var sobra1 = sobra1 - Pipoca
    var escolhi1 = ("pipoca")
    var gasto1 = gasto1 + Pipoca
    alert ("Você escolheu pipoca. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "refrigerante") {
    var escolhi1 = ("refrigerante")
    var sobra1 = sobra1 - Refrigerante
    var gasto1 = gasto1 + Refrigerante
    alert ("Você escolheu refrigerante. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "canjica") {
    var sobra1 = sobra1 - Canjica
    var escolhi1 = ("canjica")
    var gasto1 = gasto1 + Canjica
    alert ("Você escolheu canjica. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "paçoca") {
    var sobra1 = sobra1 - Paçoca
    var escolhi1 = ("paçoca")
    var gasto1 = gasto1 + Paçoca
    alert ("Você escolheu paçoca. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1)
} else if (escolha == "quentão") {
    var sobra1 = sobra1 - Quentao
    var escolhi1 = ("quentao")
    var gasto1 = gasto1 + Quentao
    alert ("Você escolheu quentão. \nCusto total de R$" + gasto1 + ". \nSobra R$" + sobra1) }


}while (parar = false)

var respostaContinuar = 
  prompt ("Deseja continuar? (S/N)")
if (respostaContinuar == "S" || respostaContinuar == "s")(
    parar = true
)
    
