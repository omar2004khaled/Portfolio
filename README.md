# Professional Developer Portfolio - Omar Khaled Hussein

A clean, responsive, and light/dark theme-enabled one-page portfolio website designed for developers, systems engineers, and DevOps professionals. This project demonstrates structured, semantic HTML5, vanilla CSS3 styling, and clean JavaScript interactions without external heavy libraries.

---

## 🚀 Technologies Used

- **HTML5**: Structured semantic web pages.
- **CSS3**: Layout design using Grid & Flexbox, dark/light theme management with CSS variables, custom responsive styling.
- **JavaScript (ES6+)**: Custom dynamic features (typewriter effect, theme state persistence, scroll-reveal Intersection Observer).
- **Font Awesome**: Standard vector iconography.
- **Google Fonts**: "Outfit" typography for general layout, and "JetBrains Mono" for programmatic snippets.

---

## 📁 Directory Structure

```text
portfolio/
│
├── index.html        # Main semantic structural code
├── style.css         # Styling rules, layouts, responsive rules, colors, themes
├── script.js        # Theme switching, typewriter effect, viewport scroll-reveal
└── README.md         # Documentation & deployment workflows (this file)
```

---

## 💻 Running the Project Locally

No compilation, bundlers, or package installations are required. To launch the site locally:

### Option A: Standard Launch
Double-click `index.html` inside the `portfolio` folder to open it directly in any modern web browser.

### Option B: Local Development Server (Recommended)
If using Visual Studio Code, use the **Live Server** extension to launch a local development server at `http://localhost:5500`. Alternatively, if you have Node.js installed, run:
```bash
npx serve .
```

---

## ☁️ Deployment Instructions

This guide outlines step-by-step instructions for uploading your codebase to **GitHub** and hosting it globally on **Vercel** with automatic continuous delivery (CI/CD).

### Part 1: Version Control with Git & GitHub

1. **Initialize Git Repository**
   Open your terminal inside the `portfolio` directory and run:
   ```bash
   git init
   ```

2. **Stage and Commit Code**
   Stage all files and make the initial commit:
   ```bash
   git add .
   git commit -m "Initial commit: Create responsive portfolio structure, styles, and scripts"
   ```

3. **Configure Branch Name**
   Ensure your main branch is named `main`:
   ```bash
   git branch -M main
   ```

4. **Create a GitHub Repository**
   - Go to [github.com](https://github.com) and sign in.
   - Click the **New** repository button.
   - Name it `portfolio` (or your preferred name).
   - Keep the repository **Public** (required for easy Vercel integration).
   - Do **NOT** initialize with a README, `.gitignore`, or License (as we already have files locally).
   - Click **Create repository**.

5. **Link and Push to GitHub**
   Copy the remote repository URL from GitHub and run:
   ```bash
   git remote add origin <YOUR_GITHUB_REPO_URL>
   git push -u origin main
   ```

---

### Part 2: Hosting on Vercel (CI/CD)

Vercel provides automated deployments linked to your GitHub repository. Every time you push a change to GitHub, Vercel will automatically redeploy the latest version.

1. **Sign In to Vercel**
   - Go to [vercel.com](https://vercel.com) and click **Sign Up** or **Log In**.
   - Choose **Continue with GitHub** to link your accounts.

2. **Import Repository**
   - In the Vercel dashboard, click **Add New...** and select **Project**.
   - Find your `portfolio` repository in the list and click **Import**.

3. **Configure Build Settings**
   - Since this is a static HTML/CSS/JS site, **no build configuration is needed**.
   - Under **Framework Preset**, select **Other** (it should auto-detect this).
   - **Root Directory**: Leave it as `./` (or `portfolio/` depending on how your repo is set up).
   - Leave Build and Output Settings as default.
   - Click **Deploy**.

4. **Review Status**
   - Within seconds, Vercel will build and deploy your website.
   - Once completed, you will receive a production deployment link (e.g., `https://portfolio-username.vercel.app`).
