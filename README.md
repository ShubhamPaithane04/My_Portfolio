# 🚀 My Portfolio - macOS Style Interactive Portfolio

A stunning, interactive portfolio website built with React featuring a macOS-inspired interface with draggable windows, dock, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/React-18.3-61dafb?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.11-ff0055?style=for-the-badge&logo=framer&logoColor=white)

## ✨ Features

### 🎨 **macOS Interface**
- **Boot Screen** - Authentic Apple-style loading animation
- **Lock Screen** - Time & date display with smooth transitions
- **Desktop** - Full macOS-style environment
- **Draggable Windows** - Move, minimize, maximize windows
- **Dock** - Interactive bottom dock with magnification effect
- **Menu Bar** - Top menu with time, battery, and system controls

### 📱 **Fully Mobile Responsive**
- ✅ Optimized for all screen sizes (360px - 4K)
- ✅ Touch-friendly interface on mobile
- ✅ Adaptive layouts for tablets and phones
- ✅ Landscape orientation support
- ✅ Progressive enhancement across devices

### 🎯 **Portfolio Sections**
- **About Me** - Student profile with 300+ DSA problems solved
- **What I'm Doing** - Current focus areas and skills
- **Projects** - Showcase of 4 major projects with glass-morphism design
- **Skills** - Technical skills organized by category
- **Contact** - Get in touch information with social links
- **Resume** - Professional resume viewer with download option
- **Music Player** - Working music player with your favorite tracks
- **Wallpaper Picker** - Multiple wallpaper themes

## 🛠️ Tech Stack

- **React 18.3** - UI library
- **Vite 5.4** - Build tool & dev server
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library
- **CSS3** - Glass-morphism & modern styling

## 📦 Installation

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/ShubhamPaithane04/My_Portfolio.git
cd My_Portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Open in browser**
```
http://localhost:5173
```

## 🚀 Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist` folder.

## 📂 Project Structure

```
My_Portfolio/
├── public/
│   ├── music/           # Music files for player
│   ├── wallpapers/      # Desktop wallpapers
│   ├── resume.pdf       # Resume file
│   └── favicon.svg
├── src/
│   ├── os/              # macOS interface components
│   │   ├── apps/        # App windows (Music, etc.)
│   │   ├── Desktop.jsx
│   │   ├── Dock.jsx
│   │   ├── Window.jsx
│   │   ├── MenuBar.jsx
│   │   └── os.css       # Main styling
│   ├── data/
│   │   └── portfolio.js # Portfolio data (EDIT HERE!)
│   ├── App.jsx
│   └── main.jsx
└── package.json
```

## ✏️ Customization

### Update Your Information

Edit `src/data/portfolio.js` to customize:

```javascript
export const profile = {
  name: 'Your Name',
  email: 'your.email@example.com',
  phone: '+91 1234567890',
  location: 'Your City, State',
  // ... more fields
}

export const projects = [
  // Add your projects
]

export const skills = [
  // Add your skills
]
```

### Replace Music Files

Add your MP3 files to `public/music/` folder:
- song-1.mp3
- song-2.mp3
- song-3.mp3
- song-4.mp3

Update track info in `src/data/portfolio.js`:

```javascript
export const musicTracks = [
  {
    title: 'Your Song',
    artist: 'Artist Name',
    src: '/music/song-1.mp3',
    cover: '/cover.jpg',
  },
]
```

### Add Your Resume

Replace `public/resume.pdf` with your own PDF resume.

### Change Wallpapers

Add custom wallpapers to `public/wallpapers/` and update in `src/data/portfolio.js`.

## 🎨 Key Features Explained

### Draggable Windows
Windows can be dragged around the screen by clicking and holding the title bar.

### Window Controls
- **Red** - Close window
- **Yellow** - Minimize window
- **Green** - Maximize/restore window

### Dock Interactions
- Hover over dock icons for magnification effect
- Click to open apps
- Dot indicator shows running apps

### Mobile Experience
- Desktop widgets hidden on mobile for clean interface
- Full-screen windows on mobile devices
- Touch-optimized controls

## 📱 Responsive Breakpoints

- **1024px** - Tablets & small laptops
- **768px** - Large phones
- **480px** - Small phones
- **360px** - Very small phones

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

### Deploy to Netlify

1. Build the project
```bash
npm run build
```

2. Drag & drop `dist` folder to Netlify

### Deploy to GitHub Pages

See `DEPLOYMENT.md` for detailed instructions.

## 📸 Screenshots

> Add screenshots of your portfolio here after deployment

## 🎓 About Me

**Shubham Paithane**
- 🎓 B.Tech Computer Science Student at Parul University
- 💻 300+ DSA Problems Solved on LeetCode
- 🚀 Passionate about Full-Stack Development & Problem Solving
- 📍 Nashik, Maharashtra, India

## 🔗 Links

- **GitHub**: [@ShubhamPaithane04](https://github.com/ShubhamPaithane04)
- **LinkedIn**: [Shubham Paithane](https://www.linkedin.com/in/shubham-paithane-3b9909374/)
- **LeetCode**: [@shubham_0_4_](https://leetcode.com/u/shubham_0_4_/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Design inspired by macOS Big Sur/Monterey
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

---

⭐ **Star this repo if you like it!**

Made with ❤️ by Shubham Paithane
