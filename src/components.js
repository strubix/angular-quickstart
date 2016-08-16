import Home from './components/home/home';
import Navbar from './components/navbar/navbar';

angular
    .module('app', [])
    .component('home', Home)
    .component('navbar', Navbar)
;

export default app;