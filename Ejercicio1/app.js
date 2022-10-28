var http = require('http');
var server = http.createServer();

function mensaje(petic, resp){
    resp.writeHead(200, {'content-type': 'text/plain'});
    resp.write('Hola Mundo');
    resp.end();
}
server.on('request', mensaje);

server.listem(3000, function(){
    console.log('La aplicacion esta funcionando en el puerto 5000');
});