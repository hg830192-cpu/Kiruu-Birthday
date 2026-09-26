# 🌸 CA Kiran Yadav Birthday — Midnight Surprise Website 🎀

A personalized, interactive digital scrapbook and midnight birthday surprise website crafted especially for **Kiran Yadav (“Minus 2”)**.

Features 9 interactive chapters, personal polaroid memories, the hilarious *Cop ylot* incident with a live reaction TV effect, 12 interactive 3D flip cards, heartfelt personal letters, CA Final motivation, ambient background music (*Shape of You*), playful runaway buttons where the cursor cannot click “No”, and a live midnight countdown!

---

## 🚀 How to Publish to GitHub Repository: `CA-Kiran-Yadav-Birthday`

Follow these simple steps to host this website live on GitHub Pages for free:

### ⚠️ Step 1: Create the Repository on GitHub

1. Go to **[GitHub.com](https://github.com)** and log in.
2. Click **New Repository** (or the **`+`** icon at the top right).
3. Set **Repository name**: `CA-Kiran-Yadav-Birthday`
4. Set **Visibility**: **Public** (required for free GitHub Pages).
5. Leave all boxes (*README*, *.gitignore*, *license*) **unchecked**.
6. Click **Create repository**.

---

### ⚠️ Step 2: Upload Your Media to `public/assets/`

Place your photos and song inside the **`public/assets/`** folder:

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
    ├── copylot-memory.jpg   <-- Photo/screenshot for the Cop ylot incident
    └── best-photo.jpg       <-- Best photo together for the grand finale reveal
```

> **Note:** Beautiful aesthetic fallback photos and animations are already built-in, so nothing will look broken if a file is not yet placed!

---

### 📦 Step 3: Push to GitHub

In your project terminal (or Command Prompt / PowerShell), run these commands:

```bash
# 1. Initialize git
git init

# 2. Add all files (including public/assets/, .github/workflows/deploy.yml, and package-lock.json)
git add .

# 3. Commit your changes
git commit -m "CA Kiran Yadav Birthday surprise website"

# 4. Set branch to main
git branch -M main

# 5. Connect to your repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/CA-Kiran-Yadav-Birthday.git

# 6. Push to GitHub
git push -u origin main
```

---

### ⚙️ Step 4: Enable GitHub Pages (1 Click)

The project includes an automated deployment workflow at `.github/workflows/deploy.yml`.

1. Go to your repository on **GitHub.com**.
2. Click **Settings** (tab at the top).
3. In the left sidebar, click **Pages** (under *Code and automation*).
4. Under **Build and deployment**:
   - Change **Source** from *Deploy from a branch* to **GitHub Actions**.
5. Wait ~60 seconds for the GitHub Action to finish building.
6. Your live website will be accessible at:  
   👉 **`https://<YOUR_USERNAME>.github.io/CA-Kiran-Yadav-Birthday/`**

---

### 🛠️ Local Development & Testing

To run and test the website locally on your computer:

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

### 💌 Personalizing Your Messages

All personal copy and captions can be customized in **`src/data/birthdayData.ts`**:
- `birthdayPerson`: Name, nickname, exam.
- `memories`: Titles, dates, and captions for each memory photo.
- `specialQualities`: 12 qualities revealed on the 3D flip cards.
- `jokesApartLetter`: Personal heartfelt letter from you to Kiran.
- `finalSurpriseData`: Closing letter and grand finale sign-off.
