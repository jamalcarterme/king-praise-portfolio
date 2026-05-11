# Praise Portfolio Website — README

## 📁 Files Included

```
praise-portfolio/
├── index.html       ← Main website file (open this in browser)
├── style.css        ← All custom styles
├── script.js        ← All interactions, animations, form logic
├── hero.png         ← YOUR photo (add this)
├── project-1.png    ← Interior Design Website screenshot
├── project-2.png    ← Ontario Incorporated screenshot
├── project-3.png    ← Jhune Electricals screenshot
├── project-4.png    ← King Praise Techz screenshot
├── project-5.png    ← Larry's Delight screenshot
└── README.md        ← This file
```

---

## 🖼️ Adding Your Images

**⚠️ All images must be placed in the SAME folder as index.html (no subfolders)**

### hero.png
- Your professional headshot or portrait
- Recommended size: 800×1000px (portrait orientation)
- Any format: .png, .jpg, .webp

### project-1.png through project-5.png
Take screenshots of each live website:
1. `project-1.png` → https://interior-designwebsite-mene.vercel.app/
2. `project-2.png` → https://ontario-incorpated-website.vercel.app/
3. `project-3.png` → https://electrician-jhunewebsite.vercel.app/
4. `project-4.png` → https://kingpraisetechz-frontend.vercel.app
5. `project-5.png` → https://www.larrysdelight.com.ng

**Tip:** Use a tool like GoFullPage (Chrome extension) or screenshot.guru for full-page screenshots.
Recommended size: 1200×800px (landscape)

---

## 🚀 Deploying to the Web

### Option 1: Vercel (Free, Recommended)
1. Create account at vercel.com
2. Drag and drop your folder into Vercel
3. Your site is live instantly with a .vercel.app domain

### Option 2: Netlify (Free)
1. Create account at netlify.com
2. Drag your entire folder to the deploy area
3. Done — you get a .netlify.app domain

### Option 3: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages → Enable from main branch

### Custom Domain
After deploying, connect your own domain (e.g., kingpraisetechz.com) through your hosting provider's DNS settings.

---

## ✉️ Contact Form

The contact form is wired to open the visitor's email client pre-filled with their message and send it to **kingpraisegold@gmail.com**.

For a backend form (messages sent directly without opening an email app), consider:
- **Formspree.io** — free, just change the form action
- **EmailJS** — free tier available

---

## 🎨 Customising

### Change Colors
Open `style.css` and edit the `:root` variables at the top:
```css
:root {
  --gold: #F5C518;       /* Main gold accent */
  --dark: #070707;       /* Background */
}
```

### Change Prices
Open `index.html` and find any `data-price="..."` attribute, e.g.:
```html
data-price="NGN:150000|USD:100|GBP:85|EUR:95|CAD:135"
```
Update the numbers as needed.

### Change Content
All content is in `index.html`. Just search for the text you want to change.

---

## 📱 Features
- ✅ Fully mobile responsive
- ✅ Custom animated cursor (desktop only)
- ✅ Smooth scroll reveal animations
- ✅ Currency switcher (NGN / USD / GBP / EUR / CAD)
- ✅ Interactive FAQ accordion
- ✅ Toastify notification on form submit
- ✅ WhatsApp floating button
- ✅ Sticky navbar with blur effect
- ✅ Project card hover effects with 3D tilt
- ✅ Animated marquee banner
- ✅ Mobile hamburger menu

---

Built with ❤️ — HTML, Tailwind CSS, Vanilla JS, Toastify
