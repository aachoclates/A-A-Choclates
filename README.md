# A&A Choclates — Craft with Care

Artisanal homemade chocolate, healthy dry-fruit confectionery, Kunafa bakes, and bespoke wedding & corporate gift hampers handcrafted in **Bhopal, Madhya Pradesh** — **Founded by Niquehat Khan**.

---

## Tech Stack

- **Framework:** React 19 + TypeScript + Vite
- **Routing:** React Router (`react-router-dom`) — 5 dedicated routes (`/`, `/collections`, `/gifting-bulk`, `/our-story`, `/order`)
- **Styling:** Tailwind CSS v4 with Warm Parchment (`#FAF6F0`), Almond Linen (`#F2EAE0`), Roasted Dark Cacao (`#2A1812`), Burnished Antique Gold (`#B58938`), and Dried Berry (`#8B3A42`) tokens
- **Typography:** `Playfair Display` (editorial serif headings) + `Roboto` (body copy)
- **Icons:** `lucide-react` UI icons + crisp official inline SVGs for WhatsApp and Instagram

---

## Asset Folder Placement (`public/assets/`)

Drop your studio photography, brand logo, and showcase reels into the exact folders below so the app renders them automatically (editorial fallback cards display cleanly whenever an asset is not yet placed):

```text
public/assets/
├── 01_Logo/
│   └── logo.png                      # Circular brand mark rendered in floating header & footer
├── 02_Images/
│   ├── aachoclates-photo-01.jpg      # Hero slider 1 & Customized Name Chocolates
│   ├── aachoclates-photo-02.jpg      # Hero slider 2 & Floral & Dry-Fruit Disc Chocolates
│   ├── aachoclates-photo-03.jpg      # Hero slider 3 & Artisanal Dry Cakes & Kunafa Bakes
│   ├── aachoclates-photo-04.jpg      # Hero slider 4 & Curated Gift Hampers & Stirrers
│   ├── aachoclates-photo-05.jpg      # Hero slider 5 & Gold-Pearl Truffles & Loaded Slabs
│   ├── aachoclates-photo-06.jpg      # Royal Stuffed Dates, 8g Protein Laddus & Energy Bars
│   └── ...                           # Through aachoclates-photo-22.jpg (all 22 gallery photos)
└── 03_Videos/
    ├── hero-reel-1.mp4               # Studio Reel 1
    ├── hero-reel-2.mp4               # Studio Reel 2
    └── aachoclates-video-03.mp4      # Through aachoclates-video-12.mp4 (all 12 HD videos)
```

---

## Local Development & Verification

```bash
npm install
npm run dev       # Starts Vite dev server at http://localhost:3000
npm run lint      # Runs TypeScript type checking (tsc --noEmit)
npm run build     # Builds production bundle into dist/
npx tsx --test src/utils/quoteBuilder.test.ts
```

---

## Google Apps Script Webhook Setup (`src/config/siteConfig.ts`)

1. Open your Google Sheet and go to **Extensions → Apps Script**.
2. Create a `doPost(e)` handler that parses `JSON.parse(e.postData.contents)` and appends a row containing:
   `orderId`, `orderType`, `selectedCategory`, `productName`, `quantity`, `egglessPreference`, `customMessage`, `deliveryDate`, `cityArea`, `customerName`, and `whatsappNumber`.
3. Deploy as a **Web App** (Execute as: *Me*, Who has access: *Anyone*).
4. Paste the deployed `/exec` URL into `GOOGLE_SCRIPT_WEBHOOK_URL` inside `src/config/siteConfig.ts`.
   - The Order & Quote Builder sends `POST` requests with `Content-Type: text/plain;charset=utf-8` and `mode: "no-cors"` so Google Apps Script logs every submission cleanly without CORS preflight errors, while simultaneously generating a formatted WhatsApp quote (`+91 76975 68715`) and saving the `AA-YYYYMMDD-XXXX` reference ID in `localStorage`.

---

## Deployment Guide (Vercel + Namecheap `aachoclates.me`)

1. **Push to GitHub** and import the repository into **Vercel** (Framework Preset: *Vite*, Build Command: `npm run build`, Output Directory: `dist`).
2. Add a `vercel.json` rewrite rule (`"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`) if deploying SPA client routes directly so deep links like `/collections` or `/order` resolve cleanly on hard refresh.
3. **Connect Custom Domain (`aachoclates.me`) on Namecheap:**
   - In Vercel Project Settings → **Domains**, add `aachoclates.me` and `www.aachoclates.me`.
   - In Namecheap **Advanced DNS**, set:
     - `A Record` (`@`) → `76.76.21.21`
     - `CNAME Record` (`www`) → `cname.vercel-dns.com`
   - Wait for SSL provisioning and verify live routes.

---

**Studio Address:** Near Shradhdha Library, Nehru Nagar, MIG A-124, P&T Road, near Sharda Vidya Mandir School, Kotra Sultanabad, Bhopal, Madhya Pradesh 462003  
**Contact:** `+91 76975 68715` · `aachoclates@gmail.com` · [@aachoclates.me](https://instagram.com/aachoclates.me)
