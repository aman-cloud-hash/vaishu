# 🐚 Vaishu’s Birthday Surprise Website

A coastal scrapbook-themed birthday gift website crafted for **Vaishu**. Happy, warm, playful, and emotionally meaningful—celebrating a close friendship with cherished photos, a personal Hinglish letter, and an interactive birthday cake candle surprise.

---

## 🎨 Design Palette — Warm Beach Evening

- **Warm Sand:** `#F3E6D3`
- **Seashell Ivory:** `#FFF9F1`
- **Seafoam:** `#C5E6DD`
- **Ocean Teal:** `#246B70`
- **Soft Coral:** `#EE9B87`
- **Sunset Peach:** `#F6C9A7`
- **Muted Lavender:** `#D7CCE8`
- **Deep Ocean Ink:** `#203C43`

---

## ✨ Features

1. **Lightweight Invitation Envelope Gate**:
   - Initial screen: *“Aapke liye ek chhota sa birthday surprise hai! 💛”* with a *“Surprise dekhein! ✨”* button.
   - Smooth celebratory unfold transition with beach-palette confetti.
2. **Hero Section & Editorial Collage**:
   - Large typography (*“Happy Birthday, Vaishu! 🥳”*) balanced with a scrapbook collage.
   - Polaroid borders, washi tape accents, and subtle tilt angles.
   - Direct action buttons to jump to memories or the personal note.
3. **Memories Gallery**:
   - *“Aapki photos, dher saari smiles!”*
   - Preserves natural photo orientations without aggressive cropping.
   - Warm, respectful Roman Hinglish captions for every photo.
   - View toggles: Organic Scrapbook vs Clean Grid, plus orientation filters.
4. **Fullscreen Lightbox Viewer**:
   - Previous/Next navigation with mobile touch swipe gestures (*“Pichhli photo”*, *“Agli photo”*, *“Band karein”*).
   - Keyboard support (`ArrowLeft`, `ArrowRight`, `Escape`).
   - Photo counter (`Photo #07`), captions, and bottom thumbnail strip to jump to any photo instantly.
   - Background scroll lock and full image display without forced cropping (`object-contain`).
5. **A Personal Birthday Letter**:
   - Handcrafted parchment stationery with deckle border and coastal shell seal.
   - The exact heartfelt Hinglish message for Vaishu with editable signoff.
6. **Interactive Birthday Wish**:
   - Illustrated birthday cake with 3 lit flickering candles.
   - Instruction: *"Ek wish maang… phir candles pe tap kar."*
   - Tapping candles gently blows out flames, pops confetti, and reveals: *"Wish toh secret rahegi. Birthday wishes unlimited hain! ✨🎉"*.
   - Includes a *"Relight the candles 🕯️"* button to relive the moment.
7. **Optional Background Music**:
   - Automatically detects if `/public/music.mp3` exists. If present, displays a sound toggle; if absent, gracefully hides without clutter.

---

## 🚀 How to Run Locally

1. Open PowerShell or Command Prompt in this folder:
   ```powershell
   cd C:\Users\amanr\Downloads\vaishu\birthday-website
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

---

## ✏️ How to Edit Details, Letter & Captions

All personal names, text messages, letter paragraphs, captions, and dates are stored in **one single configuration file**:

📁 [`src/config.ts`](./src/config.ts)

- **Change Friend’s Name**: Edit `recipientName: 'Vaishu'`
- **Change Your Name / Signoff**: Edit `senderName: 'Aman'` and `letter.signature`
- **Edit the Birthday Letter**: Modify the `letter.paragraphs` array
- **Edit Photo Captions**: Update `gallery.photos[i].caption`
- **Change Headlines or Button Labels**: All strings in `hero`, `invitation`, `interactiveSurprise`, and `footer` are directly configurable.

---

## 📸 Managing Photos
 
- Photos were copied and optimized from `C:\Users\amanr\Downloads\vaishu\photo` into:
  - Full-resolution web-optimized: `public/photos/`
  - Thumbnails for fast loading: `public/photos/thumbs/`
- **To swap a photo**: Simply overwrite the corresponding file in `public/photos/` with the new JPEG file (keeping the same filename).
- Original source files in `C:\Users\amanr\Downloads\vaishu\photo` remain 100% untouched.

---

## 🎵 Adding Background Music (Optional)

If you'd like an audio track to play:
1. Place your MP3 file into `public/music.mp3`
2. The website will automatically detect it and reveal the music toggle in the top navbar.
3. Visitors can click to play or mute anytime.

---

## 🌐 Deploying to the Web

To share this link privately with Vaishu:

### Option A: Vercel (Recommended & Easiest)
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Run in the project directory:
   ```bash
   vercel
   ```
3. Follow the prompts. Your site will be live on a fast CDN URL like `https://vaishu-birthday.vercel.app`.

### Option B: Netlify
1. Run `npm run build`
2. Drag and drop the `dist/` folder into the Netlify Drop dashboard ([app.netlify.com/drop](https://app.netlify.com/drop)).

### Option C: GitHub Pages
1. Build the production bundle:
   ```bash
   npm run build
   ```
2. Deploy the generated `dist` folder to GitHub Pages.

> Note: `<meta name="robots" content="noindex, nofollow" />` is already included to prevent search engine indexing of this personal gift.
