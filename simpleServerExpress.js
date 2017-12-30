'use strict';

var fs = require('fs');
var path = require('path');
var homePath = path.join(__dirname, 'home.html');
var aboutPath = path.join(_dirname, 'about.html');
var indexPath = path.join(_dirname, 'index.html');

var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/simple/', function(req, res) {

  const url = req.url;
  const pars = url.parse(url);
  var pathName = pars.pathName;
  var fileName = pathname + '.html';


     fs.readFile(pathName, 'utf8', function(err, fileName) {
           if (err) {
           console.error(err.stack);
           return res.sendStatus(500);
           }
      res.send(fileName);   

        });
 });


app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
