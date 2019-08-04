var ssid = 'YOUR_SSID';
var password = 'YOUR_SSID_PASSWORD';
var port = 80;
var wifi = require("Wifi");


function processRequest (req, res) {
  res.writeHead(200);
  res.end('Hello World');
}

wifi.connect(ssid, {password: password}, function() {

    var http = require('http');
    http.createServer(processRequest).listen(port);
    // it takes a while (like 10-15 seconds) for this line to come up.
    console.log(`Web server running at http://${wifi.getIP().ip}:${port}`)
});