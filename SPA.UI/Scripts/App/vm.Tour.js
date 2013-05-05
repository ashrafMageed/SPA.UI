define('tourViewModel', ['ko', 'dataService', 'underscore'],
    function (ko, dataservice, _) {
        var tourDetails = {
            hotels : ko.observableArray(),
            travelProtection : ko.observableArray(),
            rooms : ko.observableArray(),
            numberofPassengers: ko.observable(),
            tour: ko.observable()

    },
             

        mapToObservable = function (itemToMap) {
            var mapped = [];
            for (prop in itemToMap) {
                if (itemToMap.hasOwnProperty(prop)) {
                    mapped[prop] = ko.observable(itemToMap[prop]);
                }
            }
            return mapped;
        },

        mapToObservableArray = function (arrayToMap, observableArray) {
            var tempArray = [];
            _.each(arrayToMap, function (item) {
                var hotel = mapToObservable(item);
                tempArray.push(hotel);
            });
            observableArray(tempArray);
        },

        getTour = function () {

            var tour = dataservice.getTour();
            mapToObservableArray(tour.hotels, tourDetails.hotels);

            var availableRooms = dataservice.getRoomsForTour(tour);
            mapToObservableArray(availableRooms.room, tourDetails.rooms);

            tourDetails.tour(tour);
            return tour;
        },
            activate = function () {
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