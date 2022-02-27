var http = require('http');
var fs = require('fs');
const bodyParser = require('body-parser').urlencoded({extended: true});
const request = require('request');

var express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.render("index", {display: "none"});
});

app.get('/search', bodyParser, (req, res) => {
    var item = req.query.search;
    request("http://localhost:5000/" + item, { json: true }, (err, r, body) => {
        if (err) { return console.log(err); }
        var d = "none";
        if (r.body == "Positive") {
            d = "Positive";
        }
        else if (r.body == "Negative") {
            d = "Negative";
        }
        res.render("index", {display: d});
    });
});

port = 8080
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname));