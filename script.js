/* Store game status element*/
const statusDisplay = document.querySelector('game-status');


/* declare variable that will track game state*/
/* using game active to pause the game in case of an end scenario */
let gameActive = true;
 

/* store current player*/
let currentPlayer = "X";
/*Store current game status , form of empty strings will aloow track played cells and validate game */

let gameState =["","","","","","","","",""];
/* messages for user */


const win = () => `Player ${currentPlayer} has won!`;
const draw = () => `Game has ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

/*inital message to see whos turn it is */


statusDisplay.innerHTML = currentPlayerTurn();
function handleCellPlayed(){

}

function handlePlayerChange(){


}

function handleResultValidiation(){

}

function handleCellClick(){

}

function handleRestartGame(){

}
/* Event listeners to actual cells */


document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);
