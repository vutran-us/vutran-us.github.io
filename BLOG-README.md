# Blog Management Guide

## 📝 How to Add New Articles

Your blog is now integrated into your portfolio! Here's how to manage it:

---

## 🚀 Quick Start: Adding a New Article

### **Step 1: Create Article File**

1. Go to the `articles/` folder
2. Copy `article-template.html`
3. Rename it to match your article (e.g., `my-first-article.html`)

### **Step 2: Edit Article Content**

Open your new file and update:

**Header Section:**
```html
<title>Your Article Title | Cybersecurity Portfolio</title>
<meta name="description" content="Brief description for SEO">
```

**Article Metadata:**
```html
<span class="article-date">December 12, 2024</span>
<span class="article-reading-time">5 min read</span>
<span class="article-category ai-ml">AI & ML</span>  <!-- or cybersecurity, infrastructure, career -->
```

**Title & Excerpt:**
```html
<h1 class="article-title">Your Compelling Title</h1>
<p class="article-excerpt">Your article summary...</p>
```

**Tags:**
```html
<span class="tag">Python</span>
<span class="tag">PyTorch</span>
<span class="tag">Deep Learning</span>
```

**Body Content:**
- Replace the template content with your article
- Use `<h2>` for main sections
- Use `<h3>` for subsections
- Add code in `<pre><code>` blocks
- Include images with `<img src="path/to/image.jpg" alt="description">`

### **Step 3: Add to Blog Listing**

Open `blog.html` and add a new article card:

```html
<article class="article-card" data-category="ai-ml">
    <div class="article-header">
        <div class="article-meta">
            <span class="article-date">December 12, 2024</span>
            <span class="article-reading-time">5 min read</span>
        </div>
        <span class="article-category ai-ml">AI & ML</span>
    </div>
    <h2 class="article-title">
        <a href="articles/your-article.html">Your Article Title</a>
    </h2>
    <p class="article-excerpt">
        Brief summary of your article that entices readers to click.
    </p>
    <div class="article-tags">
        <span class="tag">Tag1</span>
        <span class="tag">Tag2</span>
        <span class="tag">Tag3</span>
    </div>
    <a href="articles/your-article.html" class="article-link">Read Article →</a>
</article>
```

### **Step 4: Upload to GitHub**

1. Add all files to your repository
2. Commit: `git add . && git commit -m "Add new blog article"`
3. Push: `git push`
4. Your blog updates automatically!

---

## 📂 File Structure

```
portfolio/
├── index.html              # Main portfolio page
├── blog.html              # Blog listing page
├── styles.css             # Main styles
├── blog-styles.css        # Blog-specific styles (merge into styles.css)
├── script.js              # Main JavaScript
├── blog-script.js         # Blog JavaScript
└── articles/
    ├── article-template.html
    ├── pytorch-image-classifier.html
    └── your-article-name.html
```

---

## 🎨 Category Types

Use these categories in `data-category` and `article-category` class:

- **`ai-ml`** - AI & Machine Learning (Purple)
- **`cybersecurity`** - Security topics (Orange)
- **`infrastructure`** - IT Infrastructure (Cyan)
- **`career`** - Career & Learning (Green)

---

## ✍️ Writing Tips

### **Article Structure**

1. **Compelling Title** - Clear, specific, benefit-driven
2. **Strong Intro** - Hook readers in first paragraph
3. **Clear Sections** - Use H2/H3 headings to organize
4. **Code Examples** - Show, don't just tell
5. **Visuals** - Include images, diagrams, screenshots
6. **Conclusion** - Summarize key takeaways
7. **Call to Action** - What should readers do next?

### **SEO Best Practices**

- **Title**: 50-60 characters, include keywords
- **Meta Description**: 150-160 characters
- **Headings**: Use H2/H3 hierarchy properly
- **Images**: Add descriptive alt text
- **Links**: Link to related articles
- **Keywords**: Naturally include 2-3 times

