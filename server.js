var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'))
app.set('port', (process.env.PORT || 5000))

var server = app.listen(app.get('port'), function() {
    console.log('Listening on port %d', server.address().port);
});
