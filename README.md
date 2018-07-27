<p align="center">
  <img src="http://nodebots.io/img/equation.png">
</p>

<h1>NodeBots Day</h1>
You'll find our Installation notes &amp; Start up script for our annual NodeBots Day Event
Fotos and Details about our event is at: https://www.meetup.com/BocaJS/events/251627580/
MiamiJS has their Photos here: https://www.meetup.com/MiamiJS/events/252458005/ 

# Thanks to our Sponsors 
This event wouldn't be possible without the amazing support of the Microsoft’s Cloud Developer Advocacy team

https://developer.microsoft.com/en-us/advocates

<a href="https://twitter.com/azureadvocates"><img src="https://pbs.twimg.com/profile_images/895974253593583617/AWBCJfZW_400x400.jpg"></a>


# Welcome to Our annual BocaJS NodeBot Days event.

It's usually on the last saturday in July.

We will be using be using the [johnny-five](http://johnny-five.io/) library to program our Arduino devices.

# The basics of "electronics" 
https://www.youtube.com/watch?v=fq6U5Y14oM4

# The basics
1) We'll flash our devices with the software for us to control it (StandardFirmataESP.ino)
2) We will add the johnny-five npm package (or just "npm i" for all)
3) We'll create our app and we'll be controlling our Arduino with NodeJS!!!

# The Detailed explanation

The "trick" to "running JavaScript on our Arduino" is that "we don't".<br/>
What we're doing is creating a program in our arduino that waits for commands from our laptops. This program is called Firmata.<br/>
We then use the johnny-five library and others to send commands to the device.<br/>
and the device does what we tell it.<br/>

Of course you tell johnny-five what to do using JavaScript, so in essense we tell the Arduino what to do with JavaScript

# Instructions

1) Flash the Arduino
For our ESP8266, Arduino Compatible Devices, we'll be using the a Modified version of the <a href="tree/master/ESP8266%20Firmware/StandardFirmata-ESP8266-USB">Firmata Firmware</a>.<br/>
(Note the StandardFirmataWifi is included if you want to control your devices over Wifi)<br/>

We have already flashed your device, BUT should you want to do the same then you can follow steps 1-4 in this guide to help http://www.instructables.com/id/ESP8266-Firmata-J5-NodeBot/<br/>
Feel free to use your version of the StandardFirmataWifi which has already uncommented the hard coded IP Address because without a hard coded IP Address this is difficult.<BR>

2) install the johnny-five and etherport libraries in your project (see NOTES & ERRORS below for any errors)
```
npm i johnny-five
npm i etherport-client
```

3) Skip the hassle and copy my [johnnyFiveSample.js](blob/master/johnnyFiveSample.js) and edit it to your needs <br/>
OR <br/>
Use the ample in the http://johnny-five.io/examples/ page and include the "johnny-five" and "etherport-client" libraries (see below) and code something wonderful!


# YOU'RE DONE
You should get something like this: and your device's built in LED should be blinking
```
1532205100372 Available COM5,COM7
1532205100575 Connected COM7
1532205105683 Repl Initialized
READY!
IT'S BLINKING!!!
```
NOW it's time for you to use the [Johnny-Five Examples & API](http://johnny-five.io/examples/) to make something wonderful!

# NOTES & ERRORS
There are three directories in this repo that are per each platform (Windows, Mac, Linux).<br/>
If you have your computer setup correctly (or are just lucky that way) then you WON'T need them.<br/>
But each platform DOES have some issues in some situations so each directy has a trick to get you going.<br/>

I'll describe the issues on each platform and you can then choose to follow the steps within each directory if you need it.
- Windows - Python is hard to setup and when you "npm i johnny-five" you'll get an error. I've included the "node_modules" that you'll need.
- Mac - the issue isn't with johnny-five (if you have any). it's flashing the firmware on the arduino if you need to. I've include some drivers that may help.
- Linux - Similar to Windows. if you have any issues doing an "npm i johnny-five" then here I've included the "node_modules" directory that you'll need.

# Now get your OWN kit
Suggested kit. But ANY "ioT kit" or "arduino kit" will work.
https://amzn.to/2LXE9WD


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
