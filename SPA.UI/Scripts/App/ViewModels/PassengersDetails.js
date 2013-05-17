define('passengerDetails', ['ko'], function (ko) {
    var passengers = ko.observableArray(),
        activate = function() {

        };

    return {
        passengers: passengers,
        activate: activate
    };
});