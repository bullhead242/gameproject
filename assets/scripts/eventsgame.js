'use strict';

let player = 'o';
let turnCount = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

let switchTurn = function() {
    // turnCount += 1;
   if (player === 'x') {
     $("#messages").text("Hey it\'s player " + player +"\'s turn!");
     player = 'o';
     return player;
   } else {
     $("#messages").text("Hey it\'s player " + player +"\'s turn!");
     player = 'x';
     return player;
   }
 };

function printBoard(board) {
  $("#box-A").text(board[0]);
  $("#box-B").text(board[1]);
  $("#box-C").text(board[2]);
  $("#box-D").text(board[3]);
  $("#box-E").text(board[4]);
  $("#box-F").text(board[5]);
  $("#box-G").text(board[6]);
  $("#box-H").text(board[7]);
  $("#box-I").text(board[8]);
}

module.exports = {
  printBoard,
  switchTurn,
  gameBoard,
  turnCount
};
