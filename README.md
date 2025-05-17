# 🔥 Anime Interactive Video Player 🔥

An immersive video player with floating Japanese text, particle effects, and timestamp-linked comments. Proudly created for the **CodeCircuit Hackathon 2025**.

## 🏆 CodeCircuit Hackathon Project

This project was developed as part of the CodeCircuit Hackathon 2025, which challenged participants to create innovative and interactive web applications. The concept **"Interactive video player with timestamp-linked comments"** was selected from the hackathon's provided list of project ideas and enhanced with anime-themed visuals and interactive elements.

## ✨ Key Features

- **Interactive Floating Words**: Japanese words float across the screen and explode when clicked or when touching the title
- **Fire & Dark Effects**: Two visual themes with unique animations and explosion styles
- **Time-Stamped Comments**: Add comments at specific video timestamps with one-click navigation
- **Custom Video Controls**: Play/pause, volume, speed control, and more
- **Visual Effects**: Particle explosions, ripples, glitches, and energy bursts
- **Footer Animations**: Social media links with destruction effects when clicked

## 🚀 Quick Start

1. **Clone Repository**
   ```bash
   git clone https://github.com/AreebAbdulGhani/anime-video-player.git
   cd anime-video-player
   ```

2. **Video Setup** (Important!)
   - The original demo video is available on YouTube: [Anime Fights Video](https://youtu.be/BgARtcQvLPc?si=G4ZE31t4WapvsG8i)
   - **Option 1 (Recommended)**: Update the player to use the YouTube embed
     ```javascript
     // In index.html, locate the video element (around line 1205) and replace with:
     <iframe width="100%" height="100%" src="https://www.youtube.com/embed/BgARtcQvLPc" 
     frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
     gyroscope; picture-in-picture" allowfullscreen></iframe>
     ```
   - **Option 2**: Download the video locally (if needed for offline use)
     - Use a YouTube downloader tool
     - Place the downloaded file in the project root directory
     - Name it `Best Anime Fights 2024 「AMV 」 - Gods 🔥.mp4`

3. **Launch the Player**
   ```bash
   chmod +x launch-player.sh
   ./launch-player.sh
   ```

## ⌨️ Keyboard Controls

- **Space**: Play/Pause
- **F**: Fullscreen
- **M**: Mute/Unmute
- **←/→**: Rewind/Forward 10 seconds
- **↑/↓**: Volume Up/Down
- **K**: Show/Hide Keyboard Shortcuts

## 🔍 Troubleshooting

- **Loading Screen Stuck**: Verify video filename matches exactly with HTML file
- **Video Not Playing**: Click anywhere on the page to enable autoplay
- **Browser Limitations**: Try Firefox or Safari if Chrome blocks local video
- **Navigation Issues**: Try File > Open in your browser if direct links don't work

## 💻 Technologies Used

- **HTML5**: Video API and semantic structure
- **CSS3**: Advanced animations and visual effects
- **JavaScript**: DOM manipulation without external libraries
- **Local Storage**: For saving comments (optional)

## 🎮 Interactive Elements

- **Click Japanese Words**: Trigger explosion effects with different styles
- **Add Time Comments**: Create markers on the progress bar for key moments
- **Footer Links**: Click social links to see destruction animations
- **Title Collisions**: Watch words explode when they touch the title

## 💡 Hackathon Implementation

This project showcases several technical achievements that were part of the CodeCircuit Hackathon 2025 requirements:
- **Performance Optimization**: Reduced animation load for smoother experience
- **No External Libraries**: Built using vanilla JavaScript without dependencies
- **Responsive Design**: Adapts to different screen sizes
- **User Interaction**: Multiple interactive elements with visual feedback
- **Creative UI/UX**: Anime-themed interface with dynamic elements

## 🙏 Acknowledgments

- Special thanks to the **CodeCircuit Hackathon 2025** organizers and judges
- Gratitude to fellow participants for inspiration and feedback
- Built with vibe by Areeb
- All anime-themed content is for demonstration purposes

## 🌐 Hosting on GitHub Pages

1. **Create a GitHub Repository**
   - Create a new repository on GitHub
   - Initialize it with a README if you want

2. **Upload Files to GitHub**
   ```bash
   # Initialize git repository (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit the files
   git commit -m "Initial commit: Anime Interactive Video Player"
   
   # Add your GitHub repository as remote
   git remote add origin https://github.com/YourUsername/YourRepositoryName.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Set Source to "main" branch and folder to "/ (root)"
   - Click Save
   - Your site will be published at `https://yourusername.github.io/your-repository-name/`

4. **Video Considerations**
   - For GitHub Pages deployment, using the YouTube embed (Option 1) is strongly recommended
   - This avoids file size limitations and ensures the video is always available
   - The video can be viewed at: [https://youtu.be/BgARtcQvLPc?si=G4ZE31t4WapvsG8i](https://youtu.be/BgARtcQvLPc?si=G4ZE31t4WapvsG8i)

---

⚡ Made with vibe by Areeb - CodeCircuit Hackathon 2025 ⚡
