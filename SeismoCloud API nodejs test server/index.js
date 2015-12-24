// =====================================
// Author: Rocco Musolino - @roccomuso =
// =====================================
// grab the packages we need
var express = require('express');
var app = express();
var port = 8080;

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// routes will go here


// ====================================
// POST PARAMETERS ====================
// ====================================

// POST http://localhost:8080/api/users
// parameters sent with 
app.post('/seismocloud/alive.php', function(req, res) {
  console.log('---- New Request:')
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  res.status(200).send('{"server":"www.sapienzaapps.it","ntpserver":"195.46.37.22","script":"","path":""}');
});

app.post('/seismocloud/terremoto.php', function(req, res) {
  console.log('---- New Request:')
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  res.status(200).send('5');
});

// start the server
app.listen(port);
console.log('Server started! At http://localhost:' + port);
