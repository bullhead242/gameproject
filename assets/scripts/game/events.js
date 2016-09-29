'use strict'

function whenClicked(event) {
  let cellIndex = parseInt(event.target.dataset.index);
  if (eventsGame.gameBoard[cellIndex] === ""){
    eventsGame.gameBoard[cellIndex] = eventsGame.switchTurn();
    api.updateBoard();
    eventsGame.printBoard();
    winlogic.doesXWin();
    winlogic.doesOWin();
  } else {
    $("#messages").text("CAN'T DO THAT" );
  }
}

'use strict';

let player = 'o';
let turnCount = 0;
let gameBoard = ["", "", "", "", "", "", "", "", ""];

let switchTurn = function() {
    turnCount += 1;
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

function printBoard() {
  $("#box-A").text(gameBoard[0]);
  $("#box-B").text(gameBoard[1]);
  $("#box-C").text(gameBoard[2]);
  $("#box-D").text(gameBoard[3]);
  $("#box-E").text(gameBoard[4]);
  $("#box-F").text(gameBoard[5]);
  $("#box-G").text(gameBoard[6]);
  $("#box-H").text(gameBoard[7]);
  $("#box-I").text(gameBoard[8]);
}

module.exports = {
  printBoard,
  switchTurn,
  gameBoard,
  turnCount
};
