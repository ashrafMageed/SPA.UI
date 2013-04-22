/// <reference path="Mock/ProductsDataMock.js" />
define('dataService', ['generator'],
function (generator) {
    
    var getProducts = function () {
        return generator.generateProducts();
    };

    var getProduct = function(id) {
        return generator.generateProducts()[0];
    };
    
    return {
        getProducts: getProducts,
        getProduct: getProduct
    };
});
