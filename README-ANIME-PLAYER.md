# 🔥 Anime-Themed Interactive Video Player 🔥

An immersive, visually stunning video player with floating Japanese text, particle effects, and timestamp-linked comments. Built for the CodeCircuit Hackathon.

![Anime Video Player Screenshot](https://placeholder-for-screenshot.com)

## ✨ Features

- **Interactive Floating Words**: Japanese words float across the screen and explode when clicked or when they touch the title
- **Time-Stamped Comments**: Add comments at specific video timestamps with one-click navigation
- **Customizable Video Controls**: Play/pause, volume, playback speed, fullscreen controls
- **Keyboard Shortcuts**: Full keyboard navigation and control
- **Visual Effects**: Particle explosions, burst animations, and dynamic glow effects
- **Responsive Design**: Adapts to different screen sizes
- **Social Media Integration**: Quick-access social links with destruction effects

## 🔧 Technologies Used

- **HTML5**: Semantic structure and video API
- **CSS3**: Advanced animations, keyframes, transforms, and filters
- **JavaScript**: DOM manipulation and event handling
- **HTML5 Video API**: For video playback and control
- **Local Video Support**: Plays video files from your device
- **CSS3 Animations**: For particle effects and floating text animations
- **No External Libraries**: Pure vanilla implementation, no dependencies

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Local video file(s) to play

### Installation

1. Clone this repository or download the ZIP file
```bash
git clone https://github.com/yourusername/anime-video-player.git
```

2. Place your video file in the project directory
   - The default video path is set to `Best Anime Fights 2024 「AMV 」 - Gods 🔥.mp4`
   - To use a different file, update the video source in the HTML

3. Open the project:

#### Option 1: Using the provided script
```bash
# Make the script executable
chmod +x launch-player.sh

# Run the script
./launch-player.sh
```

#### Option 2: Manual start
Open `anime-video-player-fixed.html` directly in your browser by double-clicking it or using the File > Open menu in your browser.

## 📖 How to Use

### Basic Controls

- **Play/Pause**: Click the play/pause button or press Space
- **Volume**: Adjust with the volume slider or use Up/Down arrows
- **Playback Speed**: Select speed from the dropdown menu
- **Fullscreen**: Click the fullscreen button or press F
- **Seek**: Click anywhere on the progress bar to jump to that point
- **Mute/Unmute**: Click the volume icon or press M

### Keyboard Shortcuts

- **Space**: Play/Pause
- **F**: Toggle fullscreen
- **M**: Mute/Unmute
- **Left Arrow**: Rewind 10 seconds
- **Right Arrow**: Forward 10 seconds
- **Up Arrow**: Volume up
- **Down Arrow**: Volume down
- **K**: Show/hide keyboard shortcuts panel

### Adding Timestamp Comments

1. Play the video and pause at the desired timestamp
2. Click "Add Comment at Current Time" button
3. Type your comment in the input field
4. Press Enter or click "Submit"
5. The comment will appear in the comments section with its timestamp
6. Click any timestamp to jump to that point in the video

### Interactive Elements

- **Floating Words**: Click on any floating Japanese word to trigger explosion effects
- **Footer Links**: Click on social media links to see destruction animations
- **Settings**: Access additional settings via the gear icon in the top-right

## 🎮 Special Features

### Dynamic Word Generation

The player continuously generates floating Japanese words in two styles:
- **Fire Words**: Orange/red themed words with flame effects
- **Black Flame Words**: Blue/purple themed words with dark energy effects

These words interact with the title, creating explosive animations when they collide.

### Particle Effects System

A sophisticated particle system creates:
- Explosion effects when words are clicked
- Ripple effects for certain interactions
- Glitch effects for visual variety
- Power burst animations for dramatic impact

### Timestamp Navigation

Comments with timestamps create marker points on the progress bar, allowing for quick navigation between important moments in the video.

## 🎨 Customization

You can customize the player by:

1. **Changing Background**: Toggle background image via settings
2. **Adjusting Video Source**: Replace the video file path in the HTML
3. **Modifying Visual Effects**: Edit the CSS variables for different colors and animations
4. **Adding Social Links**: Update the footer links with your own social media profiles

## 🙏 Acknowledgments

- Special thanks to the **CodeCircuit Hackathon** for providing the opportunity and inspiration for this project
- Built with vibe by Areeb
- All anime-related content is used for demonstration purposes only

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

⚡ Made with vibe by Areeb ⚡ 