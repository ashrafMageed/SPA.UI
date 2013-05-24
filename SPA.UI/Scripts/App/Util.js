define('Util', ['underscore', 'ko', 'jquery'], function(_, ko, $) {

    var imageBaseUrl = 'Content/Images/',
        formatCurrency = function(value) {
            return '£' + value.toFixed(2);
        },
        getImagePath = function(imageName) {
            return imageBaseUrl + imageName;
        },
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
        bindListEvent = function(rootSelector, selector, eventName, callback) {
            $(rootSelector).on(eventName, selector, function() {
                var data = ko.dataFor(this);
                callback(data, $(this));
                return false;
            });
        };

    return {
        formatCurrency: formatCurrency,
        bindListEvent: bindListEvent,
        getImagePath: getImagePath,
        mapToObservable: mapToObservable,
        mapToObservableArray: mapToObservableArray
    };

});