<p align="center">
  <img src="http://nodebots.io/img/equation.png">
</p>

<h1>NodeBots Day</h1>
You'll find our Installation notes &amp; Start up script for our annual NodeBots Day Event

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
1) We'll flash our devices with the software for us to control it (Firmata)
2) We will add the johnny-five npm package (and another one)
3) We'll create our app and we'll be controlling our Arduino with NodeJS!!!

# The Detailed explanation

The "trick" to "running JavaScript on our Arduino" is that "we don't"<br/>
What we're doing is creating a program in our arduino that waits for commands from our laptops.<br/>
We then use the johnny-five and other helpful libraries to send commands to the device.<br/>
and the device does what we tell it.<br/>

Of course you tell johnny-five what to do using JavaScript, so in essense we tell the Arduino what to do with JavaScript

# Instructions

1) Flash the Arduino
For our ESP8266 D1 Mini Devices we'll be using the StandardFirmataWiFi Firmware.<br/>
CHANGE the IP address to something unique and document it and of course set the Wifi SSID and Password correctly.<br/>

You can use the steps 1-4 in this guide to help http://www.instructables.com/id/ESP8266-Firmata-J5-NodeBot/<br/>
We've included the files you need (no need to download them) in the "ESP8266 Firmware" directory in this repo<br/>
*OR* you can ask someone to do it for you. <br/>

2) install the johnny-five and etherport libraries in your project (see NOTES & ERRORS below for any errors)
```
npm i johnny-five
npm i etherport-client
```

3) Skip the hassle and copy my [johnnyFiveSample.js](https://raw.githubusercontent.com/bocajs/NodeBotDays/master/johnnyFiveSample.js) and edit it to your needs <br/>
OR <br/>
Create a new file and include the "johnny-five" and "etherport-client" libraries (see below) and code something wonderful!
```
const five = require("johnny-five"); 
const EtherPortClient = require("etherport-client").EtherPortClient;
```


# YOU'RE DONE
You should get something like this: and your device's built in LED should be blinking
```
1531436035013 SerialPort Connecting to host:port: 192.168.29.50:3030
1531436035016 Connected Connecting to host:port: 192.168.29.50:3030
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


# PINS on the ESP8266 D1 Mini 
Some Extra notes about the ESP8266 D1 Mini's PINs. This are NOT important unless you run into an issue:<br/>

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
