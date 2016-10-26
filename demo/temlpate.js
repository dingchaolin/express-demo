var express = require('express');
var fs = require( 'fs' );
var path = require('path');
var app = express();

app.set('view engine','ejs');
app.set('views',__dirname );

app.use( function( req, res, next){
    /*
    res.myrender = function( tmpl, data ){
        fs.readFile( path.join( __dirname,tmpl), 'utf8', function( err, result ){
            result = result.replace(/<%=(\w)%>/, function(input, group1){
                return data[group1];
            });
            res.setHeader('Content-Type','text/html' );
            res.send( result );
        });
    };*/
    next();
});

app.get('/',function(req, res ){
    res.render('index.ejs',{title:'dingchaolin'});
});

app.listen(8080);
