<p align="center">
  <img src="http://nodebots.io/img/equation.png">
</p>
# NodeBotDays
You'll find our Installation notes &amp; Start up script for our annual NodeBotDays Event


Welcome to Our annual BocaJS NodeBot Days event.

It's usually on the last saturday in July.

In this repo you'll find an example file that's ready for you to go.

ONCE you've flashed your "Arduino" Device (we're using ESP8266 D1 R2 Mini) 
(Follow these instructions if you haven't, steps 1-4  http://www.instructables.com/id/ESP8266-Firmata-J5-NodeBot/ )
The files (if you know what you're doing, or follow the above advice) is included in a directory here called "ESP8266 Firmware"

Or if you've already had someone flash it for you, then you're ready to go.

Note the instructions are different for Mac and Windows (linux follow Mac's instructions) but only because there was an extra step in windows for which I did some work already for you.

- Clone this repo ( git clone https://github.com/bocajs/NodeBotDays.git )
- If you're in windows (mac ignore this ) go into the "Windows directory"
- If you're in a Mac (Windows ignore this) run: npm i
- Now edit the johnnyFiveSample.js and CHANGE the IP value: "192.168.29.50" to what matches your device and save the file.
- You're done. Run it by running "node johnnyFiveSample.js"
It should now show something line this:

1531436035013 SerialPort Connecting to host:port: 192.168.29.50:3030
1531436035016 Connected Connecting to host:port: 192.168.29.50:3030
READY!
IT'S BLINKING!!!



You're good to go. Now get some sensors, lights, resistors and get playing.
Some good examples and documentation can be found at: http://johnny-five.io/examples/



Some Extra notes about the ESP8266 D1 Mini's PINs. This are NOT important unless you run into an issue:
nc = not connected
0 -> d3
1 -> nc
2 -> d4 = led
3 -> nc
4 -> d2
5 -> d1
6 -> watchdog(4) reset
7 -> watchdog(4) reset
8 -> watchdog(4) reset
9 -> watchdog(4) reset
10 -> nc
11 -> watchdog(4) reset
12 -> d7 low, d6 sporadic
13 -> d0 high, d7 sporadic
14 -> d0 high, d6 low, d7 low, d5 sporadic
15 -> d0 high, d8 sporadic
16 -> d0
17 -> nc
18 -> nc
19 -> nc
20 -> stack trace and pin-based(2) reset
21 -> stack trace and watchdog(4) reset
22 -> stack trace and watchdog(4) reset
23 -> stack trace and watchdog(4) reset
24 -> nc
25 -> nc
26 -> nc
27 -> nc
28 -> nc
29 -> nc
