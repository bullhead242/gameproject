'use strict';

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// use require without a reference to ensure a file is bundled
require('./example');
const authEvents = require('./auth/events.js');

// On document ready
$(() => {
// $("#toctitle").on('click', function(event){
//   console.log("event is ", event);

  authEvents.addHandlers();
});
