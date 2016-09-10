'use strict';

const app = require('../app');
const api = require('./api');


const hideModal = function (){
  $('#signInModal').modal('hide');
};

const displayGames = (data) => {
  console.log(data.games.length);
  app.user.games = data.games;
  $('#game-count').text(app.user.games.length);
};

const signInSuccess = (data) => {
  app.user = data.user;
  hideModal();
  $("#user-one").text(app.user.email);
  return api.getGames()
    .done(displayGames)
    .fail(failure);
};


const signUpSuccess = (data) => {
  app.user = data.user;
  hideModal();
  $("#user-one").text(app.user.email);
};

const failure = (error) => {
  console.error(error);
};

const changePasswordSuccess = () => {
  console.log('Passw0rd ch4nged lol');
  hideModal();
};

const signOutSuccess = () => {
  app.user = null;
  hideModal();
  $("#user-one").text("");
};

function updateCells(){
  const serverCells = app.game.cells;
  const browserCells = $('.game-cell');
  for (let i = 0; i < browserCells.length; i++){
    $(browserCells[i]).text(serverCells[i]);
  }
}

const startGame = (data) => {
  app.game = data.game;
  updateCells ();
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  startGame,
};
