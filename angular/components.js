'use strict';

/* Controllers */
angular.module('app.components', [])
    .component('appNavbar', {
      templateUrl: 'partials/navbar.html',
      controller: function($scope, $location) {
        $scope.isActive = function(viewLocation) {
          return viewLocation === $location.path();
        };
      }
    })
    .component('appHome', {
      templateUrl: 'partials/home.html',
      controller: function($scope) {
        $scope.message = "Content";
      }
    })
    .component('appLogin', {
      templateUrl: 'partials/login.html',
      controller: function($scope) {
        $scope.message = "Login";
      }
    });