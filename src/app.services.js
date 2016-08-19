import angular from 'angular';
import ExampleService from './services/example.service'

const services = 'app.services';

angular.module(services, [])
    .service('ExampleService', ExampleService)
;

export default services;