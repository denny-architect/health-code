// Tres Comas Nutrition Labs v5.0 — Big Character Energy Edition
// MCP: Meal Context Protocol v1.0 — deployed to production
// Vibe-coded by a 10x engineer on 2 smoothies and zero sleep
// "I own 10% of this codebase." — E. Bachman

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // ROTATING TAGLINES - Tres Comas Edition
    // ============================================
    const taglines = [
        '// "Two smoothies a day keeps the bugs away." — R. Hendricks (he already regrets saying it)',
        '// Making the world a better place through middle-out macro compression. ,,,',
        '// We are a $1.2B company. Russ says this is embarrassing. He is not wrong.',
        '// Nutrition infrastructure for the three-comma body. 💪',
        '// "I own 10% of this tagline." — E. Bachman',
        '// Series B lead investor thought he was signing up for a smoothie subscription. Still did it.',
        '// "Consider the broccoli. It too began compressed." — G. Belson',
        '// ROI: Refreshment On Investment. — R. Hanneman, Chairman of Vibes',
        '// catch(burnout) { return this.pivot("soups"); } // happened twice',
        '// Jian-Yang\'s title has been updated 7 times. Current: Chief of Emerging Verticals.'
    ];
    
    let currentTaglineIndex = 0;
    const taglineElement = document.getElementById('rotating-tagline');
    
    function rotateTagline() {
        if (!taglineElement) return;
        
        // Fade out
        taglineElement.classList.add('fade-out');
        
        setTimeout(() => {
            // Change text
            currentTaglineIndex = (currentTaglineIndex + 1) % taglines.length;
            taglineElement.textContent = taglines[currentTaglineIndex];
            
            // Fade in
            taglineElement.classList.remove('fade-out');
        }, 600);
    }
    
    // Start rotating after initial delay
    setInterval(rotateTagline, 4000);

    // ============================================
    // PARTICLE CANVAS - Code Characters Effect
    // ============================================
    const canvas = document.getElementById('particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        const codeChars = ['0', '1', '{', '}', '[', ']', '/', '<', '>', ',', ',', ','];
        const particles = [];
        const MAX_PARTICLES = 60;
        let animationId;
        let isVisible = true;
        
        // Set canvas size
        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = 400;
        }
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        
        // Create particle
        function createParticle() {
            return {
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                char: codeChars[Math.floor(Math.random() * codeChars.length)],
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.05 + 0.02,
                size: Math.random() * 10 + 8
            };
        }
        
        // Initialize particles
        for (let i = 0; i < MAX_PARTICLES; i++) {
            particles.push(createParticle());
        }
        
        // Animation loop
        function animate() {
            if (!isVisible) {
                animationId = requestAnimationFrame(animate);
                return;
            }
            
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                // Update position
                particle.x += particle.speedX;
                particle.y += particle.speedY;
                
                // Wrap around edges
                if (particle.x < 0) particle.x = canvas.width;
                if (particle.x > canvas.width) particle.x = 0;
                if (particle.y < 0) particle.y = canvas.height;
                if (particle.y > canvas.height) particle.y = 0;
                
                // Draw particle - gold for commas, green for others
                ctx.font = `${particle.size}px 'Fira Code', monospace`;
                if (particle.char === ',') {
                    ctx.fillStyle = `rgba(201, 168, 76, ${particle.opacity * 1.5})`;
                } else {
                    ctx.fillStyle = `rgba(0, 255, 65, ${particle.opacity})`;
                }
                ctx.fillText(particle.char, particle.x, particle.y);
            });
            
            animationId = requestAnimationFrame(animate);
        }
        
        animate();
        
        // Page Visibility API - pause when tab not focused
        document.addEventListener('visibilitychange', () => {
            isVisible = !document.hidden;
        });
    }

    // ============================================
    // CHARACTER COMMENT REVEAL ANIMATION
    // ============================================
    const characterComments = document.querySelectorAll('.character-comment');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const commentObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Delay slightly for stagger effect
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 100);
            }
        });
    }, observerOptions);
    
    characterComments.forEach(comment => {
        commentObserver.observe(comment);
    });

    // ============================================
    // SECTION HOST PANELS - SLIDE IN ANIMATION
    // ============================================
    const hostPanels = document.querySelectorAll('.section-host-panel');
    
    const hostObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, 200);
            }
        });
    }, { threshold: 0.1 });
    
    hostPanels.forEach(panel => {
        hostObserver.observe(panel);
    });

    // ============================================
    // TRADING CARDS - SCROLL ANIMATION
    // ============================================
    const tradingCards = document.querySelectorAll('.trading-card');
    
    const cardObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    }, { threshold: 0.1 });
    
    tradingCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        cardObserver.observe(card);
    });

    // ============================================
    // COMMA METER POWER-UP ANIMATION (anime.js)
    // ============================================
    if (typeof anime !== 'undefined') {
        const commaMeter = document.querySelector('.comma-meter');
        if (commaMeter) {
            anime({
                targets: '.comma-unit.achieved',
                scale: [1, 1.2, 1],
                easing: 'easeInOutQuad',
                duration: 800,
                delay: 500,
                loop: false
            });
        }
        
        // Hero card hero image subtle animation
        const heroCardImage = document.querySelector('.hero-card-image');
        if (heroCardImage) {
            anime({
                targets: heroCardImage,
                translateY: [-20, 0],
                opacity: [0, 1],
                easing: 'easeOutExpo',
                duration: 1200,
                delay: 300
            });
        }
    }

    // ============================================
    // TAB SWITCHING FUNCTIONALITY
    // ============================================
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding content with fade animation
            const targetTab = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
                
                // Re-trigger character comment animations for new tab
                const newComments = targetContent.querySelectorAll('.character-comment');
                newComments.forEach(comment => {
                    comment.classList.remove('visible');
                    setTimeout(() => {
                        commentObserver.observe(comment);
                    }, 50);
                });
            }
        });
    });

    // ============================================
    // PRESS ROOM - EXPAND/COLLAPSE
    // ============================================
    const pressHeaders = document.querySelectorAll('.press-header');
    
    pressHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const body = header.nextElementSibling;
            const expandText = header.querySelector('.press-expand');
            
            if (body && body.classList.contains('press-body')) {
                body.classList.toggle('expanded');
                if (expandText) {
                    expandText.textContent = body.classList.contains('expanded') ? '// collapse()' : '// expand()';
                }
            }
        });
    });

    // ============================================
    // SHOPPING LIST PERSISTENCE (localStorage)
    // ============================================
    const checkboxes = document.querySelectorAll('.shopping-list input[type="checkbox"]');
    
    // Load saved state
    checkboxes.forEach(checkbox => {
        const savedState = localStorage.getItem(checkbox.id);
        if (savedState === 'true') {
            checkbox.checked = true;
        }
    });

    // Save state on change
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            localStorage.setItem(checkbox.id, checkbox.checked);
        });
    });

    // ============================================
    // SMOOTH SCROLLING
    // ============================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================
    // KONAMI CODE EASTER EGG - Tres Comas Edition
    // ============================================
    let konamiCode = [];
    const konamiPattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.key);
        konamiCode = konamiCode.slice(-10);
        
        if (konamiCode.join(',') === konamiPattern.join(',')) {
            activateBeastMode();
        }
    });

    function activateBeastMode() {
        document.body.style.animation = 'rainbow 2s linear infinite';
        
        const style = document.createElement('style');
        style.textContent = `
            @keyframes rainbow {
                0% { filter: hue-rotate(0deg); }
                100% { filter: hue-rotate(360deg); }
            }
        `;
        document.head.appendChild(style);

        setTimeout(() => {
            document.body.style.animation = '';
            style.remove();
        }, 4000);

        // Show Tres Comas notification
        const notification = document.createElement('div');
        notification.innerHTML = '🚀 THREE COMMA MODE ACTIVATED! ,,,<br><small>// This guy blends (and has a billion dollars)</small>';
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #C9A84C 0%, #FFD700 100%);
            color: #0d1117;
            padding: 2rem 3rem;
            border-radius: 12px;
            font-size: 1.5rem;
            font-weight: 900;
            z-index: 10000;
            animation: scaleIn 0.3s ease-out;
            text-shadow: none;
            text-align: center;
            font-family: 'Fira Code', monospace;
        `;
        
        const scaleInStyle = document.createElement('style');
        scaleInStyle.textContent = `
            @keyframes scaleIn {
                from { transform: translate(-50%, -50%) scale(0); }
                to { transform: translate(-50%, -50%) scale(1); }
            }
        `;
        document.head.appendChild(scaleInStyle);
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
            scaleInStyle.remove();
        }, 2000);
    }

    // ============================================
    // COPY TO CLIPBOARD - Recipe Code Blocks
    // ============================================
    document.querySelectorAll('.ingredients code').forEach(codeBlock => {
        const wrapper = document.createElement('div');
        wrapper.style.position = 'relative';
        codeBlock.parentNode.insertBefore(wrapper, codeBlock);
        wrapper.appendChild(codeBlock);

        const copyBtn = document.createElement('button');
        copyBtn.textContent = '📋 Copy';
        copyBtn.style.cssText = `
            position: absolute;
            top: 0.5rem;
            right: 0.5rem;
            background: var(--dark-lighter);
            color: var(--primary);
            border: 1px solid var(--border);
            padding: 0.5rem 1rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            transition: all 0.2s;
            font-family: 'Inter', sans-serif;
        `;

        copyBtn.addEventListener('mouseenter', () => {
            copyBtn.style.background = 'var(--primary)';
            copyBtn.style.color = 'var(--dark)';
        });

        copyBtn.addEventListener('mouseleave', () => {
            copyBtn.style.background = 'var(--dark-lighter)';
            copyBtn.style.color = 'var(--primary)';
        });

        copyBtn.addEventListener('click', () => {
            const text = codeBlock.textContent;
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = '✅ Copied!';
                setTimeout(() => {
                    copyBtn.textContent = '📋 Copy';
                }, 2000);
            });
        });

        wrapper.appendChild(copyBtn);
    });

    // ============================================
    // NINJA BADGE INTERACTIONS
    // ============================================
    document.querySelectorAll('.ninja-badge').forEach(badge => {
        badge.addEventListener('mouseenter', () => {
            badge.style.transform = 'scale(1.1)';
            badge.style.boxShadow = '0 0 15px rgba(255, 140, 0, 0.5)';
        });
        badge.addEventListener('mouseleave', () => {
            badge.style.transform = 'scale(1)';
            badge.style.boxShadow = 'none';
        });
    });

    // ============================================
    // VERSION BADGE TOOLTIP
    // ============================================
    const versionBadge = document.querySelector('.version-badge');
    if (versionBadge) {
        versionBadge.title = 'Tres Comas Nutrition Labs v5.0 — Big Character Energy Edition · $1.2B (Russ still disgusted)';
    }

    // ============================================
    // CONSOLE BANNER - Tres Comas Edition
    // ============================================
    const ninjaRecipes = document.querySelectorAll('.ninja-recipe');
    const totalRecipes = document.querySelectorAll('.recipe-card');
    const characterCommentCount = document.querySelectorAll('.character-comment').length;
    const teamCards = document.querySelectorAll('.team-card');
    const pressReleases = document.querySelectorAll('.press-release');
    
    const tradingCardCount = document.querySelectorAll('.trading-card').length;
    
    console.log(`
    %c╔════════════════════════════════════════════════════════════════╗
    ║   ,,, TRES COMAS NUTRITION LABS v5.0 INITIALIZED               ║
    ║   ─────────────────────────────────────────────────            ║
    ║   Edition: BIG CHARACTER ENERGY EDITION                        ║
    ║   Status: DEPLOYED TO PRODUCTION                               ║
    ║   Valuation: $1.2B (Russ says one comma is embarrassing)       ║
    ║   Target: YOUR THREE-COMMA BODY                                ║
    ║   Protein Target: 121g (pre-revenue, intentional)              ║
    ║   ─────────────────────────────────────────────────            ║
    ║   Total Recipes: ${totalRecipes.length}                                            ║
    ║   🥷 Ninja Recipes: ${ninjaRecipes.length}                                          ║
    ║   💬 Character Comments: ${characterCommentCount}                                      ║
    ║   🃏 Trading Cards: ${tradingCardCount}                                             ║
    ║   📰 Press Releases: ${pressReleases.length}                                           ║
    ║   Vertical Markets: Smoothies, Soups, Sauces, Frozen           ║
    ║   ─────────────────────────────────────────────────            ║
    ║   "Making the world a better place through                     ║
    ║    middle-out macro compression." — G. Belson                  ║
    ║   ─────────────────────────────────────────────────            ║
    ║   "I own 10% of this console log." — E. Bachman                ║
    ╚════════════════════════════════════════════════════════════════╝
    `, 'color: #C9A84C; font-family: monospace; font-size: 11px;');
    
    console.log('%c⚡ v1.0 — Minimum Viable Protein  |  💪 v2.0 — Scale Mode (// this guy recovers)', 
                'color: #ff006e; font-family: monospace; font-size: 11px;');
    
    console.log('%c💡 Pro Tip: Try the Konami Code for Three Comma Mode! ↑↑↓↓←→←→BA', 
                'color: #00ff9f; font-family: monospace;');
    
    console.log('%c,,, Tres Comas Nutrition Labs v5.0 · Big Character Energy Edition · Est. 2:47am', 
                'color: #C9A84C; font-family: monospace; font-weight: bold;');
});
