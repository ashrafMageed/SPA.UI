using ServiceStack.ServiceHost;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SPA.API.Services
{
    [Route("/tour", "GET")]
    public class TourRequest
    {
        public Guid MVCode { get; set; }
        public string SellingCompanyCode { get; set; }
        public string DepartureCode { get; set; }

    }
}
