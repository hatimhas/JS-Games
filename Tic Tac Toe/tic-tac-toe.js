/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
// missed ({sigint: true});
const prompt = require('prompt-sync')({sigint: true});

let board = {
    1: ' ', 2: ' ', 3: ' ',
    4: ' ', 5: ' ', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
};

// TODO: update the gameboard with the user input
function markBoard(position, mark) {
    board[position]=mark;
}

// TODO: print the game board as described at the top of this code skeleton
function printBoard() {
    let drawBoard = {
        1: '1',
        2: '2',
        3: '3',
        4: '4',
        5: '5',
        6: '6',
        7: '7',
        8: '8',
        9: '9'
    };

    
    for (let i in board){
        if(board[i] != ' '){
        
            drawBoard[i] = board[i];
        }
    }
    console.log( '\n' +
    
    `${drawBoard[1]} | ${drawBoard[2]} | ${drawBoard[3]} \n` +

    '---------- \n'+

    `${drawBoard[4]} | ${drawBoard[5]} | ${drawBoard[6]} \n`+

    '---------- \n'+

    `${drawBoard[7]} | ${drawBoard[8]} | ${drawBoard[9]} \n`);

}


// TODO: check for wrong input, this function should return true or false.
// true denoting that the user input is correct
// you will need to check for wrong input (user is entering invalid position) or position is out of bound
// another case is that the position is already occupied
function validateMove(position) {
    if ((position >=1 && position<=9)&& board[position] == ' ' ){
        return true;
    }else{
        return false;
    }
}

// TODO: list out all the combinations of winning, you will neeed this
// one of the winning combinations is already done for you
let winCombinations = [
    [1, 2, 3],[1, 4, 7],
    [1, 5, 9],
    [4, 5, 6],
    [7, 8, 9],
    [3, 6, 9],
    [3, 5, 7],
    [2, 5, 8]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
function checkWin(player) {
    for (let combination of winCombinations) {
        if (board[combination[0]] == player && board[combination[1]] == player && board[combination[2]] == player) {
            return true;
        }
    }
    return false;
}

// TODO: implement a function to check if the game board is already full
// For tic-tac-toe, tie bascially means the whole board is already occupied
// This function should return with boolean
function checkFull() {
    for (let x in board) {
        if (board[x] == ' ') {
            // not yet finished!
            return false;
        }
    }
    return true;
}

// *****************************************************
// Copy all your code/fucntions in Part 1 to above lines
// (Without Test Cases)
// *****************************************************


// TODO: the main part of the program
// This part should handle prompting the users to put in their next step, checking for winning or tie, etc
function playTurn(player) {
   let move = prompt(player+"'s turn, Input your location");
    while (validateMove(move) == false ){
        console.log('Wrong Input, Try again')
        move = prompt(player+"'s turn, Input your location");
    }
    markBoard(move,player);

    if (checkWin(player) || checkFull())
     winnerIdentified = true;
}
function replay(){
    let reset = prompt('Do you want to restart? Yes or No')
   while(reset){
    if (reset.toLowerCase() == 'yes' )
    { board = {
        1: ' ', 2: ' ', 3: ' ',
        4: ' ', 5: ' ', 6: ' ',
        7: ' ', 8: ' ', 9: ' '
    }
    winnerIdentified = false;
    break;}
    else if (reset.toLowerCase() == 'no')
    {console.log("Thanks for Playing!")
    winnerIdentified = true;
    break;}
    else 
    console.log("Wrong input, Try Again!")
    reset = prompt('Do you want to restart? Yes or No')  
}
}
// entry point of the whole program
console.log('Game started: \n\n' +
    ' 1 | 2 | 3 \n' +
    ' --------- \n' +
    ' 4 | 5 | 6 \n' +
    ' --------- \n' +
    ' 7 | 8 | 9 \n');

    let winnerIdentified = false
    let currentTurnPlayer = 'X'
while (!winnerIdentified){
    playTurn(currentTurnPlayer);
    // feel free to add logic here if needed, e.g. announcing winner or tie
    if (checkWin(currentTurnPlayer) == true){
        console.log("Congrats "+currentTurnPlayer+" Wins")
        replay()
    }
    else if (checkFull()== true){
        console.log("Board is full,Tie Situation,Restart!")  
        replay()
    }
    else if (currentTurnPlayer == 'X'){
         currentTurnPlayer = 'O'
    }
    else if (currentTurnPlayer == 'O')
         currentTurnPlayer = 'X'
    
    printBoard();
}



// Bonus Point: Implement the feature for the user to restart the game after a tie or game over
