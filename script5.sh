#!/bin/bash

f_dir=$1
d_dir=$2
f_name=$3

if [ -d $f_dir ]
then
find "$f_dir" -name "$f_name" -type f -exec cp {} $d_dir \;
else
mkdir $d_dir
find "$f_dir" -name "$f_name" -type f -exec cp {} $d_dir \;
fi

 
