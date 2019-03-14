#!/bin/bash

OPER=$2
FILE=$1
if [ -z "$2" ]
	then
		echo "Enter operation 1-info 2-tar 3-copy to tmp 4-rename it to BAK"
		read OPER
fi

case $OPER in
        1) echo $(stat "$FILE");;
        2) tar -cf "$(basename $FILE .txt).tar" $FILE ;;
		3) 	if [ ! -d "./tmp" ]
			then
				mkdir "./tmp"
			fi
			cp $FILE ./tmp
			;;
		4) mv "$FILE" "$FILE.bak" ;;
		*) echo "Please enter operations - 1 2 3 or 4" ;;
esac
