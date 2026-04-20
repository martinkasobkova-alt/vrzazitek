# VRzazitek.cz — Next.js 14 (Light Futuristic)

Moderní, rychlý web pro VRzazitek.cz postavený na Next.js 14 (App Router) + TypeScript.
**Light futuristic design** s gradienty, neonovými akcenty a střídanými barevnými bloky.

## 🚀 Rychlý start

```bash
npm install
npm run dev
```

Otevři [http://localhost:3000](http://localhost:3000).

Produkční build:
```bash
npm run build
npm start
```

---

## 🌐 Nasazení na Vercel (doporučeno)

1. Nahraj projekt na **GitHub** (nový repozitář).
2. Jdi na [vercel.com](https://vercel.com) → **Add New Project** → napoj GitHub repozitář.
3. Vercel detekuje Next.js automaticky. Klikni **Deploy**.
4. Po nasazení v Vercelu → **Settings → Domains** → přidej `vrzazitek.cz` a `www.vrzazitek.cz`.
5. V doménovém registrátoru (kde máš vrzazitek.cz) přepni DNS podle pokynů Vercelu.

**Build čas:** cca 30–60 vteřin. Deploy je zdarma v rámci Hobby plánu.

---

## 🎨 Design systém

**Paleta (v `app/globals.css`):**
- Navy deep: `#0a1428`, `#1e3a8a`, `#1e40af`
- Accent cyan: `#0891b2`, `#22d3ee`, `#67e8f9`
- Accent blue: `#3b82f6`
- Accent purple: `#7c3aed`, `#8b5cf6`
- Backgrounds: `#eef4ff` (sky), `#f5f8ff` (paper), `#e0f2fe` (mint)

**Pět barevných bloků (střídané):**
- `block-sky` — světlá nebesky modrá (hero, CTA)
- `block-paper` — světlá bílá s modrým nádechem
- `block-mint` — mint/cyan světlá
- `block-deep` — tmavě modrá (akcent, reference)

**Typografie:** Space Grotesk (700/600/500/400), velké nadpisy s `-0.035em` letter-spacing.

**Animace:**
- Rotující kruhy kolem VR headsetu na homepage
- Hover efekty na kartách (zvedání + gradient highlight)
- Fade-in animace při načtení

---

## 📁 Struktura projektu

```
vrzazitek-next/
├── app/
│   ├── layout.tsx              # Globální layout, SEO, JSON-LD
│   ├── page.tsx                # Homepage (/)
│   ├── globals.css             # Světlý design systém
│   ├── icon.svg                # Favicon
│   ├── sitemap.ts              # /sitemap.xml
│   ├── robots.ts               # /robots.txt
│   ├── zapujceni-vr/page.tsx   # VR domů
│   ├── vr-pro-firmy/page.tsx
│   ├── teambuilding-ve-vr/page.tsx
│   ├── oslavy-vr/page.tsx
│   ├── objednani-vr/
│   │   ├── layout.tsx          # (pro SEO metadata)
│   │   └── page.tsx            # Kontaktní formulář
│   └── o-nas/page.tsx          # Kontakt + tým
├── components/
│   ├── Header.tsx              # Sticky navigace
│   ├── Footer.tsx              # Deep blue patička
│   └── HeroVisual.tsx          # Animované kruhy + VR headset
└── ...
```

---

## 🔑 Zachované URL adresy (kvůli SEO)

| URL                        | Stránka                     |
| -------------------------- | --------------------------- |
| `/`                        | Homepage (původně `/home/`) |
| `/zapujceni-vr`            | VR domů                     |
| `/vr-pro-firmy`            | VR pro firmy                |
| `/teambuilding-ve-vr`      | VR teambuilding             |
| `/oslavy-vr`               | Oslavy ve VR                |
| `/objednani-vr`            | Objednání / poptávka        |
| `/o-nas`                   | O nás a kontakt             |

Stará URL `/home` automaticky redirektuje na `/` (viz `next.config.js`).

---

## 🔍 SEO checklist

✅ Metadata na každé stránce (title, description, canonical)
✅ OpenGraph tagy
✅ JSON-LD schema (LocalBusiness)
✅ Sitemap.xml automaticky generovaný
✅ Robots.txt
✅ Sémantický HTML (h1, h2, h3…)
✅ Mobile-first, responzivní
✅ Zachované původní URL adresy

### Po nasazení:
1. V [Google Search Console](https://search.google.com/search-console) znovu odešli sitemap: `https://www.vrzazitek.cz/sitemap.xml`
2. Zkontroluj rychlost: [PageSpeed Insights](https://pagespeed.web.dev/)

---

## ✏️ Časté úpravy

**Změna telefonů nebo e-mailu:** vyhledej hodnoty ve všech souborech (`+420604160718`, `info@vrzazitek.cz`) a přepiš.

**Změna cen:** otevři konkrétní stránku a uprav data v polích (`quest3Prices`, `packages`, apod.).

**Změna barev:** uprav CSS proměnné v `app/globals.css` (sekce `:root`).

**Přidání nového obsahu na homepage:** `app/page.tsx` je rozdělený na 6 bloků `block-sky/paper/mint/deep`, každý s vlastním obsahem.

---

## 📧 Formulář

Formulář na `/objednani-vr` aktuálně otevírá **e-mailového klienta** s předvyplněnou zprávou (funguje všude bez backendu).

### Chceš pořádný formulář s odesíláním přímo na e-mail?

Doporučené bezplatné řešení: **[Resend](https://resend.com)** (zdarma 3 000 e-mailů měsíčně). Stačí napsat a přidám API route s odesíláním.

---

## 🖼️ Obrázky

Web aktuálně používá **stock fotky z Unsplash** (zdarma, komerční použití) jako placeholdery. Jsou na 4 místech:

- **Homepage** — sekce "Co umíme" (VR vybavení)
- **Oslavy** — galerie pod ceníkem (3 fotky)
- **VR pro firmy** — galerie pod referencemi (3 fotky)
- **O nás** — avatary týmu Marťa a Zuzka

### Jak nahradit vlastními fotkami:

1. Vlož své fotky do složky `public/images/`:
   ```
   public/images/hero.jpg
   public/images/team-marta.jpg
   public/images/gallery-1.jpg
   ```

2. Otevři `lib/images.ts` a změň URL:
   ```ts
   export const images = {
     hero: '/images/hero.jpg',
     teamMarta: '/images/team-marta.jpg',
     gallery1: '/images/gallery-1.jpg',
     // ...
   };
   ```

3. Hotovo — fotky se automaticky projeví na všech stránkách.

**Tip:** Pro nejlepší výkon používej formát **WebP** nebo **JPG** s rozlišením kolem 1200–1600px na šířku.
