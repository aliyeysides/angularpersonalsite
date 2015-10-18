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

  .directive('ayShellInput', function(){
    var template = '<input class="col-xs-12 shell-input" type="text" name="name" value="" enter-cmd="enterPressed()">';

    return {
      restrict: 'E',
      replace: true,
      template: template,
      scope: {},
      link: function(scope, ele, attr){

        ele.bind('keydown', function(event){
          if (event.which == 13) { // Captures enter btn event
            scope.$apply(attr.enterCmd);
          }
        })

        scope.enterPressed = function(){
          var inputValue = ele[0].value; // User input value
          console.log(inputValue);
        }

      }
    }
  })
