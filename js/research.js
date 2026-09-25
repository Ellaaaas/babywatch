/* Research & Insights page rendering */
(function () {
  const D = RESEARCH;
  const $ = (s) => document.querySelector(s);
  const dots = (n) => `<span class="dots" aria-label="${n} of 3">${[1, 2, 3].map((i) => `<i class="${i <= n ? "on" : ""}"></i>`).join("")}</span>`;

  /* ----- 01 landscape table ----- */
  function renderLandscape(market) {
    $("#marketNote").textContent = D.marketNotes[market];
    const rows = D.products[market].map((p) => `
      <tr>
        <td class="name">${p.name}<small>${p.brand}</small></td>
        <td>${p.positioning}</td>
        <td class="gap">${p.gap}</td>
        ${D.dimensions.map((d) => `<td>${dots(p.scores[d.key])}</td>`).join("")}
        <td class="price">${p.price}</td>
      </tr>`).join("");
    $("#landscapeTable").innerHTML = `
      <thead><tr><th>Product</th><th>Positioning</th><th>Intelligence gap</th>${D.dimensions.map((d) => `<th>${d.label}</th>`).join("")}<th>Price</th></tr></thead>
      <tbody>${rows}</tbody>`;
  }
  document.querySelectorAll(".mtab").forEach((b) => b.addEventListener("click", () => {
    document.querySelectorAll(".mtab").forEach((x) => { x.classList.remove("is-active"); x.setAttribute("aria-selected", "false"); });
    b.classList.add("is-active"); b.setAttribute("aria-selected", "true");
    renderLandscape(b.dataset.market);
  }));
  renderLandscape("us");

  /* ----- 02 differentiators + prices ----- */
  $("#diffGrid").innerHTML = D.differentiators.map((d) => `<div class="diff"><h3>${d.title}</h3><p>${d.text}</p></div>`).join("");
  function renderPrices(market, el, sym) {
    const list = D.products[market];
    const max = Math.max(...list.map((p) => p.max)) * 1.08;
    el.innerHTML = list.map((p) => {
      const left = (p.min / max) * 100, width = Math.max(((p.max - p.min) / max) * 100, 8);
      return `<div class="price-row"><div>${p.name}<small>${p.brand} · <b>${p.price}</b></small></div><div class="price-track"><div class="price-bar" style="left:${left}%;width:${width}%"></div></div></div>`;
    }).join("") + `<div class="price-axis"><span>${sym}0</span><span>${sym}${Math.round(max / 2).toLocaleString()}</span><span>${sym}${Math.round(max).toLocaleString()}</span></div>`;
  }
  renderPrices("us", $("#priceUS"), "$");
  renderPrices("cn", $("#priceCN"), "¥");
  $("#priceSummary").innerHTML = D.priceSummary.map((s) => `<div class="kpi"><small>${s.label}</small><strong>${s.value}</strong><span>${s.note}</span></div>`).join("");

  /* ----- 03 trends ----- */
  $("#trendList").innerHTML = D.trends.map((t) => `<li class="trend"><h3>${t.title}</h3><p>${t.text}</p></li>`).join("");

  /* ----- 04 consumers ----- */
  $("#statTiles").innerHTML = D.statTiles.map((s) => `<div class="kpi"><small>${s.label}</small><strong>${s.value}</strong><span>${s.note}</span></div>`).join("");
  const maxV = Math.max(...D.marketChart.map((d) => d.value));
  $("#marketChart").innerHTML = D.marketChart.map((d) => `
    <div class="bar">
      <span class="bar__val">${d.value}</span>
      <div class="bar__col ${d.year.includes("E") ? "is-forecast" : ""}" style="height:${(d.value / maxV) * 100}%"></div>
      <span class="bar__year">${d.year}</span>
    </div>`).join("");
  $("#outlook").innerHTML = `<h3>${D.outlook.title}</h3><ol>${D.outlook.points.map((p) => `<li>${p}</li>`).join("")}</ol>`;
})();
