'use strict';

const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api');
const ui = require('./ui');
const eventsGame = require('../eventsgame');
const winlogic = require('../winlogic');
let cellIndex = 0;

const onSignUp = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);

  api.signUp(data)
    .done(ui.signUpSuccess)
    .fail(ui.failure);
};

const onSignIn = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signIn(data)
    .then(ui.signInSuccess)
    .fail(ui.failure);
};

const onChangePassword = function (event) {
  let data = getFormFields(event.target);
  event.preventDefault();

  api.changePassword(data)
    .done(ui.changePasswordSuccess)
    .fail(ui.failure);
};

const onSignOut = function (event) {
  event.preventDefault();
  api.signOut()
    .done(ui.signOutSuccess)
    .fail(ui.failure);
};

function newGame() {
  let player = 'x';
  let turnCount = eventsGame.turnCount;
  api.startNewGame()
    .done(ui.startGame)
    .fail(ui.failure);
  $("#messages").text("New game? Good luck!" );
  eventsGame.gameBoard = ["", "", "", "", "", "", "", "", ""];
}

function whenClicked(event) {
  let cellIndex = parseInt(event.target.dataset.index);
  if (eventsGame.gameBoard[cellIndex] === ""){
    eventsGame.gameBoard[cellIndex] = eventsGame.switchTurn();
    api.updateBoard();
    eventsGame.printBoard(eventsGame.gameBoard);
    eventsGame.turnCount += 1;
    winlogic.doesXWin(eventsGame.gameBoard);
    winlogic.doesOWin(eventsGame.gameBoard);
    winlogic.tieGame(eventsGame.turnCount);
  } else {
    $("#messages").text("CAN'T DO THAT" );
  }
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#change-password').on('submit', onChangePassword);
  $('#sign-out').on('submit', onSignOut);
  $('#new-game').on('click', newGame);
  $('.game-cell').each(function(){
    $(this).on('click', whenClicked);
  });
};

module.exports = {
  addHandlers,
  cellIndex,
  whenClicked,
};
