angular.module('ayApp', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'app/src/mainView.html'
    })
  }])

  .controller('AyShellGridController', ['$scope', function($scope){
    $scope.entries = [];

    $scope.addEntry = function(entry){
      $scope.entries.push(entry);
    };

    $scope.$on('addEntry', function(e, args){
      $scope.addEntry(args);
    });

  }])

  .directive('ayShellGrid', function(){
    return {
      restrict: 'E',
      controller: 'AyShellGridController',
      scope: {
        entries: '='
      },
      templateUrl: 'app/src/templates/_shellGrid.html'
    }
  })

  .directive('ayTopNav', function(){
    return {
      restrict: 'E',
      templateUrl: 'app/src/templates/_header.html'
    }
  })

  .directive('autoFocus', ['$timeout', function($timeout) {
    return {
        restrict: 'A',
        link: function(scope, element) {
            $timeout(function(){
                element[0].focus();
            }, 0);
        }
    }
  }])

  .directive('ayShellInput', ['$rootScope', function($rootScope){
    var template = '<input auto-focus class="col-xs-12 shell-input" type="text" name="shellInput" value="" enter-cmd="enterPressed()">';

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
          $rootScope.$broadcast('addEntry', inputValue);
          ele[0].value = '';
        }

      }
    }
  }])
