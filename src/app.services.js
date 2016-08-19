import angular from 'angular';
import example from './services/example.service'

const services = 'app.services';

angular.module(services, [])
    .factory('example', example)
;

export default services;