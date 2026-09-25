/* =====================================================================
   页面渲染逻辑：读取 data.js 中的 SITE_DATA，生成各个板块
   ===================================================================== */
(function () {
  const D = SITE_DATA;
  const $ = (sel) => document.querySelector(sel);

  /* ---------- 产品插画（SVG） ---------- */
  const ART = {
    // 落地支架俯视摄像头（Nanit 风格）
    "stand-cam": (c) => `
      <svg viewBox="0 0 200 180">
        <defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#cfd6e0"/></linearGradient></defs>
        <rect x="60" y="150" width="80" height="14" rx="7" fill="#2a3140"/>
        <rect x="96" y="40" width="8" height="112" rx="4" fill="#3a4354"/>
        <rect x="70" y="24" width="60" height="30" rx="15" fill="url(#g1)"/>
        <circle cx="100" cy="39" r="9" fill="#1b2230"/>
        <circle cx="100" cy="39" r="4.5" fill="${c}"/>
        <circle cx="118" cy="39" r="2.5" fill="${c}" opacity=".8"/>
        <path d="M100 58 L70 130 L130 130 Z" fill="${c}" opacity=".12"/>
      </svg>`,
    // 血氧监测袜（Owlet 风格）
    "sock": (c) => `
      <svg viewBox="0 0 200 180">
        <defs><linearGradient id="g2" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d9dee8"/></linearGradient></defs>
        <path d="M78 30 h44 v58 c0 8 6 12 12 16 l18 12 c10 7 8 24 -6 28 c-18 6 -44 4 -62 -4 c-14 -6 -12 -22 -6 -32 v-78z" fill="url(#g2)" stroke="#c3cad6" stroke-width="2"/>
        <rect x="78" y="30" width="44" height="18" rx="6" fill="${c}" opacity=".9"/>
        <rect x="88" y="92" width="26" height="30" rx="8" fill="#1b2230"/>
        <circle cx="101" cy="107" r="6" fill="${c}"><animate attributeName="opacity" values="1;.3;1" dur="1.6s" repeatCount="indefinite"/></circle>
        <path d="M40 150 q10 -12 20 0 t20 0 t20 0" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
      </svg>`,
    // 手持监护屏 + 摄像头（传统监护仪）
    "handheld": (c) => `
      <svg viewBox="0 0 200 180">
        <defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3a4354"/><stop offset="1" stop-color="#1b2230"/></linearGradient></defs>
        <rect x="18" y="38" width="118" height="104" rx="14" fill="url(#g3)" stroke="#4a546a" stroke-width="2"/>
        <rect x="30" y="50" width="94" height="66" rx="6" fill="#0e1218"/>
        <rect x="30" y="50" width="94" height="66" rx="6" fill="${c}" opacity=".18"/>
        <circle cx="77" cy="84" r="14" fill="${c}" opacity=".5"/>
        <circle cx="77" cy="84" r="8" fill="#fff" opacity=".85"/>
        <rect x="52" y="124" width="50" height="6" rx="3" fill="#5a647a"/>
        <rect x="150" y="70" width="34" height="46" rx="10" fill="#e9edf3"/>
        <circle cx="167" cy="90" r="10" fill="#1b2230"/>
        <circle cx="167" cy="90" r="5" fill="${c}"/>
        <rect x="158" y="118" width="18" height="16" rx="4" fill="#c3cad6"/>
        <path d="M140 60 q10 -18 0 -36" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round" opacity=".7"/>
        <path d="M148 66 q18 -24 0 -48" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round" opacity=".4"/>
      </svg>`,
    // 云台摄像机（国产主流）
    "ptz": (c) => `
      <svg viewBox="0 0 200 180">
        <defs><linearGradient id="g4" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d4dae4"/></linearGradient></defs>
        <rect x="62" y="130" width="76" height="20" rx="10" fill="#2a3140"/>
        <rect x="70" y="80" width="60" height="52" rx="12" fill="url(#g4)"/>
        <circle cx="100" cy="68" r="38" fill="url(#g4)" stroke="#c3cad6" stroke-width="2"/>
        <circle cx="100" cy="68" r="22" fill="#1b2230"/>
        <circle cx="100" cy="68" r="11" fill="${c}"/>
        <circle cx="105" cy="63" r="3" fill="#fff" opacity=".9"/>
        <rect x="118" y="46" width="10" height="4" rx="2" fill="${c}"/>
        <path d="M40 60 q-8 8 0 16" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>
        <path d="M160 60 q8 8 0 16" fill="none" stroke="${c}" stroke-width="2.5" stroke-linecap="round" opacity=".6"/>
      </svg>`,
    // 小鸟造型摄像头（Cubo Ai 风格）
    "bird": (c) => `
      <svg viewBox="0 0 200 180">
        <defs><linearGradient id="g5" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#d9dee8"/></linearGradient></defs>
        <rect x="94" y="120" width="12" height="40" rx="6" fill="#3a4354"/>
        <rect x="60" y="154" width="80" height="12" rx="6" fill="#2a3140"/>
        <ellipse cx="100" cy="82" rx="48" ry="44" fill="url(#g5)" stroke="#c3cad6" stroke-width="2"/>
        <path d="M60 50 q-10 -20 12 -14" fill="${c}"/>
        <path d="M140 50 q10 -20 -12 -14" fill="${c}"/>
        <circle cx="100" cy="82" r="20" fill="#1b2230"/>
        <circle cx="100" cy="82" r="9" fill="${c}"/>
        <circle cx="104" cy="78" r="3" fill="#fff" opacity=".9"/>
        <path d="M92 112 l8 8 l8 -8" fill="${c}" opacity=".9"/>
      </svg>`
  };

  /* ---------- 榜单 ---------- */
  function renderProducts(market) {
    const grid = $("#productGrid");
    $("#marketNote").textContent = D.marketNotes[market];
    grid.innerHTML = D.products[market].map((p, i) => `
      <article class="product" style="--accent:${p.accent}; animation-delay:${i * 80}ms">
        <span class="product__rank">NO.<b>${String(p.rank).padStart(2, "0")}</b></span>
        <span class="product__brand">${p.brand}</span>
        <div class="product__visual">${ART[p.visual](p.accent)}</div>
        <div class="product__body">
          <div>
            <h3 class="product__name">${p.name}</h3>
            <p class="product__tag">${p.tagline}</p>
          </div>
          <div class="product__specs">
            ${p.specs.map(([k, v]) => `<div class="spec"><small>${k}</small><span>${v}</span></div>`).join("")}
          </div>
          <ul class="product__pros">${p.pros.map((s) => `<li>${s}</li>`).join("")}</ul>
          <p class="product__diff">${p.diff}</p>
          <div class="product__foot">
            <div class="product__price"><small>参考价格</small>${p.price}</div>
            <button class="product__btn" type="button">查看详情</button>
          </div>
        </div>
      </article>`).join("");
  }

  document.querySelectorAll(".tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tab").forEach((b) => { b.classList.remove("is-active"); b.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      renderProducts(btn.dataset.market);
    });
  });
  renderProducts("us");

  /* ---------- 差异化卡片 + 对比表 ---------- */
  $("#diffGrid").innerHTML = D.differentiators.map((d) => `
    <div class="diff-card">
      <div class="diff-card__icon">${d.icon}</div>
      <h3>${d.title}</h3>
      <p>${d.text}</p>
    </div>`).join("");

  const lv = (n) => `<span class="lv lv-${n}" title="${["", "弱 / 无", "中", "强"][n]}"></span>`;
  const rows = (market, label) => `
    <tr class="cmp__group"><td colspan="${D.dimensions.length + 2}">${label}</td></tr>
    ${D.products[market].map((p) => `
      <tr>
        <td class="cmp__name">${p.name}<small>${p.brand}</small></td>
        ${D.dimensions.map((d) => `<td>${lv(p.scores[d.key])}</td>`).join("")}
        <td class="cmp__price">${p.price}</td>
      </tr>`).join("")}`;
  $("#cmpTable").innerHTML = `
    <thead><tr><th>产品</th>${D.dimensions.map((d) => `<th>${d.label}</th>`).join("")}<th>价格</th></tr></thead>
    <tbody>${rows("us", '<span class="flag flag--us">US</span> 美国市场 Top 5')}${rows("cn", '<span class="flag flag--cn">CN</span> 中国市场 Top 5')}</tbody>`;

  /* ---------- 价格区间 ---------- */
  function renderPrices(market, el, symbol) {
    const list = D.products[market];
    const max = Math.max(...list.map((p) => p.priceMax)) * 1.08;
    el.innerHTML = list.map((p) => {
      const left = (p.priceMin / max) * 100;
      const width = ((p.priceMax - p.priceMin) / max) * 100;
      return `
        <div class="price-row" style="--accent:${p.accent}">
          <div class="price-row__name">${p.name}<small>${p.brand}</small></div>
          <div class="price-row__track">
            <div class="price-row__bar ${width > 20 ? "is-wide" : ""}" style="left:${left}%; width:${Math.max(width, 8)}%">${p.price}</div>
          </div>
        </div>`;
    }).join("") + `<div class="price-axis"><span>${symbol}0</span><span>${symbol}${Math.round(max / 2).toLocaleString()}</span><span>${symbol}${Math.round(max).toLocaleString()}</span></div>`;
  }
  renderPrices("us", $("#priceUS"), "$");
  renderPrices("cn", $("#priceCN"), "¥");

  $("#priceSummary").innerHTML = D.priceSummary.map((s) => `
    <div class="price-summary__item"><small>${s.label}</small><strong>${s.value}</strong><span>${s.note}</span></div>`).join("");

  /* ---------- 趋势 ---------- */
  $("#statTiles").innerHTML = D.statTiles.map((s) => `
    <div class="stat-tile"><strong>${s.value}</strong><b>${s.label}</b><span>${s.note}</span></div>`).join("");

  const maxVal = Math.max(...D.marketChart.map((d) => d.value));
  $("#marketChart").innerHTML = D.marketChart.map((d, i) => `
    <div class="bar">
      <span class="bar__val" style="bottom:calc(${(d.value / maxVal) * 100}% + 6px); top:auto">${d.value}</span>
      <div class="bar__col ${d.year.includes("E") ? "is-forecast" : ""}" style="height:${(d.value / maxVal) * 100}%; animation-delay:${i * 90}ms"></div>
      <span class="bar__year">${d.year}</span>
    </div>`).join("");

  $("#trendList").innerHTML = D.trends.map((t) => `
    <div class="trend-item">
      <div class="trend-item__icon">${t.icon}</div>
      <div><h4>${t.title}</h4><p>${t.text}</p></div>
    </div>`).join("");

  $("#outlook").innerHTML = `<h3>${D.outlook.title}</h3><ol>${D.outlook.points.map((p) => `<li>${p}</li>`).join("")}</ol>`;

  /* ---------- 选购指南 ---------- */
  $("#guideGrid").innerHTML = D.guide.map((g) => `
    <div class="guide-card">
      <div class="guide-card__icon">${g.icon}</div>
      <h3>${g.title}</h3>
      <div class="who">适合：${g.who}</div>
      <div class="pick">推荐 → ${g.pick}</div>
      <p>${g.text}</p>
    </div>`).join("");

  /* ---------- 导航交互 ---------- */
  const nav = $("#nav");
  const links = $("#navLinks");
  const toggle = $("#navToggle");
  window.addEventListener("scroll", () => nav.classList.toggle("is-scrolled", window.scrollY > 10), { passive: true });
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => links.classList.remove("is-open")));
})();
