
myApp.directive('helloWorld', function() {
  return {
      restrict: 'AE',
      replace: 'true',
      scope: { user: '=' },
      template: '<h3>Hello World {{user.name}}</h3>'
  };
});