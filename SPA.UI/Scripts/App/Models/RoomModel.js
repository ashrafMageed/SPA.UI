define('roomModel', ['ko'], function(ko) {
    var room = function() {
        var self = this;
        self.roomNumber = 1;
        self.type = ko.observable();
        self.price = ko.observable();
        self.selected = ko.observable();
    };

    room.Nullo = new room().selected(true).type('Twin Share');
    return room;
});