// Blog page functionality

// Category filtering
const categoryButtons = document.querySelectorAll('.category-btn');
const articleCards = document.querySelectorAll('.article-card');
const noArticlesMessage = document.querySelector('.no-articles');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const category = button.getAttribute('data-category');
        filterArticles(category);
    });
});

function filterArticles(category) {
    let visibleCount = 0;
    
    articleCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'flex';
            card.classList.add('fade-in');
            visibleCount++;
        } else {
            card.style.display = 'none';
        }
    });
    
    // Show/hide no articles message
    if (visibleCount === 0) {
        noArticlesMessage.style.display = 'block';
    } else {
        noArticlesMessage.style.display = 'none';
    }
}

// Mobile menu toggle
const mobileToggle = document.querySelector('.mobile-toggle');
const navMenu = document.querySelector('.nav-menu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileToggle.classList.toggle('active');
    });
}

// Newsletter form handling
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const submitButton = this.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        
        // Disable button and show loading state
        submitButton.disabled = true;
        submitButton.textContent = 'Subscribing...';
        
        try {
            const formData = new FormData(this);
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                submitButton.textContent = '✓ Subscribed!';
                submitButton.style.background = 'var(--accent-primary)';
                submitButton.style.color = 'var(--primary-bg)';
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.disabled = false;
                    submitButton.style.background = '';
                    submitButton.style.color = '';
                }, 3000);
            } else {
                throw new Error('Subscription failed');
            }
        } catch (error) {
            submitButton.textContent = '✗ Error - Try Again';
            submitButton.style.background = 'var(--accent-warning)';
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.background = '';
            }, 3000);
        }
    });
}

// Smooth scroll for navigation links
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

// Add scroll reveal animation for articles
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

articleCards.forEach(card => {
    observer.observe(card);
});

// Parallax effect for background
let scrollPosition = 0;
window.addEventListener('scroll', () => {
    scrollPosition = window.pageYOffset;
    const gridBackground = document.querySelector('.grid-background');
    if (gridBackground) {
        gridBackground.style.transform = `translate(${scrollPosition * 0.05}px, ${scrollPosition * 0.05}px)`;
    }
});

console.log('Blog initialized successfully!');
