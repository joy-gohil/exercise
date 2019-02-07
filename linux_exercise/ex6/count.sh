#!/bin/bash

matches=$(grep -ro "a" * | wc -l)
echo "Total matches: $matches"
