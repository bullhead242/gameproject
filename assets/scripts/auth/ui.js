'use strict';

const app = require('../app');
const api = require('./api');

const failure = () => {
  $("#messages").modal("Ooopsy Daisy!");
};

const hideModal = function (){
  $('#signInModal').modal('hide');
};

const displayGames = (data) => {
  app.user.games = data.games;
  $('#game-count').text(app.user.games.length);
};

const signInSuccess = (data) => {
  app.user = data.user;
  hideModal();
  $("#user-one").text(app.user.email);
  $("#messages").text("How's it going " + app.user.email);
  return api.getGames()
    .done(displayGames)
    .fail(failure);
};

const signUpSuccess = (data) => {
  app.user = data.user;
  hideModal();
  $("#user-one").text(app.user.email);
  $("#messages").text("Welcome, " + app.user.email);

};

const changePasswordSuccess = () => {
  $("#messages").text("Password hanged, " + app.user.email);
};

const signOutSuccess = () => {
  app.user = null;
  $("#messages").text(app.user.email + " signed out");
};

const startGame = (data) => {
  app.game = data.game;
  app.turn = 0;
  $(".game-cell").show();
  $('.game-cell').each(function(i) {
    $(this).text(app.game.cells[i]);
  });
};

module.exports = {
  failure,
  signUpSuccess,
  signInSuccess,
  changePasswordSuccess,
  signOutSuccess,
  startGame,
};
