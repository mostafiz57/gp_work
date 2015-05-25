module.exports = function(app, serverConfig) {
	app.get('/', function(req, res) {

		var content ={
			title: 'Group Work.',
			appName: 'groupWork',
			rootController: 'groupWork',
			scripts: [
				{src: '/static/libs/angular/angular.js'},
				{src: 'http://cdnjs.cloudflare.com/ajax/libs/angular-ui-router/0.2.10/angular-ui-router.min.js'},
				{src: '/static/libs/angular-bootstrap/ui-bootstrap-tpls.min.js'},
				{src: '/static/js/templates-app.js'},
				{src: '/static/js/templates-common.js'},
				{src: '/static/js/group-work.js'},
				{src: '/static/libs/jquery/dist/jquery.js'},
				{src: '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js'},
				{src: 'http://cdnjs.cloudflare.com/ajax/libs/bootstrap-datepicker/1.3.0/js/bootstrap-datepicker.min.js'}
			],
			links:[
			

			]
		}
		res.render('index',content);
	});

};
