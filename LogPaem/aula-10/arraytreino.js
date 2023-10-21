const numeros = []
for (let i = 0; i < 10; i++){
    numeros.push (Math.floor(Math.random()*10))
}
console.log(numeros)
var input = parseInt(prompt("De qual número deseja saber a posição?"))
for (let i = 0; i < 10; i++)
    {
    if (input == numeros[i]){
        alert (numeros[input] + " está na posição: " + input)
    } else{
        alert ("Input de posição inválido. Posição não encontrada.")
    }
    
}