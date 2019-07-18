// This code can be put into any ESP8266 or ESP32 device FLASHED with the espruino firmware.
// you'll also need the Espruino IDE (or CLI), the IDE is a free download ONLY for chrome on the chrome store 
// IDE Details at: https://www.espruino.com/Web+IDE

var  on = false;
let LED1 = NodeMCU.D4; // Here's the trick .the built in "NodeMCU" constant will have all the pins already mapped.
setInterval(function() {
  on = !on;
  LED1.write(on);
}, 500);

// once you uploaded this and it's blinking. Go to the left where you can send commands directly to the device and type "save()" (without the bracked=ts) and the code will be saved there.