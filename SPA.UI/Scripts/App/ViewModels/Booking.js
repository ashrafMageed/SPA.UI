﻿define('BookingViewModel', ['ko', 'dataService', 'tourViewModel'],
﻿    function (ko, dataservice, tourViewModel) {
﻿        
    ﻿        var bookingStepsHashes = {
    ﻿            tour: '#/Booking/Tour',
                passengerDetails: '#/Booking/PassengerDetails',
    ﻿            payment: "#/Booking/Payment"
    ﻿        },
﻿            activate = function() {
﻿                tourViewModel.activate();
﻿            };

﻿        return {
﻿            activate: activate,
﻿            bookingStepsHashes: bookingStepsHashes
﻿        };
﻿    });