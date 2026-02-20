# 💪 Health-Code

> A developer-friendly nutrition protocol featuring optimized smoothie recipes and a complete health roadmap.

[![Made with HTML](https://img.shields.io/badge/Made%20with-HTML-e34c26?style=flat-square&logo=html5)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Styled with CSS](https://img.shields.io/badge/Styled%20with-CSS-264de4?style=flat-square&logo=css3)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vanilla JS](https://img.shields.io/badge/Powered%20by-Vanilla%20JS-f7df1e?style=flat-square&logo=javascript)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🎯 Mission

Execute a high-protein, nutrient-dense daily protocol designed for developers, athletes, and health-conscious humans who want optimal performance without complex meal prep.

## 🚀 Features

- **6 Recipe Variants** - Three base smoothies (Citrus Sunrise 🍊, Strawberry Fields 🍓, Blueberry Blast 💜)
- **Dual Versions** - Each recipe has a 1 PM "Break-Fast" version and a 5 PM "Post-Gym" version
- **~121g Daily Protein** - Optimized macros across 2 smoothies + dinner
- **Complete Shopping List** - Everything you need to get started
- **Daily Schedule** - Timing protocol for maximum gains
- **Tech-Inspired Design** - Because we code with style 😎
- **Zero Dependencies** - Pure HTML, CSS, and Vanilla JavaScript

## 📊 Daily Protocol

| Time | Meal | Protein | Notes |
|------|------|---------|-------|
| 1:00 PM | Break-Fast Smoothie | ~33g | No protein powder, full supplements |
| 5:00 PM | Post-Gym Smoothie | ~48g | With protein powder for recovery |
| 7:00 PM | Dinner | ~40g | Solid meal |
| **Total** | | **~121g** | 🎯 Target achieved |

## 🛠️ Tech Stack

- **HTML5** - Semantic structure
- **CSS3** - Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** - Tab navigation, localStorage persistence, easter eggs
- **Google Fonts** - Fira Code (monospace) + Inter (sans-serif)

## 🏃 Quick Start

### Option 1: Clone and Open Locally

```bash
git clone https://github.com/YOUR_USERNAME/health-code.git
cd health-code
open index.html  # macOS
# or
xdg-open index.html  # Linux
# or
start index.html  # Windows
```

### Option 2: Deploy to GitHub Pages

1. Fork this repository
2. Go to **Settings** → **Pages**
3. Select **main** branch as source
4. Your site will be live at `https://YOUR_USERNAME.github.io/health-code/`

### Option 3: Run Local Server

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Node.js (if you have http-server installed)
npx http-server

# Then open http://localhost:8000
```

## 📦 What's Included

```
health-code/
├── index.html      # Main HTML structure
├── styles.css      # Tech-inspired styling
├── script.js       # Tab navigation & interactions
└── README.md       # You are here
```

## 🎨 Design Philosophy

- **Dark Mode First** - Easy on developer eyes
- **Code-Inspired UI** - Brackets, monospace fonts, syntax highlighting vibes
- **Cyberpunk Aesthetic** - Electric blues, neon accents, gradient magic
- **Responsive** - Works on all devices (desktop, tablet, mobile)
- **Accessible** - Semantic HTML, keyboard navigation

## 💡 Pro Tips

### Kitchen Optimization
- **Batch Prep**: Pre-portion frozen fruit into labeled bags
- **Version Control**: Track which recipe variant you're running
- **Debug Mode**: Too thick? Add liquid. Too thin? Add ice/frozen fruit.

### Shopping Strategy
1. Hit Costco/Whole Foods for bulk organic items
2. Store bananas at room temp, freeze overripe ones
3. Get a 32oz+ tumbler (LMNT tumbler recommended 👌)
4. Invest in a high-power blender (Vitamix, Ninja, or similar)

### Daily Execution
```javascript
class HealthProtocol {
  constructor() {
    this.time = "1:00 PM";
    this.recipe = "CITRUS_SUNRISE";
  }

  async execute() {
    await this.blend();
    await this.consume();
    return this.gainz();
  }
}

const protocol = new HealthProtocol();
protocol.execute(); // 🚀
```

## 🎮 Easter Eggs

Try the **Konami Code** on the live site:  
`↑ ↑ ↓ ↓ ← → ← → B A`

Check the browser console for ASCII art and pro tips! 🎨

## 🔧 Customization

### Change Color Theme

Edit CSS variables in `styles.css`:

```css
:root {
    --primary: #00d9ff;     /* Main accent */
    --secondary: #ff006e;   /* Highlights */
    --accent: #00ff9f;      /* Success states */
    --dark: #0a0e27;        /* Background */
}
```

### Add Your Own Recipes

1. Copy an existing recipe card in `index.html`
2. Update the emoji, title, image URL, and ingredients
3. Add your variant to the navigation if needed

### Extend Functionality

The codebase is vanilla JS - easy to extend:
- Add a "Notes" section with localStorage
- Integrate a timer for smoothie prep
- Build a macro calculator
- Connect to a nutrition API

## 📸 Screenshots

### Hero Section
Clean, code-inspired header with daily stats

### Recipe Cards
Beautiful imagery with syntax-highlighted ingredient lists

### Shopping List
Checkboxes with localStorage persistence

### Daily Schedule
Timeline view showing optimal timing for each meal

## 🤝 Contributing

Want to improve the protocol? PRs welcome!

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/amazing-addition`)
3. Commit your changes (`git commit -m 'Add some amazing addition'`)
4. Push to the branch (`git push origin feature/amazing-addition`)
5. Open a Pull Request

### Ideas for Contributions
- [ ] Additional recipe variants (green smoothies, protein shakes, etc.)
- [ ] Nutrition calculator
- [ ] Meal prep timer
- [ ] Print-friendly stylesheet enhancements
- [ ] Dark/light theme toggle
- [ ] Recipe rating system
- [ ] Share to social media functionality

## 📄 License

MIT License - Feel free to fork, modify, and use for your own health journey!

## 🙏 Acknowledgments

- Recipe formulation by a health-conscious developer
- Inspired by the intersection of nutrition science and software engineering
- Built with ❤️ and JavaScript

## 📬 Contact

Have questions or want to share your results?

- Open an issue on GitHub
- Star ⭐ this repo if it helped you!
- Share it with fellow developers who need nutrition optimization

---

<div align="center">

**Built with 💪 for optimal performance**

`npm install health && blend()`

</div>
