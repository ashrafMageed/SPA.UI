define('browseProductsViewModel', ['dataService'],
function (dataService) {
    var 
        products = ko.observableArray([]),
        filterText = ko.observable(),
        productsTemplate = '_product.view.tmpl.html',
        getProducts = function () {
            products(dataService.getProducts());
        },

    activate = function() {
            getProducts();
        };

        activate();
    
    return {
        productsTemplate : productsTemplate,
        products: products
    };
});
