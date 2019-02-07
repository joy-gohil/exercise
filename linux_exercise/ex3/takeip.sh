#!/bin/bash

read -p "Enter input 1: " ip1
read -p "Enter input 2: " ip2

echo "\nArithmetic Operations are :\n"
echo "Addition is "$(( $ip1 + $ip2 ));
echo "Substraction is "$(( $ip1 - $ip2 ));
echo "Multiplication is "$(( $ip1 * $ip2  ))
echo "Division is "$(( $ip1 / $ip2  ))
echo "Remaider is "$(( $ip1 % $ip2  ))

echo "\n"

if [ $ip1 -gt $ip2 ] ; then
	echo "$ip1 is Maximum"
	echo "$ip2 is Minimum"
else
	echo "$ip2 is Maximum"
	echo "$ip1 is Minimum"
fi

if [ $ip1 -eq $ip2 ] ; then
        echo "$ip1 and $ip2 are equal"
else    
        echo "$ip1 and $ip2 are not equal"
fi


if [ $ip1 -gt 0 ] ; then
        echo "$ip1 is Positive"
else
        echo "$ip1 is Negative"
fi

if [ $ip2 -gt 0 ] ; then
        echo "$ip2 is Positive"
else
        echo "$ip2 is Negative"
fi



