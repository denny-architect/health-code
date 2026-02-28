# Contributing to Health-Code 💪

First off, thank you for considering contributing to Health-Code! It's people like you that make this nutrition protocol even better.

## 🎯 Ways to Contribute

### 1. Add New Recipes

#### 🍹 Smoothies
- Green smoothies (spinach, kale based)
- Protein-focused shakes
- Pre-workout energy blends with creatine/MCT
- Post-workout recovery drinks with protein/collagen
- Dessert-style healthy treats
- Seasonal smoothie variations

#### 🍲 Soups
- Protein-rich soups (chicken, lentil, bean)
- Vegetable-based soups
- Quick blender soups
- Meal-prep friendly batch soups

#### 🥫 Sauces & Dips
- Healthy pasta sauces
- Protein-boosted dips
- Fresh salsas
- Homemade dressings

#### 🍨 Frozen Treats
- Fruit sorbets
- Healthy "ice cream" alternatives
- Granitas and slushies
- Frozen yogurt bowls

### 2. Improve the User Interface
- Enhanced animations
- Better mobile responsiveness
- Dark/light theme toggle
- Accessibility improvements
- Print-friendly styles
- Recipe card improvements

### 3. Add New Features
- Macro/nutrition calculator
- Meal prep timer
- Recipe rating system
- Social sharing buttons
- Export to PDF functionality
- Weekly meal planner
- Shopping list by recipe
- Favorite recipes system

### 4. Documentation
- Better installation guides
- Video tutorials
- Nutrition science explanations
- Ingredient substitution guides
- FAQ section
- Recipe variations guide

### 5. Bug Fixes
- Report bugs via GitHub Issues
- Fix existing bugs
- Improve cross-browser compatibility

---

## 🚀 Getting Started

1. **Fork the Repository**
   ```bash
   # Click the 'Fork' button on GitHub
   ```

2. **Clone Your Fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/health-code.git
   cd health-code
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-amazing-feature
   # or
   git checkout -b fix/bug-you-found
   ```

4. **Make Your Changes**
   - Follow the existing code style
   - Test your changes thoroughly
   - Update documentation if needed

5. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "feat: Add amazing new feature"
   ```

   Use conventional commit format:
   - `feat:` - New feature
   - `fix:` - Bug fix
   - `docs:` - Documentation changes
   - `style:` - Code style changes (formatting, etc.)
   - `refactor:` - Code refactoring
   - `test:` - Adding tests
   - `chore:` - Maintenance tasks

6. **Push to Your Fork**
   ```bash
   git push origin feature/your-amazing-feature
   ```

7. **Create a Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your fork and branch
   - Fill in the PR template
   - Submit!

---

## 📋 Pull Request Guidelines

### Before Submitting
- [ ] Test your changes in multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices or using browser dev tools
- [ ] Ensure all links work
- [ ] Check that images load properly
- [ ] Run a spell-check on any new text
- [ ] Update README.md if adding new features

### PR Description Should Include
- **What**: Brief description of the changes
- **Why**: Reason for the changes
- **How**: Technical approach (if complex)
- **Screenshots**: For UI changes
- **Testing**: How you tested the changes

### Code Style
- Use semantic HTML5 elements
- Follow existing CSS naming conventions
- Keep JavaScript vanilla (no frameworks)
- Comment complex logic
- Use meaningful variable and function names

---

## 🎨 Design Guidelines

### Color Palette
```css
:root {
  --primary: #00d9ff;    /* Electric Cyan */
  --secondary: #ff006e;  /* Hot Pink */
  --accent: #00ff9f;     /* Neon Green */
  --warning: #ffd93d;    /* Gold (Pre-Workout) */
  --dark: #0a0e27;       /* Deep Space Background */
}
```

### Typography
- **Headings**: Inter (sans-serif)
- **Code/Recipes**: Fira Code (monospace)
- **Body**: Inter (sans-serif)

### Aesthetic
- Dark-mode first
- Cyberpunk/tech-inspired
- Neon glows and glass morphism
- Clean and minimal
- High contrast for readability

### Recipe Card Structure
Each recipe card should include:
- Emoji + Title
- Optional "NINJA" badge (if from original recipe book)
- Image URL from free stock photos
- Pre-Workout variant (⚡ gold badge) with ~33g protein
- Post-Workout variant (💪 pink badge) with ~48g protein
- Full ingredient list in code block format
- Optional directions for complex recipes

---

## 🍹 Adding a New Smoothie Recipe

