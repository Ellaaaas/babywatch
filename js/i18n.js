/* =====================================================================
   BabyWatch AI · i18n
   English copy lives in the HTML. Chinese copy lives in I18N.zh below,
   keyed by data-i18n attributes. Values may contain simple HTML (<br>, <span>).
   ===================================================================== */
const I18N = {
  zh: {
    "doc.title": "BabyWatch AI — AI 驱动的婴儿智能平台",
    "doc.desc": "BabyWatch AI 是一个融合计算机视觉、行为识别、声音智能与环境感知的婴儿智能平台，帮助父母理解宝宝的世界。",

    "nav.product": "产品", "nav.technology": "技术", "nav.intelligence": "智能引擎", "nav.privacy": "安全与隐私",
    "nav.research": "研究洞察", "nav.partners": "合作伙伴", "nav.about": "关于", "nav.cta": "成为合作伙伴",

    "hero.eyebrow": "BabyWatch AI · AI 驱动的婴儿智能平台",
    "hero.title": "守护每一次呼吸的智能。",
    "hero.lede": "一个融合计算机视觉、行为识别、声音智能与环境感知的 AI 婴儿智能平台，帮助父母真正理解宝宝的世界。",
    "hero.cta1": "探索技术", "hero.cta2": "观看 BabyWatch 演示", "hero.cta3": "成为合作伙伴 <span aria-hidden=\"true\">→</span>",
    "hero.note": "界面为产品概念展示。标注为「开发中」或「未来能力」的功能尚未提供。",

    "m.title": "婴儿房 · 实时",
    "m.sleep.k": "睡眠状态", "m.sleep.v": "深睡", "m.move.k": "活动", "m.move.v": "低",
    "m.breath.k": "呼吸模式", "m.breath.v": "规律", "m.temp.k": "室温", "m.hum.k": "湿度", "m.sound.k": "声音", "m.sound.v": "安静",
    "m.chip1": "SafeSleep AI · 运行中", "m.chip2": "CrySense AI · 监听中", "m.chip3": "BreathSense · 追踪中", "m.chip4": "SleepGraph · 建模中",

    "what.kicker": "BabyWatch 是什么",
    "what.title": "一个智能系统。<br>多层守护。",
    "what.lede": "摄像头只是传感器，真正的产品是婴儿智能：一个把视觉、声音、睡眠、环境与行为理解融为一体、持续描绘宝宝状态的系统。",
    "layer1.t": "视觉智能", "layer1.p": "实时计算机视觉逐帧识别姿势、体位与动作。",
    "layer2.t": "声音智能", "layer2.p": "声音分类将哭声、咳嗽与环境噪音从安静中区分出来。",
    "layer3.t": "睡眠智能", "layer3.p": "睡与醒的状态沉淀为模式、趋势和个人基线。",
    "layer4.t": "环境感知", "layer4.p": "温度、湿度、光线与声音水平，与睡眠质量关联分析。",
    "layer5.t": "行为建模", "layer5.p": "长期、个性化的模型，学习每个孩子的「正常」是什么样。",

    "system.kicker": "BabyWatch 系统", "system.title": "从传感器到洞察。",
    "flow1.t": "摄像头", "flow1.p": "高清视频、红外夜视、麦克风阵列、环境传感器。",
    "flow2.t": "边缘 AI", "flow2.p": "设备端神经网络推理。体位、动作与声音在本地毫秒级完成分析。",
    "flow3.t": "云端 AI", "flow3.p": "基于事件数据而非原始视频，构建睡眠模型、趋势分析与个性化基线。",
    "flow4.t": "BabyWatch 应用", "flow4.p": "提醒、洞察、趋势与每日总结。不只是画面，而是理解。",

    "intel.kicker": "BabyWatch Intelligence™", "intel.title": "四个引擎，一种理解。",
    "intel.lede": "为关键时刻专门构建的模型，在边缘与云端协同运行。",
    "eng1.t": "SafeSleep AI™", "eng1.p": "面向睡眠安全的视觉模型。",
    "eng1.c1": "蒙脸检测", "eng1.c2": "翻身检测", "eng1.c3": "睡姿识别", "eng1.c4": "异常动作检测",
    "eng2.t": "CrySense AI™", "eng2.p": "婴儿房的声音智能。",
    "eng2.c1": "哭声检测", "eng2.c2": "声音分类", "eng2.c3": "异常声音识别", "eng2.c4": "哭声原因解读",
    "eng3.t": "SleepGraph™", "eng3.p": "从每一夜，到模式，到个人基线。",
    "eng3.c1": "睡 / 醒识别", "eng3.c2": "睡眠模式与时间线", "eng3.c3": "数周睡眠趋势", "eng3.c4": "个性化睡眠模型",
    "eng4.t": "BreathSense™", "eng4.p": "非接触式呼吸动作分析。",
    "eng4.c1": "呼吸动作分析", "eng4.c2": "呼吸模式趋势", "eng4.c3": "为非接触、基于摄像头的感知而设计",
    "tag.core": "核心能力", "tag.dev": "开发中", "tag.future": "未来能力", "tag.design": "设计目标", "tag.futureShort": "未来",
    "intel.note": "BabyWatch 不是医疗设备，不用于诊断、治疗或预防任何疾病。标注为开发中、未来能力或设计目标的功能尚未提供。",

    "evo.kicker": "从监测到理解",
    "evo.title": "传统监护器只告诉你发生了什么。<br><span class=\"muted\">BabyWatch 解读它。</span>",
    "evo1.w": "监测", "evo1.p": "视频与音频，传到手机上。",
    "evo2.w": "检测", "evo2.p": "实时识别事件：哭声、动作、体位。",
    "evo3.w": "理解", "evo3.p": "模式、情境，以及每个孩子的个性化基线。",
    "evo4.w": "预测", "evo4.p": "在需求变成警报之前，提前预判。",

    "arch.kicker": "技术", "arch.title": "BabyWatch 背后的智能。",
    "arch.lede": "分层架构：边缘感知，云端建模，为父母提供理解。",
    "arch1.t": "感知层", "arch1.i1": "摄像头", "arch1.i2": "音频", "arch1.i3": "环境传感器",
    "arch2.t": "边缘智能", "arch2.i1": "实时计算机视觉推理", "arch2.i2": "设备端声音分类", "arch2.i3": "事件提取，无需上传原始视频",
    "arch3.t": "BabyWatch AI 引擎", "arch3.i1": "行为识别", "arch3.i2": "睡眠建模", "arch3.i3": "异常检测", "arch3.i4": "多模态分析",
    "arch4.t": "父母智能", "arch4.i1": "提醒", "arch4.i2": "洞察", "arch4.i3": "趋势", "arch4.i4": "每日总结",
    "st1": "边缘推理目标", "st2": "设备端事件延迟目标", "st3": "感知模态", "st4": "持续建模",

    "hw.kicker": "产品", "hw.title": "一台摄像头，看见宝宝世界的全貌。",
    "co1": "图像传感器", "co2": "红外夜视", "co3": "麦克风阵列", "co4": "环境传感器",
    "feat1.t": "摄像系统", "feat1.p": "高分辨率图像传感器与广角光学，从床边或墙面安装即可覆盖整张婴儿床。",
    "feat2.t": "夜视", "feat2.p": "红外补光与低光处理，在漆黑的婴儿房也能清晰成像，不惊扰宝宝。",
    "feat3.t": "麦克风阵列", "feat3.p": "多麦克风定向拾音，让哭声与声音分类更稳健。",
    "feat4.t": "本地处理", "feat4.p": "设备端神经网络处理器在边缘运行视觉与声音模型，毫秒级识别事件。",
    "feat5.t": "环境传感器", "feat5.p": "温度、湿度与环境光，与睡眠关联，解释每一个不安稳夜晚背后的「为什么」。",
    "feat6.t": "安全连接", "feat6.p": "加密的 Wi‑Fi 传输与设备身份认证，设计上只有你的家人能看到画面。",
    "hw.note": "所示硬件为设计概念，最终规格可能有所不同。",

    "priv.kicker": "安全与隐私", "priv.title": "隐私即设计。",
    "priv.lede": "孩子的影像是一个家庭最敏感的数据之一。这些是 BabyWatch 赖以构建的原则。",
    "pr1.t": "加密传输", "pr1.p": "视频与事件以端到端加密连接传输为设计目标。",
    "pr2.t": "边缘优先处理", "pr2.p": "视觉与声音模型尽可能在设备端运行。离开家庭的是事件，而不是原始影像。",
    "pr3.t": "用户掌控的分享", "pr3.p": "由父母决定谁能查看、查看多久，并可随时撤销。",
    "pr4.t": "安全的云架构", "pr4.p": "隔离存储、最小权限访问与可审计的数据流，作为架构级要求。",
    "pr5.t": "强账户安全", "pr5.p": "为多因素认证、设备绑定会话与清晰的活动记录而设计。",
    "pr6.t": "隐私优先的产品设计", "pr6.p": "默认数据最小化。只收集智能所需，不多一分。",
    "priv.note": "以上为架构原则与设计目标。现阶段 BabyWatch 不声称拥有任何第三方认证。",

    "res.kicker": "研究与洞察", "res.title": "理解我们正在为之构建的市场。", "res.all": "全部研究 <span aria-hidden=\"true\">→</span>",
    "rc1.t": "婴儿监护器市场格局", "rc1.p": "中美两地的领先产品、它们的定位，以及智能仍然缺席的地方。",
    "rc2.t": "中国 vs. 美国智能婴儿监护器市场", "rc2.p": "健康数据与安全事件、隐私优先与生态优先，以及五倍的价格差。",
    "rc3.t": "AI 监护技术趋势", "rc3.p": "从检测到解读：边缘 AI、非接触感知与全屋情境。",
    "rc4.t": "消费者需求与育儿洞察", "rc4.p": "父母为什么买、他们不信任什么，以及目前无人填补的中端市场空白。",

    "part.kicker": "合作伙伴", "part.title": "与我们一起构建婴儿照护的未来。",
    "part.lede": "BabyWatch 构建的是一个智能平台，而不只是一台摄像头。我们与婴儿照护生态中的各方伙伴合作。",
    "aud1": "母婴品牌", "aud2": "医疗健康伙伴", "aud3": "AI 技术伙伴", "aud4": "摄像头与传感器制造商", "aud5": "研究机构", "aud6": "渠道与分销伙伴",
    "form.title": "与 BabyWatch 合作", "form.name": "姓名", "form.org": "机构", "form.email": "工作邮箱", "form.type": "合作方向",
    "form.o1": "品牌合作", "form.o2": "医疗健康", "form.o3": "AI 技术", "form.o4": "硬件与传感器", "form.o5": "研究", "form.o6": "渠道分销",
    "form.btn": "与 BabyWatch 合作", "form.ok": "感谢您的关注，我们会尽快与您联系。",

    "final.kicker": "BabyWatch AI", "final.title": "婴儿照护的未来，是智能的。", "final.cta1": "探索技术", "final.cta2": "成为合作伙伴",

    "foot.about": "BabyWatch 是一家早期科技公司，致力于开发 AI 驱动的婴儿智能平台。我们的使命是让婴儿监护从「看见」走向「理解」，并把隐私作为第一原则。",
    "foot.company": "公司", "foot.resources": "资源", "foot.hardware": "硬件", "foot.research": "研究与洞察",
    "foot.legal": "BabyWatch 不是医疗设备，不用于诊断、治疗、治愈或预防任何疾病或状况，也不能替代成人看护。标注为开发中、未来能力或设计目标的功能为产品概念，尚未提供。",
    "foot.copy": "© 2026 BabyWatch AI. 保留所有权利。",
    "foot.home": "首页",

    /* Research page */
    "r.kicker": "研究与洞察", "r.title": "理解我们正在为之构建的市场。",
    "r.lede": "BabyWatch 团队关于婴儿监护市场格局、从检测到理解的技术转变，以及父母真实需求的内部研究。",
    "r.toc1": "01 市场格局", "r.toc2": "02 中国 vs. 美国", "r.toc3": "03 技术趋势", "r.toc4": "04 消费者洞察",
    "r1.kicker": "01 · 市场格局", "r1.title": "领先的婴儿监护器，以及智能仍然缺席的地方。",
    "r1.lede": "中美两地最畅销的产品定义了父母当前的期待。它们大多首先是摄像头，很少有产品会解读所看到的内容。",
    "r.tab.us": "美国", "r.tab.cn": "中国",
    "r1.note": "定位与价格区间为参考性信息，来自公开商品页与评测的内部整理，不构成推荐，且可能变动。",
    "r2.kicker": "02 · 中国 vs. 美国", "r2.title": "两个市场，两种「智能」的定义。",
    "r2.lede": "美国高端市场由健康数据与 AI 睡眠分析定义；中国主流市场由智能家居生态与极致性价比定义。两者都尚未实现真正的婴儿智能。",
    "r2.us": "美国 · USD", "r2.cn": "中国 · CNY",
    "r3.kicker": "03 · 技术趋势", "r3.title": "从检测到解读。", "r3.lede": "塑造下一代婴儿监护的六个转变，以及 BabyWatch 的核心判断。",
    "r4.kicker": "04 · 消费者洞察", "r4.title": "父母需要什么，以及无人填补的空白。",
    "r4.chart": "中国智能婴儿监护市场规模", "r4.chartmeta": "亿元 · 2022–2028E · 示例",
    "r4.chartnote": "用于内部规划的示例性预测。增长主要来自高端 AI 产品。",
    "r4.note": "市场数据为用于内部规划的示例性估算，未经独立验证。",
    "r.legal": "BabyWatch 不是医疗设备，不用于诊断、治疗、治愈或预防任何疾病或状况。研究内容代表 BabyWatch 团队的观点，仅供参考。"
  }
};

