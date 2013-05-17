var util = function () {
    
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
        };

    return {
        formatCurrency: formatCurrency,
        getImagePath: getImagePath,
        mapToObservable: mapToObservable,
        mapToObservableArray: mapToObservableArray
    };
}();