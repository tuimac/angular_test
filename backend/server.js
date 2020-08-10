#!/usr/bin/env node

var http = require('http'),
    fs = require('fs'),
    path = require('path');

var port = 8000;
var htmlPath = path.join(__dirname, 'index.html');

function responseView(res, statuscode, message) {
  if (typeof message == 'object') {
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
      if (req.url == '/api') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          responseView(res, 200, 'Your input is ' + body + '.'); 
        });
      } else {
        responseView(res, 404, 'Not found.');
      }
    } else if (req.method == 'GET') {
      if (req.url == '/') {
        fs.readFile(htmlPath, (err, html) => {
          if (err) {
            responseView(res, 200, 'Throw POST data to http://<host IP address>:' + port + '/api');
          }
          responseView(res, 200, html);
        });
      } else {
        responseView(res, 200, 'Access to http://<host IP address>:' + port + '/');
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
