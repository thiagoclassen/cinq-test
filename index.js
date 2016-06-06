var express = require('express');  
var request = require('request');

var app = express();  
app.use('/cinq/*', function(req, res) { 
    res.header("Access-Control-Allow-Origin", "*");    
  var url = 'http://localhost:8090/rest/people';
  req.pipe(request(url)).pipe(res);
});

app.listen(3000);