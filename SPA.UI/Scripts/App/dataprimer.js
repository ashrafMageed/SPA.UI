
define('dataprimer', ['jquery', 'dataService', 'browseProductsViewModel'],
    function ($, dataservice, browseProductsViewModel) {
        var fetch = function () {

            return $.Deferred(function (def) {
                var products = dataservice.getProducts();
                // populate products view model
                browseProductsViewModel.products(products);
                def.resolve();
            }).promise();
        };

        return {
            fetch: fetch
        };
});