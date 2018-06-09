// server.js
// where your node app starts

// init project
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var helmet = require('helmet');

require('dotenv').config();
var PORT = process.env.PORT || 8080;

// set the view engine to ejs
//app.set('view engine', 'ejs');

app.use(helmet());
app.use(helmet.noCache());

//https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
    //deal with img-src access and other for dev builds.
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
//app.use(express.static('public'));
app.use(express.static('build/html5'));
app.use(express.static('build/html5-resources'));

// http://expressjs.com/en/starter/basic-routing.html
//app.get("/", function (request, response) {
  //response.sendFile(__dirname + '/views/index.html');
  //response.render('index');
//});

// listen for requests :)
var listener = app.listen(PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
  //http://localhost:3000/
  //console.log(listener.address());
});