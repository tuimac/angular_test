var http = require('http');

var port = 8000

http.createServer(function (req, res) {
  if (req.method == 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      res.end('ok');
    });
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Your input is ' + body + '.');
    res.end();
  } else if (req.method == 'GET') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Success to send GET!!');
    res.end();
  } else {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.write('Method(' + req.method + ') is not allowed!!!');
    res.end();
  }
}).listen(port);
