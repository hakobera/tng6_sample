var http = require('http');

var server = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('hello tng6');
});
server.listen(3000, function () {
  console.log('Server is running on port %d', server.address().port);
});
