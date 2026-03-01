// ═══════════════════════════════════════════════════════════════════════════
// TRES COMAS NUTRITION LABS v6.0 — Character Selector Edition
// ═══════════════════════════════════════════════════════════════════════════
// MCP: Meal Context Protocol v1.0 — deployed to production
// "I own 10% of this codebase." — E. Bachman

// ═══════════════════════════════════════════════════════════════════════════
// CHARACTER DATA
// ═══════════════════════════════════════════════════════════════════════════

const CHARACTERS = [
    {
        id: "richard",
        name: "Richard",
        fullName: "Richard Hendricks",
        title: "CEO / Chief Anxiety Officer",
        equity: "34%",
        portrait: "assets/characters/richard.png",
        card: "assets/cards/card-richard.png",
        accentColor: "#4A9EFF",
        quote: "// I'm already regretting this smoothie.",
        recipes: ["strawberry-fields", "ninja-broccoli-cheddar-soup"],
        signatureLabel: "Strawberry Fields",
        secondLabel: "Broccoli Cheddar Soup",
    },
    {
        id: "erlich",
        name: "Erlich",
        fullName: "Erlich Bachman",
        title: "Chief Vision Officer",
        equity: "10% non-dilutable",
        portrait: "assets/characters/erlich.png",
        card: "assets/cards/card-erlich.png",
        accentColor: "#FF6B35",
        quote: "// I own 10% of this smoothie. You're welcome.",
        recipes: ["citrus-sunrise", "ninja-butternut-squash-soup"],
        signatureLabel: "Citrus Sunrise",
        secondLabel: "Butternut Squash Soup",
    },
    {
        id: "gilfoyle",
        name: "Gilfoyle",
        fullName: "Bertram Gilfoyle",
        title: "CTO / Nutrition Security",
        equity: "20%",
        portrait: "assets/characters/gilfoyle.png",
        card: "assets/cards/card-gilfoyle.png",
        accentColor: "#CC0000",
        quote: "// Architecturally sound. You wouldn't understand.",
        recipes: ["blueberry-blast", "ninja-sun-dried-tomato-sauce"],
        signatureLabel: "Blueberry Blast",
        secondLabel: "Sun-Dried Tomato Sauce",
    },
    {
        id: "dinesh",
        name: "Dinesh",
        fullName: "Dinesh Chugtai",
        title: "Backend & Sauce Architecture",
        equity: "8%",
        portrait: "assets/characters/dinesh.png",
        card: "assets/characters/dinesh.png",
        accentColor: "#0099FF",
        quote: "// This is DEFINITELY better than Gilfoyle's.",
        recipes: ["ninja-island-sunrise", "ninja-chipotle-salsa"],
        signatureLabel: "Island Sunrise",
        secondLabel: "Chipotle Salsa",
    },
    {
        id: "jared",
        name: "Jared",
        fullName: "Jared Dunn",
        title: "COO / Feelings Manager",
        equity: "5%",
        portrait: "assets/characters/jared.png",
        card: "assets/characters/jared.png",
        accentColor: "#7EC8A4",
        quote: "// I'm just so proud of everyone for trying.",
        recipes: ["ninja-banana-mocha-almond", "ninja-pep-in-your-step-soup"],
        signatureLabel: "Banana Mocha Almond",
        secondLabel: "Pep In Your Step Soup",
    },
    {
        id: "bighead",
        name: "Big Head",
        fullName: "Nelson 'Big Head' Bighetti",
        title: "Co-Head Dreamer",
        equity: "0% (somehow still here)",
        portrait: "assets/characters/bighead.png",
        card: "assets/characters/bighead.png",
        accentColor: "#A8D8EA",
        quote: "// I don't really know how I got here, but the smoothie is good.",
        recipes: ["ninja-tropical-chill", "ninja-watermelon-mint-granita"],
        signatureLabel: "Tropical Chill",
        secondLabel: "Watermelon Mint Granita",
    },
    {
        id: "gavin",
        name: "Gavin",
        fullName: "Gavin Belson",
        title: "Strategic Adversary / Board",
        equity: "1% (taken, not given)",
        portrait: "assets/characters/gavin.png",
        card: "assets/characters/gavin.png",
        accentColor: "#8A2BE2",
        quote: "// I don't want to be the best smoothie. I want to be the ONLY smoothie.",
        recipes: ["ninja-cinnamon-coffee", "ninja-butternut-squash-soup-gavin"],
        signatureLabel: "Cinnamon Coffee",
        secondLabel: "Butternut Squash Soup",
    },
    {
        id: "russ",
        name: "Russ",
        fullName: "Russ Hanneman",
        title: "Chairman of Vibes / Lead Investor",
        equity: "12%",
        portrait: "assets/characters/russ.png",
        card: "assets/cards/card-russ.png",
        accentColor: "#FFD700",
        quote: "// This is TRES COMAS. Not one. Not two. TRES. SCHWAAAAG.",
        recipes: ["ninja-watermelon-quench", "ninja-watermelon-mint-granita-russ"],
        signatureLabel: "Watermelon Quench",
        secondLabel: "Watermelon Mint Granita",
    },
    {
        id: "monica",
        name: "Monica",
        fullName: "Monica Hall",
        title: "The Only Adult in the Room",
        equity: "6%",
        portrait: "assets/characters/monica.png",
        card: "assets/characters/monica.png",
        accentColor: "#2ECC71",
        quote: "// I reviewed the nutritional data. It actually checks out.",
        recipes: ["ninja-sunset-smoothie", "ninja-coconut-pineapple-sorbet"],
        signatureLabel: "Sunset Smoothie",
        secondLabel: "Coconut Pineapple Sorbet",
    },
    {
        id: "jianyang",
        name: "Jian-Yang",
        fullName: "Jian-Yang",
        title: "Wildcard / Undisclosed Equity",
        equity: "Unknown (concerning)",
        portrait: "assets/characters/jianyang.png",
        card: "assets/characters/jianyang.png",
        accentColor: "#FF69B4",
        quote: "// Not hotdog. Smoothie.",
        recipes: ["ninja-strawberry-banana", "ninja-frozen-strawberry-peach"],
        signatureLabel: "Strawberry Banana",
        secondLabel: "Frozen Strawberry Peach",
    },
];

// ═══════════════════════════════════════════════════════════════════════════
// RECIPE DATA
// ═══════════════════════════════════════════════════════════════════════════

