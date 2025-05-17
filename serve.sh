#!/bin/bash

# Start Python HTTP server
echo "Starting server at http://localhost:8000"
echo "Opening anime-video-player-fixed.html in browser..."
python3 -m http.server 8000 &
sleep 1
open http://localhost:8000/anime-video-player-fixed.html

echo "Server running. Press Ctrl+C to stop." 