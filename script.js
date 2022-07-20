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

function handleCellClick(clickedCellEvent){
    /*save clicked html element  in variable*/

    const clickedCell = clickedCellEvent.target;
    /** Grab 'data-cell-index' attribute from clicked cell to see where that cell is within the gameboard
     * returns a string an d need to parse to get integer
     */
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));


    /** Check whether the call has been played or the game is paused. If either is true ignore click */
    if (gameState[clickedCellIndex]!== "" || !gameActive){
        return;
    
}

handleCellPlayed(clickedCell,clickedCellIndex);
handleResultValidiation();
}

function handleCellPlayed(clickedCell,clickedCellIndex){
    /**Update internal gamestate and UI to reflext played move  */
    gameState[clickedCellIndex]= currentPlayer;
    clickedCell.innerHTML = currentPlayer;

}

const winningConditions = [
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6]

];

function handleResultValidiation(){
    let roundWon = false;
    for(let i=0; i<=7;i++){
        const winCondition=winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b ==='' || c === ''){
            continue;
        }
        if (a === b && b === c){
            roundWon = true; 
            break
        }

        if (roundWon){
            statusDisplay,innerHTML = winningMessage();
            gameActive = false;
            return;

        }

    }
    /**see if game board has any values left to populate */

    let roundDraw = !gameState.includes("");
    if(roundDraw){
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }
}
