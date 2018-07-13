/*
 BocaJS's Sample for for an standard Arduino that ISN'T connected through Wifi or a ESP8266
*/

var five = require("johnny-five"); // Magic 
var board = new five.Board({ port: "COM7" }); // COM7 was my port as found in the "Device Manager", and it couldn't find it automatically because I had OTHER devices.

// Starndard Johnny-Five Blink Example
board.on("ready", function() {
    console.log("READY!");
    var led = new five.Led(13);
    led.blink(500);
    console.log("IT'S BLINKING!!!");
});
