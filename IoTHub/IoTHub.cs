using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;

namespace IoTHub {
    public class IoTHub : Hub {
        public void Uptime() {
            Clients.All.uptime();
        }
    }
}