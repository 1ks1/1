#!/bin/bash

f_dir=$1
d_dir=$2
f_name=$3

if [ -d $f_dir ]
then
find "$1" -name "$3" -type f -exec cp {} $2 \;
else
mkdir $d_dir
find "$1" -name "$3" -type f -exec cp {} $2 \;
fi

 
