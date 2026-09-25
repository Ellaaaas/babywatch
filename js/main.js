/* =====================================================================
   BabyWatch AI · interactions
   - sticky nav state + mobile menu
   - scroll reveal (IntersectionObserver)
   - animated counters
   - live-feeling dashboard values
   - subtle product parallax
   - partner form (front-end only placeholder)
   ===================================================================== */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Navigation ---------- */
  const nav = $("#nav");
  const links = $("#navLinks");
  const toggle = $("#navToggle");
  const onScroll = () => nav && nav.classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    $$("a", links).forEach((a) => a.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    }));
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = $$(".reveal");
  // stagger children of grid groups
  $$(".layers, .engines, .principles, .research").forEach((group) => {
    Array.from(group.children).forEach((child, i) => child.style.setProperty("--i", i));
  });
  if ("IntersectionObserver" in window && !reduced) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.1 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-in"));
  }

  /* ---------- Counters ---------- */
  const counters = $$("[data-count]");
  const runCounter = (el) => {
    const target = parseFloat(el.dataset.count);
    const dur = 1200;
    const start = performance.now();
    const step = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  if (counters.length) {
    if ("IntersectionObserver" in window && !reduced) {
      const cio = new IntersectionObserver((entries) => {
        entries.forEach((e) => { if (e.isIntersecting) { runCounter(e.target); cio.unobserve(e.target); } });
      }, { threshold: 0.5 });
      counters.forEach((c) => cio.observe(c));
    } else {
      counters.forEach((c) => (c.textContent = c.dataset.count));
    }
  }

  /* ---------- Live dashboard values (gentle drift) ---------- */
  const live = {
    rpm: { el: $('[data-live="rpm"]'), v: 31, min: 29, max: 34, step: 1, fmt: (n) => Math.round(n) },
    temp: { el: $('[data-live="temp"]'), v: 22.4, min: 22.0, max: 22.9, step: 0.1, fmt: (n) => n.toFixed(1) },
    hum: { el: $('[data-live="hum"]'), v: 48, min: 46, max: 50, step: 1, fmt: (n) => Math.round(n) },
    db: { el: $('[data-live="db"]'), v: 28, min: 26, max: 31, step: 1, fmt: (n) => Math.round(n) }
  };
  if (!reduced) {
    setInterval(() => {
      Object.values(live).forEach((m) => {
        if (!m.el) return;
        const dir = Math.random() < 0.5 ? -1 : 1;
        m.v = Math.min(m.max, Math.max(m.min, m.v + dir * m.step * (Math.random() < 0.6 ? 1 : 0)));
        m.el.textContent = m.fmt(m.v);
      });
    }, 2600);
  }

  /* ---------- Product parallax ---------- */
  const stage = $("#hwStage");
  const render = stage && $(".hw__render", stage);
  if (stage && render && !reduced) {
    let ticking = false;
    const update = () => {
      const r = stage.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(1, Math.max(0, 1 - (r.top + r.height / 2) / vh)); // 0 top → 1 bottom
      const y = (progress - 0.5) * -24;
      render.style.transform = `translateY(${y.toFixed(1)}px)`;
      ticking = false;
    };
    window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } }, { passive: true });
    update();
  }

  /* ---------- Forms (placeholders: no backend yet) ---------- */
  [["#partnerForm", ".pform__ok"], ["#waitlistForm", ".wlform__ok"]].forEach(([sel, okSel]) => {
    const form = $(sel);
    if (!form) return;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      $$("input, select, button", form).forEach((el) => (el.disabled = true));
      const note = $(".wlform__note", form); if (note) note.hidden = true;
      $(okSel, form).hidden = false;
    });
  });
})();
