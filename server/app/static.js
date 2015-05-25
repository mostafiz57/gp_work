var express = require('express');
var favicon = require('serve-favicon');

module.exports = function(app, serverConfig){
   app.use(favicon(serverConfig.distFolder+ '/favicon.ico'));
   app.use(serverConfig.staticUrl , express.static(serverConfig.distFolder));
   app.use(serverConfig.staticUrl , function(req , res , next){
		res.status(404).end();
   });
}