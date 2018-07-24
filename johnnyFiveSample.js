/*
 BocaJS / MiamiJS and PalmBeachJS International NodeBotDay Sample Johnny-Five.io Code
 What is uncommented is EXACTLY the code you'll find at the top of the http://johnny-five.io/examples/ page
 Once you have this working, it's time to COPY it and make your own.

 Remember to run "npm i" in this directory BEFORE to try to run this code (with "node johnnyFiveSample.js")
 */

var five = require("johnny-five"); // Magic 
var pins = require("./esp8266Pins");

// For the Boards given to you at the event use #1, in other words don't touch anything.

// 1) USB (nothing special) - How the ESP8266 for the BocaJS / Palm Beach JS events are setup.
var board = new five.Board(); // let johnny-five figure out which USB Com port to use

// 2) Want to define which com port to use? I had to do this on ONE Windows Computer:
// var board = new five.Board({ port: "COM7" }); // or /dev/cu-usbserial for mac or /Dev/ttyUSB1 for Linux etc.


// 3) Did you flash the ESP8266 board with the Standard FirmataWifi.ino and want to match the ip address defined in wifiConfig.h? uncomment these lines and comment the "board" lines above
/*
var EtherPortClient = require("etherport-client").EtherPortClient; // New dependency needed for Wifi
var board = new five.Board({
    port: new EtherPortClient({
        host: "192.168.29.50", // this is the same Ip YOU defined in the wifiConfig.h file you use when flashing the StandardFirmataWifi.ino file
        port: 3030
    }),
    timeout: 1e5,
    repl: false
});
*/


// Starndard Johnny-Five Blink Example
board.on("ready", function() {
    console.log("READY!");
    var led = new five.Led(pins.led);
    led.blink(500);
    console.log("IT'S BLINKING!!!");
});
