#!/bin/bash
NEWIPARRAY=($(sdb -e "var CUROPR = \"getNewIPArray\";" -f changeIP.js))
test $? -ne 0 && echo "[ERROR] Failed to get IPARRAY.NEW_IP from config.js" && exit 1

echo "Begin to check ping NEWIP"
for NEWIP in "${NEWIPARRAY[@]}"
do
    echo "Ping ${NEWIP} 1 time"
    ping -c 1 "${NEWIP}" > /dev/null
    test $? -ne 0 && echo "[ERROR] Failed to ping ${NEWIP}" && exit 1
    echo "Pass"
done
echo "Done"

echo "Begin to change HA IP"
sdb -e "var CUROPR = \"changeIP\";" -f changeIP.js
echo "Done"
