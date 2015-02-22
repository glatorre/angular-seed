'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.foo', // module declared in partials/foo/foo.js
  'myApp.version'
]).

config(['$routeProvider', function($routeProvider) {
	$routeProvider.
		when('/view1', {
    		templateUrl: 'partials/view1/view1.html',
    		controller: 'View1Ctrl'
  		}).
  		when('/view2', {
    		templateUrl: 'partials/view2/view2.html',
    		controller: 'View2Ctrl'
  		}).
  		when('/foo', {
        	templateUrl: 'partials/foo/foo.html',
        	controller: 'FooCtrl'
      	}).
      	otherwise({redirectTo: '/view1'});
}]);
