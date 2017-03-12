var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){

  var page = 'index.html';
  if(request.url != '/'){
    page = request.url+'.html';
  }

  fs.readFile('./public/' + page, function(err, data){
    if(err){
      throw err;
    }
    response.writeHead(200,{'Content-type' : 'text/html; charset=UTF-8'});
    response.write(data);
    response.end();
  })

});

server.listen(3000);
