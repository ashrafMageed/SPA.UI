define('BookingViewModel', ['ko', 'dataService', 'tourViewModel'],
    function (ko, dataservice, tourViewModel, router) {
        var 
//            payment = ko.observable(),
//            passengerDetails = ko.observableArray(),
            bookingStepsHashes = {
                tour: '#/Booking/Tour',
                passengerDetails: '#/Booking/PassengerDetails',
                payment: '#/Booking/Payment',
            },
        init = function() {

            },
            activate = function () {
                tourViewModel.activate();
            };

        return {
            activate: activate,
//            paymentDetails: payment,
//            passengerDetails: passengerDetails,
            bookingStepsHashes: bookingStepsHashes
        };
});