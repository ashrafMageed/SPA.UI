define('generator', [],
function () {
    var init = function () {
        $.mockJSON.data.IMAGE_SOURCE = ['acer1.jpg', 'acer2.jpg', 'alienWare1.jpg', 'asus1.jpg', 'hp1.jpg', 'hp2.jpg', 'lenovo1.jpg', 'lenovo2.jpg', 'lenovo3.jpg', 'samsung1.jpg'];
    },
        generateProducts = function() {
        return $.mockJSON.generateFromTemplate({
            "products|10-20": [{
                "id|+1": 1,
                "name": "@LOREM",
                "description": "@LOREM_IPSUM",
                "price|250-500": 0,
                "productionDate": "@DATE_DD/@DATE_MM/@DATE_YYYY",
                image: "@IMAGE_SOURCE"
            }]
        });
    };

    init();
    return {
            generateProducts: generateProducts
        };
    
});