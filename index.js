var express = require('express');
var app = express();
var http = require('http').Server(app);
require('./routes/routes.js')(app);


app.use("/Bootstrap", express.static(__dirname + '/node_modules/bootstrap/dist/css/'));
app.use("/CommonCss", express.static(__dirname + '/public/'));
app.use("/Index", express.static(__dirname + '/public/index/'));
app.use("/Angular", express.static(__dirname + '/node_modules/angular/'));
app.use("/Components", express.static(__dirname + '/public/Components/'));
app.use("/fonts", express.static(__dirname + '/node_modules/bootstrap/fonts/'));







app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index/index.html');
});


app.get('/ErrorList', function(req, res){
	res.sendFile(__dirname + '/public/Components/ErrorMessages/ErrorMessagesDirective.html');
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});

