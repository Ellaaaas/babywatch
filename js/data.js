/* =====================================================================
   网站内容数据（修改这里即可更新网站内容）
   - products.us / products.cn : 两个市场的 Top5 产品
   - visual: 产品插画类型  stand-cam | sock | handheld | ptz | bird
   - scores: 六个维度 1~3 分（3 = 强，2 = 中，1 = 弱/无）
   ===================================================================== */

const SITE_DATA = {

  marketNotes: {
    us: "美国市场特点：高端化明显，头部产品主打「呼吸/血氧监测」与「AI 睡眠分析」，订阅服务（云存储、睡眠报告）成为主要盈利模式；同时无 WiFi 的专用视频监护仪因隐私安全而长期热销。",
    cn: "中国市场特点：以智能摄像头品牌延伸的「婴儿看护模式」为主流，价格集中在 ¥150–¥400；生态互联（米家、华为智选、萤石云）与哭声检测、摇篮曲安抚等功能是主要卖点，高端专用监护仪正快速增长。"
  },

  products: {
    us: [
      {
        rank: 1, brand: "Nanit", name: "Nanit Pro Camera + 呼吸监测带",
        visual: "stand-cam", accent: "#7C9CF5",
        tagline: "俯视视角 · AI 睡眠分析 · 无穿戴呼吸监测",
        price: "$299 – $379", priceMin: 299, priceMax: 379,
        specs: [["分辨率", "1080p HD"], ["连接方式", "Wi‑Fi 2.4/5GHz"], ["夜视", "红外夜视"], ["监测", "呼吸 / 睡眠 / 温湿度"]],
        pros: ["俯视安装，画面完整无死角", "呼吸带无电子元件，安全无辐射", "AI 生成睡眠报告与成长记录"],
        diff: "唯一以「计算机视觉」监测呼吸的品牌，睡眠数据最专业；需订阅 Nanit Insights 解锁高级功能。",
        scores: { video: 3, health: 3, ai: 3, privacy: 2, eco: 2, value: 2 }
      },
      {
        rank: 2, brand: "Owlet", name: "Owlet Dream Sock / Dream Duo",
        visual: "sock", accent: "#5DD3A6",
        tagline: "FDA 认证脉搏血氧监测袜",
        price: "$299 – $399", priceMin: 299, priceMax: 399,
        specs: [["监测", "心率 / 血氧 / 睡眠"], ["认证", "FDA 医疗级"], ["续航", "约 16 小时"], ["套装", "Duo 含 1080p 摄像头"]],
        pros: ["医疗级血氧与心率监测", "基站灯光 + 声音即时提醒", "睡眠质量分析，指导睡眠训练"],
        diff: "美国唯一获 FDA 医疗认证的家用婴儿血氧监护产品，面向对健康数据最敏感的家庭。",
        scores: { video: 2, health: 3, ai: 2, privacy: 2, eco: 1, value: 2 }
      },
      {
        rank: 3, brand: "Infant Optics", name: "Infant Optics DXR‑8 PRO",
        visual: "handheld", accent: "#F4A261",
        tagline: "无 WiFi 专用监护仪 · 可换镜头",
        price: "$199 – $229", priceMin: 199, priceMax: 229,
        specs: [["屏幕", "5 英寸 720p"], ["连接方式", "封闭式 FHSS 无线"], ["镜头", "可更换变焦镜头"], ["降噪", "主动降噪 A.N.R."]],
        pros: ["不联网，杜绝黑客入侵风险", "开机即用，无需 App", "主动降噪，只听宝宝声音"],
        diff: "美国亚马逊常年销量冠军级的「传统派」监护仪，用可靠性与隐私安全对抗智能化趋势。",
        scores: { video: 2, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 }
      },
      {
        rank: 4, brand: "eufy", name: "eufy Baby Monitor E110 / SpaceView",
        visual: "handheld", accent: "#E77C8E",
        tagline: "高性价比 · 大屏本地监护",
        price: "$99 – $160", priceMin: 99, priceMax: 160,
        specs: [["屏幕", "5 英寸 720p"], ["连接方式", "本地无线（无 App）"], ["续航", "约 12 小时"], ["云台", "手动云台 + 广角镜头"]],
        pros: ["价格不到高端产品一半", "画质在同价位中领先", "电池续航长，操作简单"],
        diff: "Anker 旗下品牌，以硬件工艺与性价比在中端市场取得口碑，是「够用就好」家庭的首选。",
        scores: { video: 2, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 }
      },
      {
        rank: 5, brand: "VTech", name: "VTech VM919HD 1080p 监护仪",
        visual: "handheld", accent: "#9B8CF5",
        tagline: "7 英寸大屏 · 1080p 本地传输",
        price: "$129 – $199", priceMin: 129, priceMax: 199,
        specs: [["屏幕", "7 英寸 1080p"], ["连接方式", "本地无线 + 可选 WiFi"], ["云台", "电动 360° 云台"], ["夜视", "彩色夜视"]],
        pros: ["同价位少有的 7 英寸高清屏", "远程云台，视野可调", "可同时连接多路摄像头"],
        diff: "老牌通讯厂商，用「大屏 + 高分辨率」在传统监护仪市场做差异化。",
        scores: { video: 3, health: 1, ai: 1, privacy: 3, eco: 1, value: 3 }
      }
    ],

    cn: [
      {
        rank: 1, brand: "小米", name: "米家智能摄像机 3 Pro 云台版",
        visual: "ptz", accent: "#FF8A5B",
        tagline: "3K 画质 · 哭声检测 · 米家生态",
        price: "¥199 – ¥399", priceMin: 199, priceMax: 399,
        specs: [["分辨率", "3K（2880×1620）"], ["云台", "360° 全景"], ["AI", "哭声 / 人形 / 宠物检测"], ["存储", "本地 SD 卡 + 云"]],
        pros: ["价格亲民，画质规格高", "与米家智能家居联动", "哭声检测即时推送手机"],
        diff: "并非专用婴儿监护仪，但凭借小米生态与极致性价比成为中国最多家庭的「宝宝看护」入门选择。",
        scores: { video: 3, health: 1, ai: 2, privacy: 2, eco: 3, value: 3 }
      },
      {
        rank: 2, brand: "萤石 EZVIZ", name: "萤石 C6c / BC1 婴儿看护版",
        visual: "ptz", accent: "#4FB3E8",
        tagline: "海康威视出品 · 儿童看护模式",
        price: "¥169 – ¥499", priceMin: 169, priceMax: 499,
        specs: [["分辨率", "2K / 4MP"], ["模式", "儿童看护专属模式"], ["夜视", "全彩夜视"], ["对讲", "双向语音 + 摇篮曲"]],
        pros: ["安防级画质与稳定性", "哭声检测 + 自动播放安抚音乐", "支持隐私遮蔽与本地存储"],
        diff: "背靠海康威视的技术积累，在画质、夜视与稳定性上处于国内第一梯队。",
        scores: { video: 3, health: 1, ai: 2, privacy: 2, eco: 2, value: 3 }
      },
      {
        rank: 3, brand: "Cubo Ai", name: "Cubo Ai Plus 智能婴儿监视器",
        visual: "bird", accent: "#F7B84B",
        tagline: "AI 遮脸侦测 · 翻身提醒 · 儿科医生参与设计",
        price: "¥1,999 – ¥2,999", priceMin: 1999, priceMax: 2999,
        specs: [["分辨率", "1080p HDR"], ["AI", "遮脸 / 翻身 / 爬出围栏侦测"], ["安装", "落地支架 + 床栏夹"], ["记录", "自动抓拍成长瞬间"]],
        pros: ["专注婴儿安全的 AI 侦测", "危险区域越界警报", "18 个月内可换购升级"],
        diff: "中国高端专用婴儿监护仪的代表，功能对标 Nanit，主打「安全事件」而非「健康数据」。",
        scores: { video: 3, health: 2, ai: 3, privacy: 2, eco: 1, value: 2 }
      },
      {
        rank: 4, brand: "乐橙 Imou", name: "乐橙婴儿看护摄像机 TP7",
        visual: "ptz", accent: "#57C7A5",
        tagline: "大华出品 · 哭声安抚 · 一键呼叫",
        price: "¥199 – ¥369", priceMin: 199, priceMax: 369,
        specs: [["分辨率", "2K 400万"], ["云台", "水平 355° / 垂直 90°"], ["AI", "哭声检测 + 自动安抚"], ["隐私", "物理遮蔽镜头"]],
        pros: ["一键呼叫，老人带娃也方便", "哭声触发自动播放摇篮曲", "物理遮蔽保护隐私"],
        diff: "面向多代同堂家庭设计，弱化 App 复杂度，强调「老人也会用」。",
        scores: { video: 2, health: 1, ai: 2, privacy: 3, eco: 2, value: 3 }
      },
      {
        rank: 5, brand: "360", name: "360 智能摄像机 婴儿看护版",
        visual: "ptz", accent: "#8E9DF7",
        tagline: "AI 哭声识别 · 睡眠时间线 · 极致性价比",
        price: "¥159 – ¥299", priceMin: 159, priceMax: 299,
        specs: [["分辨率", "2K"], ["AI", "哭声识别 + 动作侦测"], ["功能", "睡眠时间线记录"], ["存储", "本地 SD 卡"]],
        pros: ["百元级价格覆盖核心功能", "自动记录宝宝睡眠时间线", "安全品牌，隐私加密传输"],
        diff: "以互联网安全品牌切入，强调「数据加密与本地存储」，是预算有限家庭的高性价比之选。",
        scores: { video: 2, health: 1, ai: 2, privacy: 3, eco: 2, value: 3 }
      }
    ]
  },

  // 六个评测维度
  dimensions: [
    { key: "video", label: "画质与夜视" },
    { key: "health", label: "健康监测" },
    { key: "ai", label: "AI 智能" },
    { key: "privacy", label: "隐私安全" },
    { key: "eco", label: "生态互联" },
    { key: "value", label: "性价比" }
  ],

  // 差异化要点卡片
  differentiators: [
    { icon: "🫁", title: "健康数据 vs 安全事件", text: "美国头部产品（Owlet、Nanit）监测心率、血氧与呼吸；中国产品侧重哭声、翻身、遮脸等「事件」提醒，医疗级监测仍是空白。" },
    { icon: "🔒", title: "无 WiFi 隐私派 vs 云生态派", text: "美国有一大批用户坚持选择不联网的专用监护仪；中国消费者更接受云端存储与 App 远程查看，隐私通过本地 SD 卡与物理遮蔽解决。" },
    { icon: "🏠", title: "生态联动是中国的独特优势", text: "米家、华为智选、萤石云让摄像头与灯光、空调、音箱联动，形成「宝宝哭 → 夜灯亮 → 播放白噪音」的自动化场景。" },
    { icon: "💰", title: "价格带差异约 5 倍", text: "美国主流价位 $100–$400（约 ¥700–¥2,900），中国主流价位 ¥150–¥400；高端专用产品（Cubo Ai）价格与美国接轨。" }
  ],

  priceSummary: [
    { label: "美国均价", value: "$230", note: "Top5 中位价格" },
    { label: "中国均价", value: "¥299", note: "不含高端专用产品" },
    { label: "价差", value: "≈ 5.5×", note: "美国主流 / 中国主流" },
    { label: "高端线", value: "¥2,000+", note: "AI 专用监护仪" }
  ],

  // 中国市场展望
  statTiles: [
    { value: "9.5 万+", label: "2025 年出生人口（万）", note: "生育支持政策逐步落地" },
    { value: "< 12%", label: "专用婴儿监护仪渗透率", note: "美国约 35%，提升空间大" },
    { value: "22%", label: "预计年复合增长率", note: "2025–2028E" },
    { value: "68%", label: "90/95 后父母占比", note: "科技育儿接受度高" }
  ],

  marketChart: [
    { year: "2022", value: 18 },
    { year: "2023", value: 23 },
    { year: "2024", value: 29 },
    { year: "2025", value: 36 },
    { year: "2026E", value: 45 },
    { year: "2027E", value: 55 },
    { year: "2028E", value: 67 }
  ],

  trends: [
    { icon: "🤖", title: "AI 从「检测」走向「理解」", text: "哭声识别将进化为哭声原因分析（饥饿 / 困倦 / 不适），翻身、遮脸、离床侦测成为标配。" },
    { icon: "🩺", title: "健康监测本土化", text: "国产脉搏血氧袜、智能睡衣等穿戴式产品将补齐医疗级监测空白，价格有望降至 ¥500 以内。" },
    { icon: "🛡️", title: "隐私与本地化成为决策因素", text: "数据安全法规趋严，端侧 AI 计算、本地存储、物理遮蔽将成为高端产品的必备卖点。" },
    { icon: "🏡", title: "全屋智能场景化", text: "监护仪作为「婴儿房中枢」联动灯光、温湿度、音箱，形成自动化育儿场景，提升复购与生态粘性。" },
    { icon: "📱", title: "渠道向内容电商迁移", text: "抖音、小红书的母婴达人测评成为核心购买入口，「妈妈推荐」比参数更能驱动转化。" },
    { icon: "🌏", title: "国产品牌出海加速", text: "萤石、乐橙、小米已进入东南亚与欧洲市场，中国供应链优势将重塑全球中端市场格局。" }
  ],

  outlook: {
    title: "消费潜力判断",
    points: [
      "<b>中端升级是最大增量：</b>¥400–¥1,000 价位带目前产品稀缺，是「智能摄像头」与「高端专用监护仪」之间的空白地带。",
      "<b>一线城市高端化、下沉市场普及化并行：</b>高线城市为 AI 与健康功能付费，三四线城市由百元级产品完成首次渗透。",
      "<b>祖辈带娃催生「远程看护」需求：</b>双职工家庭通过 App 远程查看，让父母与祖辈同时在线，成为购买的核心动机之一。",
      "<b>结论：</b>未来三年，中国市场将从「摄像头附加功能」阶段迈向「专业婴儿监护」阶段，具备健康监测与 AI 理解能力的国产品牌最有机会脱颖而出。"
    ]
  },

  guide: [
    { icon: "💵", title: "预算 ¥200 以内", who: "首次尝试 / 备用房间", pick: "小米 · 360 · 萤石入门款", text: "选云台摄像头的婴儿模式即可，重点看哭声检测和夜视效果。" },
    { icon: "🔐", title: "重视隐私安全", who: "不希望画面上云", pick: "Infant Optics · eufy · 乐橙", text: "选无 WiFi 专用监护仪，或带物理遮蔽与本地存储的产品。" },
    { icon: "🩺", title: "早产儿 / 关注健康", who: "需要心率血氧数据", pick: "Owlet Dream Sock", text: "医疗级穿戴监测是唯一选项，搭配摄像头套装更安心。" },
    { icon: "🧠", title: "追求全面 AI 守护", who: "新手父母 / 高预算", pick: "Nanit Pro · Cubo Ai Plus", text: "AI 侦测 + 睡眠分析 + 成长记录，一台设备用到三岁。" }
  ]
};
