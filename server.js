var express = require('express');
var app = express();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req,res,next ){
    console.log('Request url:' + req.url);
    next();
});

app.get('/', function (req, res){
    res.render('index');
});

app.get('/person/:name', function(req, res){
    res.render('person', {NAME: req.params.name, Msg: req.query.msg, Times: req.query.times});
});


app.listen(port);