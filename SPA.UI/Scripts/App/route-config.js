define('route-config', ['router', 'browseProductsViewModel', 'ProductDetailsViewModel'],
    function (router, browseProductsViewModel, ProductDetailsViewModel) {
        // define routes
        var
        register = function () {

            var routeData = [

                // Products route
                {
                    view: '#products-view',
                            isDefault: true,
                            route: '#/Products',
                            title: 'Products',
                            callback: browseProductsViewModel.activate,
                            group: '.route-top'
                },

                // Product Details view
                {
                    view: '#productdetails-view',
                    route: '#/ProductDetails/:id',
                    title: 'Product Details',
                    callback: ProductDetailsViewModel.activate,
                    group: '.route-top'
                }
                    
                
            ];

            for (var i = 0; i < routeData.length; i++) {
                router.register(routeData[i]);
            }

            router.run();
        };

        return {
            register: register
        };
    });
