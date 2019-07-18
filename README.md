<p align="center">
  <img src="http://nodebots.io/img/equation.png">
</p>

<h1>4th Annual NodeBots Day</h1>
You'll find information about what you can do today, and how to get started after you head on home with any device you've purchased (or WON) at this event.

Photos of last year's event are here: https://www.meetup.com/BocaJS/photos/29112765/473290342/

# Thanks to our Sponsors 
This event wouldn't be possible without the amazing support of the Microsoft’s Cloud Developer Advocacy team

https://developer.microsoft.com/en-us/advocates

<a href="https://twitter.com/azureadvocates"><img src="https://pbs.twimg.com/profile_images/895974253593583617/AWBCJfZW_400x400.jpg"></a>


# Welcome to our annual  NodeBot Days event.

This is now the 4th year in a row that we've had it. Obviosly started by <a href="http://meetup.com/miamijs">MiamiJS</a>, this year we've joined together forces with <a href="https://meetup.com/BocaJS">BocaJS</a> and <a href="https://meetup.com/palm-beach-javascript">Palm Beach JS</a>

Idealy this is a place for those that are beginners to learn how to use Javascript to control IoT devices. Specifically Arduino micro controllers.

Our Kits (that were generously provided by Microsoft) contain the following parts:
- ESP8266 (this is the main "CPU" or Arudino device) 
- A Breadboard (the place to connect all things together with)
- A lot of easy to connect wires
- 5 LED (the little lights)
- Resisters
- Potentionmeters (the little volumn nobs)
- Switches
- Motor shields (easily connect MOTORS to your Arduino)
- Motors
- Wheels (those motors have to make your device go somewhere!)

The ESP8266 (as most Arduino's) naturally are built to run C++
BUT with some modifications you can have it be controlled with Javascript.

We have TWO ways (or libraries) that help us do this.
- The [johnny-five](http://johnny-five.io/) library
- The [Espruino](https://www.espruino.com/) library

# Johnny-Five

The [johnny-five](http://johnny-five.io/) library works by having a special firmware burned onto the arduino's that allow your computer to SEND commands which the arduino will listen to. We send those commands using Node (as johnny-five is a Node Module). This means you have the full power of your computer and can do a million things that the arduino just cannot do by itself. You CAN connect to the device by USB OR Wifi. Doing Wifi means that you can connect it wirelessly or even through the internet from another country. More Details about this are in the JohnyFive directory.

What we'll do with the johnny-Five Library
1) IF NEEDED you'll flash the  StandardFirmataESP.ino file using the Arudino IDE.
2) We will add the johnny-five npm package (or just "npm i" for all)
3) We will run the blink.js file as see the device blink.

#Espruino
The [Espruino](https://www.espruino.com/) library goes about the same task a different way. It is really Javascript running on these devices. and not only do you write javascript. send it to the device and it doesn't need a computer any more. BUT also you can have javascript interactivity. This DOES mean that it must fit into the javascript interpreter that's running on the device. but it means no computer is needed AFTER you've saved the program onto the device. You can still interact with a computer but it's stand alone. Having said that something you'll learn to do is have a basic web server on the device that will let you interact with it from any device. You ALSO can program it from any Chrome Browser including the one on chromebooks.

What we will do with the Espruino
1) Install the [Espruino IDE on Chrome](https://chrome.google.com/webstore/detail/espruino-web-ide/bleoifhkdalbjfbobjackfdifdneehpo)
2) Click the Settings (gear), choose Communications and choose "115200" Baud
3) Click the connect icon (top left) and choose our port
4) click the "OPEN" icon (folder in the middle) and choose the blink.js



# The basics of "electronics" 
https://www.youtube.com/watch?v=fq6U5Y14oM4




# Johnny-Five Firmware *** IF NEEDED***

1) Flash the Arduino
For our ESP8266, Arduino Compatible Devices, we'll be using the a Modified version of the <a href="tree/master/ESP8266%20Firmware/StandardFirmata-ESP8266-USB">Firmata Firmware</a>.<br/>
(Note the StandardFirmataWifi is included if you want to control your devices over Wifi)<br/>

We have already flashed your device, BUT should you want to do the same then you can follow steps 1-4 in this guide to help http://www.instructables.com/id/ESP8266-Firmata-J5-NodeBot/<br/>
Feel free to use your version of the StandardFirmataWifi which has already uncommented the hard coded IP Address because without a hard coded IP Address this is difficult.<BR>


# NOTES & ERRORS
There are three directories in this repo that are per each platform (Windows, Mac, Linux).<br/>
If you have your computer setup correctly (or are just lucky that way) then you WON'T need them.<br/>
But each platform DOES have some issues in some situations so each directy has a trick to get you going.<br/>

I'll describe the issues on each platform and you can then choose to follow the steps within each directory if you need it.
- Windows - Python is hard to setup and when you "npm i johnny-five" you'll get an error. I've included the "node_modules" that you'll need.
- Mac - the issue isn't with johnny-five (if you have any). it's flashing the firmware on the arduino if you need to. I've include some drivers that may help.
- Linux - Similar to Windows. if you have any issues doing an "npm i johnny-five" then here I've included the "node_modules" directory that you'll need.



# PINS on the ESP8266 D1 Mini 
Some Extra notes about the ESP8266 D1 Mini's PINs. This are NOT important unless you run into an issue:<br/>

More details in the "5. Pin Map" section - https://www.sigmdel.ca/michel/ha/esp8266/doit_nodemcu_v3_en.html

but you DON'T NEED to guess. because I've made a quick simple library you can include: [esp8266Pins.js](esp8266Pins.js)

NOTE: nc = not connected<br/>

- 0 -> d3
- 1 -> nc
- 2 -> d4 = led
- 3 -> nc
- 4 -> d2
- 5 -> d1
- 6 -> watchdog(4) reset
- 7 -> watchdog(4) reset
- 8 -> watchdog(4) reset
- 9 -> watchdog(4) reset
- 10 -> nc
- 11 -> watchdog(4) reset
- 12 -> d7 low, d6 sporadic
- 13 -> d0 high, d7 sporadic
- 14 -> d0 high, d6 low, d7 low, d5 sporadic
- 15 -> d0 high, d8 sporadic
- 16 -> d0
- 17 -> nc
- 18 -> nc
- 19 -> nc
- 20 -> stack trace and pin-based(2) reset
- 21 -> stack trace and watchdog(4) reset
- 22 -> stack trace and watchdog(4) reset
- 23 -> stack trace and watchdog(4) reset
- 24 -> nc
- 25 -> nc
- 26 -> nc
- 27 -> nc
- 28 -> nc
- 29 -> nc
