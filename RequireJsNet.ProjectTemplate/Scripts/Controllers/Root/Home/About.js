require([
        'bootstrap'
], function ($) {

    var ctrl = function (args) {

        this.options = $.extend(true, {}, args);

        this.init();
    };

    ctrl.prototype.init = function () {

    };

    //create object on DOM ready
    $(function () {
        var entryScript = new ctrl();
    });
});