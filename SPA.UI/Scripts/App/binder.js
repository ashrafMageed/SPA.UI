define('binder', ['ko', 'infuser', 'browseProductsViewModel'],
    function (ko, infuser, browseProductsViewModel) {
        var init = function () {
            
            // infuser set up - move to config later on
            infuser.defaults.templatePrefix = "_";
            infuser.defaults.templateSuffix = ".tmpl.html";
            infuser.defaults.templateUrl = "/Templates";
            
            ko.applyBindings(browseProductsViewModel, $('#products-view').get(0));
        };

        return {
            init: init
        };
    });