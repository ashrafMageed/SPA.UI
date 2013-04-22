var util = function () {
    var imageBaseUrl = 'Content/Images/',
        
        formatCurrency = function(value) {
        return '£' + value.toFixed(2);
        },
        
        getImagePath = function(imageName) {
            return imageBaseUrl + imageName;
        };

    return {
        formatCurrency: formatCurrency,
        getImagePath: getImagePath
    };
}();