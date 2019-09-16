# in the command line look for something in the /dev/ directory starting with "cu." or "ttyUSB"
# mac = /dev/cu.SLAB_USBtoUART
# Linux = /dev/ttyUSB0 (or 1 at the end of that)
# Windows = NO! look at the flash.bat file.

sudo esptool.py --port  /dev/cu.SLAB_USBtoUART --baud 460800 write_flash --flash_freq 80m --flash_mode dio --flash_size 4MB 0x0000 espruino_2v04_esp8266_4mb_combined_4096.bin 

# for ESP32
# esptool.py  --chip esp32 --port /dev/cu.SLAB_USBtoUART --baud 921600  --after hard_reset write_flash -z  --flash_mode dio  --flash_freq 40m  --flash_size detect  0x1000 bootloader.bin 0x8000 partitions_espruino.bin 0x10000 espruino_esp32.bin