const RECIPES = [
    // RICHARD
    {
        id: "strawberry-fields",
        name: "STRAWBERRY FIELDS",
        emoji: "🍓",
        category: "smoothie",
        characterId: "richard",
        isSignature: true,
        syntax: "if (cravingSomethingBerry) return this.strawberryFields();",
        quote: "// I pivoted from sadness to strawberries. Same caloric output.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=nxWaT0iGYIS7WLKDKIyYYLQV0PXjX0M3sm%2FTcjszlPddYtP7V9IirL9DIL9qtlDxd92wbejDKHcNPVxuG08HTNc5O4NASRdLVFFR0hXLNFAFEbDvCogF1crMTGejjbTbndfDaxL4w3Fa5aUiS4qP9qmQmU1n6lE%3D&u2=NkHAGdOLqjC%2FvJj%2F&width=2560",
        v1: {
            protein: "~33g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ liquidBase: "coconut water (¾ cup)", frozen: ["strawberries (¾ cup)", "mango (¼ cup)"],
  fresh: "banana (½)", dairy: "Greek yogurt (½ cup)",
  superfoods: ["hemp hearts (1 Tbsp)", "trail mix nuts (handful)"],
  supplements: ["Multi Collagen (1 scoop)", "Good Green Vitality (1 scoop)",
    "Root'd (1 packet)", "Creatine (5g)"],
  sweetener: "Manuka honey (1 Tbsp)", ice: "as needed" }`
        },
        v2: {
            protein: "~48g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ liquidBase: "coconut water (¾ cup)", frozen: ["strawberries (¾ cup)", "mango (¼ cup)"],
  fresh: "banana (½)", dairy: "Greek yogurt (½ cup)",
  protein: "NuZest Clean Lean (1 scoop)", // 🚀 RECOVERY MODE
  superfoods: ["hemp hearts (1 Tbsp)", "trail mix nuts (handful)"],
  sweetener: "Manuka honey (1 Tbsp)", ice: "as needed" }`
        }
    },
    {
        id: "ninja-broccoli-cheddar-soup",
        name: "BROCCOLI CHEDDAR SOUP",
        emoji: "🥦",
        category: "soup",
        characterId: "richard",
        isSignature: false,
        syntax: "const comfort = { cheese: 'cheddar', veggies: 'broccoli', warmth: MAX };",
        quote: "// I didn't want to make soup. Jared made me make soup.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=yLqrMbaihoJx3x%2FHVnfHUIedDVjO62YavK9PAUMlS6YIM6Wtn0%2B7vCxcs2rKX5FIWFc8V5%2B5XeuWNtmM57XAtniEwm44uGOGzsgelew3k7GSABSw7cwZT1BufkDa8tcMleexX94ggm9wreZDjEU5TSlSQUvO6H2f4%2BdYg7aldiB1&u2=ggsW1%2BHkdOHzjwJz&width=2560",
        v1: {
            protein: "~20g",
            time: "Comfort Food",
            ingredients: `{ fat: "butter (3 Tbsp)", aromatics: ["yellow onion (½, chopped)", "medium carrot (1, chopped)"],
  veggies: "broccoli florets (3 cups)", liquid: "chicken broth (3 cups)",
  thickener: "flour (2 Tbsp)", dairy: ["whole milk (¾ cup)", "shredded cheddar (1 cup)"],
  seasoning: ["kosher salt", "ground black pepper"],
  prep: "15 minutes", cook: "35-40 minutes", servings: 6 }`
        },
        v2: null
    },
    // ERLICH
    {
        id: "citrus-sunrise",
        name: "CITRUS SUNRISE",
        emoji: "🍊",
        category: "smoothie",
        characterId: "erlich",
        isSignature: true,
        syntax: "const sunrise = new Smoothie({ energy: 'HIGH', mood: '🌅' });",
        quote: "// I own 10% of this smoothie. You're welcome, by the way.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=pDDg4QIZSo8IBDeLB1FPTimKCjefHyBR05eCccts0XTldtee7GtvBOZnUYCAylsMtR4SR8y%2BDYxLjoICJncILmd277vNpzFG31tvXShk53ZcP1WZ416%2BMODC%2FHHJD%2B%2Bd9mcjqCjdwr4cA0iMo%2FB3v723t8PSoFakQIvOvWpy1ZtY23803mJYSeMOi8yldU0xy3dUCeyLimsXcA6d1U2eJMXXJZb9nazkgQRWYLUr&u2=fRBIiYQmwWtrS3V6&width=2560",
        v1: {
            protein: "~33g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ liquidBase: "coconut water (½ cup)", citrus: "cold-pressed OJ (¼ cup)",
  frozen: ["mango (½ cup)", "pineapple (¼ cup)"], fresh: "banana (½)",
  dairy: "Greek yogurt (½ cup)",
  superfoods: ["hemp hearts (1 Tbsp)", "trail mix nuts (handful)"],
  supplements: ["Multi Collagen (1 scoop)", "Good Green Vitality (1 scoop)",
    "Root'd (1 packet)", "Creatine (5g)"],
  sweetener: "Manuka honey (1 Tbsp)", ice: "as needed" }`
        },
        v2: {
            protein: "~48g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ liquidBase: "coconut water (½ cup)", citrus: "cold-pressed OJ (¼ cup)",
  frozen: ["mango (½ cup)", "pineapple (¼ cup)"], fresh: "banana (½)",
  dairy: "Greek yogurt (½ cup)",
  protein: "NuZest Clean Lean (1 scoop)", // 💪 POWER BOOST
  superfoods: ["hemp hearts (1 Tbsp)", "trail mix nuts (handful)"],
  sweetener: "Manuka honey (1 Tbsp)", ice: "as needed" }`
        }
    },
    {
        id: "ninja-butternut-squash-soup",
        name: "BUTTERNUT SQUASH SOUP",
        emoji: "🎃",
        category: "soup",
        characterId: "erlich",
        isSignature: false,
        syntax: "const autumn = butternut.roast().blend({ texture: 'velvety' });",
        quote: "// I invented the concept of warm liquids. Look it up.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=29JcBPF5GZixmpHfgJil5wbwACbL6chgnpzYqeqVSdRvUDgRh1tQZhazend3SOERh2Hz%2Buo%2BELOqV3ePiVvZEeHU1KTV%2Bz31VnxaQOtnYWQs9ZzfoDS6K6HKLMqoSaHtTYiazxNp1tRdl2y%2FQxM%3D&u2=htDrHG1MSfZ6ExFT&width=2560",
        v1: {
            protein: "~15g",
            time: "Vegan & Delicious",
            ingredients: `{ oil: "olive oil (3 Tbsp)", aromatics: ["yellow onion (1 large, chopped)", "garlic cloves (2)"],
  veggies: ["butternut squash (2 lbs, cubed)", "large carrots (2, chopped)", "large apple (1, chopped)"],
  protein: "raw cashews (1 cup)", herbs: ["fresh thyme (1 tsp)", "bay leaf (1)"],
  liquid: "vegetable stock (4 cups)", seasoning: ["kosher salt", "ground black pepper"],
  prep: "20 minutes", cook: "40-45 minutes", servings: 8 }`
        },
        v2: null
    },
    // GILFOYLE
    {
        id: "blueberry-blast",
        name: "BLUEBERRY BLAST",
        emoji: "💜",
        category: "smoothie",
        characterId: "gilfoyle",
        isSignature: true,
        syntax: "while (needAntioxidants) { blend(blueberries); }",
        quote: "// Optimal antioxidant throughput. Architecturally, you couldn't replicate it.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=wv%2BEbYwjpClsFQsXcdyvvTso%2B5m9%2FPCyTV6Mc8Mt4Itdbt%2F3AKlW3BJbX1sn90tF6BGo2dxTnSF8iWxbN63%2FOhtGLyOnssLAeEUzH2JM3yuMwiVvSPQlPiMvhhp6%2FKErw67VQ2iwV%2FXk1ky5op8Wyw%3D%3D&u2=12aArQVqnQiYTFEd&width=2560",
        v1: {
            protein: "~33g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ liquidBase: "coconut water (¾ cup)", frozen: "wild blueberries (¾ cup)",
  fresh: "banana (½)", dairy: "Greek yogurt (½ cup)",
  superfoods: ["hemp hearts (1 Tbsp)", "trail mix nuts (handful)"],
  supplements: ["Multi Collagen (1 scoop)", "Good Green Vitality (1 scoop)",
    "Root'd (1 packet)", "Creatine (5g)"],
  sweetener: "Manuka honey (1 Tbsp)", optional: "pinch of cinnamon", ice: "as needed" }`
        },
        v2: {
            protein: "~48g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ liquidBase: "coconut water (¾ cup)", frozen: "wild blueberries (¾ cup)",
  fresh: "banana (½)", dairy: "Greek yogurt (½ cup)",
  protein: "NuZest Clean Lean (1 scoop)", // 💜 ANTIOXIDANT BOOST
  superfoods: ["hemp hearts (1 Tbsp)", "trail mix nuts (handful)"],
  sweetener: "Manuka honey (1 Tbsp)", optional: "pinch of cinnamon", ice: "as needed" }`
        }
    },
    {
        id: "ninja-sun-dried-tomato-sauce",
        name: "SUN-DRIED TOMATO SAUCE",
        emoji: "🍅",
        category: "sauce",
        characterId: "gilfoyle",
        isSignature: false,
        syntax: "const italiano = tomatoes.sundry().blend({ basil: fresh });",
        quote: "// I don't make sauces. I deploy them.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=%2FGXwzwGMJo%2FMH4fKv3YgZdP5V7Nsrw5DinX4v9Bic10efz%2BUUqccrcrsQDp%2BnwZTiKDT8aXrq99CJ6HPf1oiCp%2Bkoc8QER90iiMm9SOGOSJ%2BEFAbSKoIDJNA84S8oSKDh3S1hSiW7swXhu9gziBi6tx8UTeez2Rf4nZKaEhBYUSNYuURrNjGaTY%3D&u2=rtobsKYfLw7la5RQ&width=2560",
        v1: {
            protein: "~8g",
            time: "Pasta Perfect",
            ingredients: `{ aromatics: ["onion (1, quartered)", "garlic cloves (4, peeled)"],
  tomatoes: "canned whole peeled tomatoes (1 can, 28oz)",
  sundried: "sun-dried tomatoes (1 jar, 6oz, drained)", liquid: "dry red wine (½ cup)",
  oil: "canola oil (1 Tbsp)", herb: "fresh basil (¼ bunch, chopped)",
  seasoning: ["ground black pepper", "kosher salt"],
  prep: "15 minutes", cook: "35 minutes", servings: "2-3" }`
        },
        v2: null
    },
    // DINESH
    {
        id: "ninja-island-sunrise",
        name: "ISLAND SUNRISE",
        emoji: "🏝️",
        category: "smoothie",
        characterId: "dinesh",
        isSignature: true,
        syntax: "export const tropicalVibes = () => blend({ location: 'PARADISE' });",
        quote: "// This is DEFINITELY better than whatever Gilfoyle's having.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=tNukV1s2%2BRnjddJt7UMABJd9dS9CS%2FPLlAYJ89WMj2ErD9KW2X%2FDRkkEOCIjQxFvXfK8bldiNWJr%2FnKt4m96RFmSCB50Nc9TWY7f6xbU6jnjg2ufXJt2UEkDwt%2F2h3jL4DUb%2FNzwGZCDss5r&u2=KoN6fk8fuJ8YNCNj&width=2560",
        v1: {
            protein: "~25g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ fruit: "pineapple chunks (1 cup)", fresh: "ripe banana (1 small, halved)",
  liquid: "coconut water (2 cups)", frozen: ["mango chunks (1 cup)", "strawberries (1 cup)"],
  creatine: "5g", // 💥 POWER UP
  prep: "5 minutes", servings: 4 }`
        },
        v2: {
            protein: "~40g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ fruit: "pineapple chunks (1 cup)", fresh: "ripe banana (1 small, halved)",
  liquid: "coconut water (2 cups)", frozen: ["mango chunks (1 cup)", "strawberries (1 cup)"],
  protein: "NuZest Clean Lean (1 scoop)", // 💪 REBUILD
  collagen: "Multi Collagen (1 scoop)", // 🔧 REPAIR
  prep: "5 minutes", servings: 4 }`
        }
    },
    {
        id: "ninja-chipotle-salsa",
        name: "CHIPOTLE SALSA",
        emoji: "🔥",
        category: "sauce",
        characterId: "dinesh",
        isSignature: false,
        syntax: "try { salsa.spice('chipotle') } catch(mild) { addMore(); }",
        quote: "// Hot take: my salsa has better uptime than Gilfoyle's entire stack.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=AHMehsHJQizx2qfJEuEsEt1TVxBMwSpS8RhAtYxUMrE%2FeTt0rGOSceoQyEi64RxhcMKfHCmex487%2Bddd07jiWU0wPqgMEgOOMlyNq5KKaBninXnTV10xACUp%2BRpxCiBfqDz52UgT8DHC5uCb&u2=6E9MyeExa0G4JveF&width=2560",
        v1: {
            protein: "~5g",
            time: "Fresh & Smoky",
            ingredients: `{ tomatoes: "canned whole peeled tomatoes (2 cans, 10oz each, drained)",
  aromatics: "white onion (1 small, quartered)",
  heat: "chipotle pepper in adobo sauce (1)",
  herbs: "fresh cilantro (½ bunch, stems removed)",
  citrus: "lime (1, peeled, quartered, seeds removed)",
  seasoning: ["kosher salt", "ground black pepper"],
  prep: "10 minutes", chill: "1 hour", yield: "4 cups" }`
        },
        v2: null
    },
    // JARED
    {
        id: "ninja-banana-mocha-almond",
        name: "BANANA MOCHA ALMOND",
        emoji: "☕",
        category: "smoothie",
        characterId: "jared",
        isSignature: true,
        syntax: "const caffeineBoost = coffee.blend({ chocolate: true, nuts: 'almond' });",
        quote: "// I've never been prouder. This smoothie feels like a first hug.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=7geYeWWVQvUvjniY0bZg4SAQXHvafpatpnBZ5K60gZYFROd%2Fu0ti9mEsmOh6Hs3EQKGcvz4WN43ICWvqFJXOeEb5neSF9fH8zh7hZZg4hEzQaxcmriYAOe3DGMaEzXQ517vrFUsviyek%2B8NqIyZtAKthxG6fNFrwzrQ7d7U%3D&u2=B3HHmqgBai7QQMl7&width=2560",
        v1: {
            protein: "~28g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ coffee: "strongly brewed coffee (1 cup, cooled)", fresh: "large ripe banana (1, halved)",
  liquid: "almond milk (1 cup)", butter: "creamy almond butter (3 Tbsp)",
  chocolate: "cocoa powder (2 tsp)", sweetener: "agave nectar (2 tsp)",
  ice: "2½ cups", creatine: "5g", // 💥 POWER UP
  prep: "5 minutes", servings: 1 }`
        },
        v2: {
            protein: "~45g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ coffee: "strongly brewed coffee (1 cup, cooled)", fresh: "large ripe banana (1, halved)",
  liquid: "almond milk (1 cup)", butter: "creamy almond butter (3 Tbsp)",
  chocolate: "cocoa powder (2 tsp)", sweetener: "agave nectar (2 tsp)",
  ice: "2½ cups",
  protein: "NuZest Clean Lean Chocolate (1 scoop)", // 💪 GAINS
  collagen: "Multi Collagen (1 scoop)", // 🔧 REPAIR
  prep: "5 minutes", servings: 1 }`
        }
    },
    {
        id: "ninja-pep-in-your-step-soup",
        name: "PEP IN YOUR STEP SOUP",
        emoji: "🌶️",
        category: "soup",
        characterId: "jared",
        isSignature: false,
        syntax: "function energize() { return peppers.roast().blend({ energy: HIGH }); }",
        quote: "// I used to eat soup alone in a shipping container. This is better.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=cjwjKHb6OMZKCZyMOcjXIMurHxb72lF8IRBhFpa7MX0q%2BwoC6fOtn5Lr6bwRDAdZ7MeUv7pasWjEbLSdD9azusjEFRq4XYJIIy%2F3k3K69beXZWqSD6W0T%2FpmPRsO1Y%2FYEkzZ&u2=YLqoxCxVLnpJHRxd&width=2560",
        v1: {
            protein: "~10g",
            time: "Quick & Warming",
            ingredients: `{ peppers: "red bell peppers (3, roasted, peeled, cooled)",
  tomatoes: "sun-dried tomatoes (¼ cup)",
  liquid: ["white wine (¼ cup)", "low-sodium vegetable broth (1 cup)"],
  aromatics: ["garlic cloves (2, peeled)", "Italian parsley (¼ bunch, trimmed)"],
  seasoning: ["kosher salt", "ground black pepper"], garnish: "balsamic vinegar",
  prep: "10 minutes", cook: "10 minutes", servings: 3 }`
        },
        v2: null
    },
    // BIG HEAD
    {
        id: "ninja-tropical-chill",
        name: "TROPICAL CHILL",
        emoji: "🌴",
        category: "smoothie",
        characterId: "bighead",
        isSignature: true,
        syntax: "async function relaxMode() { return await blend({ vibe: 'chill' }); }",
        quote: "// I don't really know how I got here, but the smoothie is good.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=qiJ6EVXuehYnpQHWX0caRR3dgSEaZAFAUQ6m1d%2F2y%2BVtRX8gtavkE8oayNCrzoXtJkYiiNeVNj8hHNNcmIMNlcUhUO8TqYqUHhbWDkaVaoIVg8qdZGYvl2mJHQ1%2FhEx5raW0hmU2ks9HwJvqCKr%2FVxZcGs96LDZc&u2=k08MDzIrYMHdGLCW&width=2560",
        v1: {
            protein: "~20g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ melon: "honeydew melon chunks (½ cup)", fresh: "ripe banana (1, halved)",
  citrus: "lime (¼, peeled, seeds removed)", liquid: "coconut water (1½ cups)",
  frozen: "pineapple chunks (2 cups)", ice: "1 cup",
  electrolytes: "LMNT packet (1)", // ⚡ HYDRATION
  prep: "5 minutes", servings: "2-4" }`
        },
        v2: {
            protein: "~38g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ melon: "honeydew melon chunks (½ cup)", fresh: "ripe banana (1, halved)",
  citrus: "lime (¼, peeled, seeds removed)", liquid: "coconut water (1½ cups)",
  frozen: "pineapple chunks (2 cups)", ice: "1 cup",
  protein: "NuZest Clean Lean (1 scoop)", // 💪 REBUILD
  collagen: "Multi Collagen (1 scoop)", // 🔧 JOINTS
  prep: "5 minutes", servings: "2-4" }`
        }
    },
    {
        id: "ninja-watermelon-mint-granita",
        name: "WATERMELON MINT GRANITA",
        emoji: "🍉",
        category: "frozen",
        characterId: "bighead",
        isSignature: false,
        syntax: "const summer = watermelon.freeze({ style: 'Italian', mint: fresh });",
        quote: "// I was just standing here and someone gave me an award for this.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=6%2B5MReUG9QPbysLPIGAcBdbSccG7Ggis%2BvpZNw5iRhJlCoMxyZp9bGj0e0IPgDrjYus6uNqJofCncLuPmNS8tg4aGRWHkj92Tp%2BR5t3wQcp6vg%3D%3D&u2=DHIXTiic%2BchlDneU&width=2560",
        v1: {
            protein: "~5g",
            time: "Refreshing Treat",
            ingredients: `{ base: "watermelon chunks (6 cups, cut 1-inch)", citrus: "lime juice (1 Tbsp)",
  sweetener: "agave nectar (3 Tbsp)", herb: "fresh mint leaves (6)",
  prep: "10 minutes", freeze: "3-4 hours", servings: "2-4" }`
        },
        v2: null
    },
    // GAVIN
    {
        id: "ninja-cinnamon-coffee",
        name: "CINNAMON COFFEE",
        emoji: "☕",
        category: "smoothie",
        characterId: "gavin",
        isSignature: true,
        syntax: "import { spice } from 'cinnamon'; blend({ coffee, chocolate: dark });",
        quote: "// I don't want to be the best smoothie. I want to be the ONLY smoothie.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=Q665jBBAMV8C5MiDe%2BtKRDjf79vKCNba3FyQvHNwuVpamxsnrEequTE1fMTnBnQZ%2FhnLXrZk%2F9YNdazZTF7lNV9cm%2BdMhYW0suISZ5Q%2F0prww%2Bj7BkNMFEQcPSVaGwgALlUlQ0IPQtECrTfU7anvjbc2Pdlh7fn7GYaJlebayivX0YpsWAl3%2Bet65qMvgrX8N1F88%2FESIPw6Ga7VwO%2BwB1mKwKGyX3wKnzgrjThxcrCy7cV0vG8nN4a08%2BA2a72zW10sAAyWnttOf7pTWzWKwsgP&u2=qKSJ0o%2B%2ByA64EMFy&width=2560",
        v1: {
            protein: "~22g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ coffee: "strongly brewed coffee (½ cup, cooled)",
  chocolate: "dark chocolate (1 square, 1oz)", liquid: "rice milk (1 cup)",
  dairy: "low-fat vanilla yogurt (½ cup)", spice: "ground cinnamon (1 tsp)",
  ice: "4-6 cubes", creatine: "5g", // 💥 MENTAL CLARITY
  prep: "5 minutes", servings: "2-4" }`
        },
        v2: {
            protein: "~38g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ coffee: "strongly brewed coffee (½ cup, cooled)",
  chocolate: "dark chocolate (1 square, 1oz)", liquid: "rice milk (1 cup)",
  dairy: "low-fat vanilla yogurt (½ cup)", spice: "ground cinnamon (1 tsp)",
  ice: "4-6 cubes",
  protein: "NuZest Clean Lean Chocolate (1 scoop)", // 💪 GAINS
  prep: "5 minutes", servings: "2-4" }`
        }
    },
    {
        id: "ninja-butternut-squash-soup-gavin",
        name: "BUTTERNUT SQUASH SOUP",
        emoji: "🎃",
        category: "soup",
        characterId: "gavin",
        isSignature: false,
        syntax: "const autumn = butternut.roast().blend({ texture: 'velvety' });",
        quote: "// I had my tortoise taste this first. Full approval.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=29JcBPF5GZixmpHfgJil5wbwACbL6chgnpzYqeqVSdRvUDgRh1tQZhazend3SOERh2Hz%2Buo%2BELOqV3ePiVvZEeHU1KTV%2Bz31VnxaQOtnYWQs9ZzfoDS6K6HKLMqoSaHtTYiazxNp1tRdl2y%2FQxM%3D&u2=htDrHG1MSfZ6ExFT&width=2560",
        v1: {
            protein: "~15g",
            time: "Vegan & Delicious",
            ingredients: `{ oil: "olive oil (3 Tbsp)", aromatics: ["yellow onion (1 large, chopped)", "garlic cloves (2)"],
  veggies: ["butternut squash (2 lbs, cubed)", "large carrots (2, chopped)", "large apple (1, chopped)"],
  protein: "raw cashews (1 cup)", herbs: ["fresh thyme (1 tsp)", "bay leaf (1)"],
  liquid: "vegetable stock (4 cups)", seasoning: ["kosher salt", "ground black pepper"],
  prep: "20 minutes", cook: "40-45 minutes", servings: 8 }`
        },
        v2: null
    },
    // RUSS
    {
        id: "ninja-watermelon-quench",
        name: "WATERMELON QUENCH",
        emoji: "🍉",
        category: "smoothie",
        characterId: "russ",
        isSignature: true,
        syntax: "const hydration = await watermelon.blend({ mode: 'REFRESH' });",
        quote: "// Three commas of hydration. You only get ONE comma of this recipe. I have THREE.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=3c7Jr3oXgnO6F6dj74Ave4gwMN%2FccQ1noQIC3WPYoX3hhuNqAoUXR%2FPK8F9lFdI%2BfBQC9ZPprUsK%2B1aFdQ2tvYzABza37MVESdW8aVcFcRl%2FFIsiBrE0wITeain5E0TaZwixAiZD4UBdnro9c61CwvWRhoelCBDse0tAi%2BZ5SdoU&u2=vJ%2BUj3vCOfZ9fMwZ&width=2560",
        v1: {
            protein: "~15g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ base: "watermelon chunks (2½ cups, cut 1-inch)", liquid: "pomegranate juice (2 cups)",
  frozen: "peach slices (1 cup)", electrolytes: "LMNT packet (1)", // ⚡ HYDRATION BOOST
  prep: "5 minutes", servings: 1 }`
        },
        v2: {
            protein: "~32g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ base: "watermelon chunks (2½ cups, cut 1-inch)", liquid: "pomegranate juice (2 cups)",
  frozen: "peach slices (1 cup)",
  protein: "NuZest Clean Lean (1 scoop)", // 💪 RECOVERY
  collagen: "Multi Collagen (1 scoop)", // 🔧 REPAIR
  prep: "5 minutes", servings: 1 }`
        }
    },
    {
        id: "ninja-watermelon-mint-granita-russ",
        name: "WATERMELON MINT GRANITA",
        emoji: "🍉",
        category: "frozen",
        characterId: "russ",
        isSignature: false,
        syntax: "const summer = watermelon.freeze({ style: 'Italian', mint: fresh });",
        quote: "// This is FROZEN. Like my second comma. Currently frozen. SCHWAAAAG.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=6%2B5MReUG9QPbysLPIGAcBdbSccG7Ggis%2BvpZNw5iRhJlCoMxyZp9bGj0e0IPgDrjYus6uNqJofCncLuPmNS8tg4aGRWHkj92Tp%2BR5t3wQcp6vg%3D%3D&u2=DHIXTiic%2BchlDneU&width=2560",
        v1: {
            protein: "~5g",
            time: "Refreshing Treat",
            ingredients: `{ base: "watermelon chunks (6 cups, cut 1-inch)", citrus: "lime juice (1 Tbsp)",
  sweetener: "agave nectar (3 Tbsp)", herb: "fresh mint leaves (6)",
  prep: "10 minutes", freeze: "3-4 hours", servings: "2-4" }`
        },
        v2: null
    },
    // MONICA
    {
        id: "ninja-sunset-smoothie",
        name: "SUNSET SMOOTHIE",
        emoji: "🌅",
        category: "smoothie",
        characterId: "monica",
        isSignature: true,
        syntax: "render() { return <Smoothie gradient={['orange', 'pink']} />; }",
        quote: "// I reviewed the nutritional data. It actually checks out. Surprisingly.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=OZjla5IBLnh7BABTF2NN%2B92dB%2FblHv4EhQUNvLTVQVOaMdtSDMOmeLTyExAmV%2BEjSyoSiSjoH9JNII4URKR4uEHTTR5zDQ%2FIDWwjzZw89S%2B9A4gRr7e8f3AqZRvAiEt%2BaEwz7f50H9HSkFurHeFY&u2=GjnVOeS%2F3bl5GKRX&width=2560",
        v1: {
            protein: "~22g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ fruit: "pineapple chunks (1 cup)",
  citrus: ["orange (1, peeled, halved)", "orange juice (1 cup)"],
  frozen: ["mango chunks (1 cup)", "strawberries (1 cup)"],
  vitality: "Good Green Vitality (1 scoop)", // 🌱 NUTRIENTS
  prep: "5 minutes", servings: 2 }`
        },
        v2: {
            protein: "~40g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ fruit: "pineapple chunks (1 cup)",
  citrus: ["orange (1, peeled, halved)", "orange juice (1 cup)"],
  frozen: ["mango chunks (1 cup)", "strawberries (1 cup)"],
  protein: "NuZest Clean Lean (1 scoop)", // 💪 BUILD
  collagen: "Multi Collagen (1 scoop)", // 🔧 REPAIR
  prep: "5 minutes", servings: 2 }`
        }
    },
    {
        id: "ninja-coconut-pineapple-sorbet",
        name: "COCONUT PINEAPPLE SORBET",
        emoji: "🥥",
        category: "frozen",
        characterId: "monica",
        isSignature: false,
        syntax: "export default function vacation() { return tropics.blend(); }",
        quote: "// I'm the only one here who read the nutritional label. Just saying.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=ZG%2FtV2QNU1nm3pmNwH3%2BhMv8l9gVnMqdRzdKC7epCMHHZfZOaEPT%2FAJ5kgwbZQL3ZsWlBpxRH9XjaEGINOf2fGmBXgTNMewLmB54%2F26VW1erTQ%3D%3D&u2=afR%2FoaYNAbzoDN4x&width=2560",
        v1: {
            protein: "~8g",
            time: "Tropical Paradise",
            ingredients: `{ frozen: "pineapple chunks (1 cup)", fresh: "small ripe banana (1)",
  liquid: "light coconut milk (¼ cup)", sweetener: "agave nectar (1 Tbsp)",
  zing: "grated fresh ginger (1 tsp)",
  prep: "5 minutes", servings: 4 }`
        },
        v2: null
    },
    // JIAN-YANG
    {
        id: "ninja-strawberry-banana",
        name: "STRAWBERRY BANANA",
        emoji: "🍓🍌",
        category: "smoothie",
        characterId: "jianyang",
        isSignature: true,
        syntax: "const classic = { flavor: 'timeless', satisfaction: true };",
        quote: "// Not hotdog. Smoothie.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=WWfZGJieljeuR%2Bc43%2FfL55uZ5sb2SPIf%2F%2Bx65oo%2BbPQVF8oIGkul9x4BD%2Bh7ZEFJad4aZSsOa4n27PEjzHfZds4eOkGJhB0Cs%2BZEzrKXKlIHvQy8vblOO34jN8gpYKlC59nzOxIXf5WAx6KwazGoOGEjxy1I6f8%3D&u2=4RHI5vRphW2ypQo0&width=2560",
        v1: {
            protein: "~25g",
            time: "Pre-Workout · 1 PM",
            ingredients: `{ liquid: "low-fat milk (2 cups)", frozen: "strawberries (2 cups)",
  fresh: "ripe bananas (4 small, quartered)", sweetener: "agave nectar (¼ cup)",
  creatine: "5g", // 💥 STRENGTH
  prep: "5 minutes", servings: 4 }`
        },
        v2: {
            protein: "~48g",
            time: "Post-Workout · 5 PM",
            ingredients: `{ liquid: "low-fat milk (2 cups)", frozen: "strawberries (2 cups)",
  fresh: "ripe bananas (4 small, quartered)", sweetener: "agave nectar (¼ cup)",
  protein: "NuZest Clean Lean (2 scoops)", // 💪 MEGA GAINS
  collagen: "Multi Collagen (1 scoop)", // 🔧 RECOVERY
  prep: "5 minutes", servings: 4 }`
        }
    },
    {
        id: "ninja-frozen-strawberry-peach",
        name: "FROZEN STRAWBERRY PEACH",
        emoji: "🍑",
        category: "frozen",
        characterId: "jianyang",
        isSignature: false,
        syntax: "while (craving) { blend(strawberry, peach).freeze(); }",
        quote: "// I own more of this company than people think.",
        photoUrl: "https://sspark.genspark.ai/cfimages?u1=lEpqg5AObLgL2HQX7KAoWRrhuEIV2zUbquDBVFV%2BYCNCoLUwFOeTWwJ4ZX80aBs5tYnRZpy16sJq%2Bc%2FgDnUXxdwJ0Bl3vi%2FefmjLFrcOr5NbG2Cz&u2=cCSKUeSpudiIeMZN&width=2560",
        v1: {
            protein: "~12g",
            time: "Creamy Delight",
            ingredients: `{ frozen: ["strawberries (1½ cups)", "peaches (¾ cup)"],
  dairy: ["whole milk (¼ cup)", "low-fat vanilla yogurt (2 Tbsp)"],
  sweetener: "agave nectar (1 Tbsp)", flavor: "vanilla extract (1 tsp)",
  protein: "NuZest Clean Lean (1 scoop)", // Recovery mode (optional)
  prep: "10 minutes", servings: 4 }`
        },
        v2: null
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// PRESS RELEASES DATA
// ═══════════════════════════════════════════════════════════════════════════

const PRESS_RELEASES = [
    {
        id: 1,
        characterId: "richard",
        dateline: "FOR IMMEDIATE RELEASE — 2:47am, a Tuesday",
        headline: "TRES COMAS NUTRITION LABS EMERGES FROM STEALTH",
        preview: "Company Claims to Have 'Accidentally Disrupted Big Blender While Building the New Internet'...",
        body: `<p><strong>PALO ALTO, CA</strong> — Tres Comas Nutrition Labs, the nutrition infrastructure company that nobody planned to found, today announced its emergence from stealth mode with a mission to make the world a better place through middle-out macro compression.</p>
<p>The company was incorporated at 2:47am following the discovery that 47% of all data flowing through Pied Piper's revolutionary decentralized internet was smoothie recipe traffic.</p>
<p>"We built a new internet," said CEO Richard Hendricks, "and humanity used it to share smoothie recipes. I found this troubling. Erlich found this fundable. Erlich was correct."</p>`,
        filed: "// filed by R. Hendricks, CEO (he did not want to file this)"
    },
    {
        id: 2,
        characterId: "russ",
        dateline: "FOR IMMEDIATE RELEASE — Q1, Year One",
        headline: "TRES COMAS NUTRITION LABS CLOSES $2M SEED ROUND",
        preview: "Led by Russ Hanneman; Investor Defines ROI as 'Refreshment On Investment'...",
        body: `<p><strong>PALO ALTO, CA</strong> — Tres Comas Nutrition Labs today announced the close of a $2M seed round led by Russ Hanneman, technology investor, member of the Three Comma Club, and the man who named the company.</p>
<p>The investment was made from Mr. Hanneman's McLaren glove compartment on the same evening he named the company.</p>
<p>"I walked in, I saw the blender, I heard Erlich talking about disruption, I said: Tres Comas. Then I wrote a check," Mr. Hanneman stated. "That is how you do business. SCHWAAAAG."</p>`,
        filed: "// filed by R. Hanneman, Chairman of Vibes"
    },
    {
        id: 3,
        characterId: "gavin",
        dateline: "FOR IMMEDIATE RELEASE — Q3, Year Two",
        headline: "TRES COMAS NUTRITION LABS RAISES $40M SERIES A",
        preview: "Gavin Belson Joins Board Following Failed $400M Acquisition Attempt...",
        body: `<p><strong>PALO ALTO, CA</strong> — Tres Comas Nutrition Labs today announced the close of a $40M Series A funding round at a $200M post-money valuation, following a previously undisclosed $400M acquisition offer from Hooli Corporation that was declined.</p>
<p>Gavin Belson subsequently led the Series A investment. "If I cannot acquire Tres Comas Nutrition Labs," Mr. Belson stated, "I will invest in it, join the board, and influence it from within until it is essentially Hooli Nutrition anyway. Consider the tortoise."</p>`,
        filed: "// filed by G. Belson (filed without board approval; Monica is aware)"
    },
    {
        id: 4,
        characterId: "bighead",
        dateline: "FOR IMMEDIATE RELEASE — Q2, Year Three",
        headline: "TRES COMAS ACHIEVES UNICORN STATUS AT $1.2B VALUATION",
        preview: "Series B Led Accidentally by Nelson Bighetti; Russ Hanneman Calls Valuation 'An Insult'...",
        body: `<p><strong>PALO ALTO, CA</strong> — Tres Comas Nutrition Labs today announced the close of an $80M Series B funding round at a $1.2B total company valuation and official unicorn status.</p>
<p>The round was led by Nelson "Big Head" Bighetti, who confirmed he "just clicked yes on everything" when presented with the term sheet, having believed the document to be a premium smoothie subscription sign-up form.</p>
<p>Russ Hanneman responded: "One comma. ONE. We are named TRES COMAS. This is UNO. SCHWAAAAG."</p>`,
        filed: "// filed by N. Bighetti (he thought he was filing a subscription form)"
    },
    {
        id: 5,
        characterId: "richard",
        dateline: "FOR IMMEDIATE RELEASE — Today",
        headline: "TRES COMAS NUTRITION LABS LAUNCHES health-code v6.0",
        preview: "Character Selector Edition — 10 Founders, 20 Recipes, 1 Primary Navigation...",
        body: `<p><strong>PALO ALTO, CA</strong> — Tres Comas Nutrition Labs today announced the release of health-code v6.0, the "Character Selector Edition" — a complete UX overhaul putting the founding team at the center of the experience.</p>
<p>New in v6.0: Character-first navigation with 10 founder cards as the primary UX. Click a character, see their 2 signature recipes. Editorial luxury header design. Large-format recipe cards with character panels.</p>
<p>"Characters ARE the UX," CEO Richard Hendricks confirmed. "I think. Actually — Monica, is that right?"</p>`,
        filed: "// filed by The Tres Comas Engineering Team"
    }
];

// ═══════════════════════════════════════════════════════════════════════════
// TICKER DATA
// ═══════════════════════════════════════════════════════════════════════════

const TICKER_DATA = [
    { label: "VALUATION", val: "$1,200,000,000" },
    { label: "COMMAS", val: "1 of 3 // Russ: disgusting" },
    { label: "DAILY MACROS", val: "121g protein" },
    { label: "SKUs", val: "20 recipes" },
    { label: "FOUNDED", val: "2:47 AM" },
    { label: "SERIES", val: "B ($80M)" },
    { label: "DEPS", val: "Zero // Gilfoyle: correct" },
    { label: "STATUS", val: "UNICORN 🦄" },
    { label: "NEXT COMMA", val: "$999,000,000 away" },
    { label: "ERLICH EQUITY", val: "10% non-dilutable" },
];

// ═══════════════════════════════════════════════════════════════════════════
// TAGLINES
// ═══════════════════════════════════════════════════════════════════════════

const HEADER_TAGLINES = [
    "Making nutrition better through better nutrition.",
    "// Series B funded. Your mitochondria are in hyper-growth.",
    "We're disrupting Big Blender. One smoothie at a time.",
    "// Not FDA approved. Neither was your last startup.",
    "Two commas closer to peak performance.",
    "Middle-out macro compression for the discerning founder.",
    "// Deployed to production. Target: your metabolism.",
    "Minimum Viable Protein™. Now in ten flavors.",
    "// This is not financial advice. But it might be dietary alpha.",
    "Tres Comas: Because one comma is a rounding error.",
];

// ═══════════════════════════════════════════════════════════════════════════
// STATE
// ═══════════════════════════════════════════════════════════════════════════

let activeCharacter = 'all';
let activeCategory = 'all';
let activeCategoryFilter = 'all';
let activeSection = 'recipes';

// ═══════════════════════════════════════════════════════════════════════════
// INITIALIZATION
// ═══════════════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', () => {
    buildTicker();
    buildCharacterStrip();
    buildRecipeCards();
    buildTeamGrid();
    buildPressReleases();
    setupCategoryTabs();
    setupCategoryBar();
    setupSecondaryNav();
    startTaglineRotation();
    setupScrollAnimations();
    logConsoleBanner();
});

