define('binder', ['ko', 'infuser', 'browseProductsViewModel', 'ProductDetailsViewModel', 'shell', 'BookingViewModel'],
    function (ko, infuser, browseProductsViewModel, ProductDetailsViewModel, ShellViewModel, BookingViewModel) {
        var init = function () {
            
            // infuser set up - move to config later on
            infuser.defaults.templatePrefix = "_";
            infuser.defaults.templateSuffix = ".tmpl.html";
            infuser.defaults.templateUrl = "/Templates";
            
            ko.applyBindings(browseProductsViewModel, $('#products-view').get(0));
            ko.applyBindings(ProductDetailsViewModel, $('#productdetails-view').get(0)); 
            ko.applyBindings(ShellViewModel, $('#shellTop-view').get(0));
            ko.applyBindings(BookingViewModel, $('#booking-view').get(0));
            
        };

        return {
            init: init
        };
    });