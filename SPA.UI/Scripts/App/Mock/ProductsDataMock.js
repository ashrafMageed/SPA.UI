/// <reference path="mock.generator.js" />

//
//var productsData = function () {
//
//    var defineApi = function () {
//
//        amplify.request.define("getProducts", "ajax", {
//            url: "Products\GetProducts",
//            dataType: "jsonp",
//            type: "GET"
//        });
//
//        amplify.request.define('getProducts', function (settings) {
//            settings.success(generator.generateProducts);
//        });
//
//    },
//
//    getData = amplify.request('getProducts', function (data) {
//    });
//    
//    defineApi();
//
//    return {
//        getData: getData
//    };
//}();