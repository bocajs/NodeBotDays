var five = require("johnny-five"); // Magic 
var EtherPortClient = require("etherport-client").EtherPortClient; // Connect through WIFI to your compatible StandardFirmataWiFi Device like our ESP8266 D1 Mini

// for YOUR regular arduino (non wifi) uncomment the next line and comment the section below
// var board = new five.Board({ port: "/dev/cu-usbserial" }); // make sure you find out which is your actual port. but only if it doesn't find it automatically.

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
