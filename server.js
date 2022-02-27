var http = require('http');
var fs = require('fs');
const bodyParser = require('body-parser').urlencoded({extended: true});

var express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.render("index");
});

app.get('/search', bodyParser, (req, res) => {
    var item = req.query.search;
    console.log(item);
    res.redirect("/");
});

port = 8080
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

