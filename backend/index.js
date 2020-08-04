var http = require('http'), require('url');

function main(){
  let port = 8000

  http.createServer(function(request, response){
    const query = url.parse(request.url)
    console.log(request);
  }).listen(port);
}

main()
