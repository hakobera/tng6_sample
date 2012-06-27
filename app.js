var http = require('http');

function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 2) + fibonacci(n - 1);
  }
}

var server = http.createServer(function (req, res) {
  var num = parseInt(req.url.substring(1), 10);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('' + fibonacci(num));
});
server.listen(3000, function () {
  console.log('Server is running on port %d', server.address().port);
});

process.on('uncaughtException', function (err) {
  console.log(err);
});