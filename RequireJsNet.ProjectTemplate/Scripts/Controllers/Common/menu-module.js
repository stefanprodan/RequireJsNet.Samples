/*!
 * menu-module v1
 */

define('menu-module', [
    'jquery',
    'bootstrap'
], (function ($) {

    //constructor
    var menuScript = function() {
        //this.init();
    };

    //public method
    menuScript.prototype.init = function () {
        $('.navbar-brand').text('RequireJS.NET');
    };

    //expose module
    return menuScript;
}));