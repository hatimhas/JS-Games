/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
Expand
tic-tac-toe_Part1.js
6 KB
Abdul Mannan — Yesterday at 10:30 AM
/*  A simple Tic-Tac-Toe game
Players 'X' and 'O' take turn inputing their position on the command line using numbers 1-9
1 | 2 | 3
---------
4 | 5 | 6
---------
7 | 8 | 9
*/

// importing user import library
const prompt = require('prompt-sync')({sigint: true});
const assert = require('assert');

// The board object used to save the current status of a gameplay
let board = {
    1: ' ',
    2: ' ',
    3: ' ',
    4: ' ',
    5: ' ',
    6: ' ',
    7: ' ',
    8: ' ',
    9: ' '
};

// TODO: update the gameboard with the user input
/*
We have to pass two parameteres here
First one is the position from 1-9 
Second parameter is the mark X/O
*/
function markBoard(position, mark) {
    //  position = prompt('Please enter the position');
    //  mark = prompt('Please enter your mark X/O?')
    board[position]=mark;
}

// TODO: print the game board as described at the top of this code skeleton
// Will not be tested in Part 1
/*
In this function we have to draw he updated board and will print it
Steps involved are follows:
1: Declare the array same as board array but fill it with index numbers
2: Check if origional board index is not empty 
3: pick the mark from there and assign to the new array at the same position 
4: print the newly updated array
*/
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

    
    // we need to execute the loop over board array
    for (let i in board){
        if(board[i] != ' '){
            //  Check if origional board index is not empty  
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
// position is an input String
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
    [1, 2, 3],
    [1,4,7],
    [1,5,9],
    [4,5,6],
    [7,8,9],
    [3,6,9],
    [3,5,7],
    [2,5,8]
];

// TODO: implement a logic to check if the previous winner just win
// This method should return with true or false
/*
Steps are:
1: Run loop for all the possible combinations in winCombinations array
2: you need to check these combinations with the board array one by one
3: return true in case we found the correct combination
4: return false in case we havn't found the correct combination
*/
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
/*
we are simple checking if our origional baord array is full or not
steps are:
1:Run the loop over board array
2: check if that specific value is empty or not inside the baord array
3: If it is empty then we will return false (because array 1is not yet full)
4: Else we will return true (array is empty)
*/
function checkFull() {
    for (let x in board) {
        if (board[x] == ' ') {
            // not yet finished!
            return false;
        }
    }
    return true;
}
// Main Program, a Tester for your functions
// It does not cover the printBoard() function.

// If you pass all the tests, you should see a message 'All tests passed! Congratulations!'
// without any error

// Do Not modify the lines below!

// Test validateMove()
assert.strictEqual(validateMove(0), false, "validateMove() didn't work as expected with input : 0");
assert.strictEqual(validateMove(10), false, "validateMove() didn't work as expected with input : 10");
assert.strictEqual(validateMove('Hello'), false, "validateMove() didn't work as expected with input : 'Hello'");
assert.strictEqual(validateMove('1'), true, "validateMove() didn't work as expected with input : 1");
assert.strictEqual(validateMove('5'), true, "validateMove() didn't work as expected with input : 5");
assert.strictEqual(validateMove('9'), true, "validateMove() didn't work as expected with input : 9");

let tsetBoard = {
    1: 'X', 2: 'O', 3: 'X',
    4: 'O', 5: 'X', 6: 'O',
    7: ' ', 8: ' ', 9: ' '
};

// Test markBoard()
markBoard(1, 'X');
markBoard(2, 'O');
markBoard(3, 'X');
markBoard(4, 'O');
markBoard(5, 'X');
markBoard(6, 'O');

assert.deepStrictEqual(board, tsetBoard, "markBoard() didn't work as expected");

assert.strictEqual(validateMove('1'), false, "validateMove() didn't work as expected with duplicated input : 1");

// Test checkWin()
assert.strictEqual(checkWin('X'), false, "checkWin() didn't work as expected with input : 'X'");
tsetBoard[7] = 'X'
markBoard(7, 'X');
assert.deepStrictEqual(board, tsetBoard, "markBoard() didn't work as expected with input (7, 'X')");
assert.strictEqual(checkWin('X'), true, "checkWin() didn't work as expected with input : 'X'");


board = {
    1: 'X', 2: ' ', 3: ' ',
    4: 'O', 5: 'X', 6: ' ',
    7: 'O', 8: ' ', 9: 'X'
}
assert.strictEqual(checkWin('X'), true, "checkWin() didn't work as expected with input : 'X'");
assert.strictEqual(checkWin('O'), false, "checkWin() didn't work as expected with input : 'O'");

board = {
    1: 'O', 2: ' ', 3: ' ',
    4: 'X', 5: 'O', 6: ' ',
    7: 'X', 8: 'X', 9: 'O'
}
assert.strictEqual(checkWin('O'), true, "checkWin() didn't work as expected with input : 'O'");
assert.strictEqual(checkWin('X'), false, "checkWin() didn't work as expected with input : 'X'");

board = {
    1: 'X', 2: 'O', 3: 'O',
    4: 'X', 5: ' ', 6: ' ',
    7: 'X', 8: ' ', 9: ' '
}
assert.strictEqual(checkWin('X'), true, "checkWin() didn't work as expected with input : 'X'");
assert.strictEqual(checkWin('O'), false, "checkWin() didn't work as expected with input : 'O'");

board = {
    1: 'X', 2: 'O', 3: 'X',
    4: 'X', 5: 'O', 6: ' ',
    7: ' ', 8: 'O', 9: ' '
}
assert.strictEqual(checkWin('O'), true, "checkWin() didn't work as expected with input : 'O'");
assert.strictEqual(checkWin('X'), false, "checkWin() didn't work as expected with input : 'X'");

board = {
    1: 'X', 2: 'X', 3: 'X',
    4: 'O', 5: 'O', 6: ' ',
    7: ' ', 8: ' ', 9: ' '
}
assert.strictEqual(checkWin('X'), true, "checkWin() didn't work as expected with input : 'X'");
assert.strictEqual(checkWin('O'), false, "checkWin() didn't work as expected with input : 'O'");

board = {
    1: 'X', 2: 'X', 3: ' ',
    4: 'O', 5: 'O', 6: 'O',
    7: 'X', 8: ' ', 9: ' '
}
assert.strictEqual(checkWin('O'), true, "checkWin() didn't work as expected with input : 'O'");
assert.strictEqual(checkWin('X'), false, "checkWin() didn't work as expected with input : 'X'");


// Test checkFull()
assert.strictEqual(checkFull(), false, "checkFull() didn't work as expected");
board = {
    1: 'O', 2: 'X', 3: 'O',
    4: 'O', 5: 'X', 6: 'X',
    7: 'X', 8: 'O', 9: 'X'
}
assert.strictEqual(checkFull(), true, "checkFull() didn't work as expected");

console.log("All tests passed! Congratulations!");
