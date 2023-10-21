//Escreva um algorítimo que leia o número de litros vendidos, o tipo de combustível (codificado da seguinte forma: A - álcool, G - gasolina). calcule e imprima o valor a ser pago pelo cliente
//sabendo-se que o preço do litro da gasolina é R$2.50, o preço do litro álcool é R$1.90.

var A = "Alcool"
var G = "Gasolina"
var pronto = false

do { var comb = prompt("Combustível? G/A")

switch (comb) {
    case "G":
        comb == "G"
        pronto = true
        var preço = 2.50
        break
    case "A":
        comb == "A"
        pronto = true
        var preço = 1.90
        break
} } while (pronto == false)

var qtd = parseInt(prompt("Quantos litros?"))
if(qtd <= 20 && comb == "A"){
    var desconto = preço - 0.057
    var total = desconto * qtd
    alert ("O preço é de R$"+total+"." )
} else if(qtd > 20 && comb == "A"){
    var desconto = preço - 0.095
    var total = desconto * qtd
} else if(qtd <= 20 && comb == "G"){
    var desconto = preço - 0.1
    var total = desconto * qtd
    alert ("O preço é de R$"+total+"." )
} else {
    var desconto = preço -  0.15
    var total = desconto * qtd
    alert  ("O preço é de R$"+total+"." )
}

//Se o cliente comprar mais de 8KG em frutas ou o valor total da compra ultrapassar R$25,00 receberá ainda um desconto de 10% sobre este total. Escreva um algoritimo para ler a quantidade
//(em Kg) de morangos e a quantidade (em Kg) de maças adquiridas e escreva o valor a ser pago pelo cliente.

var M = "Maça"
var Mrng = "Morango"
var pronto2 = false

do { var frut = prompt("Qual fruta deseja? M/Mrng")

switch (frut) {
    case "M":
        frut == "M"
        pronto2 = true
        break
    case "Mrng":
        frut == "Mrng"
        pronto2 = true
        break
} } while (pronto2 == false)

var qtd2 = parseInt(prompt("Quantos quilos?"))
if(qtd2 > 8 && frut == "Mrng" || total2 > 25){
    var desconto = 2.20 - 0.22
    var total2 = desconto * qtd2
    alert ("O preço de "+ qtd2 +"Kg de morango é de R$"+total2+"." )
} else if (qtd2 > 5 < 8 && frut == "Mrng"){
    var preço = 2.20
    var total2 = preço * qtd2
    alert ("O preço de "+ qtd2 +"Kg de morango é de R$"+total2+"." )
} else if (qtd2 <= 5 && frut == "Mrng"){
    var preço = 2.50
    var total2 = preço * qtd2
    alert ("O preço de "+ qtd2 +"Kg de morango é de R$"+total2+"." )
} else if(qtd2 > 8 && frut == "M" || total2 > 25){
    var desconto = 1.50 - 0.15
    var total2 = desconto * qtd2
    alert ("O preço de "+ qtd2 +"Kg de maçã é de R$"+total2+"." )
} else if (qtd2 > 5 < 8 && frut == "M"){
    var preço = 1.50
    var total2 = preço * qtd2
    alert ("O preço de "+ qtd2 +"Kg de maçã é de R$"+total2+"." )
} else {
    var preço = 1.80
    var total2 = preço * qtd2
    alert ("O preço de "+ qtd2 +"Kg de maçã é de R$"+total2+"." )
}

//24
var precoCarne = 0;
var nome = " "
do {var carne = prompt("Qual corte de carne deseja? \nA - File Duplo\nB - Alcatra\nC - Picanha\n")
switch(carne){
    case "A":
        precoCarne = 4.90
        nome = "File Duplo"
        break;
    case "B":
        precoCarne = 5.90
        nome = "Alcatra"
        break;
    case "C":
        precoCarne = 6.90
        nome = "Picanha"
        break;
}

} while(precoCarne == 0)

var quilos = parseInt(prompt("Quantos quilos deseja?"));
var subTotal = precoCarne * quilos;
if(quilos > 5){
    subTotal = (precoCarne + 0.90) * quilos;
}
var totalSemDesconto = subTotal;
var nomePagamento = " "
var tipoPagamento = prompt("Qual a forma de pagamento? \nA - Dinheiro\nB - Cartão Tabajara (-5%)")
if(tipoPagamento == "B"){
    subTotal = subTotal * 0.95
    nomePagamento = "Cartão Tabajara"

} else {
    nomePagamento = "Dinheiro"

}

alert(
    "\n Corte da carne: " + nome +
    "\n Quantidade: " + quilos + " Kg" +
    "\n Preço total: R$" + totalSemDesconto.toFixed(2) +
    "\n Forma de pagamento: " + nomePagamento +
    "\n Valor do desconto: R$" + (totalSemDesconto - subTotal).toFixed(2) +
    "\n Valor a pagar: R$" + subTotal.toFixed(2)
)