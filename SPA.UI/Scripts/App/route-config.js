define('route-config', ['router', 'browseProductsViewModel', 'ProductDetailsViewModel', 'BookingViewModel', 'tourViewModel', 'passengerDetails'],
    function (router, browseProductsViewModel, ProductDetailsViewModel, booking, tour, passengerDetails) {
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
                },
                
                // Booking
                {
                    view: '#booking-view',
                    routes:[
                        {
                            route: '#/Booking',
                            title: 'Booking',
                            callback: booking.activate,
                            group: '.route-top'
                        },
                        {
                            route: '#/Booking/Tour',
                            title: 'Tour Overview',
                            callback: tour.activate,
                            group: '.booking-steps',
                            id: '#tour-overview'
                        },
                        {
                            route: '#/Booking/PassengerDetails',
                            title: 'Passenger Details',
                            callback: passengerDetails.activate,
                            group: '.booking-steps',
                            id: '#passenger-detail'
                        }//,
//                        {
//                            route: '#/Payment',
//                            title: 'Payment',
//                            callback: Payment.activate,
//                            group: '.route-top'
                    //        id:'#payment'
//                        }
                    ]
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
