#!/usr/bin/env node

var http = require('http'),
    fs = require('fs'),
    path = require('path');

var port = 8000;
var htmlPath = path.join(__dirname, '..', 'frontend', 'index.html');

function responseView(res, statuscode, message) {
  if (typeof message == 'object') {
    console.log('hello');
    res.end(message);
  } else {
    res.writeHead(statuscode, {'Content-Type': 'text/plain'});
    res.write(message);
    res.end();
  }
}

function main() {
  http.createServer(function (req, res) {
    if (req.method == 'POST') {
      let body = '';
      req.on('data', chunk => {
        body += chunk.toString();
      });
      req.on('end', () => {
        res.end('ok');
      });
      responseView(res, 200, 'Your input is ' + body + '.');
    } else if (req.method == 'GET') {
      if (req.url == '/') {
        fs.readFile(htmlPath, function(err, html) {
          if (err) {
            throw err;
          }
          responseView(res, 200, html);
        });
      } else {
        responseView(res, 200, 'Access to http://localhost:' + port + '/');
      }
    } else {
      responseView(res, 405, 'Method(' + req.method + ') is not allowed!!!');
    }
  }).listen(port);
}

if (require.main === module) {
  main();
} else {
  console.log('This is not module!!');
}
