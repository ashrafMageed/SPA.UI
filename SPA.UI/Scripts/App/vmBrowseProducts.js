define('browseProductsViewModel', ['dataService'],
function (dataService) {
    var 
        products = ko.observableArray([]),
        filterText = ko.observable(),
        productsTemplate = 'productsList.view',
        goToDetails = function(id) {
            alert('navigating to details of:' + id );
        },
        
        getProducts = function () {
            products(dataService.getProducts());
        },
        
        bindDetailsEvent = function(rootSelector, selector, callback) {
            $(rootSelector).on('click', selector, function () {
                var data = ko.dataFor(this);
                callback(data);
                return false;
            });
        },

    activate = function() {
        getProducts();
        bindDetailsEvent('#products-view', '.product-brief', function (data) {
            alert('clicked: ' + data.name);
        });
    };

        activate();
    
    return {
        productsTemplate : productsTemplate,
        products: products
    };
});
