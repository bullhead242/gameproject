'use strict';

const eventsGame = require('./eventsgame');
let gameBoard = eventsGame.gameBoard;
let turnCount = eventsGame.turnCount;

function winnerO() {
  $("#messages").text("PLAYER O WINS!" );
  $(".game-cell").hide();
  turnCount = 0;
}

function winnerX() {
  $("#messages").text("PLAYER X WINS!" );
  $(".game-cell").hide();
  turnCount = 0;
}

function tieGame() {
  console.log(eventsGame.turnCount);
  if ((eventsGame.turnCount%9) === 0) {
    $('#messages').text('TIE GAME');
    $(".game-cell").hide();
  }
}

let doesXWin = function(board, turnCount) {
  if (((board[0] === 'x') && (board[1] === 'x') && (board[2] === 'x')) ||
    ((board[3] === 'x') && (board[4] === 'x') && (board[5] === 'x')) ||
    ((board[6] === 'x') && (board[7] === 'x') && (board[8] === 'x')) ||
    // ^horizontals
    ((board[0] === 'x') && (board[3] === 'x') && (board[6] === 'x')) ||
    ((board[1] === 'x') && (board[4] === 'x') && (board[7] === 'x')) ||
    ((board[2] === 'x') && (board[5] === 'x') && (board[8] === 'x')) ||
    // ^verticals
    ((board[0] === 'x') && (board[4] === 'x') && (board[8] === 'x')) ||
    ((board[2] === 'x') && (board[4] === 'x') && (board[6] === 'x'))){
    // ^diagonals
    winnerX();
  }
};

let doesOWin = function(board) {
  if (((board[0] === 'o') && (board[1] === 'o') && (board[2] === 'o')) ||
    ((board[3] === 'o') && (board[4] === 'o') && (board[5] === 'o')) ||
    ((board[6] === 'o') && (board[7] === 'o') && (board[8] === 'o')) ||
    // ^horizontals
    ((board[0] === 'o') && (board[3] === 'o') && (board[6] === 'o')) ||
    ((board[1] === 'o') && (board[4] === 'o') && (board[7] === 'o')) ||
    ((board[2] === 'o') && (board[5] === 'o') && (board[8] === 'o')) ||
    // ^verticals
    ((board[0] === 'o') && (board[4] === 'o') && (board[8] === 'o')) ||
    ((board[2] === 'o') && (board[4] === 'o') && (board[6] === 'o'))) {
    // ^diagonals
    winnerO();
  }
};

module.exports = {
  doesXWin,
  doesOWin,
  tieGame,
};
