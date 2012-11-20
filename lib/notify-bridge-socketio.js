/*
 * notify-bridge-socketio
 * https://github.com/xat/notify-bridge-socketio
 *
 * Copyright (c) 2012 Simon Kusterer
 * Licensed under the MIT license.
 */

exports['notify-bridge-module'] = true;

var NotifyBridgeSocketio = function(eventBus, program) {
  'use strict';
  var io = require('socket.io').listen(parseInt(program.socketioPort));
  io.set('log level', 1);
  eventBus.on('rpc', function(rpc) {
    io.sockets.emit(rpc.method, rpc);
  });
};

exports.init = function(eventBus, program) {
  'use strict';

  return new NotifyBridgeSocketio(eventBus, program);
};