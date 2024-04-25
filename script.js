let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Take index as input
function cellClicked(index) {
    if (!board[index]) {
        board[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;
        if (checkWinner()) {
            alert(currentPlayer + ' wins!');
            resetBoard();
        } else if (board.every(cell => cell !== '')) {
            alert('It\'s a draw!');
            resetBoard();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}
//Track winner
function checkWinner() {
    return winningCombinations.some(combination => {
        return combination.every(index => board[index] === currentPlayer);
    });
}

function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
}