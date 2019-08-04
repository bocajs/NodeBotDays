REM to find the right COM port
REM Right click on the start button (bottom right, microsoft logo) and choose "Device Manager"
REM Then find the "Ports (COM & LPT)" and open it to find the right COM port. 
esptool --port  COM10 --baud 460800 write_flash --flash_freq 80m --flash_mode dio --flash_size 4MB 0x0000 espruino_2v04_esp8266_4mb_combined_4096.bin 