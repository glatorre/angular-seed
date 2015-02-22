'use strict';

angular.module('myApp.foo', ['ngRoute'])

/*.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])*/

.controller('FooCtrl', ['$scope', function($scope) {
	$scope.foovar = 5;
	$scope.logged = {
		name: "Giuseppe",
		surname: "La Torre"
	};

}]);