using ServiceStack.ServiceInterface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPA.API.Services
{
    public class TourService : Service
    {
        public object Get(TourRequest bookingRequest)
        {
            return new TourResponse
            {
                Reference = Guid.NewGuid(),
                StartDate = DateTime.Now.AddDays(10),
                EndDate = DateTime.Now.AddDays(20),
                PrepostHotels = new List<PrePostHotel> { new PrePostHotel { HotelName = "The Orchard", IsPreHotel = true }, new PrePostHotel { HotelName = "The Four Seasons", IsPreHotel = false } }
            };
        }
    }
}