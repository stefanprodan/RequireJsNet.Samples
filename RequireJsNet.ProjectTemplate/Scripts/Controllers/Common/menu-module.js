/*!
 * menu-module v1
 */
(function (factory) {
    if (typeof define === "function" && define.amd) {
        define('menu-module', ['i18n!nls/app-resx', 'jquery', 'bootstrap'], factory);
    } else {
        factory(window.jQuery);
    }
}(function (resx, $) {

    var menuScript = function() {
        this.init();
    };

    menuScript.prototype.init = function () {
        $('.navbar-brand').text('RequireJS.NET');
    };

    $(function () {
        var entryScript = new menuScript();
    });

}));