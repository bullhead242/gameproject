'use strict';

const app = require('../app');
const eventsGame = require('../eventsgame');
let turnCount = eventsGame.turnCount;
let gameBoard = eventsGame.gameBoard;

const signUp = (data) => {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data:data
  });
};

const signIn = (data) => {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data:data
  });
};

const changePassword = (data) => {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data:data
  });
};

const signOut = () => {
  return $.ajax({
      url: app.host + /sign-out/ + app.user.id,
      method: 'DELETE',
      headers: {
        Authorization: 'Token token=' + app.user.token
      }
  });
};

const getGames = () => {
  return $.ajax({
    url: app.host + '/games/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

const startNewGame = () => {
  let turnCount = 0;
  gameBoard = ["", "", "", "", "", "", "", "", ""];
    turnCount = 0;
  return $.ajax({
    url: app.host + '/games/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
      },
      data: {
        game: "",
          "over": false,
            }
  });
};

const gameOver = function () {
  let gameId = app.game.id;
  return $.ajax({
      method: 'PATCH',
      url: app.host + '/games/' + gameId,
      headers: {
      Authorization: 'Token token=' + app.user.token,
      },
      data: {
           "game": {
              "over": true
                    }
            }
      });
  };

const updateBoard = () => {
  let gameId = app.game.id;
  return $.ajax({
    url: app.host + '/games/' + gameId,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: {
      "game": {
        "cells": {
          "index": app.game.cells,
          "value": eventsGame.gameBoard,
                  }
              }
          }
        }
  );};

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  getGames,
  startNewGame,
  updateBoard,
  gameOver,
  turnCount,
};