### **Content Ideas**

**AI/ML Articles:**
- Project walkthroughs from your Udacity courses
- Comparing different ML frameworks
- Deep dives into specific algorithms
- Tutorial series on PyTorch, TensorFlow, etc.

**Cybersecurity Articles:**
- Security best practices from your experience
- Common vulnerabilities and how to prevent them
- Tool reviews and comparisons
- Incident response case studies

**Career Articles:**
- Your learning journey and experiences
- Certification study guides
- Transitioning from IT to AI
- Balancing work and education

**Infrastructure Articles:**
- Server hardening guides
- Network troubleshooting methodologies
- Cloud migration strategies
- Automation scripts and tools

---

## 🔧 Advanced Features

### **Add Images**

1. Create `images/` folder in `articles/`
2. Add images: `articles/images/my-image.jpg`
3. Reference in article: `<img src="images/my-image.jpg" alt="Description">`

### **Code Syntax Highlighting**

For better code highlighting, add Prism.js or highlight.js:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js"></script>
```

### **Add Newsletter Integration**

Replace the newsletter form action with your email service:

**Mailchimp Example:**
```html
<form action="https://your-mailchimp-url" method="post">
```

**ConvertKit Example:**
```html
<form action="https://app.convertkit.com/forms/YOUR_FORM_ID/subscriptions">
```

### **Analytics**

Add Google Analytics to track visitors:

```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR_GA_ID');
</script>
```

---

## 📊 Publishing Workflow

### **1. Draft Articles**
- Write articles in Markdown first (easier)
- Use tools like Typora, Obsidian, or VS Code
- Convert to HTML using the template

### **2. Review Checklist**
- [ ] Proofread for grammar/spelling
- [ ] Check all links work
- [ ] Test code examples
- [ ] Add images with alt text
- [ ] Verify responsive on mobile
- [ ] Preview in browser

### **3. Publish**
- [ ] Add to `blog.html` listing
- [ ] Upload article file to `articles/`
- [ ] Commit and push to GitHub
- [ ] Share on social media (LinkedIn, Twitter)

---

## 🎯 Content Calendar Suggestion

**Week 1-2:** Set up and write first article
**Week 3-4:** Publish and promote
**Month 2:** 2 articles (bi-weekly)
**Month 3+:** 1-2 articles per month

**Consistency > Quantity**

---

## 💡 Article Title Formulas

- **How-To**: "How to Build X with Y"
- **List**: "7 Essential Z for Beginners"
- **Tutorial**: "A Complete Guide to X"
- **Comparison**: "X vs Y: Which Should You Choose?"
- **Problem-Solving**: "Solving X: A Step-by-Step Guide"
- **Personal**: "What I Learned from X"

---

## 📱 Promotion Strategy

After publishing:
1. **LinkedIn** - Share with professional network
2. **Twitter/X** - Tweet with relevant hashtags
3. **Dev.to** - Cross-post (link back to your blog)
4. **Reddit** - Share in relevant subreddits (r/cybersecurity, r/MachineLearning)
5. **Hacker News** - Submit if highly technical

---

## 🆘 Need Help?

**Common Issues:**

**Article doesn't show on blog page?**
- Check `data-category` attribute matches filter buttons
- Verify file path in `href` is correct

**Styling looks broken?**
- Ensure blog-styles.css is merged into styles.css
- Check CSS file is linked correctly

**Images not loading?**
- Verify image path is correct relative to article file
- Check image file extension matches (jpg vs jpeg vs png)

---

## 🚀 Your blog is ready!

Start writing your first article about your PyTorch image classifier project or your Udacity AI journey!

**Example first article topics:**
1. "Building My First Image Classifier: Lessons from Udacity's AI Program"
2. "From 13 Years in IT to AI Student: Why I'm Making the Switch"
3. "Essential Server Security Practices I Learned in 13 Years"

Happy writing! 📝✨
