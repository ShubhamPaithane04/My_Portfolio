# Shubham Paithane - Interactive React Portfolio

A stunning, interactive portfolio website built with React, Framer Motion, and modern web technologies. This portfolio showcases advanced frontend skills with smooth animations, particle effects, custom cursor, and engaging user interactions.

## ✨ Features

- **🎨 Modern Animations**: Smooth page transitions and micro-interactions using Framer Motion
- **✨ Particle Background**: Dynamic particle system with interactive connections
- **🖱️ Custom Cursor**: Interactive cursor follower that responds to hoverable elements
- **📱 Fully Responsive**: Optimized for all devices from mobile to desktop
- **⚡ Fast Performance**: Built with Vite for lightning-fast development and production builds
- **🎯 Type Animation**: Dynamic typing effect in hero section
- **🔄 Scroll Animations**: Elements animate into view as you scroll
- **📊 Interactive Projects**: Clickable project cards with detailed modal views
- **💬 Contact Form**: Functional contact form with smooth interactions
- **🌊 Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing effect
- **React Intersection Observer** - Scroll-based animations
- **CSS3** - Modern styling with gradients and effects

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx/css
│   │   ├── Hero.jsx/css
│   │   ├── About.jsx/css
│   │   ├── Skills.jsx/css
│   │   ├── Projects.jsx/css
│   │   ├── Contact.jsx/css
│   │   ├── Footer.jsx/css
│   │   ├── ParticlesBackground.jsx/css
│   │   └── CursorFollower.jsx/css
│   ├── App.jsx/css
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/shubhampaithane/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The optimized production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Update Personal Information

Edit the following files to add your information:

**Hero Section** (`src/components/Hero.jsx`):
- Update social media links
- Modify typing animation text

**About Section** (`src/components/About.jsx`):
- Update biography text
- Modify achievements and stats

**Skills Section** (`src/components/Skills.jsx`):
- Add/remove skills and technologies
- Update skill categories

**Projects Section** (`src/components/Projects.jsx`):
- Add your project details
- Update project links (GitHub, Live Demo)
- Modify project highlights and tech stacks

**Contact Section** (`src/components/Contact.jsx`):
- Update contact information
- Modify social media links

### Change Color Scheme

Edit color variables in `src/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  --text-primary: #1f2937;
  --text-secondary: #6b7280;
}
```

### Customize Animations

Adjust animation properties in component files using Framer Motion:

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and deploy
5. Your site is live!

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [netlify.com](https://netlify.com)
3. Or connect your GitHub repository for automatic deployments

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```
3. Run: `npm run deploy`

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome)

## 🎯 Key Features Showcase

### Particle System
Custom canvas-based particle animation with dynamic connections that respond to particle proximity.

### Custom Cursor
Interactive cursor that changes size and behavior when hovering over clickable elements.

### Scroll Animations
Components fade and slide into view using Intersection Observer API for optimal performance.

### Project Modals
Click on any project card to see detailed information in a beautiful animated modal.

## 📧 Contact

Shubham Paithane
- **Email**: shubhampaithane04@gmail.com
- **Phone**: +91 9699613559
- **Location**: Nashik, Maharashtra
- **GitHub**: [github.com/shubhampaithane](https://github.com/shubhampaithane)
- **LeetCode**: [leetcode.com/shubhampaithane](https://leetcode.com/shubhampaithane)

## 📝 License

This project is open source and available under the MIT License.

---

**Built with 💙 using React, Framer Motion, and modern web technologies**
