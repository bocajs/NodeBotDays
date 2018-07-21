/*
 BocaJS's Sample for the ESP8266 D1 Mini included in our Internation NodeBotDays Event
*/

var five = require("johnny-five"); // Magic 

// Choose 1 from below:

// 1) USB (nothing special)
var board = new five.Board({}); // let johnny-five figure out which com usb port

// 2) No... I'LL tel lyou which port:
// var board = new five.Board({ port: "/dev/cu-usbserial" }); // make sure you find out which is your actual port. but only if it doesn't find it automatically.// Connect through WIFI to your compatible StandardFirmataWiFi Device like our ESP8266 D1 

// 3) Wifi Magic with the ESP8266 devices:
/*
var EtherPortClient = require("etherport-client").EtherPortClient; // New dependency needed for Wifi
var board = new five.Board({
    port: new EtherPortClient({
        host: "192.168.29.50", // this is the same Ip YOU defined in the 
        port: 3030
    }),
    timeout: 1e5,
    repl: false
});
*/


// Starndard Johnny-Five Blink Example
board.on("ready", function() {
    console.log("READY!");
    var led = new five.Led(2);
    led.blink(500);
    console.log("IT'S BLINKING!!!");
});
