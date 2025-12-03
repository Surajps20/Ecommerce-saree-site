# 🚀 Quick Upload to GitHub

## Simple 5-Step Process

### Step 1: Setup Git
**Double-click:** `SETUP-GIT.bat` (Windows) or run:
```bash
git init
git config core.autocrlf true
git add .
git commit -m "Initial commit: TM Sarees e-commerce website"
```

### Step 2: Create GitHub Repository
1. Go to https://github.com/new
2. Name: `tm-sarees`
3. Choose Public or Private
4. **Don't** check any boxes
5. Click **Create repository**

### Step 3: Connect & Upload
Replace `YOURUSERNAME` with your GitHub username:
```bash
git remote add origin https://github.com/YOURUSERNAME/tm-sarees.git
git push -u origin main
```

### Step 4: Enable GitHub Pages (Optional)
1. Repository → Settings → Pages
2. Source: main → / (root)
3. Save
4. Visit: `https://YOURUSERNAME.github.io/tm-sarees/`

### Step 5: Done! 🎉

---

## Common Issues

**"Permission denied"**
→ Use Personal Access Token (GitHub → Settings → Developer settings)

**"Repository not found"**
→ Make sure repository is created on GitHub first

**"Failed to push"**
→ Run: `git pull origin main --allow-unrelated-histories` then push again

---

**Need help?** See README.md or CONTRIBUTING.md
