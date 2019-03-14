#!/bin/bash

filename="$3"
forfinddir="$1"
tdir="$2"
echo "1 = $forfinddir 2 = $tdir 3 = $filename"


if [[ -z $1 || -z $2 || -z $3 ]];
then
read -p "Enter find dir:" forfinddir
read -p "Enter dir foe copy:" tdir
read -p "Enter filename or mask:" filename
fi


if [ ! -d $tdir ];
	then
	mkdir $tdir
fi


for A in $(find "$forfinddir" -name "$filename" -type f);do
	if [ -f "$A" ];then
		cp $A $tdir
		echo "== $A ="
	fi
done


