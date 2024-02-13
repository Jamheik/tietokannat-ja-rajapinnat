var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
module.exports = app;

app.get('/esim',
    function(request,response){
        response.send('esimerkki');
        console.log('esimerkki');
    }
);

app.get('/nimi/:nimi',
    function(request,response){
        response.send('nimeni on ' +  request.params.nimi);
        console.log('esimerkki');
    }
);

app.get('/nimi/:nimi/:sukunimi',
    function(request,response){
        response.send('nimeni on ' +  request.params.nimi + " " + request.params.sukunimi);
        console.log('esimerkki');
    }
);

app.use(
    function(req,res,next){
        console.log('The common middleware called');
        next();
    }
);

app.post('/',
    function(request,response){
        response.send(request.body.fname + ' '+  request.body.lname);
        console.log(request.body.fname + ' '+  request.body.lname);
    }
);
