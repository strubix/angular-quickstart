import angular from 'angular';
import router from 'angular-ui-router';
import './vendor';

import components from './app.components';
import routes from './app.routes';

angular.module('app', [router, components, routes]);