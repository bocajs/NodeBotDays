# mac = /dev/cu.SLAB_USBtoUART or /dev/cu.wchusbserial1410 (for the D1)
# Linux = /dev/ttyUSB0 (or 1 at the end of that)
# Windows = COM3 or COM4 or COM10 (check your Device Manager and check "ports")

#sudo esptool.py --port  /dev/cu.wchusbserial1410 --baud 460800 write_flash --flash_freq 80m --flash_mode dio --flash_size 4MB 0x0000 espruino_2v04_esp8266_4mb_combined_4096.bin 
sudo esptool.py --port  /dev/cu.SLAB_USBtoUART   --baud 460800 write_flash --flash_freq 80m --flash_mode dio --flash_size 4MB 0x0000 espruino_2v04_esp8266_4mb_combined_4096.bin 