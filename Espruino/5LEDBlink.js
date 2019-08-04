/*
LED
NodeMCU.D8 (5th pin to the right of the usb port on the 3.3v side 
NodeMCU.D7
NodeMCU.D6
NodeMCU.D5

buttons
D3 D4 same side. 4 from the side farthest from the USB
*/

var whichpin=1;
var dir = 1;

pinMode(NodeMCU.D3, 'input_pulldown');
pinMode(NodeMCU.D4, 'input_pulldown');
var dir = true;

setWatch(function(e) {
  console.log("B3 Button pressed");
  dir = 1;
}, NodeMCU.D3,  { repeat: true, edge: 'rising', debounce: 50 });


setWatch(function(e) {
  console.log("B3 Button pressed");
  dir = -1;  
}, NodeMCU.D4,  { repeat: true, edge: 'rising', debounce: 50 });



setInterval(()=> {
  if (whichpin == 5) {
    whichpin=1;
  }
    if (whichpin === 0) {
    whichpin=5;
  }
  NodeMCU.D8.write(false);
  NodeMCU.D7.write(false);
  NodeMCU.D6.write(false);
  NodeMCU.D5.write(false);

  switch(whichpin) {
    case 1: 
      NodeMCU.D8.write(true);
      break;
    case 2: 
      NodeMCU.D7.write(true);
      break;
    case 3: 
      NodeMCU.D6.write(true);
      break;
    case 4: 
      NodeMCU.D5.write(true);
      break;
  }
  whichpin += dir;
}, 200);
  

