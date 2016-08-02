'use strict';
angular.module('myApp', ['ui.router', 'myApp.controllers', 'myApp.services' ])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "partials/home.html",
                controller: "HomeCtrl"
            })
    });