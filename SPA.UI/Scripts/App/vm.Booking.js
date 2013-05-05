define('BookingViewModel', ['ko', 'dataService', 'tourViewModel', 'router'],
    function (ko, dataservice, tourViewModel, router) {
        var tour = ko.observable(),
            payment = ko.observable(),
            passengerDetails = ko.observableArray(),
            bookingStepsHashes = {
                tour: '#/Booking/Tour',
                passengerDetails: '#/Booking/PassengerDetails',
                payment: '#/Booking/Payment',
            },
        init = function() {

            },
            activate = function () {
                tourViewModel.activate();
                tour(tourViewModel.tourDetails);
            };

        return {
            activate: activate,
            tour: tour,
            paymentDetails: payment,
            passengerDetails: passengerDetails,
            bookingStepsHashes: bookingStepsHashes
        };
});