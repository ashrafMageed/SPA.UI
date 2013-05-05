var Tour = function () {
    var self = this;
    self.id = ko.observable();
    self.startDate = ko.observable();
    self.endDate = ko.observable();
    self.prePostHotels = ko.observableArray();
}();