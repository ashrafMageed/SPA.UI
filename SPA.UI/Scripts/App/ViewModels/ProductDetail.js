define('ProductDetailsViewModel', ['dataService'],
    function (dataService) {
        var product = ko.observable(),

        getProduct = function () {
            var prdct = dataService.getProduct(0);
            product(prdct);
        },

        init = function () {

        },
        activate = function () {
            getProduct();
        };

        //activate();

        return {
            product : product,
            activate : activate
        }

    });