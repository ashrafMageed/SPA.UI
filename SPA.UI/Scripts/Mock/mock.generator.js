define('generator', [],
function () {
    var init = function() {
        $.mockJSON.data.IMAGE_SOURCE = ['acer1.jpg', 'acer2.jpg', 'alienWare1.jpg', 'asus1.jpg', 'hp1.jpg', 'hp2.jpg', 'lenovo1.jpg', 'lenovo2.jpg', 'lenovo3.jpg', 'samsung1.jpg'];
        $.mockJSON.data.ROOM_TYPES = ["Single", "Twin", "Twin Share", "Triple", "Triple Share", "Quad", "Quad Share"];
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
        },
        generateTour = function() {
            var mockTour = $.mockJSON.generateFromTemplate({
                "tour":
                    {
                        "startDate": "@DATE_DD-@DATE_MM-@DATE_YYYY",
                        "endDate": "@DATE_DD-@DATE_MM-@DATE_YYYY",
                        "duration|4-19": 0,
                        "name": "@LOREM",
                        "price|1000-5000": 0,
                        "startCity": "London",
                        "endCity": "New York",
                        "hotels|2-4": [
                            {
                                "name": "@LOREM",
                                "price|200-450": 0,
                                "pre|0-1": true
                            }
                        ]
                    }

            });

            return mockTour.tour;
        },
        generateRooms = function() {
            return $.mockJSON.generateFromTemplate({
                "room|2-4": [
                    {
                        "type": "@ROOM_TYPES",
                        "selected": false,
                        "price|250-300": 0
                    }
                ]
            });
        };
        

    init();
    return {
        generateProducts: generateProducts,
        generateTour: generateTour,
        generateRooms: generateRooms
        };
    
});