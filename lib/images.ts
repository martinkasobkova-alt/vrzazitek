/**
 * Centralized image URLs.
 *
 * CURRENT: Stock fotky z Unsplash (zdarma ke komerčnímu použití, nevyžaduje atribuci).
 *
 * JAK NAHRADIT VLASTNÍMI FOTKAMI:
 * 1. Ulož své fotky do /public/images/ (např. hero.jpg, team-marta.jpg)
 * 2. Změň URL níže na '/images/hero.jpg' atd.
 * 3. Hotovo — změní se automaticky na celém webu
 *
 * Obrázky se automaticky optimalizují Next.js Image komponentou.
 *
 * Lokální assety z www.vrzazitek.cz (Webnode CDN) jsou ve /public/images/ — viz vrzazitek-*.webp.
 */

export const images = {
  // Hero na homepage – stejný vizuál jako na živém vrzazitek.cz
  hero: '/images/vrzazitek-hero.webp',

  // Sekce „Co umíme“ – detail headsetu / technologie
  whatWeDo: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=80&auto=format&fit=crop',

  // VR pro firmy – hero (lidé ve VR / firemní sezení; jiné než homepage a pilíře)
  heroCorporate:
    'https://images.unsplash.com/photo-1570730749440-f756e79c4733?w=1400&q=80&auto=format&fit=crop',

  // Tři pilíře – VR motivy (Unsplash)
  pillarEventsVr:
    'https://images.unsplash.com/photo-1622979135240-caa6648190b6?w=1200&q=85&auto=format&fit=crop',
  pillarPresentations:
    'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=1200&q=85&auto=format&fit=crop',
  pillarEducation:
    'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=1200&q=85&auto=format&fit=crop',

  // Homepage – dlaždice „Teambuilding“ (jen úvodní stránka; jiná než hero, „Co umíme“ a pilíř eventů)
  homeTeambuildingTile:
    'https://images.unsplash.com/photo-1640823127518-65e1ad563576?w=1200&q=85&auto=format&fit=crop',

  // Teambuilding – hero (skupina ve VR; jiná než detail headsetu v „Co umíme“)
  heroTeam:
    'https://images.unsplash.com/photo-1538388149542-5e24932d11a8?w=1400&q=80&auto=format&fit=crop',

  // Teambuilding – 4 karty aktivit (fotka + text; jiné ID než hero a zbytek webu)
  teamActivitySport:
    'https://images.unsplash.com/photo-1758521960456-c876c573e0b6?w=900&q=80&auto=format&fit=crop',
  teamActivityCoop:
    'https://images.unsplash.com/photo-1639932068331-c6518cb3b8db?w=900&q=80&auto=format&fit=crop',
  teamActivityRacing:
    'https://images.unsplash.com/photo-1600278017791-7adb689998ac?w=900&q=80&auto=format&fit=crop',
  teamActivityPuzzle:
    'https://images.unsplash.com/photo-1698051347480-57b958166420?w=900&q=80&auto=format&fit=crop',

  // Oslavy – oslava / párty atmosféra
  heroParty: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1400&q=80&auto=format&fit=crop',

  // Oslavy VR – příležitosti (4 karty)
  occasionBirthday: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=900&q=80&auto=format&fit=crop',
  occasionKids: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900&q=80&auto=format&fit=crop',
  occasionBachelor: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=900&q=80&auto=format&fit=crop',
  occasionWedding: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80&auto=format&fit=crop',

  // Půjčovna domů – rodina a VR (rodina-4 z vrzazitek.cz)
  heroHomeRental: '/images/vrzazitek-rodina-4.webp',

  // Tým – fotky stažené z vrzazitek.cz
  teamMarta: '/images/vrzazitek-team-marta.webp',
  teamZuzka: '/images/vrzazitek-team-zuzka.webp',

  // Produkt / VR záběr pro stránku půjčovny (člověk s headsetem, ne studiová produktovka)
  productQuest:
    'https://images.unsplash.com/photo-1710740326983-75163a9dd326?w=1000&q=80&auto=format&fit=crop',

  // Zapůjčení VR – karta Meta Quest 2 (lifestyle; bílý Quest na hlavě)
  productMetaQuest2:
    'https://images.unsplash.com/photo-1710740326983-75163a9dd326?w=1400&q=80&auto=format&fit=crop',
  productMetaQuest3:
    'https://images.unsplash.com/photo-1698050683094-b7e0e57ea903?w=1400&q=80&auto=format&fit=crop',
};

/** Stock: Unsplash (https://unsplash.com/license) – zdarma včetně komerčního použití */
