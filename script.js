(function () {
  "use strict";

  const STORAGE_KEY = "ecowatt_static_state_v1";

  const translations = {
    en: {
      title: "EcoWatt EG",
      subtitle: "Hotel Grid Optimizer",
      opsHeader: "Hospitality Operations",
      opsSubtitle: "Grid Load & Expenditure Analysis (EGP)",
      totalLoad: "Total Current Load",
      idealLimit: "Facility Ideal Limit",
      limitExceeded: "Limit Exceeded",
      potentialSavings: "Potential Savings",
      estBilling: "Estimated Billing",
      analyticsHeader: "Consumption Analytics",
      analyticsSubtitle: "Tracking grid efficiency across Egyptian commercial tiers.",
      trends: "Trends",
      zones: "Zones",
      advisorTitle: "Efficiency Advisor",
      advisorSubtitle: "Local recommendations generated without Gemini or external API keys.",
      refreshInsights: "Refresh Insights",
      addUsageData: "Add usage data to generate custom efficiency insights.",
      dailyEntry: "Daily Grid Entry",
      save: "Save",
      cancel: "Cancel",
      editZones: "Edit Zones",
      actual: "Actual",
      ideal: "Ideal",
      syncReadings: "Sync Readings",
      gridCompliance: "Egyptian Grid Compliance",
      complianceText1: "Electricity prices for commercial sectors in Egypt are tiered. Exceeding 1000 kWh per month shifts the entire bill to a flat higher rate, making precise zone management critical for profitability.",
      complianceText2: "EcoWatt monitors zone thresholds and warns when a facility area approaches its budget, helping prevent expensive tier shifts.",
      opStatus: "Operational Status",
      activeZones: "Active Zones",
      currentTier: "Current Tier",
      nominal: "Syncing",
      pdfReport: "PDF Report",
      excelReport: "CSV Data",
      footer: "ECOWATT ENTERPRISE v3.0 | EGYPT GRID MODULE",
      reportDate: "Report Date",
      zone: "Zone",
      diff: "Difference",
      totalAuditCost: "Total Audit Cost",
      kwh: "kWh",
      egp: "EGP",
      tariffRate: "Market Tariff Rate",
      entrySuccess: "Entry Synced Successfully",
      costBreakdown: "Zone Cost Breakdown",
      newEntry: "New Entry",
      perKwh: "per kWh",
      zoneHealth: "Zone Efficiency Health",
      nearingLimit: "Nearing Limit",
      healthy: "Optimal",
      critical: "Critical Overuse",
      manualBtn: "Strategy Manual",
      close: "Close Manual",
      historyTitle: "Recent Entries",
      historySubtitle: "The latest saved audits are stored in this browser.",
      resetData: "Reset Data",
      visionTitle: "The Vision",
      visionDesc: "Turn energy consumption from a variable cost into a managed strategic asset.",
      manualSlide1Text: "Break the hotel into logical zones such as rooms, kitchen, laundry, pool and lobby. Exact zone tracking turns broad utility bills into decisions staff can act on.",
      problemTitle: "The Problem",
      problemDesc: "Small daily overruns can push a facility into expensive commercial tariff behavior.",
      manualSlide2Text: "The 1000 kWh threshold is the danger line. When total load approaches it, reduce discretionary loads first and move heavy activities to planned windows.",
      solutionTitle: "The Solution",
      solutionDesc: "Daily entry, tier checks, zone health and local recommendations in one static dashboard.",
      manualSlide3Text: "This static version removes Gemini completely. It uses local rules and browser storage, so it can run on normal hosting without server build steps or API secrets.",
      adviceOverTitle: "Treat Critical Zones First",
      adviceOverDesc: "Reduce the highest over-limit zone before optimizing healthy areas. That gives the fastest bill impact.",
      adviceTierTitle: "Watch the 1000 kWh Trap",
      adviceTierDesc: "Your total load is near or above the flat-rate threshold. Delay laundry, pumping or kitchen loads where possible.",
      adviceBalanceTitle: "Rebalance Operating Windows",
      adviceBalanceDesc: "Move heavy consumption away from the same hour to avoid unnecessary peaks across the facility.",
      adviceHealthyTitle: "Keep Current Discipline",
      adviceHealthyDesc: "Most zones are within target. Keep recording daily readings to catch drift early.",
      adviceDustTitle: "Dust and Heat Maintenance",
      adviceDustDesc: "Schedule frequent filter and condenser checks in dusty months to protect cooling efficiency.",
      high: "High",
      medium: "Medium",
      low: "Low"
    },
    ar: {
      title: "إيكو وات مصر",
      subtitle: "محسن شبكة الفنادق",
      opsHeader: "عمليات الضيافة",
      opsSubtitle: "تحليل أحمال الكهرباء والمصروفات بالجنيه المصري",
      totalLoad: "إجمالي الحمل الحالي",
      idealLimit: "الحد المثالي للمنشأة",
      limitExceeded: "تجاوز الحد",
      potentialSavings: "توفير محتمل",
      estBilling: "الفاتورة التقديرية",
      analyticsHeader: "تحليلات الاستهلاك",
      analyticsSubtitle: "متابعة كفاءة الشبكة حسب شرائح الكهرباء التجارية.",
      trends: "الاتجاهات",
      zones: "المناطق",
      advisorTitle: "مستشار الكفاءة",
      advisorSubtitle: "اقتراحات محلية بدون Gemini وبدون أي مفاتيح API خارجية.",
      refreshInsights: "تحديث النصائح",
      addUsageData: "أضف بيانات الاستخدام لإظهار نصائح مخصصة.",
      dailyEntry: "إدخال قراءة يومية",
      save: "حفظ",
      cancel: "إلغاء",
      editZones: "تعديل المناطق",
      actual: "الفعلي",
      ideal: "المثالي",
      syncReadings: "حفظ القراءات",
      gridCompliance: "الامتثال لشبكة الكهرباء المصرية",
      complianceText1: "أسعار الكهرباء التجارية في مصر تعتمد على شرائح. الاقتراب من 1000 ك.و.س أو تجاوزها قد يرفع التكلفة بشكل كبير، لذلك إدارة كل منطقة بدقة مهمة للربحية.",
      complianceText2: "إيكو وات يراقب حدود المناطق ويعرض إنذارات مبكرة عند اقتراب أي منطقة من ميزانيتها.",
      opStatus: "الحالة التشغيلية",
      activeZones: "المناطق النشطة",
      currentTier: "الشريحة الحالية",
      nominal: "متزامن",
      pdfReport: "تقرير PDF",
      excelReport: "بيانات CSV",
      footer: "إيكو وات إصدار 3.0 | وحدة شبكة مصر",
      reportDate: "تاريخ التقرير",
      zone: "المنطقة",
      diff: "الفرق",
      totalAuditCost: "إجمالي تكلفة التدقيق",
      kwh: "ك.و.س",
      egp: "ج.م",
      tariffRate: "سعر التعريفة",
      entrySuccess: "تم حفظ البيانات بنجاح",
      costBreakdown: "تفصيل تكلفة المناطق",
      newEntry: "إدخال جديد",
      perKwh: "لكل ك.و.س",
      zoneHealth: "حالة كفاءة المناطق",
      nearingLimit: "قريب من الحد",
      healthy: "مثالي",
      critical: "استهلاك حرج",
      manualBtn: "دليل الاستراتيجية",
      close: "إغلاق الدليل",
      historyTitle: "آخر الإدخالات",
      historySubtitle: "آخر عمليات التدقيق محفوظة داخل هذا المتصفح.",
      resetData: "مسح البيانات",
      visionTitle: "الرؤية",
      visionDesc: "تحويل استهلاك الطاقة من تكلفة متغيرة إلى أصل استراتيجي مدار.",
      manualSlide1Text: "قسّم الفندق إلى مناطق منطقية مثل الغرف والمطبخ والمغسلة والمسبح واللوبي. تتبع كل منطقة يجعل الفاتورة العامة قرارات واضحة يمكن تنفيذها.",
      problemTitle: "المشكلة",
      problemDesc: "تجاوزات يومية صغيرة قد تدفع المنشأة إلى تكلفة تجارية أعلى.",
      manualSlide2Text: "حد 1000 ك.و.س هو خط الخطر. عند الاقتراب منه، قلل الأحمال غير الضرورية أولًا وانقل الأنشطة الثقيلة لأوقات مخططة.",
      solutionTitle: "الحل",
      solutionDesc: "إدخال يومي، متابعة الشرائح، صحة المناطق، ونصائح محلية داخل لوحة واحدة ثابتة.",
      manualSlide3Text: "هذه النسخة الثابتة تحذف Gemini بالكامل. تعمل بقواعد محلية وتخزين داخل المتصفح، لذلك تصلح لأي استضافة عادية بدون بناء أو أسرار API.",
      adviceOverTitle: "ابدأ بالمناطق الحرجة",
      adviceOverDesc: "قلل أعلى منطقة متجاوزة للحد قبل تحسين المناطق السليمة. هذا يعطي أسرع تأثير على الفاتورة.",
      adviceTierTitle: "انتبه لفخ 1000 ك.و.س",
      adviceTierDesc: "إجمالي الحمل قريب أو أعلى من حد السعر المرتفع. أجّل أحمال المغسلة أو المضخات أو المطبخ عند الإمكان.",
      adviceBalanceTitle: "أعد توزيع أوقات التشغيل",
      adviceBalanceDesc: "انقل الأحمال الثقيلة بعيدًا عن نفس الساعة لتقليل الذروة داخل المنشأة.",
      adviceHealthyTitle: "استمر على نفس الانضباط",
      adviceHealthyDesc: "معظم المناطق داخل الهدف. استمر في تسجيل القراءات يوميًا لاكتشاف أي انحراف مبكرًا.",
      adviceDustTitle: "صيانة الحرارة والغبار",
      adviceDustDesc: "كثّف تنظيف الفلاتر والمكثفات في أشهر الغبار لحماية كفاءة التبريد.",
      high: "مرتفع",
      medium: "متوسط",
      low: "منخفض"
    }
  };

  const defaultMeterNames = {
    en: [
      "Guest Wings (A-C)",
      "Commercial Kitchen",
      "Laundry & Services",
      "Pool & Spa Area",
      "Lobby & Administration"
    ],
    ar: [
      "أجنحة الضيوف",
      "المطبخ التجاري",
      "المغسلة والخدمات",
      "المسبح والسبا",
      "اللوبي والإدارة"
    ]
  };

  const state = loadState();
  let chartView = "trends";
  let manualIndex = 0;

  function loadState() {
    const fallback = {
      language: "en",
      dark: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
      meterNames: defaultMeterNames.en.slice(),
      logs: [
        {
          id: uid(),
          date: "2024-03-01",
          meters: [
            { id: uid(), name: "Guest Wings (A-C)", actualValue: 450, idealValue: 400 },
            { id: uid(), name: "Commercial Kitchen", actualValue: 210, idealValue: 250 },
            { id: uid(), name: "Laundry & Services", actualValue: 180, idealValue: 150 },
            { id: uid(), name: "Pool & Spa Area", actualValue: 95, idealValue: 100 },
            { id: uid(), name: "Lobby & Administration", actualValue: 45, idealValue: 50 }
          ],
          totalCost: calculateEGPCost(980)
        }
      ]
    };

    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return saved && Array.isArray(saved.logs) ? { ...fallback, ...saved } : fallback;
    } catch (error) {
      return fallback;
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function uid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "id-" + Date.now().toString(36) + Math.random().toString(36).slice(2);
  }

  function t(key) {
    return translations[state.language][key] || translations.en[key] || key;
  }

  function getPricingDetails(kwh) {
    const value = Number(kwh) || 0;
    if (value <= 0) return { cost: 0, rate: 0.85, tier: 1, label: "Tier 1" };
    if (value > 1000) return { cost: value * 2.33, rate: 2.33, tier: 5, label: "Tier 5" };
    if (value <= 100) return { cost: value * 0.85, rate: 0.85, tier: 1, label: "Tier 1" };
    if (value <= 250) return { cost: value * 1.68, rate: 1.68, tier: 2, label: "Tier 2" };
    if (value <= 600) return { cost: value * 2.2, rate: 2.2, tier: 3, label: "Tier 3" };
    return { cost: value * 2.27, rate: 2.27, tier: 4, label: "Tier 4" };
  }

  function calculateEGPCost(kwh) {
    return getPricingDetails(kwh).cost;
  }

  function latestLog() {
    return state.logs[state.logs.length - 1];
  }

  function totals(log) {
    const actual = log.meters.reduce((sum, meter) => sum + meter.actualValue, 0);
    const ideal = log.meters.reduce((sum, meter) => sum + meter.idealValue, 0);
    return { actual, ideal, diff: ideal - actual };
  }

  function formatNumber(value, digits = 0) {
    return Number(value || 0).toLocaleString(state.language, {
      minimumFractionDigits: digits,
      maximumFractionDigits: digits
    });
  }

  function todayISO() {
    return new Date().toISOString().split("T")[0];
  }

  function escapeHTML(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function init() {
    bindEvents();
    document.getElementById("entryDate").value = todayISO();
    applyLanguage();
    renderAll();
    window.addEventListener("resize", drawChart);
  }

  function bindEvents() {
    document.getElementById("themeBtn").addEventListener("click", toggleTheme);
    document.getElementById("languageBtn").addEventListener("click", toggleLanguage);
    document.getElementById("printBtn").addEventListener("click", () => window.print());
    document.getElementById("csvBtn").addEventListener("click", exportCSV);
    document.getElementById("infoToggle").addEventListener("click", () => {
      document.getElementById("complianceBox").classList.toggle("hidden");
    });
    document.getElementById("trendViewBtn").addEventListener("click", () => setChartView("trends"));
    document.getElementById("zoneViewBtn").addEventListener("click", () => setChartView("zones"));
    document.getElementById("refreshAdviceBtn").addEventListener("click", renderAdvice);
    document.getElementById("logForm").addEventListener("submit", submitLog);
    document.getElementById("newEntryBtn").addEventListener("click", showForm);
    document.getElementById("editZonesBtn").addEventListener("click", startZoneEdit);
    document.getElementById("cancelZonesBtn").addEventListener("click", stopZoneEdit);
    document.getElementById("saveZonesBtn").addEventListener("click", saveZoneEdit);
    document.getElementById("resetDataBtn").addEventListener("click", resetData);

    ["manualBtn", "manualMobileBtn"].forEach((id) => {
      document.getElementById(id).addEventListener("click", openManual);
    });
    document.getElementById("closeManualBtn").addEventListener("click", closeManual);
    document.getElementById("manualPrevBtn").addEventListener("click", () => moveManual(-1));
    document.getElementById("manualNextBtn").addEventListener("click", () => moveManual(1));
  }

  function toggleTheme() {
    state.dark = !state.dark;
    saveState();
    applyTheme();
  }

  function toggleLanguage() {
    const wasDefault =
      JSON.stringify(state.meterNames) === JSON.stringify(defaultMeterNames[state.language]);
    state.language = state.language === "en" ? "ar" : "en";
    if (wasDefault) state.meterNames = defaultMeterNames[state.language].slice();
    saveState();
    applyLanguage();
    renderAll();
  }

  function applyTheme() {
    document.body.classList.toggle("dark", state.dark);
    document.getElementById("themeIcon").textContent = state.dark ? "☀" : "☾";
  }

  function applyLanguage() {
    document.documentElement.lang = state.language;
    document.body.dir = state.language === "ar" ? "rtl" : "ltr";
    document.body.setAttribute("dir", document.body.dir);
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });
    document.getElementById("languageBtn").textContent = state.language === "en" ? "AR" : "EN";
    applyTheme();
  }

  function renderAll() {
    renderStats();
    renderStatus();
    renderMeterFields();
    renderHistory();
    renderAdvice();
    drawChart();
  }

  function renderStats() {
    const log = latestLog();
    const total = totals(log);
    const isOver = total.diff < 0;
    const cards = [
      { label: t("totalLoad"), value: total.actual, unit: t("kwh"), icon: "⚡", color: "var(--blue)" },
      { label: t("idealLimit"), value: total.ideal, unit: t("kwh"), icon: "◎", color: "var(--muted)" },
      {
        label: isOver ? t("limitExceeded") : t("potentialSavings"),
        value: Math.abs(total.diff),
        unit: t("kwh"),
        icon: isOver ? "!" : "✓",
        color: isOver ? "var(--red)" : "var(--green)"
      },
      { label: t("estBilling"), value: log.totalCost, unit: t("egp"), icon: "EG", color: "#6366f1", digits: 2 }
    ];

    document.getElementById("statsGrid").innerHTML = cards
      .map(
        (card) => `
          <article class="stat-card">
            <div class="stat-top">
              <small>${escapeHTML(card.label)}</small>
              <span class="stat-icon">${escapeHTML(card.icon)}</span>
            </div>
            <div class="stat-value">
              <strong style="color:${card.color}">${formatNumber(card.value, card.digits || 0)}</strong>
              <span>${escapeHTML(card.unit)}</span>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderStatus() {
    const log = latestLog();
    const total = totals(log);
    const pricing = getPricingDetails(total.actual);

    document.getElementById("tariffRate").textContent = formatNumber(pricing.rate, 2);
    document.getElementById("activeZones").textContent = formatNumber(log.meters.length);
    document.getElementById("currentTier").textContent = pricing.label;

    document.getElementById("zoneGrid").innerHTML = log.meters
      .map((meter) => {
        const ratio = meter.idealValue > 0 ? meter.actualValue / meter.idealValue : 0;
        const over = ratio > 1;
        const nearing = ratio > 0.9 && ratio <= 1;
        const color = over ? "var(--red)" : nearing ? "var(--amber)" : "var(--green)";
        const label = over ? t("critical") : nearing ? t("nearingLimit") : t("healthy");
        const pricingInfo = getPricingDetails(meter.actualValue);
        return `
          <article class="zone-card">
            <strong>${escapeHTML(meter.name)}</strong>
            <small>${formatNumber(pricingInfo.rate, 2)} ${escapeHTML(t("egp"))} ${escapeHTML(t("perKwh"))} | ${escapeHTML(pricingInfo.label)}</small>
            <div class="zone-bar"><span style="width:${Math.min(ratio * 100, 100)}%; background:${color}"></span></div>
            <div class="zone-footer">
              <span style="color:${color}">${escapeHTML(label)}</span>
              <span>${formatNumber(meter.actualValue)} / ${formatNumber(meter.idealValue)} ${escapeHTML(t("kwh"))}</span>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderMeterFields() {
    const fields = state.meterNames
      .map(
        (name, index) => `
          <article class="meter-row">
            <h3>${escapeHTML(name)}</h3>
            <div class="meter-inputs">
              <label>
                <span>${escapeHTML(t("actual"))}</span>
                <input type="number" inputmode="decimal" min="0" step="0.01" name="actual-${index}" placeholder="0.0">
              </label>
              <label>
                <span>${escapeHTML(t("ideal"))}</span>
                <input type="number" inputmode="decimal" min="0" step="0.01" name="ideal-${index}" placeholder="0.0">
              </label>
            </div>
          </article>
        `
      )
      .join("");
    document.getElementById("meterFields").innerHTML = fields;
  }

  function submitLog(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const meters = state.meterNames
      .map((name, index) => {
        const actual = parseFloat(form.elements[`actual-${index}`].value || "0");
        const ideal = parseFloat(form.elements[`ideal-${index}`].value || "0");
        return { id: uid(), name, actualValue: actual, idealValue: ideal };
      })
      .filter((meter) => meter.actualValue > 0 || meter.idealValue > 0);

    if (meters.length === 0) return;

    const totalKwh = meters.reduce((sum, meter) => sum + meter.actualValue, 0);
    const log = {
      id: uid(),
      date: document.getElementById("entryDate").value || todayISO(),
      meters,
      totalCost: calculateEGPCost(totalKwh)
    };

    state.logs.push(log);
    saveState();
    renderAll();
    showSummary(log);
  }

  function showSummary(log) {
    document.getElementById("logForm").classList.add("hidden");
    document.getElementById("successSummary").classList.remove("hidden");
    document.getElementById("costBreakdown").innerHTML = log.meters
      .map((meter) => {
        const price = getPricingDetails(meter.actualValue);
        return `
          <div class="breakdown-item">
            <span>${escapeHTML(meter.name)}<br><small>${formatNumber(meter.actualValue, 2)} ${escapeHTML(t("kwh"))} @ ${formatNumber(price.rate, 2)}</small></span>
            <strong>${formatNumber(price.cost, 2)} ${escapeHTML(t("egp"))}</strong>
          </div>
        `;
      })
      .join("");
    document.getElementById("summaryTotal").textContent = `${formatNumber(log.totalCost, 2)} ${t("egp")}`;
  }

  function showForm() {
    document.getElementById("successSummary").classList.add("hidden");
    document.getElementById("logForm").classList.remove("hidden");
    document.getElementById("logForm").reset();
    document.getElementById("entryDate").value = todayISO();
  }

  function startZoneEdit() {
    document.getElementById("zoneEditor").innerHTML = state.meterNames
      .map((name, index) => `<input value="${escapeHTML(name)}" data-zone-index="${index}" aria-label="Zone ${index + 1}">`)
      .join("");
    document.getElementById("zoneEditor").classList.remove("hidden");
    document.getElementById("logForm").classList.add("hidden");
    document.getElementById("editZonesBtn").classList.add("hidden");
    document.getElementById("cancelZonesBtn").classList.remove("hidden");
    document.getElementById("saveZonesBtn").classList.remove("hidden");
  }

  function stopZoneEdit() {
    document.getElementById("zoneEditor").classList.add("hidden");
    document.getElementById("logForm").classList.remove("hidden");
    document.getElementById("editZonesBtn").classList.remove("hidden");
    document.getElementById("cancelZonesBtn").classList.add("hidden");
    document.getElementById("saveZonesBtn").classList.add("hidden");
  }

  function saveZoneEdit() {
    const names = Array.from(document.querySelectorAll("#zoneEditor input"))
      .map((input) => input.value.trim())
      .filter(Boolean);
    if (names.length > 0) {
      state.meterNames = names;
      saveState();
      renderMeterFields();
    }
    stopZoneEdit();
  }

  function renderHistory() {
    document.getElementById("historyBody").innerHTML = state.logs
      .slice()
      .reverse()
      .slice(0, 8)
      .map((log) => {
        const total = totals(log);
        return `
          <tr>
            <td>${escapeHTML(new Date(log.date).toLocaleDateString(state.language))}</td>
            <td>${formatNumber(total.actual)} ${escapeHTML(t("kwh"))}</td>
            <td>${formatNumber(total.ideal)} ${escapeHTML(t("kwh"))}</td>
            <td>${formatNumber(log.totalCost, 2)} ${escapeHTML(t("egp"))}</td>
          </tr>
        `;
      })
      .join("");
  }

  function setChartView(view) {
    chartView = view;
    document.querySelectorAll(".segmented button").forEach((button) => {
      button.classList.toggle("active", button.dataset.view === view);
    });
    drawChart();
  }

  function drawChart() {
    const canvas = document.getElementById("energyChart");
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.max(320, Math.floor(rect.width * ratio));
    canvas.height = Math.max(260, Math.floor(rect.height * ratio));

    const ctx = canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    if (chartView === "zones") drawZoneChart(ctx, rect.width, rect.height);
    else drawTrendChart(ctx, rect.width, rect.height);
  }

  function chartColors() {
    const dark = document.body.classList.contains("dark");
    return {
      grid: dark ? "rgba(148,163,184,0.16)" : "rgba(100,116,139,0.2)",
      text: dark ? "#94a3b8" : "#64748b",
      actual: "#3b82f6",
      ideal: "#94a3b8",
      fill: "rgba(59,130,246,0.12)"
    };
  }

  function drawTrendChart(ctx, width, height) {
    const colors = chartColors();
    const pad = { top: 20, right: 26, bottom: 48, left: state.language === "ar" ? 26 : 46 };
    const data = state.logs
      .map((log) => ({ date: log.date, ...totals(log) }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    const values = data.flatMap((item) => [item.actual, item.ideal]);
    const max = Math.max(100, ...values) * 1.12;
    const plotW = width - pad.left - pad.right;
    const plotH = height - pad.top - pad.bottom;

    drawGrid(ctx, width, height, pad, max, colors);

    const point = (item, index, key) => {
      const x = pad.left + (data.length === 1 ? plotW / 2 : (index / (data.length - 1)) * plotW);
      const y = pad.top + plotH - (item[key] / max) * plotH;
      return [x, y];
    };

    drawLine(ctx, data.map((item, i) => point(item, i, "actual")), colors.actual, 4, colors.fill, pad.top + plotH);
    drawLine(ctx, data.map((item, i) => point(item, i, "ideal")), colors.ideal, 2, null, null, [8, 8]);

    ctx.fillStyle = colors.text;
    ctx.font = "800 11px system-ui";
    ctx.textAlign = "center";
    data.forEach((item, index) => {
      const [x] = point(item, index, "actual");
      const label = new Date(item.date).toLocaleDateString(state.language, { day: "numeric", month: "short" });
      ctx.fillText(label, x, height - 18);
    });
  }

  function drawZoneChart(ctx, width, height) {
    const colors = chartColors();
    const log = latestLog();
    const pad = { top: 18, right: 24, bottom: 32, left: state.language === "ar" ? 24 : 130 };
    const plotW = width - pad.left - pad.right;
    const rowH = Math.min(54, (height - pad.top - pad.bottom) / Math.max(log.meters.length, 1));
    const max = Math.max(100, ...log.meters.flatMap((meter) => [meter.actualValue, meter.idealValue])) * 1.12;

    ctx.strokeStyle = colors.grid;
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const x = pad.left + (plotW * i) / 4;
      ctx.beginPath();
      ctx.moveTo(x, pad.top);
      ctx.lineTo(x, height - pad.bottom);
      ctx.stroke();
    }

    log.meters.forEach((meter, index) => {
      const y = pad.top + index * rowH + 8;
      const labelX = state.language === "ar" ? width - 130 : 8;
      ctx.fillStyle = colors.text;
      ctx.font = "800 11px system-ui";
      ctx.textAlign = state.language === "ar" ? "right" : "left";
      ctx.fillText(meter.name.slice(0, 20), labelX, y + 18);

      const actualW = (meter.actualValue / max) * plotW;
      const idealW = (meter.idealValue / max) * plotW;
      roundRect(ctx, pad.left, y + 2, idealW, 14, 7, colors.ideal, 0.45);
      roundRect(ctx, pad.left, y + 21, actualW, 14, 7, colors.actual, 1);
    });
  }

  function drawGrid(ctx, width, height, pad, max, colors) {
    const plotW = width - pad.left - pad.right;
    const plotH = height - pad.top - pad.bottom;
    ctx.strokeStyle = colors.grid;
    ctx.fillStyle = colors.text;
    ctx.lineWidth = 1;
    ctx.font = "800 11px system-ui";
    ctx.textAlign = state.language === "ar" ? "left" : "right";
    for (let i = 0; i <= 4; i++) {
      const y = pad.top + (plotH * i) / 4;
      const value = Math.round(max - (max * i) / 4);
      ctx.beginPath();
      ctx.moveTo(pad.left, y);
      ctx.lineTo(pad.left + plotW, y);
      ctx.stroke();
      ctx.fillText(formatNumber(value), state.language === "ar" ? pad.left + plotW + 18 : pad.left - 10, y + 4);
    }
  }

  function drawLine(ctx, points, color, width, fill, bottomY, dash) {
    if (!points.length) return;
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    if (dash) ctx.setLineDash(dash);
    ctx.beginPath();
    points.forEach(([x, y], index) => {
      if (index === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    if (fill && bottomY) {
      ctx.lineTo(points[points.length - 1][0], bottomY);
      ctx.lineTo(points[0][0], bottomY);
      ctx.closePath();
      ctx.fillStyle = fill;
      ctx.fill();
    }

    ctx.setLineDash([]);
    points.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x, y, 4, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
    });
    ctx.restore();
  }

  function roundRect(ctx, x, y, w, h, r, color, alpha) {
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.fill();
    ctx.restore();
  }

  function renderAdvice() {
    const log = latestLog();
    const total = totals(log);
    const overZones = log.meters.filter((meter) => meter.idealValue > 0 && meter.actualValue > meter.idealValue);
    const advice = [];

    if (overZones.length) {
      advice.push({ impact: "high", title: t("adviceOverTitle"), desc: t("adviceOverDesc") });
    }
    if (total.actual >= 900) {
      advice.push({ impact: "high", title: t("adviceTierTitle"), desc: t("adviceTierDesc") });
    }
    advice.push({ impact: "medium", title: t("adviceBalanceTitle"), desc: t("adviceBalanceDesc") });
    advice.push({ impact: "medium", title: t("adviceDustTitle"), desc: t("adviceDustDesc") });
    if (!overZones.length && total.actual < 900) {
      advice.push({ impact: "low", title: t("adviceHealthyTitle"), desc: t("adviceHealthyDesc") });
    }

    document.getElementById("adviceGrid").innerHTML = advice
      .slice(0, 6)
      .map(
        (item) => `
          <article class="advice-card">
            <span class="impact ${item.impact}">${escapeHTML(t(item.impact))}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.desc)}</p>
          </article>
        `
      )
      .join("");
  }

  function exportCSV() {
    const rows = [[t("reportDate"), t("zone"), t("actual"), t("ideal"), t("diff"), t("estBilling")]];
    state.logs.forEach((log) => {
      log.meters.forEach((meter) => {
        const price = getPricingDetails(meter.actualValue);
        rows.push([log.date, meter.name, meter.actualValue, meter.idealValue, meter.idealValue - meter.actualValue, price.cost.toFixed(2)]);
      });
    });
    const csv = rows.map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `EcoWatt_Report_${todayISO()}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(link.href);
  }

  function resetData() {
    if (!confirm(state.language === "ar" ? "هل تريد مسح البيانات المحفوظة؟" : "Reset saved dashboard data?")) return;
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }

  function manualSlides() {
    return [
      { icon: "◎", title: t("visionTitle"), lead: t("visionDesc"), detail: t("manualSlide1Text") },
      { icon: "!", title: t("problemTitle"), lead: t("problemDesc"), detail: t("manualSlide2Text") },
      { icon: "◆", title: t("solutionTitle"), lead: t("solutionDesc"), detail: t("manualSlide3Text") }
    ];
  }

  function openManual() {
    manualIndex = 0;
    document.getElementById("manualModal").classList.remove("hidden");
    renderManual();
  }

  function closeManual() {
    document.getElementById("manualModal").classList.add("hidden");
  }

  function moveManual(step) {
    const slides = manualSlides();
    if (manualIndex === slides.length - 1 && step > 0) {
      closeManual();
      return;
    }
    manualIndex = Math.max(0, Math.min(slides.length - 1, manualIndex + step));
    renderManual();
  }

  function renderManual() {
    const slides = manualSlides();
    const slide = slides[manualIndex];
    document.getElementById("manualContent").innerHTML = `
      <span class="manual-icon">${escapeHTML(slide.icon)}</span>
      <h3>${escapeHTML(slide.title)}</h3>
      <p class="lead">${escapeHTML(slide.lead)}</p>
      <p class="detail">${escapeHTML(slide.detail)}</p>
    `;
    document.getElementById("manualDots").innerHTML = slides
      .map((_, index) => `<button class="${index === manualIndex ? "active" : ""}" type="button" data-index="${index}" aria-label="Slide ${index + 1}"></button>`)
      .join("");
    document.querySelectorAll("#manualDots button").forEach((button) => {
      button.addEventListener("click", () => {
        manualIndex = Number(button.dataset.index);
        renderManual();
      });
    });
    document.getElementById("manualPrevBtn").disabled = manualIndex === 0;
    document.getElementById("manualNextBtn").textContent = manualIndex === slides.length - 1 ? t("close") : "Next";
  }

  document.addEventListener("DOMContentLoaded", init);
})();
