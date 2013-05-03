using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPA.API.Services
{
    public class TourResponse
    {
        public Guid Reference { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public List<PrePostHotel> PrepostHotels { get; set; }

    }
}