let cells = document.querySelectorAll('.row > div');
let winMsg = document.getElementById('win-msg')
let clickCount = 0;
let squareCount = 9;
let firstPlayer = 'X';
let secondPlayer = 'O';
let gameActive = true;
const statusDisplay = document.querySelector('.game--status');
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
};


function cellClicked(e) {

    //document.getElementById('layout').innerHTML
    if (e.target.textContent == "") {
        if (clickCount % 2 === 0) {
            e.target.textContent = 'X';
            clickCount++;
        } else {
            e.target.textContent = 'O';
            clickCount++;
        }
    }

    checkWin()
};

function checkWin() {

    //X wins horizontal
    if (cells[0].textContent == 'X' && cells[1].textContent == 'X' && cells[2].textContent == 'X') {
        //console.log('WINNER')
        winMsg.textContent = 'X wins!'
    } else if (cells[3].textContent == 'X' && cells[4].textContent == 'X' && cells[5].textContent == 'X') {
        //console.log('WINNER')
        winMsg.textContent = 'X wins!'
    } else if (cells[6].textContent == 'X' && cells[7].textContent == 'X' && cells[8].textContent == 'X') {
        //console.log('WINNER')
        winMsg.textContent = 'X wins!'
        //X vertical wins
    } else if (cells[0].textContent == 'X' && cells[3].textContent == 'X' && cells[6].textContent == 'X') {
        //console.log('WINNER')
        winMsg.textContent = 'X wins!'
    } else if (cells[1].textContent == 'X' && cells[4].textContent == 'X' && cells[7].textContent == 'X') {
        //console.log('WINNER')
        winMsg.textContent = 'X wins!'
    } else if (cells[2].textContent == 'X' && cells[5].textContent == 'X' && cells[8].textContent == 'X') {
        //console.log('WINNER')
        winMsg.textContent = 'X wins!'
        //X diagonal wins
    } else if (cells[0].textContent == 'X' && cells[4].textContent == 'X' && cells[8].textContent == 'X') {
        //console.log('WINNER')
        winMsg.textContent = 'X wins!'
    } else if (cells[2].textContent == 'X' && cells[4].textContent == 'X' && cells[6].textContent == 'X') {
        //console.log('WINNER')
        winMsg.textContent = 'X wins!'
        //O horizonal wins
    } else if (cells[0].textContent === "O" && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
        //console.log('WINNER')
        winMsg.textContent = 'O wins!'
    } else if (cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        //console.log('WINNER')
        winMsg.textContent = 'O wins!'
    } else if (cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        //console.log('WINNER')
        winMsg.textContent = 'O wins!'
        //O Vertical Wins
    } else if (cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        //console.log('WINNER')
        winMsg.textContent = 'O wins!'
    } else if (cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        //console.log('WINNER')
        winMsg.textContent = 'O wins!'
    } else if (cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        //console.log('WINNER')
        winMsg.textContent = 'O wins!'
        //O diagonal win
    } else if (cells[0].textContent === "O" && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        //console.log('WINNER')
        winMsg.textContent = 'O wins!'
    } else if (cells[2].textContent === 'O' && cells[4].textContent === 'O' && cells[6].textContent === 'O') {
        //console.log('WINNER')
        winMsg.textContent = 'O wins!'
    } else if (clickCount === 9) {
        //winMsg.textContent = 'DRAW'
        alert('DRAW');
        gameReset()
    }

}


function gameReset() {
    gameActive = true;
    firstPlayer = 'X';
    secondPlayer = 'O';
    winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    statusDisplay.innerHTML = firstPlayer(), secondPlayer();
    document.querySelectorAll('.row > div')
        .forEach(cell => cell.innerHTML = '');
}
   // HINTS!
// if else statements are your friend //