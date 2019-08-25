var ssid = 'YOUR_SSID'; // only using if you're not setting up your own AP
var password = 'YOUR_SSID_PASSWORD';// only using if you're not setting up your own AP
var port = 80;
var wifi = require('Wifi');
console.log("started");


function processRequest (req, res) {
  let headerCode = 200;
  let htmlPage = `<html><head><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"></head>
      <body>
      %content%
      </body>
      </html>
      `;
  switch(req.url) {
    case "/": // index page
              htmlPage = htmlPage.replace("%content%","Hello World");
              break;
    case "/damian": 
              htmlPage = htmlPage.replace("%content%","Damian");
              break;
    default: 
            headerCode = 404;
               htmlPage = htmlPage.replace("%content%","Page not found!");
            break;
                }
    res.writeHead(200);
    res.end(htmlPage);
}



// Let's connect to an existing WIFI network. !!! Comment the "wifi.startAP" line to use an existing Wifi Network.
// wifi.connect(ssid, {password: password}, function() {
// console.log('Connected to Wifi.  IP address is:', wifi.getIP().ip);

// Setup a private AP Wifi Network  !!! Comment the "wifi.connect..." line to use this
wifi.startAP('EspruinoAP', { password: '0123456789', authMode: 'wpa2' }, function(err) {
  
  
  var http = require('http');
  if (err) throw err;
  console.log("Connected to Wifi!");
  wifi.on('associated',function() { console.log("We're connected to an AP"); });
  wifi.on('connected',function() { console.log("We have an IP Address"); });
  wifi.on('disconnected',function() { console.log("We disconnected"); });
  
  
    // Go get something from another website
    http.get("https://www.google.com", function(res) {
      res.on('data', function(data) {
        console.log(data);
      });
    });
  
    // Webserver
    var http = require('http');
    http.createServer(processRequest).listen(port);
    console.log(`Web server running at http://192.168.4.1:${port}`);
  
  
});

