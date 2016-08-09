/* Components */
'use strict';
angular.module('myApp.components', [])
    .component('homeComponent', {
      templateUrl: 'partials/home.html',
      controllerAs: 'vm',
      controller: function() {
        var vm = this;
        this.message = 'Congratulations ! Your app is now ready for use !';
      }
    });