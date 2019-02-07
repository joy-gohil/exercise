#!/bin/bash

remFile(){
	for i in ./*
	do
		if [ -f $i ] ; then
			value=`echo "$i" | cut -c 3-`
			if [[ ( $value == *[-]* ) || ( $value == *[_]* ) || ( $value == *[\*]*  ) || ( $value == *[\$]* ) ]]  ; then
				echo "Removed: $value"
				rm $value
			fi
			#echo "$i file"
		fi
	done
}
remFile
