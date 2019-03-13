#!/bin/bash

f_dir=$1
l_name=$2


if [[ -z $1 || -z $2 ]];
then
	echo "Warning! Empty parameters!" 
	echo "scriptname <dir from> <simlink name>"
else

	if [ -d $f_dir ];
		then
		for S in $(find "$f_dir" -type l); do
			if [ ! -e "$(readlink $(basename $S))" ];
			then
				echo "$S - bad s link"
				##rm "$S"
			else
				echo "$S - OK"
			fi
		done
	else
		echo "Not exists dir for"
	fi

fi
