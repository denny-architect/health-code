// Tab switching functionality
document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked tab
            tab.classList.add('active');

            // Show corresponding content
            const targetTab = tab.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });

    // Shopping list persistence (localStorage)
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

    // Add smooth scrolling
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

    // Easter egg: Konami code for fun animation
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

        // Show notification
        const notification = document.createElement('div');
        notification.textContent = '🚀 BEAST MODE ACTIVATED! 💪🥷';
        notification.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #ff8c00 0%, #ff006e 100%);
            color: white;
            padding: 2rem 3rem;
            border-radius: 12px;
            font-size: 1.5rem;
            font-weight: 900;
            z-index: 10000;
            animation: scaleIn 0.3s ease-out;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
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

    // Add "copy to clipboard" functionality for recipe code blocks
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

    // Add ninja recipe counter
    const ninjaRecipes = document.querySelectorAll('.ninja-recipe');
    const totalRecipes = document.querySelectorAll('.recipe-card');
    
    // Log a fun message to console
    console.log(`
    %c╔════════════════════════════════════════════════════╗
    ║   🚀 HEALTH-CODE v2.0 INITIALIZED                  ║
    ║   ───────────────────────────────────────          ║
    ║   Status: READY TO BLEND                           ║
    ║   Protein Target: 121g                             ║
    ║   Total Recipes: ${totalRecipes.length}                                ║
    ║   🥷 Ninja Recipes: ${ninjaRecipes.length}                              ║
    ║   Categories: Smoothies, Soups, Sauces, Frozen     ║
    ╚════════════════════════════════════════════════════╝
    `, 'color: #00d9ff; font-family: monospace; font-size: 12px;');
    
    console.log('%c⚡ Pre-Workout and 💪 Post-Workout variants available!', 
                'color: #ff006e; font-family: monospace; font-size: 12px;');
    
    console.log('%c💡 Pro Tip: Try the Konami Code for a surprise! ↑↑↓↓←→←→BA', 
                'color: #00ff9f; font-family: monospace;');

    // Add animated gradient to ninja badges
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

    // Version badge tooltip
    const versionBadge = document.querySelector('.version-badge');
    if (versionBadge) {
        versionBadge.title = 'Now with Ninja recipes, soups, sauces & frozen treats!';
    }
});
