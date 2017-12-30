'use strict';

var path = require('path');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/', function(req, res) {
  var url = req.url;
    });

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
