var Product = function () {
    var self = this;
    self.id = ko.observable();
    self.name = ko.observable();
    self.description = ko.observable();
    self.productImage = ko.observable();
    self.price = ko.observable();
}();