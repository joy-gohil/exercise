#!/bin/bash

echo "All Lines "`cat sample`
echo "First 10 Lines : "`head sample`
echo "Last 10 Lines : "`tail sample`
echo "Line 3-8 : "`head -8 sample | tail -5`
echo "7 Lines from Last Second Line : "`tail -8 sample | head -7 | tac`

