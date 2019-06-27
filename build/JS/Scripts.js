var a = 34;
console.log(a);

// sript js

var m2 = require('./script');
var _ = require('./node_modules/underscore');
exports.b = 2;
a = exports.a;
console.log(a);

console.log(_);

var http = require('http');

var server = http.createServer(function(request, response) {
  console.log('got a request');
  response.write('hi');
  response.end();
});

server.listen(3000);