window.BW = (function () {
  const KEY = "bw-lang";
  const els = Array.from(document.querySelectorAll("[data-i18n]"));
  const en = new Map(els.map((el) => [el, el.innerHTML]));
  const enTitle = document.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  const enDesc = metaDesc ? metaDesc.content : "";
  const listeners = [];
  const isResearch = document.body.dataset.page === "research";
  const api = { lang: "en", set: null, onChange: (fn) => listeners.push(fn) };

  function detect() {
    const q = new URLSearchParams(location.search).get("lang");
    if (q === "zh" || q === "en") return q;
    try { const s = localStorage.getItem(KEY); if (s === "zh" || s === "en") return s; } catch (e) {}
    return /^zh/i.test(navigator.language || "") ? "zh" : "en";
  }

  function apply(lang) {
    const zh = lang === "zh";
    els.forEach((el) => {
      const v = zh ? I18N.zh[el.dataset.i18n] : en.get(el);
      if (v == null) return;
      if (/[<&]/.test(v)) el.innerHTML = v; else el.textContent = v;
    });
    document.documentElement.lang = zh ? "zh-CN" : "en";
    document.title = zh ? (isResearch ? "研究与洞察 — BabyWatch AI" : I18N.zh["doc.title"]) : enTitle;
    if (metaDesc) metaDesc.content = zh ? I18N.zh["doc.desc"] : enDesc;
    document.querySelectorAll("[data-lang]").forEach((b) => {
      const on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", String(on));
    });
    try { localStorage.setItem(KEY, lang); } catch (e) {}
    api.lang = lang;
    listeners.forEach((fn) => fn(lang));
  }

  api.set = apply;
  document.querySelectorAll("[data-lang]").forEach((b) => b.addEventListener("click", () => apply(b.dataset.lang)));
  apply(detect());
  return api;
})();
