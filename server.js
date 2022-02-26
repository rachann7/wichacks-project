var http = require('http');
var fs = require('fs');

var express = require('express')
const app = express(); 

app.get('/', (req, res) => {
    res.render("index");
});

port = 8080
app.listen(port, () => {
    console.log(`Now listening on port ${port}`);
});

app.set('view engine', 'ejs');
app.use(express.static(__dirname));