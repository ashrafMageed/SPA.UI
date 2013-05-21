define('roomModel', ['ko'], function(ko) {
    var room = function() {
        var self = this;
        self.number = ko.observable();
        self.type = ko.observable();
        self.price = ko.observable();
        self.selected = ko.observable();
    };

    room.Nullo = new room();

    return room;
});