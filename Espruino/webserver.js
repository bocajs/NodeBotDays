/*
A Fancy web server with different pages as well as it'll print out the IP address it's been assigned.
*/

var ssid = 'YOUR_SSID'; // only using if you're not setting up your own AP
var password = 'YOUR_SSID_PASSWORD';// only using if you're not setting up your own AP
let port = 80;
let wifi = require('Wifi');
let http = require('http');
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
    res.writeHead(headerCode);
    res.end(htmlPage);
}


// Let's connect to an existing WIFI network. !!! Comment the "wifi.startAP" line to use an existing Wifi Network.
wifi.connect(ssid, {password: password}, function(err) {
 
// Setup a private AP Wifi Network  !!! Comment the "wifi.connect..." line to use this
//wifi.startAP('EspruinoAP', { password: '0123456789', authMode: 'wpa2' }, function(err) {
  
    if (err) throw err;

    // Webserver
    http.createServer(processRequest).listen(port);
    let ip =  wifi.getIP().ip;
    if (ip == "0.0.0.0") {
      ip = "192.168.4.1";
    }
    console.log(`Connected to Wifi.\nWeb server running at http://${ip}:${port}`);
  
    
    // Go get something from another website
    http.get("https://google.com", function(res) {
      console.log("Connecting to google.com");
      res.on('data', function(data) {
        console.log(data);
      });
    });
  
});

  wifi.on('associated',function() { console.log("We're connected to an AP"); });
  wifi.on('connected',function() { console.log("We have an IP Address"); });
  wifi.on('disconnected',function() { console.log("We disconnected"); });
  