/* =====================================================================
   Research & Insights · content data (edit here to update the page)
   Scores: 1–3 (3 = strong). Prices are indicative ranges.
   ===================================================================== */
const RESEARCH = {
  marketNotes: {
    us: "The US market is premium-led. Category leaders sell breathing and blood-oxygen monitoring or AI sleep analytics, with subscriptions (cloud storage, sleep reports) as the primary revenue model. In parallel, non-WiFi dedicated monitors remain best-sellers on privacy and reliability.",
    cn: "China's mainstream is defined by smart-home camera brands offering a 'baby care mode', priced between RMB 150 and 400. Ecosystem integration (Mi Home, Huawei, EZVIZ Cloud), cry detection and lullaby soothing are the main selling points. Premium dedicated monitors are growing fast from a small base."
  },
  dimensions: [
    { key: "video", label: "Video & night vision" },
    { key: "health", label: "Health sensing" },
    { key: "ai", label: "AI intelligence" },
    { key: "privacy", label: "Privacy" },
    { key: "eco", label: "Ecosystem" },
    { key: "value", label: "Value" }
  ],
  products: {
    us: [
      { brand: "Nanit", name: "Nanit Pro Camera + Breathing Band", price: "$299 – $379", min: 299, max: 379,
        positioning: "Overhead camera with computer-vision sleep analytics and contact-free breathing monitoring via a patterned band. Subscription unlocks insights.",
        gap: "Analytics are strong, but behavior understanding stops at sleep. No audio intelligence beyond sound alerts.",
        scores: { video: 3, health: 3, ai: 3, privacy: 2, eco: 2, value: 2 } },
      { brand: "Owlet", name: "Owlet Dream Sock / Dream Duo", price: "$299 – $399", min: 299, max: 399,
        positioning: "FDA-cleared wearable sock measuring pulse rate and oxygen saturation; Duo bundle adds a 1080p camera.",
        gap: "Wearable-first. Vision is secondary and largely unintelligent.",
        scores: { video: 2, health: 3, ai: 2, privacy: 2, eco: 1, value: 2 } },
      { brand: "Infant Optics", name: "Infant Optics DXR‑8 PRO", price: "$199 – $229", min: 199, max: 229,
        positioning: "Non-WiFi dedicated monitor with interchangeable lenses and active noise reduction. A perennial Amazon best-seller.",
        gap: "No AI at all. Wins on privacy and simplicity, not intelligence.",
        scores: { video: 2, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 } },
      { brand: "eufy", name: "eufy Baby Monitor E110 / SpaceView", price: "$99 – $160", min: 99, max: 160,
        positioning: "Value-focused local monitor with a 5-inch display and long battery life, from Anker.",
        gap: "Hardware quality without any interpretation layer.",
        scores: { video: 2, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 } },
      { brand: "VTech", name: "VTech VM919HD", price: "$129 – $199", min: 129, max: 199,
        positioning: "7-inch 1080p local monitor with motorized pan-tilt and optional WiFi.",
        gap: "Differentiates on screen size, not intelligence.",
        scores: { video: 3, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 } }
    ],
    cn: [
      { brand: "Xiaomi", name: "Mi Home Smart Camera 3 Pro (PTZ)", price: "¥199 – ¥399", min: 199, max: 399,
        positioning: "3K pan-tilt home camera with cry detection and deep Mi Home integration. The de facto entry point for Chinese families.",
        gap: "A general-purpose camera. Baby features are a mode, not a product.",
        scores: { video: 3, health: 1, ai: 2, privacy: 2, eco: 3, value: 3 } },
      { brand: "EZVIZ", name: "EZVIZ C6c / BC1 Baby Care Edition", price: "¥169 – ¥499", min: 169, max: 499,
        positioning: "Hikvision-backed camera with a dedicated child-care mode, cry detection and automatic lullabies.",
        gap: "Security-grade imaging, but no behavioral or sleep modeling.",
        scores: { video: 3, health: 1, ai: 2, privacy: 2, eco: 2, value: 3 } },
      { brand: "Cubo Ai", name: "Cubo Ai Plus", price: "¥1,999 – ¥2,999", min: 1999, max: 2999,
        positioning: "Premium dedicated monitor with AI detection for covered face, rollover and danger-zone exit. The closest Chinese-market analogue to Nanit.",
        gap: "Event detection without long-term personalized modeling.",
        scores: { video: 3, health: 2, ai: 3, privacy: 2, eco: 1, value: 2 } },
      { brand: "Imou", name: "Imou Baby Care Camera TP7", price: "¥199 – ¥369", min: 199, max: 369,
        positioning: "Dahua-backed camera with cry soothing, one-touch call and a physical privacy shutter, designed for multi-generational households.",
        gap: "Simplicity for grandparents, limited intelligence.",
        scores: { video: 2, health: 1, ai: 2, privacy: 3, eco: 2, value: 3 } },
      { brand: "360", name: "360 Smart Camera Baby Edition", price: "¥159 – ¥299", min: 159, max: 299,
        positioning: "Budget camera with AI cry recognition and a sleep timeline, marketed on encrypted transmission and local storage.",
        gap: "Basic detection only.",
        scores: { video: 2, health: 1, ai: 2, privacy: 3, eco: 2, value: 3 } }
    ]
  },
  differentiators: [
    { title: "Health data vs. safety events", text: "US leaders (Owlet, Nanit) sell heart rate, oxygen and breathing data. Chinese products sell event alerts: crying, rollover, covered face. Medical-grade sensing remains unaddressed in China." },
    { title: "Privacy-first vs. ecosystem-first", text: "A large US segment deliberately chooses non-connected monitors. Chinese consumers accept cloud and app access, with privacy handled through local SD storage and physical shutters." },
    { title: "Ecosystem integration", text: "Mi Home, Huawei and EZVIZ Cloud let a camera trigger lights, climate and speakers: cry → night light → white noise. This automation layer does not exist in the US market." },
    { title: "A fivefold price gap", text: "US mainstream sits at $100–$400 (≈ RMB 700–2,900). China's mainstream sits at RMB 150–400. Only premium dedicated devices such as Cubo Ai price in line with the US." }
  ],
  priceSummary: [
    { label: "US median", value: "$230", note: "Top-selling five" },
    { label: "China median", value: "¥299", note: "Excluding premium dedicated" },
    { label: "Price gap", value: "≈ 5.5×", note: "US mainstream / China mainstream" },
    { label: "Premium tier", value: "¥2,000+", note: "AI dedicated monitors" }
  ],
  trends: [
    { title: "From detection to interpretation", text: "Cry detection evolves into cry-cause analysis. Rollover, covered-face and out-of-crib detection become table stakes; understanding becomes the differentiator." },
    { title: "Contact-free health sensing", text: "Camera-based breathing movement analysis and wearable alternatives close the gap left by medical-grade wearables, at consumer price points." },
    { title: "Edge AI as a privacy feature", text: "On-device inference, local storage and physical shutters move from spec-sheet items to purchase drivers as data regulation tightens." },
    { title: "Whole-home context", text: "The monitor becomes the nursery hub, correlating sleep with temperature, humidity, light and sound, and orchestrating other devices." },
    { title: "Content-led discovery", text: "Short-video and community platforms replace spec comparison as the purchase entry point. Trust is earned through parents, not parameters." },
    { title: "Chinese hardware goes global", text: "EZVIZ, Imou and Xiaomi already ship to Southeast Asia and Europe. Supply-chain advantage will reshape the global mid-market." }
  ],
  statTiles: [
    { value: "9.5M+", label: "Annual births, China (2025)", note: "Family-support policies rolling out" },
    { value: "< 12%", label: "Dedicated monitor penetration, China", note: "vs. ≈ 35% in the US" },
    { value: "22%", label: "Projected CAGR", note: "2025–2028E, illustrative" },
    { value: "68%", label: "Parents born after 1990", note: "High acceptance of tech-assisted parenting" }
  ],
  marketChart: [
    { year: "2022", value: 18 }, { year: "2023", value: 23 }, { year: "2024", value: 29 }, { year: "2025", value: 36 },
    { year: "2026E", value: 45 }, { year: "2027E", value: 55 }, { year: "2028E", value: 67 }
  ],
  outlook: {
    title: "Where the opportunity is",
    points: [
      "<b>The mid-market is empty.</b> Between RMB 400 and 1,000 there is almost nothing: a gap between generic smart cameras and premium dedicated monitors.",
      "<b>Premiumization and mass adoption run in parallel.</b> Tier-1 cities pay for AI and health features; lower-tier cities adopt through sub-RMB-200 devices.",
      "<b>Remote caregiving drives demand.</b> Dual-income households with grandparents caregiving want parents and grandparents online at the same time.",
      "<b>The winner will be an intelligence company, not a camera company.</b> The next category leader will own the behavioral baseline for each child."
    ]
  }
};
