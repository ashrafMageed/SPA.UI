define('browseProductsViewModel', ['dataService', 'router'],
function (dataService, router) {
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

        init = function () {
            bindDetailsEvent('#products-view', '.product-brief', function (data) {
                alert('clicked: ' + data.name);
                router.navigateTo('#/ProductDetails/' + data.id);
            });
        },

    activate = function () {
        alert('activate of BrowseProducts called.');
        getProducts();
        
    };

        init();
    
    return {
        productsTemplate : productsTemplate,
        products: products,
        activate: activate
    };
});
