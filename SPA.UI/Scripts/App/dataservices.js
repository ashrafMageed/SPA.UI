/// <reference path="Mock/ProductsDataMock.js" />
define('dataService', ['generator'],
function (generator) {

    var getProducts = function() {
        return generator.generateProducts();
    },
        getProduct = function(id) {
            var product = generator.generateProducts();
            return product.products[0];
        },
        getTour = function (id) {
            
            return generator.generateTour();
        },
        getRooms = function(tour) {
            return generator.generateRooms();
        };
    
    return {
        getProducts: getProducts,
        getProduct: getProduct,
        getRoomsForTour: getRooms,
        getTour: getTour
    };
});
