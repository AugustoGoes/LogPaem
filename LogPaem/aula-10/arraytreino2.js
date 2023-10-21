var linhas = parseInt(prompt("Digite a quantidade de linhas"))
var colunas = parseInt(prompt("Digite a quantidade de colunas"))
var arrayColunas = []

for (m = 0; m < linhas; m++) {
    var linhaAtual = []
    for (n = 0; n < colunas; n++) {
        linhaAtual.push(Math.floor(Math.random() * 10))
    }
    arrayColunas.push(linhaAtual)
}
console.table(arrayColunas)