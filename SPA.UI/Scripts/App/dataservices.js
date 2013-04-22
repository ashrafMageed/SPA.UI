/// <reference path="Mock/ProductsDataMock.js" />
define('dataService', ['generator'],
function (generator) {
    var getProducts = function () {
        //return productsData.getData();
        return generator.generateProducts(); //[{ name: 'test1' }, { name: 'test2' }];
    };

    return {
        getProducts: getProducts
    };
});
