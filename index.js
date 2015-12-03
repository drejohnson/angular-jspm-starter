// Starts API server

// Hooks into babel to transpile all ES6 code to ES5 on require()
require('babel-core/register');

// Start the Web API module
require('./server/bin/www');

// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
//
// var server = app.listen(8080, function () {
//   var host = server.address().address;
//   var port = server.address().port;
//
//   console.log('Example app listening at http://%s:%s', host, port);
// });
