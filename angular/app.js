'use strict';
angular.module('myApp', ['ui.router', 'myApp.components'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('home', {
                url: '/',
                template: '<home-component></home-component>'
            })
    });