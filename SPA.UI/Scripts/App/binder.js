define('binder', ['ko', 'infuser', 'browseProductsViewModel', 'ProductDetailsViewModel'],
    function (ko, infuser, browseProductsViewModel, ProductDetailsViewModel) {
        var init = function () {
            
            // infuser set up - move to config later on
            infuser.defaults.templatePrefix = "_";
            infuser.defaults.templateSuffix = ".tmpl.html";
            infuser.defaults.templateUrl = "/Templates";
            
            ko.applyBindings(browseProductsViewModel, $('#products-view').get(0));
            ko.applyBindings(ProductDetailsViewModel, $('#productdetails-view').get(0));
        };

        return {
            init: init
        };
    });