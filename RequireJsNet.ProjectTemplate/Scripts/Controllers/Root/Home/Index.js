require([
        'i18n!nls/app-resx',
        'jquery',
        'jquery-validate',
        'jquery-validate-unobtrusive',
        'bootstrap',
        'respond',
        'menu-module'
], function (resx) {

    var ctrl = function () {

        this.init();
    };

    ctrl.prototype.init = function () {

        $('.output').html("<strong> All modules loaded</strong>");

        //read global options sent by RequireOptionFilter
        $('.output').append("<br /> Website Options: " + requireConfig.websiteOptions.globalUrlViaFilter);

        //read page options, sent by HomeController.Index
        $('.output').append("<br /> Page Options: " + requireConfig.pageOptions.ids);

        //read localized resource
        $('.output').append("<br /> First day of week: " + resx['WeekFirstDay']);

        //init plugins
    };

    //create object on DOM ready
    $(function () {
        var entryScript = new ctrl();
    });
});