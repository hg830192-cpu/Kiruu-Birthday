# 🌸 Kiran Yadav (Minus 2) — Birthday Surprise Website 🎀

A cute, pink, interactive digital scrapbook and midnight birthday surprise website crafted for **Kiran Yadav (“Minus 2”)**.

Features 10 interactive chapters, polaroid scrapbook photos, the legendary *Cop ylot* glitch animation, 12 interactive 3D flip cards, digital envelope letters, CA Final motivation, ambient background music (*Shape of You*), playful runaway buttons where the cursor cannot click “No”, and a midnight countdown!

---

## 🚀 How to Publish to GitHub Pages

Follow these simple steps to host this website live on GitHub Pages for free:

### ⚠️ Step 1: Update the Base Path in `vite.config.ts` (CRITICAL)

When hosting on GitHub Pages, your URL will typically look like:  
`https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPO_NAME>/`

Open `vite.config.ts` and ensure the `base` property matches your repository name (or use relative `./`):

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(() => {
  return {
    // Option A (Recommended): Set to your exact GitHub repo name:
    base: '/kiran-birthday/', // Replace 'kiran-birthday' with your repository name!

    // Option B: Relative path (works for most deployments):
    // base: './',

    plugins: [react(), tailwindcss()],
    // ... rest of config
  };
});
```

---

### ⚠️ Step 2: Upload Your Media to the `public/assets/` Folder (CRITICAL)

Before building and pushing, make sure your photos and song are placed inside the **`public/assets/`** directory. This ensures they are bundled into the final build:

```text
public/
└── assets/
    ├── shape-of-you.mp3     <-- Your background audio file
    ├── photo1.jpg           <-- Scrapbook Memory Photo 1
    ├── photo2.jpg           <-- Scrapbook Memory Photo 2
    ├── photo3.jpg           <-- Scrapbook Memory Photo 3
    ├── photo4.jpg           <-- Scrapbook Memory Photo 4
    ├── photo5.jpg           <-- Scrapbook Memory Photo 5
    ├── photo6.jpg           <-- Scrapbook Memory Photo 6
    ├── copylot-memory.jpg   <-- Screenshot or funny photo for the Cop ylot incident
    └── best-photo.jpg       <-- Best photo together for the grand finale reveal
```

> **Note:** If any photo is missing, the site will automatically display aesthetic fallback photos so nothing ever appears broken. You can also customize titles and captions directly in `src/data/birthdayData.ts`.

---

### 📦 Step 3: Push to GitHub

In your project terminal, run the following commands:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Add all files (including public/assets/ and .github/workflows/deploy.yml)
git add .

# 3. Commit your changes
git commit -m "Kiran Yadav Birthday surprise website"

# 4. Set main branch
git branch -M main

# 5. Connect to your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 6. Push to GitHub
git push -u origin main
```

---

### ⚙️ Step 4: Enable GitHub Pages

The project already includes an automated GitHub Actions deployment workflow at `.github/workflows/deploy.yml`.

1. Go to your repository on **GitHub.com**.
2. Click **Settings** (top menu).
3. In the left sidebar, click **Pages** (under *Code and automation*).
4. Under **Build and deployment**:
   - Change **Source** from *Deploy from a branch* to **GitHub Actions**.
5. Wait about 60 seconds for the GitHub Action to finish building.
6. Your live website will be accessible at:  
   `https://<YOUR_USERNAME>.github.io/<YOUR_REPO_NAME>/`

---

### 🛠️ Local Development & Testing

To run and test the website locally on your computer:

```bash
# Install dependencies
npm install

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site.

---

### 💌 Personalizing Messages and Friends' Letters

All content is easily editable in **`src/data/birthdayData.ts`**:
- `birthdayPerson`: Name, nickname, exam.
- `memories`: Titles, dates, and captions for each photo.
- `specialQualities`: 12 qualities revealed on the 3D flip cards.
- `friendMessages`: Names and personal birthday messages from friends in the animated envelopes.
- `finalSurpriseData`: Closing heartfelt letter and sign-off.
