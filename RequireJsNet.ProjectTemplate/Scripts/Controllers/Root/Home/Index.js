require([
        'i18n!nls/app-resx',
        'menu-module',
        'jquery',
        'jquery-validate',
        'jquery-validate-unobtrusive',
        'bootstrap',
        'respond'
], function (resx, menu) {

    var ctrl = function () {

        this.init();
        mainMenu = new menu();
        mainMenu.init();
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