/**
 * Created by 5 on 2016/8/22.
 */
var express = require( './express' );
var app = express();



app.get('/', function( req, res ){
    res.end("Welcome Home!");
});


app.get('/hello', function( req, res ){
    res.end("hello");
});

app.get('/world', function( req, res){
    res.end( "world" );
});

var http = require( 'http');

http.createServer( app.start ).listen( 8080 );