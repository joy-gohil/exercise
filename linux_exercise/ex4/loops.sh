#!/bin/bash

read -p " Enter number : " n

echo "Using for Loop"

for i in $(seq 0 $n) ; do
	echo $i
done

echo "Using While Loop"
i=0
while [ $i -le $n ] ; do
	echo $i
	i=$(( $i+1 ));
done

echo "Using Until Loop"
i=0
until [ $i -ge $n ] ; do
	echo $i
	i=$(( $i+1 ));
done
