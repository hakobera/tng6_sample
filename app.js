var http = require('http'),
    env = require('./env');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello');
});
server.listen(env('PORT'), function () {
  console.log('Server is running on port %d', server.address().port);
});