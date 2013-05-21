﻿define('tourViewModel', ['jquery', 'ko', 'dataService', 'underscore', 'passengerModel', 'roomModel'],
﻿    function($, ko, dataservice, _, passengerModel, roomModel) {
﻿        var hotels = ko.observableArray(),
﻿            travelProtection = ko.observableArray(),
﻿            selectedRooms = ko.observableArray(),
﻿            availableRooms = ko.observableArray(),
﻿            numberofPassengers = ko.observable(0),
﻿            tour = ko.observable(),
﻿            adults = ko.observable(1),
﻿            children = ko.observable(0),
﻿            passengers = ko.observableArray(),
﻿            passengerNumber = ko.computed(function() {
﻿                return adults() + children();
﻿            }),
﻿            totalPrice = ko.computed(function() {
﻿                //                var selectedRoom = $.grep(rooms, function (room) { return room.selected === true; });
﻿                //                if(selectedRoom)
﻿                //return tour.price  
﻿            }),
﻿            getTour = function() {

﻿                tour(dataservice.getTour());
﻿                util.mapToObservableArray(tour.hotels, hotels);


﻿                var rooms = dataservice.getRoomsForTour(tour);
﻿                util.mapToObservableArray(rooms.room, availableRooms);
﻿            },
﻿            addAdult = function() {
﻿                addPassenger(this.adults, true);
﻿            },
﻿            removeAdult = function() {
﻿                removePassenger(this.adults, true);
﻿            },
﻿            addChild = function() {
﻿                addPassenger(this.children, false);
﻿            },
﻿            removeChild = function() {
﻿                removePassenger(this.children, false);
﻿            },
﻿            addPassenger = function(passengerCounter, isAdult) {
﻿                var currentNumber = passengerCounter();
﻿                passengerCounter(currentNumber + 1);

﻿                var model = new passengerModel();
﻿                model.isAdult = ko.observable(isAdult);
﻿                model.passengerNumber = adults() + children();

﻿                passengers.push(model);
﻿            },
﻿            removePassenger = function(passengerCounter, isAdult) {
﻿                var currentNumber = passengerCounter();

﻿                if (currentNumber <= 0)
﻿                    return;

﻿                if (isAdult && currentNumber == 1)
﻿                    return;

﻿                passengerCounter(currentNumber - 1);

﻿                // remove adult/child
﻿                removeLastOccurenceFromArray(passengers, lastPassengerOccurenceCallback(isAdult));

﻿            },
﻿            addRoom = function() {

﻿                var model = new roomModel();
﻿                model.number = this.selectedRooms().length;
﻿                
﻿                this.selectedRooms.push(model);
﻿            },
﻿            removeRoom = function() {
﻿                var currentNumber = this.selectedRooms().length;

﻿                if (currentNumber <= 1)
﻿                    return;

﻿                this.selectedRooms.pop();

﻿            },
﻿            lastPassengerOccurenceCallback = function(isAdult) {
﻿                return function(item) {
﻿                    return item.isAdult() === isAdult;
﻿                };
﻿            },
﻿            removeLastOccurenceFromArray = function(targetArray, evaluator) {
﻿                var passengerCopy = targetArray.slice(0);
﻿                var matchingElement = ko.utils.arrayFirst(passengerCopy.reverse(), evaluator);

﻿                targetArray.remove(matchingElement);
﻿            },
﻿            activate = function() {
﻿                getTour();
﻿                passengers.push(passengerModel.Nullo);
﻿                selectedRooms.push(roomModel.Nullo);
﻿            };

﻿        return {
﻿            activate: activate,
﻿            removeRoom: removeRoom,
﻿            addRoom: addRoom,
﻿            adults: adults,
﻿            children: children,
﻿            addAdult: addAdult,
﻿            removeAdult: removeAdult,
﻿            addChild: addChild,
﻿            removeChild: removeChild,
﻿            hotels: hotels,
﻿            travelProtection: travelProtection,
﻿            selectedRooms: selectedRooms,
﻿            availableRooms: availableRooms,
﻿            numberofPassengers: numberofPassengers,
﻿            tour: tour,
﻿            passengers: passengers
﻿        };
﻿    });