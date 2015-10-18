angular.module('ayApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'app/src/mainView.html'
    })
  }])

  .directive('ayTopNav', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/src/templates/_header.html'
    }
  })

  .directive('ayShellGrid', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/src/templates/_shellGrid.html'
    }
  })
