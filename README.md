# A&A Choclates — CRAFT WITH CARE

Official website and interactive order/bulk-quote portal for **A&A Choclates**, an artisanal homemade chocolate and healthy dry-fruit confectionery brand based in Bhopal, Madhya Pradesh.

- **Live Domain:** [aachoclates.me](https://aachoclates.me)
- **Instagram:** [@aachoclates.me](https://www.instagram.com/aachoclates.me/)
- **Service Area:** Bhopal Self-Pickup / Local Delivery & Bulk Orders Across Madhya Pradesh

---

## Key Features

- **Curated Artisanal Catalog:** Custom Name Chocolates, Floral & Dry-Fruit Disc Chocolates, Artisanal Dry Cakes & Kunafa Bakes, Curated Gift Hampers, Gold-Pearl Truffle Squares, Stuffed Dates, 8g Protein Laddus, and Dry-Fruit Energy Sticks.
- **Two-Lane Ordering Flow:** Supports both Individual Treat Boxes (starting at ₹149) and Bulk/Wholesale Gifting (weddings, corporate events, and boutique resale; MOQ 10+ boxes / 15+ units).
- **Interactive Order & Bulk Quote Builder:**
  - Automatically logs every order inquiry into a structured Google Sheet via a Google Apps Script Web App endpoint.
  - Generates a formatted, pre-filled WhatsApp message directly to A&A Choclates for instant confirmation.

---

## Tech Stack

- **Frontend:** React, TypeScript, Vite, Tailwind CSS
- **Lead & Order Logging:** Google Apps Script Web App + Google Sheets
- **Order Communication:** WhatsApp Click-to-Chat (`wa.me`)
- **Hosting & DNS:** Vercel + Namecheap (`aachoclates.me`)

---

## Project Structure

```text
A-A-Choclates/
├── public/
│   ├── assets/          # Brand assets (logos, favicons)
│   └── images/          # Product photography
├── src/
│   ├── components/      # Reusable UI components & Order/Quote Builder
│   ├── config/          # App constants, WhatsApp & webhook config
│   ├── data/            # Product catalog, pricing tiers & FAQ data
│   ├── pages/           # Page-level views
│   ├── utils/           # Formatting & submission helpers
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts