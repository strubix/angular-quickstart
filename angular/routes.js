'use strict';
angular.module('myApp', ['ui.router', 'myApp.services', 'myApp.controllers'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "partials/home.html",
                controller: "HomeCtrl"
            })
    });