```html
<!-- Copy this template -->
<div class="recipe-card">
    <div class="recipe-emoji">🥤</div>
    <span class="ninja-badge">NINJA</span> <!-- Only if from Ninja recipe book -->
    <h3>Your Smoothie Name</h3>
    <img src="YOUR_IMAGE_URL" alt="Your Smoothie Name" class="recipe-image">
    
    <div class="version pre-workout">
        <span class="version-badge pre">⚡ v1.0 "Pre-Workout Name" (~33g protein)</span>
        <div class="ingredients">
            <code>{
  "liquidBase": "8 oz almond milk",
  "frozen": "1 cup frozen fruit",
  "fresh": "1/2 banana",
  "dairy": "1/2 cup Greek yogurt",
  "supplements": "5g creatine, 1 tbsp MCT",
  "sweetener": "1 tbsp honey"
}</code>
        </div>
    </div>
    
    <div class="version post-workout">
        <span class="version-badge post">💪 v2.0 "Post-Workout Name" (~48g protein)</span>
        <div class="ingredients">
            <code>{
  "liquidBase": "8 oz almond milk",
  "frozen": "1 cup frozen fruit",
  "fresh": "1/2 banana",
  "dairy": "1/2 cup Greek yogurt",
  "protein": "1 scoop whey protein",
  "supplements": "1 scoop collagen",
  "sweetener": "1 tbsp honey"
}</code>
        </div>
    </div>
</div>
```

---

## 🍲 Adding a New Soup Recipe

```html
<div class="recipe-card">
    <div class="recipe-emoji">🍲</div>
    <span class="ninja-badge">NINJA</span>
    <h3>Your Soup Name</h3>
    <img src="YOUR_IMAGE_URL" alt="Your Soup Name" class="recipe-image">
    
    <div class="soup-info">
        <span>⏱️ Prep: XX min</span>
        <span>🍳 Cook: XX min</span>
        <span>🍽️ Serves: X</span>
        <span>💪 ~XXg protein/serving</span>
    </div>
    
    <div class="version">
        <span class="version-badge">📝 Ingredients</span>
        <div class="ingredients">
            <code>{
  "base": "ingredient list",
  "vegetables": "ingredient list",
  "seasonings": "ingredient list"
}</code>
        </div>
    </div>
    
    <div class="directions">
        <h4>⚡ Directions:</h4>
        <ol>
            <li>Step one</li>
            <li>Step two</li>
        </ol>
    </div>
</div>
```

---

## 🐛 Reporting Bugs

### Before Reporting
1. Check if the bug has already been reported
2. Try to reproduce it in different browsers
3. Clear your cache and try again

### Bug Report Should Include
- **Description**: Clear description of the bug
- **Steps to Reproduce**: Numbered steps
- **Expected Behavior**: What should happen
- **Actual Behavior**: What actually happens
- **Screenshots**: If applicable
- **Environment**: Browser, OS, device
- **Console Errors**: Any JavaScript errors

---

## 💡 Suggesting Features

We love new ideas! When suggesting features:

1. **Check existing issues** to avoid duplicates
2. **Describe the feature** in detail
3. **Explain the use case** - why is it needed?
4. **Consider the scope** - does it fit the project?
5. **Provide examples** - mockups, similar implementations

---

## 🧪 Testing

### Manual Testing Checklist
- [ ] Test all navigation tabs (Smoothies, Soups, Sauces & Dips, Frozen Treats)
- [ ] Check responsive design on mobile
- [ ] Test all copy buttons for ingredient lists
- [ ] Verify all recipe images load
- [ ] Test keyboard navigation
- [ ] Check browser console for errors
- [ ] Verify Pre/Post workout toggles display correctly

### Browser Support
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

---

## 📜 Code of Conduct

### Our Standards
- Be respectful and inclusive
- Welcome newcomers
- Accept constructive criticism
- Focus on what's best for the community
- Show empathy towards others

### Unacceptable Behavior
- Harassment or discrimination
- Trolling or insulting comments
- Personal or political attacks
- Publishing private information
- Other unprofessional conduct

---

## 🎓 Learning Resources

New to contributing? Check these out:
- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Markdown Guide](https://www.markdownguide.org/)

---

## 📬 Questions?

- Open an issue with the `question` label
- Discuss in pull requests
- Check existing issues and PRs

---

## 🙏 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Forever appreciated! 💪

---

**Thank you for making Health-Code better!** 🚀

Remember: Every PR, no matter how small, is valuable. We appreciate your time and effort!

Happy coding and blending! 💪🥤
