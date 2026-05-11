# Tailwind CSS Production Build Setup

This project now uses production-ready Tailwind CSS compiled locally instead of the CDN.

## Installation

1. Install dependencies:
```bash
npm install
```

## Build Tailwind CSS

### Development (watch mode):
```bash
npm run dev
```
This will watch for changes in your HTML/JS files and recompile the CSS automatically.

### Production (minified):
```bash
npm run build
```
This will generate a minified `style.css` file optimized for production.

## How It Works

1. **tailwind.config.js** - Defines your Tailwind configuration with custom colors and fonts
2. **postcss.config.js** - PostCSS configuration for processing Tailwind directives
3. **src/input.css** - Source CSS file with Tailwind directives (@tailwind base, components, utilities)
4. **style.css** - Generated compiled CSS (auto-generated, do not edit manually)

## File Structure

```
/
├── index.html
├── style.css (generated from npm run build)
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── src/
│   └── input.css
├── main.js
└── custom-styles.css
```

## Why This Setup?

- **Production Ready**: All unused CSS is purged automatically
- **Smaller File Size**: Only includes CSS you actually use
- **Faster Loading**: Compiled CSS loads faster than CDN + JIT compilation
- **Better Performance**: No runtime compilation overhead
- **Offline Support**: CSS is now local, not dependent on CDN availability

## Next Steps

1. Run `npm install` to install Tailwind and PostCSS
2. Run `npm run dev` during development
3. Run `npm run build` before deploying to production
4. Commit the generated `style.css` to version control
