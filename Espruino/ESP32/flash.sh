# mac = /dev/cu.SLAB_USBtoUART or /dev/cu.wchusbserial1410 (for the D1)
# Linux = /dev/ttyUSB0 (or 1 at the end of that)
# Windows = NO! look at the flash.bat file.

sudo esptool.py  --chip esp32    --port /dev/cu.SLAB_USBtoUART --baud 921600  --after hard_reset write_flash -z  --flash_mode dio  --flash_freq 40m  --flash_size detect  0x1000 bootloader.bin 0x8000 partitions_espruino.bin 0x10000 espruino_esp32_2_04v.bin
