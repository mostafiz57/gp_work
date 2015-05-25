var app = angular.module('groupWork', ['templates-app','ui.router']);

app.config(['$stateProvider', '$urlRouterProvider',function ($stateProvider,   $urlRouterProvider) {
  		
      $urlRouterProvider.otherwise('/registration');
  		$stateProvider
      .state('registration', {
        url:'/registration',
        templateUrl: 'views/templates/registration.tpl.html',
        controller: 'groupWorkCtrl',
        data: {
          pageTitle: 'Email Process'
        }
      });


  	}]);
