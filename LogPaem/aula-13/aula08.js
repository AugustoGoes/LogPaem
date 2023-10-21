var nLimite = Number(prompt("Digite um numero para conseguir os primos antecessores"))
var lista = []
for(let i = 2; i <= nLimite; i++){
    lista.push(i);
}
removeMultiplosDe(lista, 2)
removeMultiplosDe(lista, 3)
removeMultiplosDe(lista, 5)
removeMultiplosDe(lista, 7)
removeMultiplosDe(lista, 11)
removeMultiplosDe(lista, 13)
removeMultiplosDe(lista, 17)
removeMultiplosDe(lista, 19)
console.log(lista)












function removeMultiplosDe(listaInteira, multiplo = 2) {
    for(let i = 0; i < listaInteira.length; i++) {
        if(listaInteira[i] % multiplo == 0 && listaInteira[i] != multiplo) {
            listaInteira.splice(i, 1);
        }
    }
}























