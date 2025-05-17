#!/bin/bash

# Build the full file path
FILE_PATH="file://$(pwd)/anime-video-player-fixed.html"
echo "Opening: $FILE_PATH"

# Try opening with different browsers
if [ -n "$(command -v google-chrome)" ]; then
  echo "Opening with Chrome..."
  open -a "Google Chrome" "$FILE_PATH"
elif [ -n "$(command -v firefox)" ]; then
  echo "Opening with Firefox..."
  open -a "Firefox" "$FILE_PATH"
elif [ -n "$(command -v safari)" ]; then
  echo "Opening with Safari..."
  open -a "Safari" "$FILE_PATH"
else
  echo "Opening with default browser..."
  open "$FILE_PATH"
fi

echo "If the file doesn't open, try opening it manually from Finder." 