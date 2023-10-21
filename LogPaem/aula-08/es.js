var grid = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 0 é ignorado
var player = 'X';
var computer = 'O';

function printGrid() {
    var str = '';
    for (var i = 1; i <= 9; i++) {
        str += grid[i] + '|';
        if (i % 3 === 0) {
            str = str.slice(0, -1); // Remove último '|'
            str += '\n';
        }
    }
    return str;
}

function checkWin(char) {
    var winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ];

    for (var i = 0; i < winningCombinations.length; i++) {
        if (grid[winningCombinations[i][0]] === char && grid[winningCombinations[i][1]] === char && grid[winningCombinations[i][2]] === char) {
            return true;
        }
    }
    return false;
}

function isFull() {
    for (var i = 1; i <= 9; i++) {
        if (typeof grid[i] === 'number') {
            return false;
        }
    }
    return true;
}

function computerMove() {
    var move;
    do {
        move = Math.floor(Math.random() * 9) + 1;
    } while (typeof grid[move] !== 'number');

    grid[move] = computer;
    alert('Movimento do computador:\n' + printGrid());

    if (checkWin(computer)) {
        alert('Computador ganhou!');
        return true;
    }

    if (isFull()) {
        alert('Empate!');
        return true;
    }
    return false;
}

while (true) {
    var move = parseInt(prompt("Tabuleiro:\n" + printGrid() + "\nEscolha um número de 1 a 9:"));

    if (isNaN(move) || move < 1 || move > 9 || typeof grid[move] !== 'number') {
        alert('Movimento inválido! Tente novamente.');
        continue;
    }

    grid[move] = player;

    if (checkWin(player)) {
        alert('Você ganhou!');
        break;
    }

    if (isFull()) {
        alert('Empate!');
        break;
    }

    if (computerMove()) {
        break;
    }
}