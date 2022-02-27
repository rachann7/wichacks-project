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
    console.log(item);
    request("http://localhost:5000", { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        console.log(res.body);
});
    res.render("index", {display: res.body});
});

port = 8080
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

