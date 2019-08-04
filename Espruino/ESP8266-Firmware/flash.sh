# in the command line look for something in the /dev/ directory starting with "cu." or "ttyUSB"
# mac = /dev/cu.SLAB_USBtoUART
# Linux = /dev/ttyUSB0 (or 1 at the end of that)

sudo esptool.py --port  /dev/cu.SLAB_USBtoUART --baud 460800 write_flash --flash_freq 80m --flash_mode dio --flash_size 4MB 0x0000 espruino_2v04_esp8266_4mb_combined_4096.bin 