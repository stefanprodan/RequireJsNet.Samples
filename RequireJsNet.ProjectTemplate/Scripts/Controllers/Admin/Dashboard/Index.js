require([
        'i18n!nls/app-resx',
        'jquery',
        'jquery-validate',
        'jquery-validate-unobtrusive',
        'bootstrap',
        'respond'
], function (resx) {

    var ctrl = function () {

        this.init();
    };

    ctrl.prototype.init = function () {

        //init
    };

    //create object on DOM ready
    $(function () {
        var entryScript = new ctrl();
    });
});