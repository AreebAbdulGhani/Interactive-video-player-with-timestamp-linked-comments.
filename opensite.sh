#!/bin/bash
# Try port 3000 with forced refresh
open -a "Google Chrome" "http://localhost:3000?$(date +%s)"
