#!/bin/bash

# Kill any processes using port 8000
lsof -i :8000 | grep LISTEN | awk '{print $2}' | xargs kill -9 2>/dev/null

# Start python HTTP server in the background
python3 -m http.server 8000 &

# Open the HTML file in default browser (MacOS)
open http://localhost:8000/anime-video-player.html

echo "Server running on http://localhost:8000/anime-video-player.html"
echo "Press Ctrl+C to stop" 