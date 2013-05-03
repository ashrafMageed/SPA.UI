using ServiceStack.WebHost.Endpoints;
using SPA.API.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;

namespace SPA.API
{
    public class Global : System.Web.HttpApplication
    {

        public class iTropicsApp : AppHostBase
        {
            public iTropicsApp() : base("iTropics", typeof(TourService).Assembly)
            { }

            public override void Configure(Funq.Container container)
            {
                // Configure our application
            }
        }


        protected void Application_Start(object sender, EventArgs e)
        {
            new iTropicsApp().Init(); 
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}