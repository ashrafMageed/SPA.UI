define('tourViewModel', ['jquery', 'ko', 'dataService', 'underscore', 'passengerModel', 'roomModel', 'Util'],
    function($, ko, dataservice, _, passengerModel, roomModel, util) {
        var hotels = ko.observableArray(),
            travelProtection = ko.observableArray(),
            selectedRooms = ko.observableArray(),
            availableRooms = ko.observableArray(),
            numberofPassengers = ko.observable(0),
            tour = ko.observable(),
            adults = ko.observable(1),
            children = ko.observable(0),
            passengers = ko.observableArray(),
            passengerNumber = ko.computed(function() {
                return adults() + children();
            }),
            totalPrice = ko.computed(function() {
                //                var selectedRoom = $.grep(rooms, function (room) { return room.selected === true; });
                //                if(selectedRoom)
                //return tour.price  
            }),
            getTour = function() {

                tour(dataservice.getTour());
                util.mapToObservableArray(tour.hotels, hotels);


                var rooms = dataservice.getRoomsForTour(tour);
                util.mapToObservableArray(rooms.room, availableRooms);
            },
            addAdult = function() {
                addPassenger(this.adults, true);
            },
            removeAdult = function() {
                removePassenger(this.adults, true);
            },
            addChild = function() {
                addPassenger(this.children, false);
            },
            removeChild = function() {
                removePassenger(this.children, false);
            },
            addPassenger = function(passengerCounter, isAdult) {
                var currentNumber = passengerCounter();
                passengerCounter(currentNumber + 1);

                var model = new passengerModel();
                model.isAdult = ko.observable(isAdult);
                model.passengerNumber = adults() + children();

                passengers.push(model);
            },
            removePassenger = function(passengerCounter, isAdult) {
                var currentNumber = passengerCounter();

                if (currentNumber <= 0)
                    return;

                if (isAdult && currentNumber == 1)
                    return;

                passengerCounter(currentNumber - 1);

                // remove adult/child
                removeLastOccurenceFromArray(passengers, lastPassengerOccurenceCallback(isAdult));

            },
            addRoom = function() {

                var model = new roomModel();
                model.roomNumber = this.selectedRooms().length + 1;
                model.type("Twin Share");
                model.price(0);

                this.selectedRooms.push(model);
            },
            removeRoom = function() {
                var currentNumber = this.selectedRooms().length;

                if (currentNumber <= 1)
                    return;

                this.selectedRooms.pop();

            },
            lastPassengerOccurenceCallback = function(isAdult) {
                return function(item) {
                    return item.isAdult() === isAdult;
                };
            },
            removeLastOccurenceFromArray = function(targetArray, evaluator) {
                var passengerCopy = targetArray.slice(0);
                var matchingElement = ko.utils.arrayFirst(passengerCopy.reverse(), evaluator);

                targetArray.remove(matchingElement);
            },﻿            
            bindEvents = function() {
                util.bindListEvent('.accommodation', '.room-type', 'click', function (data, element) {
//                    var updatedRoomNumber = element.parent().parent().find('#room-number').html();
//                    
//                    // update the room in selectedRooms
//                    var elementInArray = ko.utils.arrayFirst(selectedRooms(), function (item) {
//                        return item.roomNumber == updatedRoomNumber;
//                    });
//                    
//                    elementInArray.type(data.type());
//                    elementInArray.price(data.price());
//                    elementInArray.selected(data.type());
                    
                    //update the room in available rooms for the sake of binding
                    //element.find('input').attr('checked', 'checked');
                    //element.parent().parent().find('#room-number').val()
                    alert('room no: ' + element.parent().parent().find('#room-number').html() + ' checked: ' + data.type());

                });
            },
            roomsTemplateRendered = function () {
                alert('room templates were rendered.');
                bindEvents();
            },
        init = function () {
                
                passengers.push(passengerModel.Nullo);
                selectedRooms.push(roomModel.Nullo);
            },
            activate = function() {
                getTour();
            };

        init();
        
        return {
            activate: activate,
            roomsTemplateRendered:roomsTemplateRendered,
            removeRoom: removeRoom,
            addRoom: addRoom,
            adults: adults,
            children: children,
            addAdult: addAdult,
            removeAdult: removeAdult,
            addChild: addChild,
            removeChild: removeChild,
            hotels: hotels,
            travelProtection: travelProtection,
            selectedRooms: selectedRooms,
            availableRooms: availableRooms,
            numberofPassengers: numberofPassengers,
            tour: tour,
            passengers: passengers
        };
    });