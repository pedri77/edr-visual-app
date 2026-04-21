(function () {
  "use strict";
  const DATA = window.EDR_DATA;
  if (!DATA) { console.error("EDR_DATA no cargado"); return; }

  const STATE = {
    view: "matrix",
    os: "windows",
    attackOs: "windows",
    compareSel: [],
    scoring: {
      preset: "balanced",
      weights: { telemetry: 40, gartner: 20, forrester: 15, incidents: 15, ens: 10 },
      osFocus: "windows",
    },
  };

  const OS_LABELS = { windows: "Windows", linux: "Linux", macos: "macOS" };

  const PRESETS = {
    balanced: { name: "Balanceado", weights: { telemetry: 40, gartner: 20, forrester: 15, incidents: 15, ens: 10 } },
    soc: { name: "SOC 24x7", weights: { telemetry: 55, gartner: 15, forrester: 15, incidents: 10, ens: 5 } },
    midmarket: { name: "Mid-market", weights: { telemetry: 30, gartner: 30, forrester: 15, incidents: 10, ens: 15 } },
    european: { name: "Soberania UE", weights: { telemetry: 30, gartner: 15, forrester: 10, incidents: 20, ens: 25 } },
    cloud: { name: "Cloud-first", weights: { telemetry: 45, gartner: 20, forrester: 20, incidents: 10, ens: 5 } },
  };

  const qs = (s, r) => (r || document).querySelector(s);
  const qsa = (s, r) => Array.from((r || document).querySelectorAll(s));
  const el = (tag, attrs, children) => {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === "class") n.className = attrs[k];
      else if (k === "dataset") Object.assign(n.dataset, attrs[k]);
      else if (k === "style") n.style.cssText = attrs[k];
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    }
    if (children != null) {
      if (Array.isArray(children)) children.forEach(c => c && n.append(c.nodeType ? c : document.createTextNode(c)));
      else n.append(children.nodeType ? children : document.createTextNode(children));
    }
    return n;
  };

  function vendorById(id) { return DATA.vendors.find(v => v.id === id || v.canonical === id); }

  // ---------- NAV ----------
  function setView(view) {
    STATE.view = view;
    qsa(".view").forEach(v => v.classList.add("hidden"));
    const node = qs("#view-" + view);
    if (node) node.classList.remove("hidden");
    qsa(".rail-item").forEach(b => b.classList.toggle("active", b.dataset.view === view));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  qsa(".rail-item, .hero-chip").forEach(b => b.addEventListener("click", () => setView(b.dataset.view)));

  // ---------- LEGEND ----------
  function renderLegend() {
    const box = qs("#legend");
    box.innerHTML = "";
    Object.entries(DATA.statusLegend).forEach(([k, v]) => {
      if (k === "na") return;
      box.append(el("span", { class: "legend-item" }, [
        el("span", { class: "legend-dot", style: `background:${v.color}` }),
        v.label,
      ]));
    });
  }

  // ---------- MATRIX ----------
  function renderMatrix() {
    const osData = DATA.os[STATE.os];
    const vendors = osData.vendors;
    const feats = osData.features;
    const partials = osData.partials || {};

    const table = qs("#matrix");
    table.innerHTML = "";

    // header
    const thead = el("thead");
    const trh = el("tr");
    trh.append(el("th", { class: "corner" }, "Categoria"));
    trh.append(el("th", { class: "sub-col" }, "Sub-feature"));
    vendors.forEach(v => {
      const meta = vendorById(v) || {};
      trh.append(el("th", { title: v }, v));
    });
    thead.append(trh);
    table.append(thead);

    const tbody = el("tbody");
    let lastCat = null;
    feats.forEach(f => {
      const tr = el("tr");
      const catCell = el("td", { class: "cat" }, f.category === lastCat ? "" : (f.category || ""));
      lastCat = f.category;
      tr.append(catCell);
      tr.append(el("td", { class: "sub" }, f.sub));
      vendors.forEach(v => {
        const status = f.values[v] || "na";
        const legend = DATA.statusLegend[status] || DATA.statusLegend.na;
        const partialKey = `${f.category} - ${f.sub}`;
        const partialText = partials[v] && partials[v][partialKey];
        const title = `${v}\n${f.category} / ${f.sub}\n${legend.label}${partialText ? "\n\n" + partialText : ""}`;
        tr.append(el("td", { class: `cell ${status}`, title }, legend.icon));
      });
      tbody.append(tr);
    });
    table.append(tbody);
  }

  qsa("#view-matrix .os-tab").forEach(t => t.addEventListener("click", () => {
    STATE.os = t.dataset.os;
    qsa("#view-matrix .os-tab").forEach(x => x.classList.toggle("active", x === t));
    renderMatrix();
    renderRanking();
  }));

  // Separate listeners for ATT&CK OS tabs
  qsa("#attackOsTabs .os-tab").forEach(t => t.addEventListener("click", () => {
    STATE.attackOs = t.dataset.os;
    qsa("#attackOsTabs .os-tab").forEach(x => x.classList.toggle("active", x === t));
    renderAttack();
  }));

  // ---------- RANKING ----------
  function renderRanking() {
    const osData = DATA.os[STATE.os];
    const rows = osData.vendors.map(v => {
      const meta = vendorById(v) || {};
      const score = osData.scores[v]?.score || 0;
      const byOs = ["windows", "linux", "macos"].map(o => ({ os: o, score: DATA.os[o].scores[v]?.score || null }));
      return { v, meta, score, byOs };
    }).sort((a, b) => b.score - a.score);

    const grid = qs("#rankingGrid");
    grid.innerHTML = "";
    rows.forEach(r => {
      const card = el("div", { class: "rank-card" });
      const head = el("div", { class: "rank-head" }, [
        el("div", { class: "rank-logo" }, r.meta.logo ? el("img", { src: r.meta.logo, alt: "", onerror: e => e.target.remove() }) : ""),
        el("div", {}, [
          el("div", { class: "rank-name" }, r.v),
          el("div", { class: "rank-gartner" }, r.meta.gartner || "-"),
        ]),
      ]);
      card.append(head);

      const bars = el("div", { class: "rank-bars" });
      bars.append(mkBar(OS_LABELS[STATE.os], r.score, false));
      ["windows", "linux", "macos"].forEach(o => {
        if (o === STATE.os) return;
        const s = DATA.os[o].scores[r.v];
        if (s) bars.append(mkBar(OS_LABELS[o], s.score, true));
      });
      card.append(bars);
      grid.append(card);
    });
  }
  function mkBar(label, score, dim) {
    return el("div", { class: "rank-bar" }, [
      el("span", {}, label),
      el("div", { class: "rank-bar-track" }, el("div", { class: "rank-bar-fill" + (dim ? " dim" : ""), style: `width:${score}%` })),
      el("span", { class: "rank-score" }, score.toFixed(1)),
    ]);
  }

  // ---------- VENDOR CARDS ----------
  function renderVendors() {
    const grid = qs("#vendorGrid");
    grid.innerHTML = "";
    DATA.vendors.forEach(v => {
      if (v.id !== v.canonical) return; // skip alias duplicates
      const card = el("div", { class: "vendor-card", style: `--vendor-color:${v.color}` });
      card.append(el("div", { class: "vendor-head" }, [
        el("div", { class: "vendor-logo" }, v.logo ? el("img", { src: v.logo, alt: "", onerror: e => e.target.remove() }) : ""),
        el("div", {}, [
          el("div", { class: "vendor-name" }, v.name),
          el("div", { class: "vendor-product" }, v.product || ""),
        ]),
      ]));

      card.append(el("div", { class: "vendor-os" }, ["windows", "linux", "macos"].map(o =>
        el("span", { class: "os-pill" + (v.perOs[o].present ? " has" : "") },
          `${OS_LABELS[o]} ${v.perOs[o].present ? v.perOs[o].score.toFixed(0) + "%" : "-"}`)
      )));

      card.append(el("div", { class: "vendor-meta" }, [
        meta("Gartner", v.gartner || "-"),
        meta("Forrester", v.forrester || "-"),
        meta("ENS", v.ens || "-"),
        meta("Producto", v.product || "-"),
      ]));

      if (v.strengths) card.append(sect("Fortalezas", v.strengths));
      if (v.cautions) card.append(sect("Cautelas", v.cautions));

      if (v.notableCves && v.notableCves.length) {
        const top = v.notableCves.filter(c => ["Critical", "High"].includes(c.severity)).slice(0, 5);
        const s = el("div", { class: "vendor-section" }, el("h5", {}, `CVEs notables (${v.notableCves.length} total)`));
        (top.length ? top : v.notableCves.slice(0, 5)).forEach(c => {
          const tip = [c.note, c.description, c.published && `Publicado ${c.published}`, c.score && `CVSS ${c.score}`].filter(Boolean).join("\n");
          s.append(el("span", { class: `tag ${(c.severity || "").toLowerCase()}`, title: tip }, `${c.id} · ${c.severity}${c.score ? " · " + c.score : ""}`));
        });
        card.append(s);
      }
      if (v.incidents && v.incidents.length) {
        const s = el("div", { class: "vendor-section" }, el("h5", {}, `Incidentes publicos (${v.incidents.length})`));
        v.incidents.slice(0, 3).forEach(i => {
          const line = el("p", {}, `[${i.date || "?"}] ${i.title}${i.impact ? " - " + i.impact : ""}`);
          if (i.url) { line.append(" "); line.append(el("a", { href: i.url, target: "_blank", rel: "noopener" }, "fuente")); }
          s.append(line);
        });
        card.append(s);
      }

      const links = el("div", { class: "vendor-links" });
      if (v.website) links.append(el("a", { href: v.website, target: "_blank", rel: "noopener" }, "Web"));
      if (v.productUrl) links.append(el("a", { href: v.productUrl, target: "_blank", rel: "noopener" }, "Producto"));
      if (v.docsUrl) links.append(el("a", { href: v.docsUrl, target: "_blank", rel: "noopener" }, "Docs"));
      card.append(links);

      grid.append(card);
    });
  }
  function meta(k, v) {
    return el("div", {}, [el("div", { class: "k" }, k), el("div", {}, v)]);
  }
  function sect(title, body) {
    return el("div", { class: "vendor-section" }, [el("h5", {}, title), el("p", {}, body)]);
  }

  // ---------- COMPARE ----------
  function renderCompareControls() {
    const box = qs("#compareControls");
    box.innerHTML = "";
    const canonicalVendors = DATA.vendors.filter(v => v.id === v.canonical);
    for (let i = 0; i < 3; i++) {
      const sel = el("select", {
        dataset: { slot: i },
        onchange: e => { STATE.compareSel[i] = e.target.value; renderCompare(); },
      });
      sel.append(el("option", { value: "" }, i === 0 ? "Selecciona vendor 1" : `Vendor ${i + 1} (opcional)`));
      canonicalVendors.forEach(v => sel.append(el("option", { value: v.id }, v.name)));
      if (STATE.compareSel[i]) sel.value = STATE.compareSel[i];
      box.append(sel);
    }
    const osSel = el("select", {
      onchange: e => { STATE.os = e.target.value; renderCompare(); },
    });
    ["windows", "linux", "macos"].forEach(o => osSel.append(el("option", { value: o }, OS_LABELS[o])));
    osSel.value = STATE.os;
    box.append(osSel);
  }

  function renderCompare() {
    const osData = DATA.os[STATE.os];
    const sel = STATE.compareSel.filter(Boolean);
    const table = qs("#compareMatrix");
    table.innerHTML = "";
    if (!sel.length) { table.append(el("tbody", {}, el("tr", {}, el("td", { class: "cell na", style: "padding:30px" }, "Selecciona al menos un vendor")))); return; }

    const thead = el("thead");
    const trh = el("tr");
    trh.append(el("th", { class: "corner" }, "Categoria"));
    trh.append(el("th", { class: "sub-col" }, "Sub-feature"));
    sel.forEach(v => trh.append(el("th", { class: "sub-col" }, v)));
    thead.append(trh);
    table.append(thead);

    const tbody = el("tbody");
    let lastCat = null;
    osData.features.forEach(f => {
      const tr = el("tr");
      tr.append(el("td", { class: "cat" }, f.category === lastCat ? "" : f.category));
      lastCat = f.category;
      tr.append(el("td", { class: "sub" }, f.sub));
      sel.forEach(v => {
        const status = f.values[v] || "na";
        const legend = DATA.statusLegend[status];
        tr.append(el("td", { class: `cell ${status}`, title: `${v}: ${legend.label}` }, legend.icon));
      });
      tbody.append(tr);
    });
    table.append(tbody);
  }

  // ---------- RISKS ----------
  const RISK_STATE = { severity: "all", vendor: "all" };

  function renderRisks() {
    const cveBox = qs("#cveList");
    const incBox = qs("#incidentList");
    const filterBar = qs("#riskFilters");
    if (filterBar) renderRiskFilters(filterBar);
    cveBox.innerHTML = ""; incBox.innerHTML = "";
    const vendors = DATA.vendors.filter(v => v.id === v.canonical);
    const allCves = [];
    const allInc = [];
    vendors.forEach(v => {
      (v.notableCves || []).forEach(c => allCves.push({ v, c }));
      (v.incidents || []).forEach(i => allInc.push({ v, i }));
    });
    const sevRank = { Critical: 0, High: 1, Medium: 2, Low: 3, Unknown: 4 };
    allCves.sort((a, b) => (sevRank[a.c.severity] ?? 9) - (sevRank[b.c.severity] ?? 9));
    allInc.sort((a, b) => (b.i.date || "").localeCompare(a.i.date || ""));

    const filteredCves = allCves.filter(({ v, c }) => {
      if (RISK_STATE.vendor !== "all" && v.id !== RISK_STATE.vendor) return false;
      if (RISK_STATE.severity !== "all" && c.severity !== RISK_STATE.severity) return false;
      return true;
    });
    const filteredInc = allInc.filter(({ v }) => RISK_STATE.vendor === "all" || v.id === RISK_STATE.vendor);

    filteredCves.slice(0, 150).forEach(({ v, c }) => {
      cveBox.append(el("div", { class: "risk-item" }, [
        el("div", { class: "risk-head" }, [
          el("span", { class: "risk-vendor" }, v.name),
          el("span", { class: `tag ${(c.severity || "").toLowerCase()}` }, `${c.severity || "-"}${c.score ? " · " + c.score : ""}`),
        ]),
        el("div", { class: "risk-title" }, [
          el("a", { href: `https://nvd.nist.gov/vuln/detail/${c.id}`, target: "_blank", rel: "noopener" }, c.id),
          c.published ? el("span", { class: "risk-date", style: "margin-left:8px" }, c.published) : "",
        ]),
        el("div", { class: "risk-note" }, c.note || c.description || ""),
      ]));
    });
    filteredInc.forEach(({ v, i }) => {
      const node = el("div", { class: "risk-item" }, [
        el("div", { class: "risk-head" }, [
          el("span", { class: "risk-vendor" }, v.name),
          el("span", { class: "risk-date" }, i.date || ""),
        ]),
        el("div", { class: "risk-title" }, i.title || ""),
        el("div", { class: "risk-note" }, i.impact || ""),
      ]);
      if (i.url) node.append(el("div", { style: "margin-top:6px" }, el("a", { href: i.url, target: "_blank", rel: "noopener", style: "font-size:11px" }, "fuente")));
      incBox.append(node);
    });
    if (!cveBox.children.length) cveBox.append(el("div", { class: "risk-note" }, "Sin CVEs que coincidan con el filtro."));
    if (!incBox.children.length) incBox.append(el("div", { class: "risk-note" }, "Sin incidentes que coincidan con el filtro."));
  }

  function renderRiskFilters(box) {
    box.innerHTML = "";
    const vSel = el("select", { onchange: e => { RISK_STATE.vendor = e.target.value; renderRisks(); } });
    vSel.append(el("option", { value: "all" }, "Todos los vendors"));
    DATA.vendors.filter(v => v.id === v.canonical).forEach(v => vSel.append(el("option", { value: v.id }, v.name)));
    vSel.value = RISK_STATE.vendor;
    box.append(vSel);

    const sSel = el("select", { onchange: e => { RISK_STATE.severity = e.target.value; renderRisks(); } });
    ["all", "Critical", "High", "Medium", "Low"].forEach(s => sSel.append(el("option", { value: s }, s === "all" ? "Toda severidad" : s)));
    sSel.value = RISK_STATE.severity;
    box.append(sSel);
  }

  // ---------- SCORING ----------
  const GARTNER_SCORE = {
    "Leader": 100, "Challenger": 75, "Visionary": 70, "Niche": 55, "Herramienta": 30, "No": 40
  };
  const FORRESTER_SCORE = {
    "Leader": 100, "Strong Performer": 80, "Contender": 60, "Challenger": 50, "No": 40
  };

  function gartnerScore(txt) {
    if (!txt) return 40;
    for (const k in GARTNER_SCORE) if (txt.startsWith(k)) return GARTNER_SCORE[k];
    return 40;
  }
  function forresterScore(txt) {
    if (!txt) return 40;
    for (const k in FORRESTER_SCORE) if (txt.startsWith(k)) return FORRESTER_SCORE[k];
    return 40;
  }
  function incidentsScore(v) {
    const cves = v.notableCves?.length || 0;
    const inc = v.incidents?.length || 0;
    return Math.max(0, 100 - cves * 12 - inc * 15);
  }
  function ensScore(v) {
    const t = (v.ens || "").toLowerCase();
    if (t.includes("ens alta") || t.includes("producto")) return 100;
    if (t.includes("integrador") || t.includes("gestionado")) return 70;
    if (t.includes("no evidenciado")) return 40;
    if (t.includes("no aplica") || t.includes("nativo")) return 50;
    return 50;
  }

  function renderScoring() {
    renderScoringControls();
    renderScoringResults();
  }

  function renderScoringControls() {
    const box = qs("#scoringControls");
    box.innerHTML = "";
    box.append(el("h3", { style: "margin:0 0 10px;font-size:14px" }, "Preset"));
    const row = el("div", { class: "preset-row" });
    Object.entries(PRESETS).forEach(([k, p]) => {
      row.append(el("button", {
        class: "preset-chip" + (STATE.scoring.preset === k ? " active" : ""),
        onclick: () => {
          STATE.scoring.preset = k;
          STATE.scoring.weights = { ...p.weights };
          renderScoring();
        },
      }, p.name));
    });
    box.append(row);

    box.append(el("h3", { style: "margin:14px 0 10px;font-size:14px" }, "SO focal"));
    const osSel = el("select", {
      style: "width:100%;background:var(--bg-2);color:var(--text);border:1px solid var(--border);border-radius:8px;padding:8px",
      onchange: e => { STATE.scoring.osFocus = e.target.value; renderScoringResults(); },
    });
    ["windows", "linux", "macos"].forEach(o => osSel.append(el("option", { value: o }, OS_LABELS[o])));
    osSel.value = STATE.scoring.osFocus;
    box.append(osSel);

    box.append(el("h3", { style: "margin:14px 0 10px;font-size:14px" }, "Pesos (%)"));
    Object.entries(STATE.scoring.weights).forEach(([k, v]) => {
      const g = el("div", { class: "slider-group" });
      g.append(el("label", {}, [el("span", {}, labelFor(k)), el("span", { id: `w-${k}-v` }, v + "%")]));
      const inp = el("input", { type: "range", min: 0, max: 60, value: v });
      inp.addEventListener("input", e => {
        STATE.scoring.weights[k] = +e.target.value;
        qs(`#w-${k}-v`).textContent = e.target.value + "%";
        renderScoringResults();
      });
      g.append(inp);
      box.append(g);
    });
  }

  function labelFor(k) {
    return ({ telemetry: "Telemetria", gartner: "Gartner MQ", forrester: "Forrester Wave", incidents: "Historial (CVE/incidentes)", ens: "ENS / soberania" })[k] || k;
  }

  function renderScoringResults() {
    const w = STATE.scoring.weights;
    const total = Object.values(w).reduce((a, b) => a + b, 0) || 1;
    const vendors = DATA.vendors.filter(v => v.id === v.canonical);
    const ranked = vendors.map(v => {
      const telem = v.perOs[STATE.scoring.osFocus]?.score || 0;
      const score = (
        telem * w.telemetry +
        gartnerScore(v.gartner) * w.gartner +
        forresterScore(v.forrester) * w.forrester +
        incidentsScore(v) * w.incidents +
        ensScore(v) * w.ens
      ) / total;
      return { v, score: Math.round(score * 10) / 10, telem };
    }).sort((a, b) => b.score - a.score);

    const box = qs("#scoringResults");
    box.innerHTML = "";
    box.append(el("h3", { style: "margin:0 0 10px;font-size:14px" }, `Top vendors (SO: ${OS_LABELS[STATE.scoring.osFocus]})`));
    const grid = el("div", { class: "ranking-grid" });
    ranked.slice(0, 12).forEach((r, i) => {
      const card = el("div", { class: "rank-card" });
      card.append(el("div", { class: "rank-head" }, [
        el("div", { class: "rank-logo" }, r.v.logo ? el("img", { src: r.v.logo, alt: "", onerror: e => e.target.remove() }) : ""),
        el("div", {}, [
          el("div", { class: "rank-name" }, `${i + 1}. ${r.v.name}`),
          el("div", { class: "rank-gartner" }, `${r.v.gartner || "-"} · ${r.v.forrester || "-"}`),
        ]),
      ]));
      const bars = el("div", { class: "rank-bars" });
      bars.append(mkBar("Score", r.score, false));
      bars.append(mkBar("Telemetria", r.telem, true));
      card.append(bars);
      grid.append(card);
    });
    box.append(grid);
  }

  // ---------- ATT&CK ----------
  function coverageClass(score) {
    if (score >= 90) return "cov-100";
    if (score >= 70) return "cov-70";
    if (score >= 40) return "cov-40";
    return "cov-0";
  }

  function renderAttack() {
    const osName = STATE.attackOs;
    const osData = DATA.os[osName];
    const vendors = osData.vendors;
    const coverage = osData.attackCoverage || {};
    // data sources present in this OS, sorted by ID
    const dsSet = new Set();
    Object.values(coverage).forEach(perVendor => Object.keys(perVendor).forEach(ds => dsSet.add(ds)));
    const dsIds = Array.from(dsSet).sort();

    const table = qs("#attackMatrix");
    table.innerHTML = "";
    const thead = el("thead");
    const trh = el("tr");
    trh.append(el("th", { class: "corner", style: "min-width:180px" }, "ATT&CK Data Source"));
    trh.append(el("th", { class: "sub-col", style: "min-width:90px" }, "Avg"));
    vendors.forEach(v => trh.append(el("th", { title: v }, v)));
    thead.append(trh);
    table.append(thead);

    const tbody = el("tbody");
    dsIds.forEach(ds => {
      const meta = DATA.attackDataSources[ds] || { name: ds };
      const tr = el("tr");
      tr.append(el("td", { class: "cat", style: "min-width:180px" }, [
        el("div", { style: "font-family:var(--mono);font-size:11px;color:var(--accent)" }, ds),
        el("div", {}, meta.name || ds),
      ]));
      // avg across vendors
      const scores = vendors.map(v => coverage[v]?.[ds]?.score).filter(s => typeof s === "number");
      const avg = scores.length ? scores.reduce((a, b) => a + b, 0) / scores.length : 0;
      tr.append(el("td", { class: `cell ${coverageClass(avg)}`, style: "font-family:var(--mono);padding:6px 10px" }, avg.toFixed(0) + "%"));
      vendors.forEach(v => {
        const cell = coverage[v]?.[ds];
        if (!cell) {
          tr.append(el("td", { class: "cell na", title: `${v}: ${ds} - sin features mapeadas` }, "-"));
        } else {
          const s = cell.score;
          tr.append(el("td", {
            class: `cell ${coverageClass(s)}`,
            title: `${v}\n${ds} ${meta.name}\n${s.toFixed(1)}% sobre ${cell.features} features`,
          }, s.toFixed(0)));
        }
      });
      tbody.append(tr);
    });
    table.append(tbody);

    // Legend / info cards per DS
    const legend = qs("#attackLegend");
    legend.innerHTML = "";
    dsIds.forEach(ds => {
      const meta = DATA.attackDataSources[ds] || { name: ds };
      const card = el("div", { class: "attack-ds" });
      card.append(el("div", { class: "id" }, ds));
      card.append(el("div", { class: "name" }, meta.name || ds));
      if (meta.description) card.append(el("div", { class: "desc" }, meta.description));
      if (meta.tactics) {
        const tac = el("div", { class: "tactics" });
        meta.tactics.forEach(t => tac.append(el("span", {}, t)));
        card.append(tac);
      }
      legend.append(card);
    });
  }

  // ---------- EXECUTIVE ----------
  function renderExecutive() {
    const box = qs("#executiveContent");
    if (!box) return;
    box.innerHTML = "";
    const vendors = DATA.vendors.filter(v => v.id === v.canonical);

    // KPIs
    const totalCves = vendors.reduce((a, v) => a + (v.notableCves?.length || 0), 0);
    const critCves = vendors.reduce((a, v) => a + (v.notableCves || []).filter(c => c.severity === "Critical").length, 0);
    const totalInc = vendors.reduce((a, v) => a + (v.incidents?.length || 0), 0);
    const leaders = vendors.filter(v => (v.gartner || "").startsWith("Leader")).length;
    const avgWin = avg(vendors.filter(v => v.perOs.windows.present).map(v => v.perOs.windows.score));
    const avgLin = avg(vendors.filter(v => v.perOs.linux.present).map(v => v.perOs.linux.score));
    const avgMac = avg(vendors.filter(v => v.perOs.macos.present).map(v => v.perOs.macos.score));

    const kpis = el("div", { style: "display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;margin-bottom:22px" });
    kpi(kpis, "Vendors cubiertos", vendors.length, "de un universo EDR/XDR activo");
    kpi(kpis, "Gartner Leaders", leaders, "MQ EPP 2024");
    kpi(kpis, "CVEs del propio agente", totalCves, `${critCves} criticos`);
    kpi(kpis, "Incidentes publicos", totalInc, "noticias / fugas / bugs");
    kpi(kpis, "Cobertura media Win", avgWin.toFixed(1) + "%", "sobre 50 features");
    kpi(kpis, "Cobertura media Linux", avgLin.toFixed(1) + "%", "sobre 28 features");
    kpi(kpis, "Cobertura media macOS", avgMac.toFixed(1) + "%", "sobre 56 features");
    box.append(kpis);

    // Top 5 por preset
    const presetList = Object.entries(PRESETS);
    const topGrid = el("div", { style: "display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:14px;margin-bottom:22px" });
    presetList.forEach(([key, p]) => {
      const w = p.weights;
      const tot = Object.values(w).reduce((a, b) => a + b, 0) || 1;
      const os = key === "cloud" ? "linux" : (key === "european" ? "linux" : "windows");
      const ranked = vendors.map(v => {
        const telem = v.perOs[os]?.score || 0;
        const score = (telem * w.telemetry + gartnerScore(v.gartner) * w.gartner + forresterScore(v.forrester) * w.forrester + incidentsScore(v) * w.incidents + ensScore(v) * w.ens) / tot;
        return { v, score };
      }).sort((a, b) => b.score - a.score).slice(0, 5);
      const card = el("div", { style: "background:var(--surface);border:1px solid var(--border);border-radius:14px;padding:14px" });
      card.append(el("div", { style: "font-size:12px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.06em;margin-bottom:4px" }, `Preset: ${p.name} · ${OS_LABELS[os]}`));
      card.append(el("div", { style: "font-size:14px;font-weight:700;margin-bottom:10px" }, "Top 5 recomendados"));
      ranked.forEach((r, i) => {
        card.append(el("div", { style: "display:flex;justify-content:space-between;padding:4px 0;border-top:1px solid var(--border);font-size:13px" }, [
          el("span", {}, `${i + 1}. ${r.v.name}`),
          el("span", { style: "font-family:var(--mono);color:var(--accent)" }, r.score.toFixed(1)),
        ]));
      });
      topGrid.append(card);
    });
    box.append(topGrid);

    // Alertas de riesgo material
    const alerts = el("div", { style: "background:rgba(179,58,58,0.08);border:1px solid rgba(179,58,58,0.3);border-radius:14px;padding:16px" });
    alerts.append(el("h3", { style: "margin:0 0 10px;font-size:14px;color:#e29090" }, "Alertas de riesgo material"));
    const alertList = el("ul", { style: "margin:0;padding-left:20px;font-size:13px;line-height:1.7" });
    vendors.forEach(v => {
      const crits = (v.notableCves || []).filter(c => c.severity === "Critical");
      const recentInc = (v.incidents || []).filter(i => (i.date || "").startsWith("2024") || (i.date || "").startsWith("2025"));
      if (crits.length >= 2 || recentInc.length >= 2) {
        alertList.append(el("li", {}, `${v.name}: ${crits.length} CVE critico(s), ${recentInc.length} incidente(s) reciente(s). Revisar antes de renovar contrato.`));
      }
    });
    if (!alertList.children.length) alertList.append(el("li", {}, "Sin alertas materiales activas."));
    alerts.append(alertList);
    box.append(alerts);
  }

  function avg(arr) { return arr.length ? arr.reduce((a, b) => a + b, 0) / arr.length : 0; }
  function kpi(parent, label, value, sub) {
    parent.append(el("div", { style: "background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px" }, [
      el("div", { style: "font-size:11px;color:var(--text-dim);text-transform:uppercase;letter-spacing:0.08em" }, label),
      el("div", { style: "font-size:24px;font-weight:700;margin:4px 0" }, String(value)),
      el("div", { style: "font-size:11px;color:var(--text-dim)" }, sub),
    ]));
  }

  // ---------- EXCEL ----------
  qs("#exportXlsx").addEventListener("click", exportXlsx);
  function exportXlsx() {
    if (!window.XLSX) { alert("SheetJS no cargado. Comprueba conexion a CDN."); return; }
    const XLSX = window.XLSX;
    const wb = XLSX.utils.book_new();
    const vendors = DATA.vendors.filter(v => v.id === v.canonical);

    // Sheet 1: Resumen ejecutivo
    const exec = [
      ["EDR/XDR DECISION STUDIO - RESUMEN EJECUTIVO"],
      [""],
      ["Generado", new Date().toISOString().slice(0, 16).replace("T", " ")],
      ["Fuente telemetria", "https://github.com/tsale/EDR-Telemetry"],
      ["Ultimo import", DATA.lastImport],
      ["Vendors cubiertos", vendors.length],
      ["Gartner Leaders EPP 2024", vendors.filter(v => (v.gartner || "").startsWith("Leader")).length],
      ["CVEs totales del agente", vendors.reduce((a, v) => a + (v.notableCves?.length || 0), 0)],
      ["Incidentes publicos", vendors.reduce((a, v) => a + (v.incidents?.length || 0), 0)],
      [""],
      ["SCORING ACTUAL - PRESET " + PRESETS[STATE.scoring.preset].name.toUpperCase() + " - SO " + OS_LABELS[STATE.scoring.osFocus]],
      ["Pesos (%)", "Telemetria", "Gartner", "Forrester", "Historial", "ENS"],
      ["", STATE.scoring.weights.telemetry, STATE.scoring.weights.gartner, STATE.scoring.weights.forrester, STATE.scoring.weights.incidents, STATE.scoring.weights.ens],
    ];
    const ws1 = XLSX.utils.aoa_to_sheet(exec);
    ws1["!cols"] = [{ wch: 32 }, { wch: 16 }, { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 14 }];
    XLSX.utils.book_append_sheet(wb, ws1, "Resumen ejecutivo");

    // Sheet 2: Ranking global
    const rank = [["Vendor", "Producto", "Gartner MQ", "Forrester", "ENS", "Win %", "Linux %", "macOS %", "CVEs", "Criticos", "Incidentes", "Web"]];
    vendors.forEach(v => {
      const crit = (v.notableCves || []).filter(c => c.severity === "Critical").length;
      rank.push([
        v.name, v.product, v.gartner, v.forrester, v.ens,
        v.perOs.windows.present ? +v.perOs.windows.score.toFixed(1) : null,
        v.perOs.linux.present ? +v.perOs.linux.score.toFixed(1) : null,
        v.perOs.macos.present ? +v.perOs.macos.score.toFixed(1) : null,
        (v.notableCves || []).length, crit, (v.incidents || []).length,
        v.website,
      ]);
    });
    const ws2 = XLSX.utils.aoa_to_sheet(rank);
    ws2["!cols"] = [{ wch: 22 }, { wch: 32 }, { wch: 22 }, { wch: 24 }, { wch: 30 }, { wch: 8 }, { wch: 9 }, { wch: 9 }, { wch: 7 }, { wch: 9 }, { wch: 11 }, { wch: 40 }];
    XLSX.utils.book_append_sheet(wb, ws2, "Ranking");

    // Sheets 3-5: telemetry matrix per OS
    ["windows", "linux", "macos"].forEach(osName => {
      const osData = DATA.os[osName];
      const header = ["Categoria", "Sub-feature", ...osData.vendors];
      const rows = [header];
      let lastCat = null;
      osData.features.forEach(f => {
        const catCell = f.category === lastCat ? "" : f.category;
        lastCat = f.category;
        const row = [catCell, f.sub];
        osData.vendors.forEach(v => {
          const s = f.values[v] || "na";
          row.push(DATA.statusLegend[s].label);
        });
        rows.push(row);
      });
      const ws = XLSX.utils.aoa_to_sheet(rows);
      ws["!cols"] = [{ wch: 24 }, { wch: 32 }, ...osData.vendors.map(() => ({ wch: 16 }))];
      XLSX.utils.book_append_sheet(wb, ws, `Matriz ${OS_LABELS[osName]}`);
    });

    // Sheet 6: CVEs
    const cves = [["Vendor", "CVE", "Severidad", "CVSS", "Publicado", "Descripcion", "Nota curada", "Fuente"]];
    vendors.forEach(v => (v.notableCves || []).forEach(c => {
      cves.push([v.name, c.id, c.severity || "-", c.score || "", c.published || "", c.description || "", c.note || "", c.source || ""]);
    }));
    const sevRank = { Critical: 0, High: 1, Medium: 2, Low: 3, Unknown: 4 };
    cves.sort((a, b) => a[0] === "Vendor" ? -1 : (sevRank[a[2]] ?? 9) - (sevRank[b[2]] ?? 9));
    const ws6 = XLSX.utils.aoa_to_sheet(cves);
    ws6["!cols"] = [{ wch: 22 }, { wch: 18 }, { wch: 11 }, { wch: 7 }, { wch: 12 }, { wch: 60 }, { wch: 30 }, { wch: 10 }];
    ws6["!autofilter"] = { ref: "A1:H1" };
    XLSX.utils.book_append_sheet(wb, ws6, "CVEs");

    // Sheet 7: Incidentes
    const inc = [["Vendor", "Fecha", "Titulo", "Impacto", "Fuente"]];
    vendors.forEach(v => (v.incidents || []).forEach(i => {
      inc.push([v.name, i.date || "", i.title || "", i.impact || "", i.url || ""]);
    }));
    inc.sort((a, b) => a[0] === "Vendor" ? -1 : (b[1] || "").localeCompare(a[1] || ""));
    const ws7 = XLSX.utils.aoa_to_sheet(inc);
    ws7["!cols"] = [{ wch: 22 }, { wch: 12 }, { wch: 60 }, { wch: 80 }, { wch: 50 }];
    ws7["!autofilter"] = { ref: "A1:E1" };
    XLSX.utils.book_append_sheet(wb, ws7, "Incidentes");

    // Sheet 8: Scoring segun pesos actuales
    const w = STATE.scoring.weights;
    const tot = Object.values(w).reduce((a, b) => a + b, 0) || 1;
    const scored = vendors.map(v => {
      const telem = v.perOs[STATE.scoring.osFocus]?.score || 0;
      const g = gartnerScore(v.gartner), fr = forresterScore(v.forrester), inc = incidentsScore(v), ens = ensScore(v);
      const score = (telem * w.telemetry + g * w.gartner + fr * w.forrester + inc * w.incidents + ens * w.ens) / tot;
      return [v.name, +score.toFixed(1), +telem.toFixed(1), g, fr, inc, ens];
    }).sort((a, b) => b[1] - a[1]);
    const scoringRows = [
      ["Preset", PRESETS[STATE.scoring.preset].name, "SO focal", OS_LABELS[STATE.scoring.osFocus]],
      ["Peso Telemetria", w.telemetry, "Peso Gartner", w.gartner, "Peso Forrester", w.forrester, "Peso Historial", w.incidents, "Peso ENS", w.ens],
      [],
      ["#", "Vendor", "Score final", "Telemetria", "Gartner raw", "Forrester raw", "Historial raw", "ENS raw"],
      ...scored.map((r, i) => [i + 1, ...r]),
    ];
    const ws8 = XLSX.utils.aoa_to_sheet(scoringRows);
    ws8["!cols"] = [{ wch: 4 }, { wch: 26 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 14 }, { wch: 14 }, { wch: 10 }];
    XLSX.utils.book_append_sheet(wb, ws8, "Scoring");

    // Sheet 9: Metadata por vendor
    const metaSheet = [["Vendor", "Producto", "Fortalezas", "Cautelas", "Web", "Docs"]];
    vendors.forEach(v => metaSheet.push([v.name, v.product, v.strengths || "", v.cautions || "", v.website || "", v.docsUrl || ""]));
    const ws9 = XLSX.utils.aoa_to_sheet(metaSheet);
    ws9["!cols"] = [{ wch: 22 }, { wch: 30 }, { wch: 70 }, { wch: 70 }, { wch: 50 }, { wch: 50 }];
    XLSX.utils.book_append_sheet(wb, ws9, "Vendors");

    XLSX.writeFile(wb, `edr-decision-studio-${new Date().toISOString().slice(0, 10)}.xlsx`);
  }

  // ---------- PDF ----------
  qs("#exportPdf").addEventListener("click", exportPdf);

  function exportPdf() {
    if (!window.jspdf) { alert("jsPDF no cargado. Comprueba conexion a CDN."); return; }
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ orientation: "landscape", unit: "pt", format: "a4" });
    const vendors = DATA.vendors.filter(v => v.id === v.canonical);
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();

    // PORTADA
    doc.setFillColor(11, 16, 32); doc.rect(0, 0, pageW, pageH, "F");
    doc.setFillColor(91, 140, 255); doc.rect(40, 40, 14, 14, "F");
    doc.setTextColor(230); doc.setFont("helvetica", "bold"); doc.setFontSize(10);
    doc.text("EDR/XDR DECISION STUDIO", 62, 52);
    doc.setFont("helvetica", "bold"); doc.setFontSize(26);
    doc.text("Valoracion visual de 26 EDR/XDR", 40, 110);
    doc.setFont("helvetica", "normal"); doc.setFontSize(14);
    doc.text("Telemetria Windows / Linux / macOS · Gartner · Forrester · CVEs · Incidentes", 40, 135);
    doc.setFontSize(10); doc.setTextColor(154, 166, 208);
    doc.text("Fuente: tsale/EDR-Telemetry + NVD + curacion publica", 40, 160);
    doc.text(`Build ${new Date().toISOString().slice(0, 16).replace("T", " ")}`, 40, 175);
    doc.text(`${vendors.length} vendors · ${DATA.os.windows.features.length} features Windows`, 40, 190);

    // RANKING TABLE
    doc.addPage();
    writeHeader(doc, "Ranking de cobertura por SO");
    const rankRows = vendors.map(v => [
      v.name,
      v.gartner || "-",
      v.forrester || "-",
      v.perOs.windows.present ? v.perOs.windows.score.toFixed(1) : "-",
      v.perOs.linux.present ? v.perOs.linux.score.toFixed(1) : "-",
      v.perOs.macos.present ? v.perOs.macos.score.toFixed(1) : "-",
      (v.notableCves || []).length,
      (v.incidents || []).length,
    ]).sort((a, b) => (parseFloat(b[3]) || 0) - (parseFloat(a[3]) || 0));
    doc.autoTable({
      startY: 60,
      head: [["Vendor", "Gartner MQ", "Forrester", "Win %", "Linux %", "macOS %", "CVEs", "Incid."]],
      body: rankRows,
      theme: "striped",
      headStyles: { fillColor: [91, 140, 255], textColor: 255 },
      styles: { fontSize: 9, cellPadding: 4 },
      alternateRowStyles: { fillColor: [245, 247, 255] },
    });

    // SCORING RESULTS (segun estado actual)
    const w = STATE.scoring.weights;
    const total = Object.values(w).reduce((a, b) => a + b, 0) || 1;
    const ranked = vendors.map(v => {
      const telem = v.perOs[STATE.scoring.osFocus]?.score || 0;
      const score = (telem * w.telemetry + gartnerScore(v.gartner) * w.gartner + forresterScore(v.forrester) * w.forrester + incidentsScore(v) * w.incidents + ensScore(v) * w.ens) / total;
      return [v.name, score.toFixed(1), telem.toFixed(1), v.gartner || "-", v.forrester || "-", v.ens || "-"];
    }).sort((a, b) => parseFloat(b[1]) - parseFloat(a[1])).slice(0, 15);
    doc.addPage();
    writeHeader(doc, `Scoring ponderado · Preset ${PRESETS[STATE.scoring.preset].name} · SO ${OS_LABELS[STATE.scoring.osFocus]}`);
    doc.setFontSize(9); doc.setTextColor(80);
    doc.text(`Pesos: Telemetria ${w.telemetry}% · Gartner ${w.gartner}% · Forrester ${w.forrester}% · Historial ${w.incidents}% · ENS ${w.ens}%`, 40, 58);
    doc.autoTable({
      startY: 80,
      head: [["#", "Vendor", "Score", "Telemetria", "Gartner", "Forrester", "ENS"]],
      body: ranked.map((r, i) => [i + 1, ...r]),
      theme: "grid",
      headStyles: { fillColor: [124, 92, 255], textColor: 255 },
      styles: { fontSize: 9, cellPadding: 4 },
    });

    // CVEs
    doc.addPage();
    writeHeader(doc, "CVEs notables del agente (ordenados por severidad)");
    const cveRows = [];
    const sevRank = { Critical: 0, High: 1, Medium: 2, Low: 3, Unknown: 4 };
    vendors.forEach(v => (v.notableCves || []).forEach(c => cveRows.push([
      v.name, c.id, c.severity || "-", c.score || "-", c.published || "-", (c.description || c.note || "").slice(0, 120),
    ])));
    cveRows.sort((a, b) => (sevRank[a[2]] ?? 9) - (sevRank[b[2]] ?? 9));
    doc.autoTable({
      startY: 60,
      head: [["Vendor", "CVE", "Severidad", "CVSS", "Publicado", "Descripcion"]],
      body: cveRows.slice(0, 80),
      theme: "striped",
      headStyles: { fillColor: [179, 58, 58], textColor: 255 },
      styles: { fontSize: 8, cellPadding: 3 },
      columnStyles: { 5: { cellWidth: 320 } },
    });

    // INCIDENTES
    doc.addPage();
    writeHeader(doc, "Incidentes publicos");
    const incRows = [];
    vendors.forEach(v => (v.incidents || []).forEach(i => incRows.push([
      v.name, i.date || "-", (i.title || "").slice(0, 90), (i.impact || "").slice(0, 140),
    ])));
    incRows.sort((a, b) => (b[1] || "").localeCompare(a[1] || ""));
    doc.autoTable({
      startY: 60,
      head: [["Vendor", "Fecha", "Titulo", "Impacto"]],
      body: incRows,
      theme: "striped",
      headStyles: { fillColor: [224, 161, 6], textColor: 40 },
      styles: { fontSize: 8, cellPadding: 3 },
      columnStyles: { 2: { cellWidth: 220 }, 3: { cellWidth: 310 } },
    });

    // FICHAS
    vendors.slice(0, 20).forEach(v => {
      doc.addPage();
      writeHeader(doc, v.name + " — ficha ejecutiva");
      doc.setFontSize(10); doc.setTextColor(30);
      const left = 40; let y = 70;
      const line = (k, val) => { if (!val) return; doc.setFont("helvetica", "bold"); doc.text(k, left, y); doc.setFont("helvetica", "normal"); doc.text(doc.splitTextToSize(String(val), pageW - 180), left + 100, y); y += 16 * Math.max(1, Math.ceil(doc.getTextWidth(String(val)) / (pageW - 180))); };
      line("Producto:", v.product || "-");
      line("Gartner MQ:", v.gartner || "-");
      line("Forrester:", v.forrester || "-");
      line("ENS:", v.ens || "-");
      line("Web:", v.website || "-");
      y += 4;
      const coverage = ["windows", "linux", "macos"].map(o => `${OS_LABELS[o]}: ${v.perOs[o].present ? v.perOs[o].score.toFixed(1) + "%" : "no soportado"}`).join(" · ");
      line("Cobertura:", coverage);
      y += 8;
      if (v.strengths) { doc.setFont("helvetica", "bold"); doc.text("Fortalezas", left, y); y += 14; doc.setFont("helvetica", "normal"); doc.text(doc.splitTextToSize(v.strengths, pageW - 80), left, y); y += 18 + doc.splitTextToSize(v.strengths, pageW - 80).length * 12; }
      if (v.cautions) { doc.setFont("helvetica", "bold"); doc.text("Cautelas", left, y); y += 14; doc.setFont("helvetica", "normal"); doc.text(doc.splitTextToSize(v.cautions, pageW - 80), left, y); y += 18 + doc.splitTextToSize(v.cautions, pageW - 80).length * 12; }

      if (v.notableCves && v.notableCves.length) {
        const rows = v.notableCves.slice(0, 10).map(c => [c.id, c.severity || "-", c.score || "-", c.published || "-", (c.description || c.note || "").slice(0, 100)]);
        doc.autoTable({ startY: y, head: [["CVE", "Severidad", "CVSS", "Publicado", "Descripcion"]], body: rows, theme: "striped", styles: { fontSize: 8 }, headStyles: { fillColor: [179, 58, 58], textColor: 255 } });
        y = doc.lastAutoTable.finalY + 14;
      }
      if (v.incidents && v.incidents.length && y < pageH - 80) {
        const rows = v.incidents.slice(0, 6).map(i => [i.date || "-", (i.title || "").slice(0, 80), (i.impact || "").slice(0, 140)]);
        doc.autoTable({ startY: y, head: [["Fecha", "Titulo", "Impacto"]], body: rows, theme: "striped", styles: { fontSize: 8 }, headStyles: { fillColor: [224, 161, 6], textColor: 40 } });
      }
    });

    // Page numbers
    const pages = doc.internal.getNumberOfPages();
    for (let i = 1; i <= pages; i++) {
      doc.setPage(i);
      doc.setFont("helvetica", "normal"); doc.setFontSize(8); doc.setTextColor(160);
      doc.text(`EDR/XDR Decision Studio · ${i}/${pages}`, pageW - 40, pageH - 20, { align: "right" });
    }

    doc.save(`edr-decision-studio-${new Date().toISOString().slice(0, 10)}.pdf`);
  }

  function writeHeader(doc, title) {
    const w = doc.internal.pageSize.getWidth();
    doc.setFillColor(20, 29, 59); doc.rect(0, 0, w, 42, "F");
    doc.setFillColor(91, 140, 255); doc.rect(20, 14, 14, 14, "F");
    doc.setTextColor(255); doc.setFont("helvetica", "bold"); doc.setFontSize(14);
    doc.text(title, 44, 26);
    doc.setTextColor(20);
  }
  qs("#resetApp").addEventListener("click", () => {
    STATE.compareSel = [];
    STATE.scoring.preset = "balanced";
    STATE.scoring.weights = { ...PRESETS.balanced.weights };
    renderAll();
  });

  // ---------- INIT ----------
  function renderAll() {
    renderLegend();
    renderMatrix();
    renderRanking();
    renderVendors();
    renderCompareControls();
    renderCompare();
    renderRisks();
    renderScoring();
    renderAttack();
    renderExecutive();
  }

  qs("#lastImport").textContent = DATA.lastImport || "-";
  qs("#buildStamp").textContent = `Build ${new Date().toISOString().slice(0, 10)}. ${DATA.vendors.length} vendors.`;

  renderAll();
  setView("matrix");
})();
