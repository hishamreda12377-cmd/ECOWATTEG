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
      zone: "Section",
      diff: "Difference",
      totalAuditCost: "Total Audit Cost",
      kwh: "kWh",
      egp: "EGP",
      tariffRate: "Market Tariff Rate",
      entrySuccess: "Entry Synced Successfully",
      costBreakdown: "Section Cost Breakdown",
      newEntry: "New Entry",
      perKwh: "per kWh",
      zoneHealth: "Section Efficiency Health",
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
      low: "Low",
      budgetExceeded: "Budget Exceeded",
      approachingBudget: "Approaching Budget",
      withinBudget: "Within Budget",
      monthlyBudget: "Monthly Budget",
      budget: "Budget",
      setBudget: "Set Budget",
      perMonth: "/mo",
      adviceBudgetTitle: "Review Budget Limits",
      adviceBudgetDesc: "One or more zones are at or near their monthly budget. Consider redistributing load or revising zone limits.",
      adviceBudgetGreenTitle: "Budgets Under Control",
      adviceBudgetGreenDesc: "All zones are within their monthly budgets. Keep monitoring to maintain this discipline.",
      edit: "Edit",
      updateReading: "Update Reading",
      cancelEdit: "Cancel Edit",
      addZone: "Add Section",
      removeZone: "Remove",
      deleteEntry: "Delete",
      confirmDelete: "Delete Entry",
      deleteConfirmMsg: "Delete this entry?",
      monthlySummary: "Monthly Summary",
      monthTotal: "Month Total",
      dailyAvg: "Daily Average",
      peakDay: "Peak Day",
      monthCost: "Month Cost",
      importCSV: "Import CSV",
      zoneColor: "Section Color",
      undo: "Undo",
      draftRestored: "Draft restored",
      aiTitle: "AI Data Insights",
      aiTrend: "Trend",
      aiUp: "Up",
      aiDown: "Down",
      aiStable: "Stable",
      aiAnomaly: "Anomaly",
      aiProjection: "Projection",
      aiAllGood: "All readings within expected range",
      aiAlertNoData: "Add entries to activate AI analysis",
      aiPctMore: "more",
      aiPctLess: "less",
      aiComparedTo: "vs previous period",
      exportPNG: "Export PNG",
      loadMore: "Load More",
      logsNav: "Readings",
      onbWelcome: "Welcome to EcoWatt!",
      onbStep1: "Enter daily readings for each zone",
      onbStep2: "View charts and trends",
      onbStep3: "Get AI-powered efficiency tips",
      onbStep4: "Review your history",
      onbDone: "Got it!",
      facility: "Facility",
      addFacility: "Add Facility",
      facilityName: "Facility Name",
      rename: "Rename",
      delete: "Delete",
      dateFrom: "From",
      dateTo: "To",
      dateFilter: "Date Filter"
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
      zone: "قسم",
      diff: "الفرق",
      totalAuditCost: "إجمالي تكلفة التدقيق",
      kwh: "ك.و.س",
      egp: "ج.م",
      tariffRate: "سعر التعريفة",
      entrySuccess: "تم حفظ البيانات بنجاح",
      costBreakdown: "تفصيل تكلفة الأقسام",
      newEntry: "إدخال جديد",
      perKwh: "لكل ك.و.س",
      zoneHealth: "حالة كفاءة الأقسام",
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
      low: "منخفض",
      budgetExceeded: "تجاوز الميزانية",
      approachingBudget: "اقتراب من الميزانية",
      withinBudget: "ضمن الميزانية",
      monthlyBudget: "الميزانية الشهرية",
      budget: "الميزانية",
      setBudget: "تعيين ميزانية",
      perMonth: "/شهر",
      adviceBudgetTitle: "مراجعة حدود الميزانية",
      adviceBudgetDesc: "منطقة أو أكثر وصلت أو اقتربت من ميزانيتها الشهرية. فكر في إعادة توزيع الأحمال أو مراجعة الحدود.",
      adviceBudgetGreenTitle: "الميزانية تحت السيطرة",
      adviceBudgetGreenDesc: "جميع المناطق ضمن ميزانيتها الشهرية. استمر في المراقبة للحفاظ على هذا الانضباط.",
      edit: "تعديل",
      updateReading: "تحديث القراءة",
      cancelEdit: "إلغاء التعديل",
      addZone: "إضافة قسم",
      removeZone: "حذف",
      deleteEntry: "حذف",
      confirmDelete: "حذف الإدخال",
      deleteConfirmMsg: "هل تريد حذف هذا الإدخال؟",
      monthlySummary: "الملخص الشهري",
      monthTotal: "إجمالي الشهر",
      dailyAvg: "المتوسط اليومي",
      peakDay: "أعلى يوم",
      monthCost: "تكلفة الشهر",
      importCSV: "استيراد CSV",
      zoneColor: "لون القسم",
      undo: "تراجع",
      draftRestored: "تم استعادة المسودة",
      aiTitle: "تحليلات الذكاء الاصطناعي",
      aiTrend: "الاتجاه",
      aiUp: "صاعد",
      aiDown: "هابط",
      aiStable: "مستقر",
      aiAnomaly: "شذوذ",
      aiProjection: "توقع",
      aiAllGood: "جميع القراءات ضمن النطاق المتوقع",
      aiAlertNoData: "أضف إدخالات لتفعيل التحليل الذكي",
      aiPctMore: "أكثر",
      aiPctLess: "أقل",
      aiComparedTo: "مقارنة بالفترة السابقة",
      exportPNG: "تصدير PNG",
      loadMore: "عرض المزيد",
      logsNav: "القراءات",
      onbWelcome: "مرحباً بك في EcoWatt!",
      onbStep1: "أدخل القراءات اليومية لكل منطقة",
      onbStep2: "شاهد المخططات والاتجاهات",
      onbStep3: "احصل على نصائح الكفاءة الذكية",
      onbStep4: "راجع سجل الإدخالات",
      onbDone: "حسناً!",
      facility: "منشأة",
      addFacility: "إضافة منشأة",
      facilityName: "اسم المنشأة",
      rename: "إعادة تسمية",
      delete: "حذف",
      dateFrom: "من",
      dateTo: "إلى",
      dateFilter: "فلتر التاريخ"
    }
  };

  const defaultMeters = {
    en: [
      { name: "Guest Wings (A-C)", budget: 0, color: "#4A90D9" },
      { name: "Commercial Kitchen", budget: 0, color: "#E67E22" },
      { name: "Laundry & Services", budget: 0, color: "#2ECC71" },
      { name: "Pool & Spa Area", budget: 0, color: "#1ABC9C" },
      { name: "Lobby & Administration", budget: 0, color: "#9B59B6" }
    ],
    ar: [
      { name: "أجنحة الضيوف", budget: 0, color: "#4A90D9" },
      { name: "المطبخ التجاري", budget: 0, color: "#E67E22" },
      { name: "المغسلة والخدمات", budget: 0, color: "#2ECC71" },
      { name: "المسبح والسبا", budget: 0, color: "#1ABC9C" },
      { name: "اللوبي والإدارة", budget: 0, color: "#9B59B6" }
    ]
  };

  function defaultMeterNames(lang) {
    return defaultMeters[lang].map((m) => m.name);
  }

  function defaultZoneBudgets(lang) {
    return defaultMeters[lang].map((m) => m.budget);
  }

  function defaultZoneColors(lang) {
    return defaultMeters[lang].map((m) => m.color);
  }

  const state = loadState();
  let chartView = "trends";
  let manualIndex = 0;
  let editingLogId = null;
  let hasAnalysis = false;
  let historyLimit = 8;

  function fac() {
    return state.facilities.find((f) => f.id === state.activeFacilityId) || state.facilities[0];
  }

  function facilityLogs() {
    return state.logs.filter((l) => l.facilityId === state.activeFacilityId);
  }

  function filteredLogs() {
    let logs = facilityLogs();
    if (state.dateFrom) logs = logs.filter((l) => l.date >= state.dateFrom);
    if (state.dateTo) logs = logs.filter((l) => l.date <= state.dateTo);
    return logs;
  }

  function loadState() {
    const fallback = {
      language: "ar",
      dark: window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches,
      facilities: [{
        id: uid(),
        name: "منشأتي",
        meterNames: defaultMeterNames("ar"),
        zoneBudgets: defaultZoneBudgets("ar"),
        zoneColors: defaultZoneColors("ar")
      }],
      activeFacilityId: null,
      dateFrom: "",
      dateTo: "",
      logs: []
    };

    try {
      const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
      if (saved && Array.isArray(saved.logs)) {
        const merged = { ...fallback, ...saved };
        if (!merged.facilities || !merged.facilities.length) {
          merged.facilities = [{
            id: uid(),
            name: merged.language === "ar" ? "منشأتي" : "My Facility",
            meterNames: merged.meterNames || defaultMeterNames(merged.language || "en"),
            zoneBudgets: merged.zoneBudgets || [],
            zoneColors: merged.zoneColors || []
          }];
          delete merged.meterNames;
          delete merged.zoneBudgets;
          delete merged.zoneColors;
        }
        if (!merged.activeFacilityId || !merged.facilities.some((f) => f.id === merged.activeFacilityId)) {
          merged.activeFacilityId = merged.facilities[0].id;
        }
        merged.facilities.forEach((fac) => {
          const lang = merged.language || "en";
          if (!Array.isArray(fac.zoneBudgets)) fac.zoneBudgets = [];
          while (fac.zoneBudgets.length < fac.meterNames.length) fac.zoneBudgets.push(0);
          if (!Array.isArray(fac.zoneColors)) fac.zoneColors = [];
          while (fac.zoneColors.length < fac.meterNames.length) fac.zoneColors.push(defaultZoneColors(lang)[fac.zoneColors.length] || "#888");
        });
        return merged;
      }
      return fallback;
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
    const logs = facilityLogs();
    return logs[logs.length - 1] || { meters: [], totalCost: 0 };
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

  function showToast(message, options) {
    const opts = Object.assign({ duration: 4000, action: null, onAction: null }, options);
    const container = document.getElementById("toastContainer");
    const toast = document.createElement("div");
    toast.className = "toast";
    const text = document.createElement("span");
    text.textContent = message;
    toast.appendChild(text);
    if (opts.action && opts.onAction) {
      const btn = document.createElement("button");
      btn.className = "toast-action";
      btn.textContent = opts.action;
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        opts.onAction();
        dismiss();
      });
      toast.appendChild(btn);
    }
    container.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add("show"));
    let timer = setTimeout(dismiss, opts.duration);
    function dismiss() {
      clearTimeout(timer);
      toast.classList.remove("show");
      toast.addEventListener("transitionend", () => toast.remove(), { once: true });
      setTimeout(() => { if (toast.parentNode) toast.remove(); }, 400);
    }
    return { dismiss };
  }

  function init() {
    bindEvents();
    document.getElementById("entryDate").value = todayISO();
    if (state.dateFrom) document.getElementById("dateFrom").value = state.dateFrom;
    if (state.dateTo) document.getElementById("dateTo").value = state.dateTo;
    applyLanguage();
    renderAll();
    renderFacilitySelector();
    window.addEventListener("resize", drawChart);
    restoreDraft();
    showOnboarding();
  }

  const DRAFT_KEY = "ecowatt_draft";

  function saveDraft() {
    const form = document.getElementById("logForm");
    if (!form || document.getElementById("successSummary").classList.contains("hidden") === false) return;
    const data = { date: document.getElementById("entryDate").value };
    fac().meterNames.forEach((_, index) => {
      const actual = form.elements[`actual-${index}`];
      const ideal = form.elements[`ideal-${index}`];
      if (actual) data[`a-${index}`] = actual.value;
      if (ideal) data[`i-${index}`] = ideal.value;
    });
    try { localStorage.setItem(DRAFT_KEY, JSON.stringify(data)); } catch (e) {}
  }

  function restoreDraft() {
    try {
      const raw = localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const data = JSON.parse(raw);
      const form = document.getElementById("logForm");
      if (!form) return;
      let hasData = false;
      fac().meterNames.forEach((_, index) => {
        const actual = form.elements[`actual-${index}`];
        const ideal = form.elements[`ideal-${index}`];
        if (actual && data[`a-${index}`]) { actual.value = data[`a-${index}`]; if (data[`a-${index}`]) hasData = true; }
        if (ideal && data[`i-${index}`]) { ideal.value = data[`i-${index}`]; if (data[`i-${index}`]) hasData = true; }
      });
      if (data.date) document.getElementById("entryDate").value = data.date;
      if (hasData) showToast(t("draftRestored"));
    } catch (e) {}
  }

  function clearDraft() {
    try { localStorage.removeItem(DRAFT_KEY); } catch (e) {}
  }

  function bindEvents() {
    document.getElementById("themeBtn").addEventListener("click", toggleTheme);
    document.getElementById("languageBtn").addEventListener("click", toggleLanguage);
    document.getElementById("printBtn").addEventListener("click", () => window.print());
    document.getElementById("csvBtn").addEventListener("click", exportCSV);
    document.getElementById("importCsvInput").addEventListener("change", handleImportCSV);
    document.getElementById("importCsvBtn").addEventListener("click", () => document.getElementById("importCsvInput").click());
    document.getElementById("infoToggle").addEventListener("click", () => {
      document.getElementById("complianceBox").classList.toggle("hidden");
    });
    document.getElementById("trendViewBtn").addEventListener("click", () => setChartView("trends"));
    document.getElementById("zoneViewBtn").addEventListener("click", () => setChartView("zones"));
    document.getElementById("exportPngBtn").addEventListener("click", exportChartPNG);
    document.getElementById("refreshAdviceBtn").addEventListener("click", renderAdvice);
    document.getElementById("logForm").addEventListener("submit", submitLog);
    document.getElementById("entryDate").addEventListener("input", saveDraft);
    document.getElementById("newEntryBtn").addEventListener("click", showForm);
    document.getElementById("editZonesBtn").addEventListener("click", startZoneEdit);
    document.getElementById("cancelZonesBtn").addEventListener("click", stopZoneEdit);
    document.getElementById("saveZonesBtn").addEventListener("click", saveZoneEdit);
    document.getElementById("resetDataBtn").addEventListener("click", resetData);
    document.getElementById("loadMoreBtn").addEventListener("click", () => {
      historyLimit += 8;
      renderHistory();
    });

    document.getElementById("zoneEditor").addEventListener("click", (e) => {
      if (e.target.classList.contains("add-zone-btn")) {
        const row = document.createElement("div");
        row.className = "zone-edit-row";
        row.draggable = true;
        row.innerHTML = `
          <span class="drag-handle" aria-label="Drag to reorder">⠿</span>
          <input value="" aria-label="New zone" class="zone-name-input" placeholder="Zone name">
          <label class="budget-label">
            <span>${escapeHTML(t("budget"))}</span>
            <input type="number" min="0" step="1" value="0" class="zone-budget-input" placeholder="0">
          </label>
          <label class="color-label" title="${escapeHTML(t("zoneColor"))}">
            <input type="color" value="#888" class="zone-color-input">
          </label>
          <button class="remove-zone-btn" type="button" title="${escapeHTML(t("removeZone"))}">×</button>
        `;
        e.target.before(row);
      } else if (e.target.classList.contains("remove-zone-btn")) {
        const row = e.target.closest(".zone-edit-row");
        if (row && document.querySelectorAll("#zoneEditor .zone-edit-row").length > 1) {
          row.remove();
        }
      }
    });

    ["manualBtn", "manualMobileBtn"].forEach((id) => {
      document.getElementById(id).addEventListener("click", openManual);
    });
    document.getElementById("closeManualBtn").addEventListener("click", closeManual);
    document.getElementById("manualPrevBtn").addEventListener("click", () => moveManual(-1));
    document.getElementById("manualNextBtn").addEventListener("click", () => moveManual(1));
    document.getElementById("onbDoneBtn").addEventListener("click", dismissOnboarding);
    document.getElementById("facilityManageBtn").addEventListener("click", openFacilityModal);
    document.getElementById("closeFacilityModal").addEventListener("click", closeFacilityModal);
    document.getElementById("addFacilityBtn").addEventListener("click", () => {
      addNewFacility();
      renderFacilitySelector();
    });
    document.getElementById("facilityModal").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeFacilityModal();
    });
    document.getElementById("sidebarToggle").addEventListener("click", toggleSidebar);
    document.getElementById("sidebarClose").addEventListener("click", closeSidebar);
    document.getElementById("sidebarOverlay").addEventListener("click", closeSidebar);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeSidebar(); });
    document.getElementById("sidebarReadingsBtn").addEventListener("click", openReadingsModal);
    document.getElementById("closeReadingsModal").addEventListener("click", closeReadingsModal);
    document.getElementById("readingsModal").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeReadingsModal();
    });
    document.getElementById("readingsBackBtn").addEventListener("click", renderMonthsList);
    document.getElementById("dateFrom").addEventListener("change", (e) => {
      state.dateFrom = e.target.value;
      saveState();
      drawChart();
      renderAdvice();
    });
    document.getElementById("dateTo").addEventListener("change", (e) => {
      state.dateTo = e.target.value;
      saveState();
      drawChart();
      renderAdvice();
    });
  }

  function toggleTheme() {
    state.dark = !state.dark;
    saveState();
    applyTheme();
  }

  function toggleLanguage() {
    const wasDefault =
      JSON.stringify(fac().meterNames) === JSON.stringify(defaultMeterNames(state.language));
    state.language = state.language === "en" ? "ar" : "en";
    if (wasDefault) {
      fac().meterNames = defaultMeterNames(state.language);
      fac().zoneBudgets = defaultZoneBudgets(state.language);
      fac().zoneColors = defaultZoneColors(state.language);
    }
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
    renderMonthlySummary();
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

    const budgets = fac().zoneBudgets || [];
    const colors = fac().zoneColors || [];
    document.getElementById("zoneGrid").innerHTML = log.meters
      .map((meter, idx) => {
        const ratio = meter.idealValue > 0 ? meter.actualValue / meter.idealValue : 0;
        const over = ratio > 1;
        const nearing = ratio > 0.9 && ratio <= 1;
        const color = over ? "var(--red)" : nearing ? "var(--amber)" : "var(--green)";
        const label = over ? t("critical") : nearing ? t("nearingLimit") : t("healthy");
        const pricingInfo = getPricingDetails(meter.actualValue);
        const budgetVal = budgets[idx] || 0;
        const zoneColor = colors[idx] || "#888";
        let budgetHtml = "";
        if (budgetVal > 0) {
          const budgetRatio = meter.actualValue / budgetVal;
          const bOver = budgetRatio >= 1;
          const bNear = budgetRatio >= 0.8 && budgetRatio < 1;
          const bColor = bOver ? "var(--red)" : bNear ? "var(--amber)" : "var(--green)";
          const bLabel = bOver ? t("budgetExceeded") : bNear ? t("approachingBudget") : t("withinBudget");
          budgetHtml = `
            <div class="budget-bar"><span style="width:${Math.min(budgetRatio * 100, 100)}%; background:${bColor}"></span></div>
            <div class="zone-footer">
              <span style="color:${bColor}">${escapeHTML(bLabel)}</span>
              <span>${formatNumber(meter.actualValue)} / ${formatNumber(budgetVal)} ${escapeHTML(t("kwh"))}</span>
            </div>
          `;
        }
        return `
          <article class="zone-card" style="border-left:4px solid ${zoneColor}">
            <strong>${escapeHTML(meter.name)}</strong>
            <small>${formatNumber(pricingInfo.rate, 2)} ${escapeHTML(t("egp"))} ${escapeHTML(t("perKwh"))} | ${escapeHTML(pricingInfo.label)}</small>
            <div class="zone-bar"><span style="width:${Math.min(ratio * 100, 100)}%; background:${color}"></span></div>
            <div class="zone-footer">
              <span style="color:${color}">${escapeHTML(label)}</span>
              <span>${formatNumber(meter.actualValue)} / ${formatNumber(meter.idealValue)} ${escapeHTML(t("kwh"))}</span>
            </div>
            ${budgetHtml}
          </article>
        `;
      })
      .join("");
  }

  function renderMonthlySummary() {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const monthLogs = facilityLogs().filter((log) => {
      const d = new Date(log.date);
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });
    let totalActual = 0;
    let maxDay = 0;
    let totalCost = 0;
    monthLogs.forEach((log) => {
      const t = totals(log);
      totalActual += t.actual;
      maxDay = Math.max(maxDay, t.actual);
      totalCost += log.totalCost;
    });
    const daysSoFar = Math.max(1, now.getDate());
    const dailyAvg = totalActual / daysSoFar;

    const el = document.getElementById("monthlySummary");
    el.innerHTML = `
      <div class="summary-row">
        <div class="summary-stat">
          <span class="summary-value">${formatNumber(totalActual)}</span>
          <span class="summary-label">${escapeHTML(t("monthTotal"))} (${escapeHTML(t("kwh"))})</span>
        </div>
        <div class="summary-stat">
          <span class="summary-value">${formatNumber(dailyAvg)}</span>
          <span class="summary-label">${escapeHTML(t("dailyAvg"))} (${escapeHTML(t("kwh"))})</span>
        </div>
        <div class="summary-stat">
          <span class="summary-value">${formatNumber(maxDay)}</span>
          <span class="summary-label">${escapeHTML(t("peakDay"))} (${escapeHTML(t("kwh"))})</span>
        </div>
        <div class="summary-stat">
          <span class="summary-value">${formatNumber(totalCost, 2)}</span>
          <span class="summary-label">${escapeHTML(t("monthCost"))} (${escapeHTML(t("egp"))})</span>
        </div>
      </div>
    `;
  }

  function exportChartPNG() {
    const canvas = document.getElementById("energyChart");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `ecowatt-${chartView}-${new Date().toISOString().slice(0, 10)}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  function renderMeterFields() {
    const fields = fac().meterNames
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
    document.querySelectorAll("#meterFields input").forEach((el) => el.addEventListener("input", saveDraft));
  }

  function submitLog(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const meters = fac().meterNames
      .map((name, index) => {
        const actual = parseFloat(form.elements[`actual-${index}`].value || "0");
        const ideal = parseFloat(form.elements[`ideal-${index}`].value || "0");
        return { id: uid(), name, actualValue: actual, idealValue: ideal };
      })
      .filter((meter) => meter.actualValue > 0 || meter.idealValue > 0);

    if (meters.length === 0) return;

    const totalKwh = meters.reduce((sum, meter) => sum + meter.actualValue, 0);
    const date = document.getElementById("entryDate").value || todayISO();

    let editedLog;
    if (editingLogId) {
      const existing = state.logs.find((l) => l.id === editingLogId);
      existing.date = date;
      existing.meters = meters;
      existing.totalCost = calculateEGPCost(totalKwh);
      editedLog = existing;
      editingLogId = null;
      form.querySelector("button[type=submit]").textContent = t("syncReadings");
      const cancelBtn = document.getElementById("cancelEditBtn");
      if (cancelBtn) cancelBtn.classList.add("hidden");
      document.getElementById("historyBody").classList.remove("editing");
    } else {
      editedLog = {
        id: uid(),
        date,
        meters,
        facilityId: state.activeFacilityId,
        totalCost: calculateEGPCost(totalKwh)
      };
      state.logs.push(editedLog);
    }

    saveState();
    clearDraft();
    renderAll();
    showSummary(editedLog);
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
    if (editingLogId) {
      editingLogId = null;
      document.getElementById("logForm").querySelector("button[type=submit]").textContent = t("syncReadings");
      const cancelBtn = document.getElementById("cancelEditBtn");
      if (cancelBtn) cancelBtn.classList.add("hidden");
      document.getElementById("historyBody").classList.remove("editing");
    }
    document.getElementById("successSummary").classList.add("hidden");
    document.getElementById("logForm").classList.remove("hidden");
    document.getElementById("logForm").reset();
    document.getElementById("entryDate").value = todayISO();
  }

  function startZoneEdit() {
    const budget = fac().zoneBudgets || [];
    const colors = fac().zoneColors || [];
    const editor = document.getElementById("zoneEditor");
    editor.innerHTML = fac().meterNames
      .map((name, index) => `
        <div class="zone-edit-row" draggable="true" data-zone-row="${index}">
          <span class="drag-handle" aria-label="Drag to reorder">⠿</span>
          <input value="${escapeHTML(name)}" data-zone-index="${index}" aria-label="Zone ${index + 1}" class="zone-name-input">
          <label class="budget-label">
            <span>${escapeHTML(t("budget"))}</span>
            <input type="number" min="0" step="1" value="${budget[index] || 0}" data-budget-index="${index}" class="zone-budget-input" placeholder="0">
          </label>
          <label class="color-label" title="${escapeHTML(t("zoneColor"))}">
            <input type="color" value="${colors[index] || "#888"}" data-color-index="${index}" class="zone-color-input">
          </label>
          <button class="remove-zone-btn" type="button" title="${escapeHTML(t("removeZone"))}">×</button>
        </div>
      `)
      .join("") + `<button class="add-zone-btn" type="button">+ ${escapeHTML(t("addZone"))}</button>`;
    editor.classList.remove("hidden");
    document.getElementById("logForm").classList.add("hidden");
    document.getElementById("editZonesBtn").classList.add("hidden");
    document.getElementById("cancelZonesBtn").classList.remove("hidden");
    document.getElementById("saveZonesBtn").classList.remove("hidden");
    initDragSort(editor);
  }

  function initDragSort(container) {
    let dragSrc = null;
    container.addEventListener("dragstart", (e) => {
      const row = e.target.closest(".zone-edit-row");
      if (!row) return;
      dragSrc = row;
      row.classList.add("dragging");
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData("text/plain", "");
    });
    container.addEventListener("dragend", (e) => {
      const row = e.target.closest(".zone-edit-row");
      if (row) row.classList.remove("dragging");
      document.querySelectorAll(".zone-edit-row").forEach((r) => r.classList.remove("drag-over"));
    });
    container.addEventListener("dragover", (e) => {
      e.preventDefault();
      const row = e.target.closest(".zone-edit-row");
      if (!row || row === dragSrc) return;
      row.classList.add("drag-over");
      const rect = row.getBoundingClientRect();
      const after = e.clientY > rect.top + rect.height / 2;
      row.style.borderBottom = after ? "2px solid var(--blue)" : "";
      row.style.borderTop = !after ? "2px solid var(--blue)" : "";
    });
    container.addEventListener("dragleave", (e) => {
      const row = e.target.closest(".zone-edit-row");
      if (row) { row.classList.remove("drag-over"); row.style.borderBottom = ""; row.style.borderTop = ""; }
    });
    container.addEventListener("drop", (e) => {
      e.preventDefault();
      const row = e.target.closest(".zone-edit-row");
      if (!row || !dragSrc || row === dragSrc) return;
      const rect = row.getBoundingClientRect();
      const after = e.clientY > rect.top + rect.height / 2;
      if (after) row.parentNode.insertBefore(dragSrc, row.nextSibling);
      else row.parentNode.insertBefore(dragSrc, row);
      document.querySelectorAll(".zone-edit-row").forEach((r) => { r.classList.remove("drag-over"); r.style.borderBottom = ""; r.style.borderTop = ""; });
      dragSrc = null;
    });
  }

  function stopZoneEdit() {
    document.getElementById("zoneEditor").classList.add("hidden");
    document.getElementById("logForm").classList.remove("hidden");
    document.getElementById("editZonesBtn").classList.remove("hidden");
    document.getElementById("cancelZonesBtn").classList.add("hidden");
    document.getElementById("saveZonesBtn").classList.add("hidden");
  }

  function saveZoneEdit() {
    const nameInputs = document.querySelectorAll("#zoneEditor .zone-name-input");
    const budgetInputs = document.querySelectorAll("#zoneEditor .zone-budget-input");
    const colorInputs = document.querySelectorAll("#zoneEditor .zone-color-input");
    const names = [];
    const budgets = [];
    const colors = [];
    nameInputs.forEach((input) => {
      const val = input.value.trim();
      if (val) names.push(val);
    });
    budgetInputs.forEach((input) => {
      budgets.push(parseFloat(input.value) || 0);
    });
    colorInputs.forEach((input) => {
      colors.push(input.value || "#888");
    });
    if (names.length > 0) {
      fac().meterNames = names;
      fac().zoneBudgets = budgets;
      fac().zoneColors = colors;
      saveState();
      renderMeterFields();
    }
    stopZoneEdit();
  }

  function switchFacility(id) {
    if (id === state.activeFacilityId) return;
    state.activeFacilityId = id;
    saveState();
    renderAll();
    renderFacilitySelector();
  }

  function addNewFacility() {
    const name = prompt(t("facilityName"));
    if (!name || !name.trim()) return;
    const fac = {
      id: uid(),
      name: name.trim(),
      meterNames: defaultMeterNames(state.language),
      zoneBudgets: defaultZoneBudgets(state.language),
      zoneColors: defaultZoneColors(state.language)
    };
    state.facilities.push(fac);
    state.activeFacilityId = fac.id;
    saveState();
    renderAll();
    renderFacilitySelector();
  }

  function openReadingsModal() {
    document.getElementById("readingsModal").classList.remove("hidden");
    renderMonthsList();
  }

  function closeReadingsModal() {
    document.getElementById("readingsModal").classList.add("hidden");
    document.getElementById("readingsBackBtn").classList.add("hidden");
    document.getElementById("readingsModalTitle").textContent = t("logsNav");
  }

  function renderMonthsList() {
    const body = document.getElementById("readingsModalBody");
    document.getElementById("readingsBackBtn").classList.add("hidden");
    document.getElementById("readingsModalTitle").textContent = t("logsNav");
    const logs = facilityLogs();
    if (!logs.length) {
      body.innerHTML = `<div class="reading-empty">${escapeHTML(t("aiAlertNoData"))}</div>`;
      return;
    }
    const groups = {};
    logs.forEach((log) => {
      const d = new Date(log.date);
      const key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
      if (!groups[key]) groups[key] = [];
      groups[key].push(log);
    });
    const months = Object.keys(groups).sort().reverse();
    body.innerHTML = months
      .map((key) => {
        const [y, m] = key.split("-");
        const date = new Date(+y, +m - 1);
        const label = date.toLocaleDateString(state.language, { year: "numeric", month: "long" });
        return `<button class="reading-month" type="button" data-month="${key}">
          <span class="reading-month-label">${escapeHTML(label)}</span>
          <span class="reading-month-count">${groups[key].length}</span>
          <span class="reading-month-arrow">›</span>
        </button>`;
      })
      .join("");
    body.querySelectorAll(".reading-month").forEach((btn) => {
      btn.addEventListener("click", () => renderDaysList(btn.dataset.month));
    });
  }

  function renderDaysList(monthKey) {
    const body = document.getElementById("readingsModalBody");
    const [y, m] = monthKey.split("-");
    const date = new Date(+y, +m - 1);
    const label = date.toLocaleDateString(state.language, { year: "numeric", month: "long" });
    document.getElementById("readingsBackBtn").classList.remove("hidden");
    document.getElementById("readingsModalTitle").textContent = label;
    const days = facilityLogs()
      .filter((l) => {
        const d = new Date(l.date);
        const key = d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0");
        return key === monthKey;
      })
      .sort((a, b) => b.date.localeCompare(a.date));
    body.innerHTML = days
      .map((d) => {
        const t = totals(d);
        const totalKwh = t ? t.totalActual : 0;
        const dayLabel = new Date(d.date).toLocaleDateString(state.language, { weekday: "short", day: "numeric", month: "short" });
        return `<button class="reading-day" type="button" data-id="${escapeHTML(d.id)}">
          <span class="reading-day-label">${escapeHTML(dayLabel)}</span>
          <span class="reading-day-total">${escapeHTML(formatNumber(totalKwh))} kWh</span>
        </button>`;
      })
      .join("");
    body.querySelectorAll(".reading-day").forEach((btn) => {
      btn.addEventListener("click", () => {
        scrollToLog(btn.dataset.id);
        closeReadingsModal();
        closeSidebar();
      });
    });
  }

  function scrollToLog(id) {
    const row = document.querySelector(`#historyBody tr[data-id="${CSS.escape(id)}"]`);
    if (row) row.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function renderFacilitySelector() {
    const list = document.getElementById("facilityModalList");
    const single = state.facilities.length <= 1;
    list.innerHTML = state.facilities
      .map((f) => {
        const active = f.id === state.activeFacilityId;
        return `
          <div class="facility-modal-row">
            <button class="facility-modal-item${active ? " active" : ""}" type="button" data-id="${escapeHTML(f.id)}">${active ? "✓ " : ""}${escapeHTML(f.name)}</button>
            <button class="facility-modal-action rename-fac" data-id="${escapeHTML(f.id)}" type="button" title="${escapeHTML(t("rename"))}">✎</button>
            ${single ? "" : `<button class="facility-modal-action delete-fac" data-id="${escapeHTML(f.id)}" type="button" title="${escapeHTML(t("delete"))}">🗑</button>`}
          </div>
        `;
      })
      .join("");
    document.querySelectorAll("#facilityModalList .facility-modal-item").forEach((btn) => {
      btn.addEventListener("click", () => {
        switchFacility(btn.dataset.id);
        closeFacilityModal();
      });
    });
    document.querySelectorAll("#facilityModalList .rename-fac").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        renameFacility(btn.dataset.id);
      });
    });
    document.querySelectorAll("#facilityModalList .delete-fac").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        removeFacility(btn.dataset.id);
      });
    });
    document.getElementById("sidebarFacilityName").textContent = fac().name;
  }

  function openFacilityModal() {
    renderFacilitySelector();
    document.getElementById("facilityModal").classList.remove("hidden");
  }

  function closeFacilityModal() {
    document.getElementById("facilityModal").classList.add("hidden");
  }

  function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("open");
    document.getElementById("sidebarOverlay").classList.toggle("open");
  }

  function closeSidebar() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarOverlay").classList.remove("open");
  }

  function renameFacility(id) {
    const f = state.facilities.find((f) => f.id === id);
    if (!f) return;
    const name = prompt(t("facilityName"), f.name);
    if (!name || !name.trim() || name.trim() === f.name) return;
    f.name = name.trim();
    saveState();
    renderFacilitySelector();
    renderAll();
  }

  function removeFacility(id) {
    if (state.facilities.length <= 1) return;
    const name = state.facilities.find((f) => f.id === id)?.name;
    if (!confirm(state.language === "ar" ? `حذف المنشأة "${name}" وجميع بياناتها؟` : `Delete facility "${name}" and all its data?`)) return;
    state.facilities = state.facilities.filter((f) => f.id !== id);
    state.logs = state.logs.filter((l) => l.facilityId !== id);
    if (state.activeFacilityId === id) {
      state.activeFacilityId = state.facilities[0].id;
    }
    saveState();
    renderFacilitySelector();
    renderAll();
  }

  function editLog(id) {
    const log = state.logs.find((l) => l.id === id);
    if (!log) return;
    editingLogId = id;
    document.getElementById("entryDate").value = log.date;
    const form = document.getElementById("logForm");
    log.meters.forEach((meter, index) => {
      const actualInput = form.elements[`actual-${index}`];
      const idealInput = form.elements[`ideal-${index}`];
      if (actualInput) actualInput.value = meter.actualValue;
      if (idealInput) idealInput.value = meter.idealValue;
    });
    document.getElementById("successSummary").classList.add("hidden");
    document.getElementById("logForm").classList.remove("hidden");

    const submitBtn = form.querySelector("button[type=submit]");
    submitBtn.textContent = t("updateReading");

    if (!document.getElementById("cancelEditBtn")) {
      const cancelBtn = document.createElement("button");
      cancelBtn.id = "cancelEditBtn";
      cancelBtn.type = "button";
      cancelBtn.className = "ghost-btn cancel-edit-btn";
      cancelBtn.textContent = t("cancelEdit");
      cancelBtn.addEventListener("click", cancelEditing);
      submitBtn.parentNode.insertBefore(cancelBtn, submitBtn.nextSibling);
    } else {
      document.getElementById("cancelEditBtn").classList.remove("hidden");
    }

    document.getElementById("historyBody").classList.add("editing");
    window.scrollTo({ top: document.querySelector(".log-card").offsetTop - 20, behavior: "smooth" });
  }

  function cancelEditing() {
    editingLogId = null;
    const form = document.getElementById("logForm");
    form.querySelector("button[type=submit]").textContent = t("syncReadings");
    const cancelBtn = document.getElementById("cancelEditBtn");
    if (cancelBtn) cancelBtn.classList.add("hidden");
    document.getElementById("historyBody").classList.remove("editing");
    showForm();
  }

  function deleteLog(id) {
    const idx = state.logs.findIndex((l) => l.id === id);
    if (idx === -1) return;
    const removed = state.logs.splice(idx, 1)[0];
    if (editingLogId === id) cancelEditing();
    saveState();
    renderAll();
    showToast(t("deleteConfirmMsg"), {
      duration: 5000,
      action: t("undo"),
      onAction: () => {
        state.logs.push(removed);
        saveState();
        renderAll();
      }
    });
  }

  function renderHistory() {
    const rows = [...facilityLogs()].reverse();
    const limited = rows.slice(0, historyLimit);
    document.getElementById("historyBody").innerHTML = limited
      .map((log) => {
        const total = totals(log);
        return `
          <tr data-id="${escapeHTML(log.id)}" class="${editingLogId === log.id ? "editing-row" : ""}">
            <td>${escapeHTML(new Date(log.date).toLocaleDateString(state.language))}</td>
            <td>${formatNumber(total.actual)} ${escapeHTML(t("kwh"))}</td>
            <td>${formatNumber(total.ideal)} ${escapeHTML(t("kwh"))}</td>
            <td>${formatNumber(log.totalCost, 2)} ${escapeHTML(t("egp"))}</td>
            <td class="action-col">
              <button class="edit-btn" data-id="${escapeHTML(log.id)}" type="button" title="${escapeHTML(t("edit"))}">✎</button>
              <button class="delete-btn" data-id="${escapeHTML(log.id)}" type="button" title="${escapeHTML(t("deleteEntry"))}">🗑</button>
            </td>
          </tr>
        `;
      })
      .join("");
    document.querySelectorAll("#historyBody .edit-btn").forEach((btn) => {
      btn.addEventListener("click", () => editLog(btn.dataset.id));
    });
    document.querySelectorAll("#historyBody .delete-btn").forEach((btn) => {
      btn.addEventListener("click", () => deleteLog(btn.dataset.id));
    });
    const btn = document.getElementById("loadMoreBtn");
    if (rows.length > historyLimit) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
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
    const skeleton = document.getElementById("chartSkeleton");
    if (skeleton) skeleton.classList.remove("hidden");

    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    canvas.width = Math.max(320, Math.floor(rect.width * ratio));
    canvas.height = Math.max(260, Math.floor(rect.height * ratio));

    const ctx = canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, rect.width, rect.height);

    if (chartView === "zones") drawZoneChart(ctx, rect.width, rect.height);
    else drawTrendChart(ctx, rect.width, rect.height);

    if (skeleton) skeleton.classList.add("hidden");
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
    const data = filteredLogs()
      .map((log) => ({ date: log.date, ...totals(log) }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (!data.length) {
      ctx.fillStyle = colors.text;
      ctx.font = "800 14px system-ui";
      ctx.textAlign = "center";
      ctx.fillText(t("aiAlertNoData"), width / 2, height / 2);
      return;
    }

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

    ctx.fillStyle = colors.actual;
    ctx.font = "700 12px system-ui";
    data.forEach((item, index) => {
      const [x, y] = point(item, index, "actual");
      ctx.fillText(formatNumber(item.actual), x, y - 10);
    });
  }

  function drawZoneChart(ctx, width, height) {
    const colors = chartColors();
    const log = latestLog();
    const zoneColors = fac().zoneColors || [];
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
      const zColor = zoneColors[index] || colors.actual;
      roundRect(ctx, pad.left, y + 2, idealW, 14, 7, colors.ideal, 0.45);
      roundRect(ctx, pad.left, y + 21, actualW, 14, 7, zColor, 1);

      ctx.font = "700 11px system-ui";
      ctx.fillStyle = colors.text;
      ctx.textAlign = "left";
      const idealLabel = formatNumber(meter.idealValue);
      const actualLabel = formatNumber(meter.actualValue);
      ctx.fillText(idealLabel, pad.left + idealW + 6, y + 14);
      ctx.fillStyle = zColor;
      ctx.fillText(actualLabel, pad.left + actualW + 6, y + 33);
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

  function analyzeData() {
    const sorted = [...filteredLogs()].sort((a, b) => new Date(a.date) - new Date(b.date));
    if (sorted.length < 2) return null;

    const split = Math.max(1, Math.floor(sorted.length * 0.65));
    const recent = sorted.slice(split);
    const prev = sorted.slice(0, split);

    function avgTotals(entries) {
      if (!entries.length) return { actual: 0, ideal: 0 };
      let a = 0, i = 0;
      entries.forEach((e) => { const t = totals(e); a += t.actual; i += t.ideal; });
      return { actual: a / entries.length, ideal: i / entries.length };
    }

    const recentAvg = avgTotals(recent);
    const prevAvg = avgTotals(prev);
    const trendDir = recentAvg.actual > prevAvg.actual * 1.05 ? "up" : recentAvg.actual < prevAvg.actual * 0.95 ? "down" : "stable";
    const trendPct = prevAvg.actual > 0 ? Math.round(Math.abs((recentAvg.actual - prevAvg.actual) / prevAvg.actual * 100)) : 0;

    const zoneNames = fac().meterNames;
    const anomalies = [];
    zoneNames.forEach((name, idx) => {
      const vals = sorted.map((l) => {
        const m = l.meters.find((m) => m.name === name);
        return m ? m.actualValue : 0;
      }).filter((v) => v > 0);
      if (vals.length < 3) return;
      const mean = vals.reduce((s, v) => s + v, 0) / vals.length;
      const std = Math.sqrt(vals.reduce((s, v) => s + (v - mean) ** 2, 0) / vals.length);
      if (std < 1) return;
      const last = vals[vals.length - 1];
      if (Math.abs(last - mean) > 2 * std) {
        anomalies.push({ zone: name, value: last, avg: Math.round(mean), deviation: Math.round((last - mean) / std * 10) / 10 });
      }
    });

    const now = new Date();
    const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
    const dayOfMonth = now.getDate();
    const monthLogs = sorted.filter((l) => {
      const d = new Date(l.date);
      return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    });
    let monthTotal = 0;
    monthLogs.forEach((l) => { monthTotal += totals(l).actual; });
    const monthAvg = Math.max(1, dayOfMonth);
    const projected = Math.round((monthTotal / monthAvg) * daysInMonth);
    const tierDiff = projected > 1000 ? projected - 1000 : 1000 - projected;
    const tierStatus = projected > 1000 ? "over" : projected > 850 ? "near" : "safe";

    const dayTotals = {};
    sorted.forEach((l) => {
      const d = new Date(l.date);
      const day = d.toLocaleDateString("en", { weekday: "long" });
      const t = totals(l);
      if (!dayTotals[day]) dayTotals[day] = { sum: 0, count: 0 };
      dayTotals[day].sum += t.actual;
      dayTotals[day].count++;
    });
    const dayPattern = Object.entries(dayTotals)
      .map(([day, data]) => ({ day, avg: data.sum / data.count }))
      .sort((a, b) => b.avg - a.avg);

    return {
      trendDir, trendPct, recentAvg: recentAvg.actual, prevAvg: prevAvg.actual,
      anomalies, projected, tierDiff, tierStatus, dayPattern,
      totalLogs: sorted.length, monthTotal, monthLogs: monthLogs.length
    };
  }

  function renderAdvice() {
    const log = latestLog();
    const total = totals(log);
    const overZones = log.meters.filter((meter) => meter.idealValue > 0 && meter.actualValue > meter.idealValue);
    const budgets = fac().zoneBudgets || [];
    const advice = [];
    const analysis = analyzeData();
    hasAnalysis = analysis !== null;

    if (analysis && analysis.anomalies.length) {
      const a = analysis.anomalies[0];
      advice.push({ impact: "high", title: `${t("aiAnomaly")}: ${escapeHTML(a.zone)}`, desc: `${escapeHTML(a.zone)} at ${formatNumber(a.value)} kWh (avg ${formatNumber(a.avg)} kWh, ${a.deviation}σ)` });
    }

    if (overZones.length) {
      advice.push({ impact: "high", title: t("adviceOverTitle"), desc: t("adviceOverDesc") });
    }
    if (total.actual >= 900) {
      advice.push({ impact: "high", title: t("adviceTierTitle"), desc: t("adviceTierDesc") });
    }

    if (analysis && analysis.trendDir !== "stable") {
      const dirLabel = analysis.trendDir === "up" ? t("aiUp") : t("aiDown");
      const dirWord = analysis.trendDir === "up" ? t("aiPctMore") : t("aiPctLess");
      advice.push({ impact: analysis.trendDir === "up" ? "high" : "low", title: `${t("aiTrend")}: ${dirLabel}`, desc: `${formatNumber(analysis.trendPct)}% ${dirWord} ${t("aiComparedTo")} (${formatNumber(analysis.prevAvg)} → ${formatNumber(analysis.recentAvg)})` });
    }

    if (analysis) {
      const proj = analysis.projected;
      const tierLabel = analysis.tierStatus === "over" ? t("critical") : analysis.tierStatus === "near" ? t("nearingLimit") : t("healthy");
      advice.push({ impact: analysis.tierStatus === "over" ? "high" : "low", title: `${t("aiProjection")}: ${formatNumber(proj)} ${t("kwh")}`, desc: `${tierLabel} — ${analysis.tierStatus === "over" ? `${formatNumber(analysis.tierDiff)} ${t("kwh")} ${t("adviceOverTitle")}` : `${formatNumber(analysis.tierDiff)} ${t("kwh")} ${t("budget")}`}` });
    }

    if (analysis && analysis.dayPattern.length) {
      const peak = analysis.dayPattern[0];
      advice.push({ impact: "medium", title: `${peak.day}: ${formatNumber(peak.avg)} ${t("kwh")}`, desc: `${t("adviceBalanceDesc")}` });
    }

    const budgetOver = log.meters.some((meter, idx) => {
      const b = budgets[idx] || 0;
      return b > 0 && meter.actualValue >= b;
    });
    const budgetNear = log.meters.some((meter, idx) => {
      const b = budgets[idx] || 0;
      return b > 0 && meter.actualValue >= b * 0.8 && meter.actualValue < b;
    });
    if (budgetOver || budgetNear) {
      advice.push({ impact: "high", title: t("adviceBudgetTitle"), desc: t("adviceBudgetDesc") });
    } else if (budgets.some((b) => b > 0)) {
      advice.push({ impact: "low", title: t("adviceBudgetGreenTitle"), desc: t("adviceBudgetGreenDesc") });
    }

    if (facilityLogs().length) {
      advice.push({ impact: "medium", title: t("adviceBalanceTitle"), desc: t("adviceBalanceDesc") });
      advice.push({ impact: "medium", title: t("adviceDustTitle"), desc: t("adviceDustDesc") });
      if (!overZones.length && total.actual < 900 && (!analysis || !analysis.anomalies.length)) {
        advice.push({ impact: "low", title: t("adviceHealthyTitle"), desc: t("adviceHealthyDesc") });
      }
    }

    const noData = !facilityLogs().length;
    document.getElementById("adviceGrid").innerHTML = noData
      ? `<article class="advice-card span-all"><p>${escapeHTML(t("aiAlertNoData"))}</p></article>`
      : advice.slice(0, 6).map((item) => `
          <article class="advice-card">
            <span class="impact ${item.impact}">${escapeHTML(t(item.impact))}</span>
            <h3>${escapeHTML(item.title)}</h3>
            <p>${escapeHTML(item.desc)}</p>
          </article>
        `).join("");
  }

  function handleImportCSV(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const text = e.target.result;
        const lines = text.split("\n").filter((l) => l.trim());
        const groups = {};
        for (let i = 1; i < lines.length; i++) {
          const parts = lines[i].split(",").map((p) => p.replace(/^"|"$/g, "").trim());
          if (parts.length < 6) continue;
          const date = parts[0];
          if (!groups[date]) groups[date] = [];
          groups[date].push({
            name: parts[1],
            actual: parseFloat(parts[2]) || 0,
            ideal: parseFloat(parts[3]) || 0
          });
        }
        const imported = [];
        for (const date of Object.keys(groups)) {
          const meters = groups[date].map((m) => {
            const pricing = getPricingDetails(m.actual);
            return { name: m.name, actualValue: m.actual, idealValue: m.ideal, cost: pricing.cost };
          });
          const totalCost = meters.reduce((s, m) => s + m.cost, 0);
          imported.push({ id: uid(), date, meters, facilityId: state.activeFacilityId, totalCost });
        }
        if (imported.length > 0) {
          state.logs.push(...imported);
          saveState();
          renderAll();
        }
      } catch (err) {
        console.error("CSV import error:", err);
      }
    };
    reader.readAsText(file);
    event.target.value = "";
  }

  function exportCSV() {
    const rows = [[t("reportDate"), t("zone"), t("actual"), t("ideal"), t("diff"), t("estBilling")]];
    facilityLogs().forEach((log) => {
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

  function registerSW() {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("sw.js").catch(() => {});
    }
  }

  function showOnboarding() {
    if (localStorage.getItem("ecowatt_onboarded")) return;
    const overlay = document.getElementById("onbOverlay");
    overlay.classList.remove("hidden");
    const steps = [
      t("onbStep1"),
      t("onbStep2"),
      t("onbStep3"),
      t("onbStep4")
    ];
    document.getElementById("onbSteps").innerHTML = steps
      .map((s, i) => `<div class="onb-step"><span class="onb-num">${i + 1}</span><span>${escapeHTML(s)}</span></div>`)
      .join("");
  }

  function dismissOnboarding() {
    localStorage.setItem("ecowatt_onboarded", "1");
    document.getElementById("onbOverlay").classList.add("hidden");
  }

  document.addEventListener("DOMContentLoaded", () => {
    init();
    registerSW();
  });
})();
