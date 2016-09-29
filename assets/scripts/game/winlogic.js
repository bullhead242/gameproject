'use strict';

const eventsGame = require('./eventsgame');
let gameBoard = eventsGame.gameBoard;
let turnCount = eventsGame.gameBoard;

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
  if (turnCount === 8) {
    $('#messages').text('TIE GAME');
    $(".game-cell").hide();
  }
}

let doesXWin = function() {
  if (((gameBoard[0] === 'x') && (gameBoard[1] === 'x') && (gameBoard[2] === 'x')) ||
    ((gameBoard[3] === 'x') && (gameBoard[4] === 'x') && (gameBoard[5] === 'x')) ||
    ((gameBoard[6] === 'x') && (gameBoard[7] === 'x') && (gameBoard[8] === 'x')) ||
    // ^horizontals
    ((gameBoard[0] === 'x') && (gameBoard[3] === 'x') && (gameBoard[6] === 'x')) ||
    ((gameBoard[1] === 'x') && (gameBoard[4] === 'x') && (gameBoard[7] === 'x')) ||
    ((gameBoard[2] === 'x') && (gameBoard[5] === 'x') && (gameBoard[8] === 'x')) ||
    // ^verticals
    ((gameBoard[0] === 'x') && (gameBoard[4] === 'x') && (gameBoard[8] === 'x')) ||
    ((gameBoard[2] === 'x') && (gameBoard[4] === 'x') && (gameBoard[6] === 'x'))){
    // ^diagonals
    winnerX();
  } else {
    tieGame();
  }
};

let doesOWin = function() {
  if (((gameBoard[0] === 'o') && (gameBoard[1] === 'o') && (gameBoard[2] === 'o')) ||
    ((gameBoard[3] === 'o') && (gameBoard[4] === 'o') && (gameBoard[5] === 'o')) ||
    ((gameBoard[6] === 'o') && (gameBoard[7] === 'o') && (gameBoard[8] === 'o')) ||
    // ^horizontals
    ((gameBoard[0] === 'o') && (gameBoard[3] === 'o') && (gameBoard[6] === 'o')) ||
    ((gameBoard[1] === 'o') && (gameBoard[4] === 'o') && (gameBoard[7] === 'o')) ||
    ((gameBoard[2] === 'o') && (gameBoard[5] === 'o') && (gameBoard[8] === 'o')) ||
    // ^verticals
    ((gameBoard[0] === 'o') && (gameBoard[4] === 'o') && (gameBoard[8] === 'o')) ||
    ((gameBoard[2] === 'o') && (gameBoard[4] === 'o') && (gameBoard[6] === 'o'))) {
    // ^diagonals
    winnerO();
  } else {
    tieGame();
  }
};

module.exports = {
  doesXWin,
  doesOWin
};
