function start(){
  g.clear();
  g.drawString("Hello",35,0);
  g.drawLine(35, 20, g.getWidth(), 20);
  g.setFontVector(10);
  g.drawString("123456789",30,7);
  g.drawString("123456789",30,22);
  g.drawString("123456789",30,35);
  g.flip();
}
// HELTEC 128x32
/*
let SCL = D5;
let SDA = D4;
I2C1.setup({scl:SCL,sda:SDA});
var g = require("SSD1306").connect(I2C1, start, { height : 32 });
*/
//D1.Mini OLED 64x48
let SCL = NodeMCU.D1;
let SDA = NodeMCU.D2;
I2C1.setup({scl:SCL,sda:SDA});
var g = require("https://raw.githubusercontent.com/bocajs/NodeBotDays/master/Espruino/ssd1306.js").connect(I2C1,start, { height : 48 });