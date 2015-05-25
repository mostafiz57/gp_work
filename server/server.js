var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var handlebarEng = require('express3-handlebars');
var flash = require('connect-flash');
var mongoose = require('mongoose');
var serverConfig = require('./app/config/server');


var port = serverConfig.port;

app.use(express.urlencoded());
app.use(express.json());

app.engine('hbs', handlebarEng(
	{extname : 'hbs',defaultLayout : 'main.hbs'}
));

app.set( 'view engine' ,'hbs');

app.use(function(err, req, res , next){
	console.log(err.statck);
	res.send(500);
});


//config routes 
require('./app/static')(app, serverConfig);
require('./app/main')(app, serverConfig);
require('./app/routes')(app);
require('./app/config/initDB').mongoDbConnection();


//start server
app.listen(port,function(){
	console.log('Serving in port ' + port);
});
