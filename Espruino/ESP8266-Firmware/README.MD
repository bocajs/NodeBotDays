# Flashing your Esp8266 to be an Espruino Javascript Device.

Espruino has their own line of controllers. but they're about 4x the price. VERY nice devices but we have devices that can do everything AND MORE than the original Espruino devices.

To make your ESP8266 (Arduino compatible device) into a Espruino compatible device simply find the correct "flash" program for your computer. YOU MUST edit the file to make sure you've chosen the correct DEVICE (or COM port) - See file for how-to to find where your device is connected.

- Flash.Bat - for Windows 
- flash.sh - For Mac and Linux 

It will write the Espruino Firmware (or you can say operating system) onto your device. After it does you can return to the Espruino directory and try the .js files there and follow the instructions there.