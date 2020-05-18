var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", 'ejs');

app.get('/results', function(req, res) {
    request('http://www.omdbapi.com/?s=harry+potter&apikey=thewdb', function(error, request, body) {
        if (!error && request.statusCode == 200) {
            var results = JSON.parse(body);
            res.render('results');
        }
    })
});





app.listen(3000);