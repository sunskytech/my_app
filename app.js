var express = require('express');

var app = express();

app.get('/index.do', function(req, res){
  res.send('Hello World!');
});

app.listen(3000, function(){
  console.log('Server on!');
});
