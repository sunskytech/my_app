var express = require('express');
var path = require('path');
var app = express();

console.log('path to ::: ');
console.log(path);

app.use(express.static(path.join(__dirname, 'public')));

console.log('after :: to to ');
console.log('after ::');
console.log(path);

console.log(path.join(__dirname, 'public'));

//app.use(express.static(__dirname + '/public'));

console.log(__dirname);


/*
app.get('/index.do', function(req, res){
  res.send('Hello World!');
});
*/

app.listen(3000, function(){
  console.log('Server on!');
});
