var express = require('express');
var morgan = require('morgan');
var app = express();
var pjson = require('./package.json');
//

//setup logging
app.use(morgan('dev'));

// Constants
const PORT = 3000;
const HOST = '0.0.0.0' || 'localhost';
const by = 'https://roxs.295devops.com'

app.get('/getenv/*', function (req, res) {
  const parts=req.url.split('/');
  var msg ='';

  if(parts[2]){
    var variable=parts[2]
    msg=`\nENVIRONMENT ${variable}\n`+process.env[variable];
  } else {
    
    msg='\nENVIRONMENT VALUES\n'+JSON.stringify(process.env,null,4);
  }
  
  res.send(req.url+msg);
  console.log(msg);
});

app.get('/*', function (req, res) {
  res.send('Hello RoxsRoss!!!! Version to'+req.url+'<hr>package json:'+pjson.version);
});

app.listen(PORT, HOST)

console.log(`Example app listening on http://${HOST}:${PORT} or http://localhost:${PORT} !`);
