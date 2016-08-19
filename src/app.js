import angular from 'angular';
import router from 'angular-ui-router';
import './vendor';

import components from './app.components';
import routes from './app.routes';
import services from './app.services';

angular.module('app', [router, components, routes, services]);