// ═══════════════════════════════════════════════════════════════════════════
// TICKER
// ═══════════════════════════════════════════════════════════════════════════

function buildTicker() {
    const ticker = document.getElementById('commaTicker');
    if (!ticker) return;
    
    let html = '';
    // Build twice for seamless loop
    for (let i = 0; i < 2; i++) {
        TICKER_DATA.forEach(item => {
            html += `<span class="tc-item"><span class="tc-label">${item.label}:</span> <span class="tc-val">${item.val}</span></span>`;
            html += `<span class="tc-commas-tick">,,,</span>`;
        });
    }
    ticker.innerHTML = html;
}

// ═══════════════════════════════════════════════════════════════════════════
// CHARACTER SELECTOR STRIP
// ═══════════════════════════════════════════════════════════════════════════

// Category emoji mapping
const CATEGORY_EMOJIS = {
    smoothie: '🥤',
    soup: '🍲',
    sauce: '🌶️',
    frozen: '🧊'
};

// Get recipe category emojis for a character
function getCharacterCategoryEmojis(charId) {
    const charRecipes = RECIPES.filter(r => r.characterId === charId);
    const categories = [...new Set(charRecipes.map(r => r.category))];
    return categories.map(cat => CATEGORY_EMOJIS[cat] || '').join(' ');
}

