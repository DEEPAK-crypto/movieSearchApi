var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", 'ejs');
app.use(express.static("public"));

app.get('/', function(req, res) {
    res.render('index');
});
app.get('/results', function(req, res) {
    var name = req.query.search;
    var url = 'http://www.omdbapi.com/?s=' + name + '&apikey=thewdb';
    request(url, function(error, request, body) {
        if (!error && request.statusCode == 200) {
            var data = JSON.parse(body);
            res.render('results', { data: data });

        }
    })
});





const PORT = process.env.PORT || 3000;
app.listen(PORT);