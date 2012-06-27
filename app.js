var WebSocketServer = require('ws').Server
  , wss = new WebSocketServer({ port: 3000 });

wss.on('connection', function (ws) {
  ws.on('message', function (message) {
    ws.send(message);
  });
});
