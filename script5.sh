#!/bin/bash

f_dir=$1
d_dir=$2
f_name=$3


if [[ -z $1 || -z $2 || -z $3 ]];
then
	echo "Warning! Empty parameters!" 
	echo "scriptname <dir from> <dir to> <filename for>"
else

	if [ -d $d_dir ];
		then
		find "$f_dir" -name "$f_name" -type f -exec cp -f {} $d_dir \;
	else
		mkdir $d_dir
		find "$f_dir" -name "$f_name" -type f -exec cp -f {} $d_dir \;
	fi

fi
 
