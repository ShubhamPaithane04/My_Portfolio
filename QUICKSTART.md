# 🚀 Quick Start Guide

## Get Your Portfolio Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```

Your portfolio will open at **http://localhost:5173** 🎉

### Step 3: Customize Your Content

#### Update Your Information

1. **Personal Info & Links** - `src/components/Hero.jsx`
   - Line 14: GitHub URL
   - Line 15: LinkedIn URL  
   - Line 16: LeetCode URL
   - Line 17: Email address

2. **About Section** - `src/components/About.jsx`
   - Update your biography text
   - Modify stats (lines 22-27)
   - Update achievements (lines 11-21)

3. **Skills** - `src/components/Skills.jsx`
   - Add/remove skills in the skillCategories array (lines 19-60)

4. **Projects** - `src/components/Projects.jsx`
   - Update project details (lines 13-58)
   - Replace `github: '#'` and `live: '#'` with your actual URLs

5. **Contact** - `src/components/Contact.jsx`
   - Update contact information (lines 27-41)
   - Update social links (lines 43-47)

## 🎨 Customization Tips

### Change Colors
Edit `src/index.css` lines 7-12:
```css
:root {
  --primary-color: #2563eb;  /* Change this */
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
}
```

### Modify Animations
Adjust Framer Motion props in component files:
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }}  /* Change duration */
>
```

## 📦 Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

## 🌐 Deploy (Choose One)

### Vercel (Easiest)
1. Push to GitHub
2. Import on vercel.com
3. Deploy! ✅

### Netlify
1. Run `npm run build`
2. Drag `dist` folder to netlify.com
3. Done! ✅

### GitHub Pages
```bash
npm install --save-dev gh-pages
```

Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:
```bash
npm run deploy
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill the process on port 5173
npx kill-port 5173
npm run dev
```

**Build errors?**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📱 Testing

- **Desktop**: Open http://localhost:5173
- **Mobile**: Use your local IP (shown in terminal) on your phone
- **Responsive**: Use browser DevTools to test different screen sizes

## ⚡ Performance Tips

1. Optimize images before adding them
2. Keep animations smooth (60fps target)
3. Test on different devices
4. Run `npm run build` to check bundle size

## 💡 Need Help?

- Check the main [README.md](README.md) for detailed documentation
- Review component files - they're well-commented
- Test each section individually

---

**Ready to impress recruiters? Your interactive portfolio is just `npm run dev` away! 🚀**
