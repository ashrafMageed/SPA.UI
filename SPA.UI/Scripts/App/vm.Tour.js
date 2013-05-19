define('tourViewModel', ['jquery', 'ko', 'dataService', 'underscore', 'passengerModel'],
    function ($, ko, dataservice, _, passengerModel) {
        var
            hotels= ko.observableArray(),
            travelProtection= ko.observableArray(),
            rooms= ko.observableArray(),
            numberofPassengers= ko.observable(0),
            tour = ko.observable(),
            passengers = ko.observableArray(),
            totalPrice = ko.computed(function () {
//                var selectedRoom = $.grep(rooms, function (room) { return room.selected === true; });
//                if(selectedRoom)
                //return tour.price + 
            }),
            
            mapToObservable = function(itemToMap) {
                var mapped = [];
                for (prop in itemToMap) {
                    if (itemToMap.hasOwnProperty(prop)) {
                        mapped[prop] = ko.observable(itemToMap[prop]);
                    }
                }
                return mapped;
            },
            mapToObservableArray = function(arrayToMap, observableArray) {
                var tempArray = [];
                _.each(arrayToMap, function(item) {
                    var hotel = mapToObservable(item);
                    tempArray.push(hotel);
                });
                observableArray(tempArray);
            },
            getTour = function() {

                tour(dataservice.getTour());
                mapToObservableArray(tour.hotels, hotels);

                var availableRooms = dataservice.getRoomsForTour(tour);
                mapToObservableArray(availableRooms.room, rooms);

            },
            
            activate = function() {
                getTour();
            },
            addPassenger = function () {
                var currentNumber = this.numberofPassengers();
                this.numberofPassengers(currentNumber + 1);
                passengers.push(passengerModel.Nullo);
            },
            removePassenger = function () {
                var currentNumber = this.numberofPassengers();
                if (currentNumber <= 1)
                    return;

                this.numberofPassengers(currentNumber - 1);
                passengers.pop();
            };

        return {
            activate: activate,
            RemovePassenger: removePassenger,
            AddPassenger: addPassenger,
            hotels: hotels,
            travelProtection: travelProtection,
            rooms: rooms,
            numberofPassengers: numberofPassengers,
            tour: tour,
            passengers: passengers
            //getTour: getTour,
            //tourDetails: tourDetails
        };
});