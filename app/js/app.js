(function () {
  'use strict';
  var app = angular.module('app', ['ngRoute']);

  app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'templates/main.html',
        controller: 'MainCtrl as ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
})();