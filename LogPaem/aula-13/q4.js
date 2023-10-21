// // 4. Crie uma função que retorne a quantidade que cada palavra se repete.
function conta(texto){
 const palavras = texto.split(/\s+/); 

 const contagem = {};

 for (const palavra of palavras){
    if(contagem[palavra]){
        contagem[palavra]++;
    } else {
        contagem[palavra] = 1;
    }
 }
 return contagem;
}


const texto = "Crie uma função que retorne a quantidade que cada palavra se repete.";
const contagemPalavras = conta(texto);

console.log("Texto = ", contagemPalavras);

