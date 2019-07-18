var ssid = 'YOUR_SSID';
var password = 'YOUR_SSID_PASSWORD';
var port = 80;

function processRequest (req, res) {
  res.writeHead(200);
  res.end('Hello World');
}

wifi.connect(ssid, {password: password}, function() {

    var http = require('http');
    http.createServer(processRequest).listen(port);

    console.log(`Web server running at http://${wifi.getIP().ip}:${port}`)
});