var five = require("johnny-five"); // Magic 
var EtherPortClient = require("etherport-client").EtherPortClient; // Connect through WIFI to your compatible StandardFirmataWiFi Device like our ESP8266 D1 Mini

// for YOUR regular arduino (non wifi) uncomment the next line and comment the section below
// var board = new five.Board({ port: "COM7" }); // COM7 was my port as found in the "Device Manager", and it couldn't find it automatically because I had OTHER devices.

// For the ESP8266 - D1 Mini from the event
var board = new five.Board({
    port: new EtherPortClient({
        host: "192.168.29.50", // Update this IP address to the IP address of YOUR device
        port: 3030
    }),
    timeout: 1e5,
    repl: false
});


// Starndard Johnny-Five Blink Example
board.on("ready", function() {
    console.log("READY!");
    var led = new five.Led(2);
    led.blink(500);
    console.log("IT'S BLINKING!!!");
});
