import angular from 'angular';
import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

const components = 'app.components';

angular.module(components, [])
    .component('home', Home)
    .component('navbar', Navbar)
;

export default components;