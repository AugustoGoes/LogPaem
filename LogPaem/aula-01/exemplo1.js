// Exemplos de variáveis "roberto" e "joão"
var roberto = 32;
var joao = 55;

var semvalor;
var resultado = roberto + joao;

// Váriaveis para conversões
var km1 = 8;
var milhas = 61;
var conversor = 0.6;
var resultado2 = km1*conversor;
var resultado3 = milhas/conversor;

// Cálculo do triângulo
var base = 20;
var altura = 30;
var produto = base*altura;
var divisao = 2;
var resultado4 = produto/2;

// Nome e sobrenome
var nome = "Cleber ";
var sobrenome = "da Silva";
var nomecompleto = nome + sobrenome;

// Reais para dólares
var reais = 120.00;
var dolares = reais/4.9

//Separação Estética para a aula
console.log ("%c                    Exercícios                        Aula-01", 'background: #222; color: #fcd056');

// Valor da variável "roberto"
console.log ("%c-------------------------------------------------------------", 'background: #222; color: #fcd056');
console.log ("%c valor da variável roberto - " + roberto, 'background: #222; color: #bada55');
console.log ("%c-------------------------------------------------------------", 'background: #222; color: #fcd056');

// Resultados das conversões
console.log ("%c 8Km para milhas:", 'background: #222; color: #bada55');
console.log ("%c - " + resultado2 + " milhas", 'background: #222; color: #FFFFFF');
console.log ("%c-------------------------------------------------------------", 'background: #222; color: #fcd056');
console.log ("%c 61 milhas para Km:", 'background: #222; color: #bada55');
console.log ("%c - " + resultado3 + " Km", 'background: #222; color: #FFFFFF');
console.log ("%c-------------------------------------------------------------", 'background: #222; color: #fcd056');

// Resultado do cálculo do triângulo
console.log ("%c Área do triângulo isóceles com 30m de altura e 20m de base:", 'background: #222; color: #bada55');
console.log ("%c - A área é de " + resultado4 + " metros", 'background: #222; color: #FFFFFF');
console.log ("%c-------------------------------------------------------------", 'background: #222; color: #fcd056');

// Nome completo
console.log ("%c Nome completo:", 'background: #222; color: #bada55');
console.log ("%c - " + nomecompleto, 'background: #222; color: #FFFFFF');
console.log ("%c-------------------------------------------------------------", 'background: #222; color: #fcd056');

// Conversão real para dolar
console.log ("%c R$" + reais.toFixed(2) + " em dólares são:", 'background: #222; color: #bada55');
console.log ("%c - $" + dolares.toFixed(2), 'background: #222; color: #FFFFFF');
console.log ("%c-------------------------------------------------------------", 'background: #222; color: #fcd056');

// console.log(var);
// console.log("resultado - " + roberto + joao);
// #FF0000

// AULA 02/03
// João e as comidinha aí
var pastel = 10;
var cachorroQuente = 10;
var pipoca = 5;
var refri = 3.5;

var joao = 50;
// Quanto ele gastou no total?
var gasto = pastel + refri;

// Quanto sobrou?
var sobra = joao - gasto;

// console.log (gasto);
// console.log (sobra);

// Determine se João tem dinheiro suficiente pra comprar o cachorro quente.
var podeComprar = sobra - cachorroQuente >= 0;

// Se possível adicione um cachorro-quente aos gastos do João.
gasto = gasto + cachorroQuente;

// Determine quantas unidades de pipoca é possível comprar com o valor gasto por João.
var qtdPipoca = gasto/pipoca;

// Exibir o gasto total de joão e quanto sobrou.
alert ("João gastou R$" + gasto);
sobra = joao - gasto;
alert ("Sobrou para João R$" + sobra)

