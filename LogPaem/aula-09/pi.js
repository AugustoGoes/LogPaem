var n = prompt("Insira um numero para saber se ele é primo.")
cont = 0
for (i = 1; i <= n; i++) {
    if (n % i == 0)
        cont = cont + 1
}
if (cont == 2) {
    alert("Esse " + n + " é primo.")
}
else {
    alert("Esse " + n + " não é primo.")
}


var n = prompt("Insira um numero para saber se ele é primo.")
cont = 0
for (i = 1; i < n; i++) {
    if (n % i == 0)
        cont = cont + i
}
if (cont == n) {
    alert("Esse " + n + " é perfeito.")
}
else {
    alert("Esse " + n + " não é perfeito.")
}
