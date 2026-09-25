/* =====================================================================
   Research & Insights · content data (edit here to update the page)
   RESEARCH = English, RESEARCH_ZH = Chinese. Same structure.
   Scores: 1–3 (3 = strong). Prices are indicative ranges.
   ===================================================================== */
const RESEARCH = {
  labels: { product: "Product", positioning: "Positioning", gap: "Intelligence gap", price: "Price", outOf: "of 3" },
  marketNotes: {
    us: "The US market is premium-led. Category leaders sell breathing and blood-oxygen monitoring or AI sleep analytics, with subscriptions (cloud storage, sleep reports) as the primary revenue model. In parallel, non-WiFi dedicated monitors remain best-sellers on privacy and reliability.",
    cn: "China's mainstream is defined by smart-home camera brands offering a 'baby care mode', priced between RMB 150 and 400. Ecosystem integration (Mi Home, Huawei, EZVIZ Cloud), cry detection and lullaby soothing are the main selling points. Premium dedicated monitors are growing fast from a small base."
  },
  dimensions: [
    { key: "video", label: "Video & night vision" }, { key: "health", label: "Health sensing" }, { key: "ai", label: "AI intelligence" },
    { key: "privacy", label: "Privacy" }, { key: "eco", label: "Ecosystem" }, { key: "value", label: "Value" }
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

const RESEARCH_ZH = {
  labels: { product: "产品", positioning: "定位", gap: "智能缺口", price: "价格", outOf: "/ 3" },
  marketNotes: {
    us: "美国市场高端化明显。品类领先者销售呼吸与血氧监测或 AI 睡眠分析，订阅服务（云存储、睡眠报告）是主要盈利模式。与此同时，不联网的专用监护器凭借隐私与可靠性长期热销。",
    cn: "中国主流市场由提供「婴儿看护模式」的智能摄像头品牌定义，价格集中在 150 至 400 元。生态联动（米家、华为、萤石云）、哭声检测与摇篮曲安抚是主要卖点。高端专用监护器基数小但增长迅速。"
  },
  dimensions: [
    { key: "video", label: "画质与夜视" }, { key: "health", label: "健康感知" }, { key: "ai", label: "AI 智能" },
    { key: "privacy", label: "隐私" }, { key: "eco", label: "生态" }, { key: "value", label: "性价比" }
  ],
  products: {
    us: [
      { brand: "Nanit", name: "Nanit Pro 摄像头 + 呼吸监测带", price: "$299 – $379", min: 299, max: 379,
        positioning: "俯视安装摄像头，配备计算机视觉睡眠分析，通过图案呼吸带实现非接触呼吸监测。高级洞察需订阅。",
        gap: "分析能力强，但行为理解止步于睡眠。除声音提醒外没有声音智能。",
        scores: { video: 3, health: 3, ai: 3, privacy: 2, eco: 2, value: 2 } },
      { brand: "Owlet", name: "Owlet Dream Sock / Dream Duo", price: "$299 – $399", min: 299, max: 399,
        positioning: "FDA 认证的穿戴式监测袜，测量脉率与血氧饱和度；Duo 套装增加一台 1080p 摄像头。",
        gap: "以穿戴为主。视觉是配角，且基本没有智能。",
        scores: { video: 2, health: 3, ai: 2, privacy: 2, eco: 1, value: 2 } },
      { brand: "Infant Optics", name: "Infant Optics DXR‑8 PRO", price: "$199 – $229", min: 199, max: 229,
        positioning: "不联网的专用监护器，支持可换镜头与主动降噪。亚马逊常年畅销款。",
        gap: "完全没有 AI。靠隐私与简单取胜，而非智能。",
        scores: { video: 2, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 } },
      { brand: "eufy", name: "eufy 婴儿监护器 E110 / SpaceView", price: "$99 – $160", min: 99, max: 160,
        positioning: "Anker 旗下高性价比本地监护器，5 英寸屏幕，长续航。",
        gap: "硬件品质在线，但没有任何解读层。",
        scores: { video: 2, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 } },
      { brand: "VTech", name: "VTech VM919HD", price: "$129 – $199", min: 129, max: 199,
        positioning: "7 英寸 1080p 本地监护器，电动云台，可选 WiFi。",
        gap: "以屏幕尺寸差异化，而非智能。",
        scores: { video: 3, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 } }
    ],
    cn: [
      { brand: "小米", name: "米家智能摄像机 3 Pro 云台版", price: "¥199 – ¥399", min: 199, max: 399,
        positioning: "3K 云台家用摄像头，支持哭声检测，深度接入米家生态。中国家庭事实上的入门选择。",
        gap: "通用摄像头。婴儿功能只是一个模式，而不是一款产品。",
        scores: { video: 3, health: 1, ai: 2, privacy: 2, eco: 3, value: 3 } },
      { brand: "萤石", name: "萤石 C6c / BC1 婴儿看护版", price: "¥169 – ¥499", min: 169, max: 499,
        positioning: "海康威视背景，配备专属儿童看护模式、哭声检测与自动摇篮曲。",
        gap: "安防级成像，但没有行为或睡眠建模。",
        scores: { video: 3, health: 1, ai: 2, privacy: 2, eco: 2, value: 3 } },
      { brand: "Cubo Ai", name: "Cubo Ai Plus", price: "¥1,999 – ¥2,999", min: 1999, max: 2999,
        positioning: "高端专用监护器，AI 检测蒙脸、翻身与危险区域越界。中国市场上最接近 Nanit 的产品。",
        gap: "有事件检测，但没有长期的个性化建模。",
        scores: { video: 3, health: 2, ai: 3, privacy: 2, eco: 1, value: 2 } },
      { brand: "乐橙", name: "乐橙婴儿看护摄像机 TP7", price: "¥199 – ¥369", min: 199, max: 369,
        positioning: "大华背景，支持哭声安抚、一键呼叫与物理隐私遮蔽，为多代同堂家庭设计。",
        gap: "为祖辈简化了操作，智能有限。",
        scores: { video: 2, health: 1, ai: 2, privacy: 3, eco: 2, value: 3 } },
      { brand: "360", name: "360 智能摄像机 婴儿看护版", price: "¥159 – ¥299", min: 159, max: 299,
        positioning: "百元级摄像头，具备 AI 哭声识别与睡眠时间线，以加密传输和本地存储为卖点。",
        gap: "仅有基础检测。",
        scores: { video: 2, health: 1, ai: 2, privacy: 3, eco: 2, value: 3 } }
    ]
  },
  differentiators: [
    { title: "健康数据 vs. 安全事件", text: "美国领先者（Owlet、Nanit）销售心率、血氧与呼吸数据。中国产品销售事件提醒：哭声、翻身、蒙脸。医疗级感知在中国仍是空白。" },
    { title: "隐私优先 vs. 生态优先", text: "美国有相当一部分用户刻意选择不联网的监护器。中国消费者接受云端与 App 访问，隐私通过本地 SD 卡存储和物理遮蔽解决。" },
    { title: "生态联动", text: "米家、华为与萤石云让摄像头可以联动灯光、空调与音箱：哭声 → 夜灯 → 白噪音。这一自动化层在美国市场并不存在。" },
    { title: "五倍的价格差", text: "美国主流价位 100 至 400 美元（约 700 至 2,900 元）。中国主流价位 150 至 400 元。只有 Cubo Ai 等高端专用设备与美国定价接轨。" }
  ],
  priceSummary: [
    { label: "美国中位价", value: "$230", note: "畅销前五" },
    { label: "中国中位价", value: "¥299", note: "不含高端专用产品" },
    { label: "价格差", value: "≈ 5.5×", note: "美国主流 / 中国主流" },
    { label: "高端线", value: "¥2,000+", note: "AI 专用监护器" }
  ],
  trends: [
    { title: "从检测到解读", text: "哭声检测进化为哭声原因分析。翻身、蒙脸与离床检测成为标配，理解能力成为差异点。" },
    { title: "非接触健康感知", text: "基于摄像头的呼吸动作分析与穿戴式替代方案，以消费级价格补上医疗级穿戴设备留下的空白。" },
    { title: "边缘 AI 成为隐私卖点", text: "随着数据监管趋严，设备端推理、本地存储与物理遮蔽从参数表项目变为购买驱动因素。" },
    { title: "全屋情境", text: "监护器成为婴儿房中枢，将睡眠与温度、湿度、光线和声音关联，并调度其他设备。" },
    { title: "内容驱动的购买决策", text: "短视频与社区平台取代参数对比，成为购买入口。信任来自父母，而非参数。" },
    { title: "中国硬件出海", text: "萤石、乐橙与小米已进入东南亚与欧洲。供应链优势将重塑全球中端市场。" }
  ],
  statTiles: [
    { value: "950 万+", label: "中国年出生人口（2025）", note: "生育支持政策逐步落地" },
    { value: "< 12%", label: "中国专用监护器渗透率", note: "美国约 35%" },
    { value: "22%", label: "预计年复合增长率", note: "2025–2028E，示例" },
    { value: "68%", label: "90 后父母占比", note: "对科技育儿接受度高" }
  ],
  marketChart: [
    { year: "2022", value: 18 }, { year: "2023", value: 23 }, { year: "2024", value: 29 }, { year: "2025", value: 36 },
    { year: "2026E", value: 45 }, { year: "2027E", value: 55 }, { year: "2028E", value: 67 }
  ],
  outlook: {
    title: "机会在哪里",
    points: [
      "<b>中端市场是空白。</b>400 至 1,000 元价位几乎没有产品：这是通用智能摄像头与高端专用监护器之间的断层。",
      "<b>高端化与普及化并行。</b>一线城市为 AI 与健康功能付费；低线城市通过 200 元以下设备完成首次渗透。",
      "<b>远程看护驱动需求。</b>祖辈带娃的双职工家庭，希望父母与祖辈同时在线。",
      "<b>赢家将是一家智能公司，而不是摄像头公司。</b>下一个品类领导者将掌握每个孩子的行为基线。"
    ]
  }
};
