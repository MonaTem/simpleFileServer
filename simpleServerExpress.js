'use strict';

var fs = require('fs');
var path = require('path');
var homePath = path.join(__dirname, 'home.html');
var indexPath = path.join(__dirname, 'index.html');
var aboutPath = path.join(__dirname, 'about.html');


var express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get('/simple/:which', function(req, res) {

  var which = req.params.which;
  //var url = req.url;
  //var pars = url.parse(url,true);
  //var pathName = which;
  /*var htm = ".html";
  var Path = "Path";
  var fileName = which + htm;
  var pathName = which + Path;*/

  /*if (which == undefined || which == null) {
     var fileName = "index.html";
     fs.readFile(indexPath, 'utf8', function(err, fileName) {
           if (err) {
           console.error(err.stack);
           console.log('path is ', indexPath, 'file is ', fileName);
           return res.sendStatus(500);
           }
      res.send(fileName);

        });
  }
*/

  if (which === "home") {
     var fileName = "home.html";
     fs.readFile(homePath, 'utf8', function(err, fileName) {
           if (err) {
           console.error(err.stack);
           console.log('path is ', homePath, 'file is ', fileName);
           return res.sendStatus(500);
           }
      res.send(fileName);

        });
  }

  if (which === "index") {
     var fileName = "index.html";
     fs.readFile(indexPath, 'utf8', function(err, fileName) {
           if (err) {
           console.error(err.stack);
           console.log('path is ', indexPath, 'file is ', fileName);
           return res.sendStatus(500);
           }
      res.send(fileName);

        });
  }

  if (which === "about") {
     var fileName = "about.html";
     fs.readFile(aboutPath, 'utf8', function(err, fileName) {
           if (err) {
           console.error(err.stack);
           console.log('path is ', aboutPath, 'file is ', fileName);
           return res.sendStatus(500);
           }
      res.send(fileName);

        });
  }

 });


app.use(function(req, res) {

  var which = req.params.which;
  console.log("which is " + which);
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
