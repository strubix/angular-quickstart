'use strict';
angular.module('app', ['ui.router', 'app.components'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state("home", {
                url: "/",
                template: "<app-home></app-home>",
            })
            .state("login", {
              url: "/",
              template: "<app-login></app-login>",
            })
    });