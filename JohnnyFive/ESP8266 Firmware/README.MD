# Flashing your ESP8266 to Johnny-Five

The ESP8266 can be RETURNED to the Johnny-Five Firmware (think it's operating system) by running the correct *.ino file (which is an arduino script)

There are TWO scripts for you to run. 
- StandardFirmata-ESP8266-USB - This is for you to connect using USB
- StandardFirmataWiFi - This is for you to connect using Wifi instead of USB.

Simply opening the Arduino IDE. Pressing File-Open and choosing the .ino file in each directory will flash the correct firmware and make your ESP7266 into a Johnny-Five compatible device.

You can ALSO use this directory to make a ESP8266 that YOU own into a Johnny-Five Compatible Device.

*Note this does NOT work on the regular Arduino devices (the ones that SAY Arduino on the devices without saying things like ESP8266 or ESP32)