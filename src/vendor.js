window.jQuery = require('jquery'); // <= scope jQuery to global window, because v2 doesn't support import
window.$ = window.jQuery; // <= alias to window.jQuery
require('bootstrap/dist/js/bootstrap.min.js'); // Adding bootstrap JS, he need jQuery v2