function buildCharacterStrip() {
    const strip = document.getElementById('characterStrip');
    if (!strip) return;
    
    CHARACTERS.forEach(char => {
        const categoryEmojis = getCharacterCategoryEmojis(char.id);
        const card = document.createElement('button');
        card.className = 'tc-sel-card';
        card.dataset.character = char.id;
        card.style.setProperty('--char-accent', char.accentColor);
        card.innerHTML = `
            <img class="tc-sel-card-img" src="${char.portrait}" alt="${char.name}" loading="lazy">
            <div class="tc-sel-card-name">${char.name}</div>
            <div class="tc-sel-card-categories">${categoryEmojis}</div>
        `;
        card.addEventListener('click', () => selectCharacter(char.id));
        strip.appendChild(card);
    });
    
    // ALL button click handler
    const allBtn = strip.querySelector('[data-character="all"]');
    if (allBtn) {
        allBtn.addEventListener('click', () => selectCharacter('all'));
    }
}

function selectCharacter(charId) {
    activeCharacter = charId;
    
    // Update card active states
    document.querySelectorAll('.tc-sel-card').forEach(c => {
        c.classList.toggle('active', c.dataset.character === charId);
    });
    
    // Update bio bar
    const bio = document.getElementById('bioBar');
    if (charId === 'all') {
        bio.classList.remove('visible');
    } else {
        const char = CHARACTERS.find(c => c.id === charId);
        document.getElementById('bioAvatar').src = char.portrait;
        document.getElementById('bioName').textContent = char.fullName;
        document.getElementById('bioTitle').textContent = char.title;
        document.getElementById('bioQuote').textContent = char.quote;
        document.getElementById('bioEquity').textContent = `equity: ${char.equity}`;
        bio.style.setProperty('--char-accent', char.accentColor);
        bio.classList.add('visible');
    }
    
    // Filter recipes
    filterRecipes();
    
    // Switch to recipes section if not already there
    if (activeSection !== 'recipes') {
        showSection('recipes');
    }
    
    // Scroll recipe area into view
    const recipeArea = document.getElementById('recipeArea');
    if (recipeArea) {
        recipeArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// RECIPE CARDS
// ═══════════════════════════════════════════════════════════════════════════

function buildRecipeCards() {
    const grid = document.getElementById('recipeGrid');
    if (!grid) return;
    
    RECIPES.forEach(recipe => {
        const char = CHARACTERS.find(c => c.id === recipe.characterId);
        // Always use portrait for consistent layout (trading cards have different aspect ratios)
        const cardImg = char.portrait;
        
        const card = document.createElement('div');
        card.className = 'tc-recipe-card';
        card.dataset.characterIds = recipe.characterId;
        card.dataset.category = recipe.category;
        card.dataset.recipeId = recipe.id;
        card.dataset.isSignature = recipe.isSignature;
        
        let versionsHtml = '';
        
        // v1.0
        versionsHtml += `
            <div class="tc-recipe-version">
                <div class="tc-rv-header">
                    <span class="tc-rv-label">⚡ v1.0 — Minimum Viable Protein</span>
                    <span class="tc-rv-protein">${recipe.v1.protein}</span>
                    <span class="tc-rv-time">${recipe.v1.time}</span>
                </div>
                <div class="tc-rv-code">
                    <button class="tc-copy-btn" onclick="copyRecipe('${recipe.id}-v1')">Copy</button>
                    <pre id="${recipe.id}-v1" class="tc-recipe-pre">${recipe.v1.ingredients}</pre>
                </div>
            </div>
        `;
        
        // v2.0 (if exists)
        if (recipe.v2) {
            versionsHtml += `
                <div class="tc-recipe-version tc-rv-scale">
                    <div class="tc-rv-header">
                        <span class="tc-rv-label">💪 v2.0 — Scale Mode</span>
                        <span class="tc-rv-protein tc-rv-protein-high">${recipe.v2.protein}</span>
                        <span class="tc-rv-time">${recipe.v2.time}</span>
                    </div>
                    <div class="tc-rv-code">
                        <button class="tc-copy-btn" onclick="copyRecipe('${recipe.id}-v2')">Copy</button>
                        <pre id="${recipe.id}-v2" class="tc-recipe-pre">${recipe.v2.ingredients}</pre>
                    </div>
                </div>
            `;
        }
        
        const categoryColors = {
            smoothie: { bg: 'rgba(0,217,255,0.2)', color: '#00d9ff', border: 'rgba(0,217,255,0.4)' },
            soup: { bg: 'rgba(255,165,0,0.2)', color: '#FFA500', border: 'rgba(255,165,0,0.4)' },
            sauce: { bg: 'rgba(255,99,71,0.2)', color: '#FF6347', border: 'rgba(255,99,71,0.4)' },
            frozen: { bg: 'rgba(135,206,250,0.2)', color: '#87CEFA', border: 'rgba(135,206,250,0.4)' }
        };
        const catStyle = categoryColors[recipe.category] || categoryColors.smoothie;
        
        card.innerHTML = `
            <div class="tc-recipe-char-panel" style="--char-accent: ${char.accentColor};">
                <img class="tc-recipe-char-img" src="${cardImg}" alt="${char.fullName}">
                <div class="tc-recipe-sig-badge">${recipe.isSignature ? '⭐ SIGNATURE' : '2ND STRING'}</div>
                <div class="tc-recipe-char-strip">
                    <span class="tc-rcs-name">${char.fullName}</span>
                    <span class="tc-rcs-equity">${char.equity}</span>
                </div>
            </div>
            <div class="tc-recipe-content-panel">
                <div class="tc-recipe-photo-watermark">
                    <img src="${recipe.photoUrl}" alt="">
                </div>
                <div class="tc-recipe-header">
                    <span class="tc-recipe-emoji">${recipe.emoji}</span>
                    <h2 class="tc-recipe-name">${recipe.name}</h2>
                    <span class="tc-recipe-tag" style="background:${catStyle.bg}; color:${catStyle.color}; border-color:${catStyle.border};">${recipe.category.toUpperCase()}</span>
                </div>
                <div class="tc-recipe-syntax">${recipe.syntax}</div>
                <div class="tc-recipe-quote">
                    <img class="tc-rq-avatar" src="${char.portrait}" alt="${char.name}" style="border-color: ${char.accentColor};">
                    <blockquote class="tc-rq-text">${recipe.quote}</blockquote>
                </div>
                <div class="tc-recipe-versions">
                    ${versionsHtml}
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function filterRecipes() {
    const allCards = document.querySelectorAll('.tc-recipe-card');
    let visibleCount = 0;
    
    allCards.forEach(card => {
        const cardChar = card.dataset.characterIds;
        const cardCat = card.dataset.category;
        const isSignature = card.dataset.isSignature === 'true';
        
        const matchesChar = activeCharacter === 'all' || cardChar === activeCharacter;
        
        // Category bar filter logic
        let matchesCatBar = true;
        if (activeCategoryFilter === 'signature') {
            // Only show signature recipes
            matchesCatBar = isSignature;
        } else if (activeCategoryFilter !== 'all') {
            matchesCatBar = cardCat === activeCategoryFilter;
        }
        
        // Also check the old category tabs if still used
        const matchesCat = activeCategory === 'all' || cardCat === activeCategory;
        
        if (matchesChar && matchesCatBar && matchesCat) {
            card.style.display = '';
            card.classList.remove('tc-filtered-out');
            visibleCount++;
        } else {
            card.style.display = 'none';
            card.classList.add('tc-filtered-out');
        }
    });
    
    // Update header
    const header = document.getElementById('recipeAreaHeader');
    const filterLabel = activeCategoryFilter !== 'all' ? activeCategoryFilter.replace('-', ' ') : '';
    
    if (activeCharacter === 'all') {
        let filterText = '';
        if (activeCategoryFilter !== 'all') {
            filterText = ` · filtered: ${filterLabel}`;
        }
        header.innerHTML = `<span class="tc-rh-all">// showing ${visibleCount} recipes${filterText || ' across 4 categories'}</span>`;
    } else {
        const char = CHARACTERS.find(c => c.id === activeCharacter);
        header.innerHTML = `
            <span class="tc-rh-char" style="color:${char.accentColor}">
                ${char.fullName}'s Recipes
            </span>
            <span class="tc-rh-sub">
                // signature: ${char.signatureLabel} · second string: ${char.secondLabel}
            </span>
        `;
    }
}

function copyRecipe(id) {
    const pre = document.getElementById(id);
    if (!pre) return;
    
    const text = pre.textContent;
    navigator.clipboard.writeText(text).then(() => {
        const btn = pre.parentElement.querySelector('.tc-copy-btn');
        if (btn) {
            btn.textContent = 'Copied!';
            setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        }
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY TABS
// ═══════════════════════════════════════════════════════════════════════════

function setupCategoryTabs() {
    const tabs = document.querySelectorAll('.tc-cat-tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            activeCategory = tab.dataset.category;
            filterRecipes();
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// CATEGORY BAR (New filter bar above secondary nav)
// ═══════════════════════════════════════════════════════════════════════════

function setupCategoryBar() {
    const btns = document.querySelectorAll('.tc-catbar-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            activeCategoryFilter = btn.dataset.filter;
            filterRecipes();
            
            // Switch to recipes section if not already there
            if (activeSection !== 'recipes') {
                showSection('recipes');
            }
        });
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// SECONDARY NAVIGATION (Recipes / Team / Press)
// ═══════════════════════════════════════════════════════════════════════════

function setupSecondaryNav() {
    const btns = document.querySelectorAll('.tc-secondary-nav-btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            showSection(btn.dataset.section);
        });
    });
}

function showSection(section) {
    activeSection = section;
    
    // Update nav buttons
    document.querySelectorAll('.tc-secondary-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === section);
    });
    
    // Show/hide sections
    document.getElementById('recipeArea').style.display = section === 'recipes' ? '' : 'none';
    document.getElementById('aboutSection').classList.toggle('active', section === 'about');
    document.getElementById('teamSection').classList.toggle('active', section === 'team');
    document.getElementById('pressSection').classList.toggle('active', section === 'press');
}

// ═══════════════════════════════════════════════════════════════════════════
// TEAM GRID
// ═══════════════════════════════════════════════════════════════════════════

function buildTeamGrid() {
    const grid = document.getElementById('teamGrid');
    if (!grid) return;
    
    CHARACTERS.forEach(char => {
        const card = document.createElement('div');
        card.className = 'tc-team-card';
        card.style.setProperty('--char-accent', char.accentColor);
        
        card.innerHTML = `
            <img class="tc-team-card-img" src="${char.portrait}" alt="${char.fullName}">
            <div class="tc-team-card-body">
                <div class="tc-team-card-name">${char.fullName}</div>
                <div class="tc-team-card-title">${char.title}</div>
                <div class="tc-team-card-equity">equity: ${char.equity}</div>
                <div class="tc-team-card-quote">${char.quote}</div>
                <span class="tc-team-card-link" onclick="viewCharacterRecipes('${char.id}')">View their recipes →</span>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function viewCharacterRecipes(charId) {
    selectCharacter(charId);
    showSection('recipes');
}

// ═══════════════════════════════════════════════════════════════════════════
// PRESS RELEASES
// ═══════════════════════════════════════════════════════════════════════════

function buildPressReleases() {
    const container = document.getElementById('pressReleases');
    if (!container) return;
    
    PRESS_RELEASES.forEach(pr => {
        const char = CHARACTERS.find(c => c.id === pr.characterId);
        
        const article = document.createElement('article');
        article.className = 'tc-press-release';
        article.style.setProperty('--char-accent', char ? char.accentColor : '#C9A84C');
        
        article.innerHTML = `
            <div class="tc-press-release-header" onclick="togglePressRelease(this)">
                <img class="tc-press-avatar" src="${char ? char.portrait : 'assets/characters/richard.png'}" alt="">
                <div class="tc-press-header-content">
                    <div class="tc-press-dateline">${pr.dateline}</div>
                    <div class="tc-press-headline">${pr.headline}</div>
                    <div class="tc-press-preview">
                        <span>${pr.preview}</span>
                        <span class="tc-press-expand">// expand()</span>
                    </div>
                </div>
            </div>
            <div class="tc-press-body">
                ${pr.body}
                <div class="tc-press-filed">${pr.filed}</div>
                <span class="tc-press-symbol">,,,</span>
            </div>
        `;
        
        container.appendChild(article);
    });
}

function togglePressRelease(header) {
    const body = header.nextElementSibling;
    const expandText = header.querySelector('.tc-press-expand');
    
    if (body && body.classList.contains('tc-press-body')) {
        body.classList.toggle('expanded');
        if (expandText) {
            expandText.textContent = body.classList.contains('expanded') ? '// collapse()' : '// expand()';
        }
    }
}

// ═══════════════════════════════════════════════════════════════════════════
// TAGLINE ROTATION
// ═══════════════════════════════════════════════════════════════════════════

function startTaglineRotation() {
    const tagline = document.getElementById('headerTagline');
    if (!tagline) return;
    
    let index = 0;
    
    setInterval(() => {
        tagline.classList.add('fade-out');
        
        setTimeout(() => {
            index = (index + 1) % HEADER_TAGLINES.length;
            tagline.textContent = HEADER_TAGLINES[index];
            tagline.classList.remove('fade-out');
        }, 800);
    }, 5000);
}

// ═══════════════════════════════════════════════════════════════════════════
// SCROLL ANIMATIONS
// ═══════════════════════════════════════════════════════════════════════════

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && typeof anime !== 'undefined') {
                anime({
                    targets: entry.target,
                    opacity: [0, 1],
                    translateY: [24, 0],
                    duration: 500,
                    easing: 'easeOutCubic'
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe recipe cards
    document.querySelectorAll('.tc-recipe-card').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
}

// ═══════════════════════════════════════════════════════════════════════════
// CONSOLE BANNER
// ═══════════════════════════════════════════════════════════════════════════

function logConsoleBanner() {
    console.log(`
%c╔════════════════════════════════════════════════════════════════════╗
║   ,,, TRES COMAS NUTRITION LABS v6.0 INITIALIZED                   ║
║   ──────────────────────────────────────────────────               ║
║   Edition: CHARACTER SELECTOR EDITION                               ║
║   Status: DEPLOYED TO PRODUCTION                                   ║
║   Valuation: $1.2B (Russ says one comma is embarrassing)           ║
║   ──────────────────────────────────────────────────               ║
║   Characters: 10                                                    ║
║   Total Recipes: 20 (2 per character)                              ║
║   Categories: Smoothies, Soups, Sauces, Frozen                     ║
║   ──────────────────────────────────────────────────               ║
║   "Characters ARE the UX." — Product Team                          ║
║   "I own 10% of this console log." — E. Bachman                    ║
╚════════════════════════════════════════════════════════════════════╝
    `, 'color: #C9A84C; font-family: monospace; font-size: 11px;');
    
    console.log('%c💡 Click a character card to filter their signature recipes!', 
        'color: #00FF41; font-family: monospace;');
}

// Make functions globally accessible
window.copyRecipe = copyRecipe;
window.togglePressRelease = togglePressRelease;
window.viewCharacterRecipes = viewCharacterRecipes;
window.showSection = showSection;
