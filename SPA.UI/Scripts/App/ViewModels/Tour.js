define('tourViewModel', ['ko', 'dataService', 'underscore'],
    function (ko, dataservice, _) {
        var tourDetails = {
            hotels: ko.observableArray(),
            travelProtection: ko.observableArray(),
            rooms: ko.observableArray(),
            numberofPassengers: ko.observable(),
            tour: ko.observable()
        },
        getTour = function() {

            var tour = dataservice.getTour();
            util.mapToObservableArray(tour.hotels, tourDetails.hotels);

            var availableRooms = dataservice.getRoomsForTour(tour);
            util.mapToObservableArray(availableRooms.room, tourDetails.rooms);

            tourDetails.tour(tour);
            return tour;
        },
            
        activate = function() {
            getTour();
        };

        return {
            activate: activate,
            //hotels: hotels,
            //travelProtection: travelProtection,
            //rooms: rooms,
            //numberofPassengers: numberofPassengers,
            //getTour: getTour,
            tourDetails: tourDetails
        };
});