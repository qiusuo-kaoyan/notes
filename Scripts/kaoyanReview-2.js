/*
 * kaoyanReview-2.js - 考研数学复习仪表盘
 * 基于 kaoyanDashboard-v20 优化版
 */

// ===================================================================
// 配置中心
// ===================================================================
const CONFIG = {
  mathNotesFolder: "1. Math",
  staleAlertDays: 30,
  alertTiers: [
    { threshold: 10, emoji: '💀', text: '错题较多，建议优先清理', color: 'var(--color-red)' },
    { threshold: 6, emoji: '⚠️', text: '错题量偏高，注意查漏补缺', color: 'var(--color-orange)' },
    { threshold: 1, emoji: '🤔', text: '状态平稳，继续保持', color: 'var(--color-yellow)' },
    { threshold: 0, emoji: '✅', text: '状态绝佳，请保持！', color: 'var(--color-green)' }
  ],
  maxMistakesForHealthBar: 20
};

// ===================================================================
// 辅助函数
// ===================================================================
function getShortFileName(fullName) {
  if (!fullName) return "";
  return fullName.replace(/^.*[\\\/]/, '').replace(/\.md$/, '').replace(/[!]+/g, '').trim();
}

function processKnowledgePoints(kps) {
  if (!kps) return "未分类";
  let points = Array.isArray(kps) ? kps : [kps];
  return points.map(kp => kp.toString()).join(" & ");
}

function extractChapterName(chapter) {
  if (!chapter) return "未分类";
  let rawString = Array.isArray(chapter) ? chapter[0].toString() : chapter.toString();
  const wikilinkMatch = rawString.match(/\[\[(.*?)\]\]/);
  if (wikilinkMatch) {
    let content = wikilinkMatch[1];
    const aliasMatch = content.split('|');
    if (aliasMatch.length > 1) return aliasMatch[1].trim();
    return content.split('/').pop().replace(/\.md$/, '').trim();
  }
  return rawString;
}

function formatDate(d) {
  if (!d) return "N/A";
  if (d.toFormat && typeof d.toFormat === 'function') {
    return d.toFormat("yyyy-MM-dd");
  }
  if (typeof d === 'string') {
    const dateObj = dv.date(d);
    if (dateObj) return dateObj.toFormat("yyyy-MM-dd");
  }
  return "数据源日期异常";
}

function getLastReviewDate(p) {
  return dv.date(p.last_reviewed || p.review_date);
}

// ===================================================================
// 核心渲染
// ===================================================================
function renderKaoyanDashboard() {
  const today = dv.date('today');

  // --- [阶段二] 性能优化：仅扫描 2 次 vault ---
  const allPages = dv.pages();
  const mathPages = allPages.where(p => p.file.path.startsWith(CONFIG.mathNotesFolder));

  const allActionableItems = mathPages.where(p => p.type?.trim() === "题目" || p.type?.trim() === "例题");
  const allProblems = allActionableItems.where(p => p.type?.trim() === "题目");
  const allMistakes = allProblems.where(p => p.status?.trim() === "错题");
  const allExemplars = allActionableItems.where(p => p.type?.trim() === "例题");
  const pendingExemplars = allExemplars.where(p => p.status?.trim() === "待剖析");
  const mistakeCount = allMistakes.length;
  const pendingExemplarCount = pendingExemplars.length;

  // --- 视觉警报系统 ---
  const currentAlert = CONFIG.alertTiers.find(tier => mistakeCount >= tier.threshold)
    || CONFIG.alertTiers[CONFIG.alertTiers.length - 1];
  let healthPercentage = Math.max(0, 100 - (mistakeCount / CONFIG.maxMistakesForHealthBar * 100));
  if (healthPercentage === 0 && mistakeCount > 0) { healthPercentage = 2; }

  const healthBarContainer = dv.container.createEl('div', { cls: 'health-bar-container' });
  if (currentAlert.color === 'var(--color-red)') {
    healthBarContainer.classList.add('pulse-danger');
  }
  healthBarContainer.createEl('div', {
    cls: 'health-bar',
    attr: { style: `width: ${healthPercentage}%; background-color: ${currentAlert.color};` }
  });

  const titleEl = dv.container.createEl('h2', { cls: 'dashboard-title' });
  titleEl.innerHTML = `
    <span class="title-icon">${currentAlert.emoji}</span>
    <span class="title-text">考研数学复习仪表盘</span>
    <span class="title-status" style="color: ${currentAlert.color};">${currentAlert.text}</span>
  `;

  // --- 今日待复习计算 ---
  const reviewMistakes = allMistakes.where(p => {
    const rd = dv.date(p.review_date);
    return rd && rd <= today;
  });
  const reviewToday = reviewMistakes.concat(pendingExemplars);

  // --- [阶段四] 遗忘预警：基于 last_reviewed / review_date ---
  const staleMistakes = allMistakes.where(p => {
    const lastReviewed = getLastReviewDate(p);
    if (!lastReviewed) return false;
    return today - lastReviewed > dv.duration(CONFIG.staleAlertDays + " days");
  });
  const staleExemplars = pendingExemplars.where(p => {
    const lastReviewed = getLastReviewDate(p);
    if (!lastReviewed) return false;
    return today - lastReviewed > dv.duration(CONFIG.staleAlertDays + " days");
  });
  const staleItems = staleMistakes.concat(staleExemplars);

  // --- 数据卡片 ---
  const container = dv.container.createEl('div', { cls: 'dashboard-container' });
  container.createEl('div', { cls: 'dashboard-card' }).innerHTML = `
    <div class="card-title">🚨 当前总错题</div>
    <div class="card-value">${mistakeCount}</div>
    <div class="card-footer">道</div>`;
  container.createEl('div', { cls: 'dashboard-card exemplar-pending' }).innerHTML = `
    <div class="card-title">🔬 待剖析例题</div>
    <div class="card-value">${pendingExemplarCount}</div>
    <div class="card-footer">道</div>`;
  container.createEl('div', { cls: 'dashboard-card review-today' }).innerHTML = `
    <div class="card-title">⏰ 今日待复习</div>
    <div class="card-value">${reviewToday.length}</div>
    <div class="card-footer">项</div>`;
  container.createEl('div', { cls: 'dashboard-card stale' }).innerHTML = `
    <div class="card-title">🧠 遗忘预警</div>
    <div class="card-value">${staleItems.length}</div>
    <div class="card-footer">项(&gt;${CONFIG.staleAlertDays}天)</div>`;

  // --- 模块 1: 章节掌握度分析 ---
  dv.header(3, "📊 章节掌握度分析");
  dv.paragraph("> [!TIP] 红色和橙色代表高错误率章节，请优先关注！点击章节名可直接跳转。");

  const masteryByChapter = allProblems
    .groupBy(p => extractChapterName(p.chapter))
    .map(g => {
      const total = g.rows.length;
      const mistakes = g.rows.filter(r => r.status?.includes("错题")).length;
      const errorRate = total > 0 ? Math.round((mistakes / total) * 100) : 0;
      let barColor = 'var(--color-green)';
      if (errorRate > 50) barColor = 'var(--color-red)';
      else if (errorRate > 25) barColor = 'var(--color-orange)';

      let chapterDisplay = g.key;
      if (g.rows.length > 0) {
        const firstNoteChapter = g.rows[0].chapter;
        if (firstNoteChapter && firstNoteChapter.path) {
          chapterDisplay = `<a href="${firstNoteChapter.path}" data-href="${firstNoteChapter.path}" class="internal-link" target="_blank" rel="noopener" style="color: ${barColor} !important; font-weight: 500;">${g.key}</a>`;
        }
      }
      return {
        chapterDisplay: chapterDisplay,
        masteryBar: `<div class="mastery-bar-container"><div class="mastery-bar" style="width:${100 - errorRate}%; background-color:${barColor};"></div></div>`,
        stats: `${mistakes} / ${total}`,
        errorRate: `${errorRate}%`
      };
    })
    .sort(g => -parseFloat(g.errorRate));

  if (masteryByChapter.length > 0) {
    dv.table(
      ["章节", "掌握度", "错题/总数", "错误率"],
      masteryByChapter.map(m => [m.chapterDisplay, m.masteryBar, m.stats, m.errorRate])
    );
  } else {
    dv.paragraph("> [!INFO] 暂无章节数据。请检查 `1. Math` 下的笔记是否包含 `chapter` 字段。");
  }

  // --- 模块 2: 待剖析经典例题清单 ---
  if (pendingExemplars.length > 0) {
    dv.header(3, "🔬 待剖析经典例题清单");
    dv.paragraph("> [!TIP] 这些是你捕获的、尚未完成剖析的例题，请尽快建模！");
    dv.table(
      ["例题", "来源", "待剖析核心方法"],
      pendingExemplars.sort(p => p.file.cday, 'asc').map(p => [
        p.file.link,
        p.source || "N/A",
        p.method_exemplified || "待关联"
      ])
    );
  }

  // --- 模块 3: 错题本 (按知识点聚合) ---
  dv.header(3, "🎯 错题本 (按知识点聚合)");
  const mistakesByIndividualTopic = {};
  allMistakes.forEach(note => {
    const kps = note.knowledge_points
      ? (Array.isArray(note.knowledge_points) ? note.knowledge_points : [note.knowledge_points])
      : ["未分类"];
    kps.forEach(kp => {
      const key = kp.toString();
      if (!mistakesByIndividualTopic[key]) {
        mistakesByIndividualTopic[key] = [];
      }
      mistakesByIndividualTopic[key].push(note);
    });
  });

  const mistakesTopicArray = Object.keys(mistakesByIndividualTopic)
    .map(topic => ({
      topic: topic,
      count: mistakesByIndividualTopic[topic].length,
      problems: mistakesByIndividualTopic[topic]
        .map(p => dv.fileLink(p.file.path, false, getShortFileName(p.file.name)))
        .join("<br>")
    }))
    .sort((a, b) => b.count - a.count);

  if (mistakesTopicArray.length > 0) {
    dv.table(
      ["薄弱知识点", "错题数", "相关题目"],
      mistakesTopicArray.map(t => [t.topic, t.count, t.problems])
    );
  } else {
    dv.paragraph("> [!INFO] 暂无错题记录。🎉");
  }

  // --- 模块 4: 今日待复习清单 ---
  if (reviewToday.length > 0) {
    dv.header(3, "⏰ 今日待复习清单");
    dv.table(
      ["待办项", "类型", "来源", "核心知识点/方法"],
      reviewToday.map(p => {
        const typeDisplay = p.type === "例题" ? "🔬 例题" : "🔥 错题";
        const knowledgeDisplay = p.type === "例题"
          ? (p.method_exemplified || p.core_method || "N/A")
          : processKnowledgePoints(p.knowledge_points);
        return [p.file.link, typeDisplay, p.source || "N/A", knowledgeDisplay];
      })
    );
  }

  // --- 模块 5: 遗忘预警清单 ---
  if (staleItems.length > 0) {
    dv.header(3, "🧠 遗忘预警清单");
    dv.table(
      ["预警项 (最后复习)", "类型", "来源", "核心知识点/方法"],
      staleItems.map(p => {
        const typeDisplay = p.type === "例题" ? "🔬 例题" : "🔥 错题";
        const knowledgeDisplay = p.type === "例题"
          ? (p.method_exemplified || "N/A")
          : processKnowledgePoints(p.knowledge_points);
        return [
          `${p.file.link}<br><span class="stale-date">${formatDate(getLastReviewDate(p))}</span>`,
          typeDisplay,
          p.source || "N/A",
          knowledgeDisplay
        ];
      })
    );
  }

  // --- 模块 6: 高价值解法模型库 ---
  const masteredExemplars = allExemplars.where(p =>
    p.status?.trim() === "已建模" || p.status?.trim() === "可迁移"
  );
  if (masteredExemplars.length > 0) {
    dv.header(3, "🏆 高价值解法模型库");
    dv.paragraph("> [!SUCCESS] 这是你已经建立的解法模型库。定期回顾，能将解题模式内化为本能。");
    dv.table(
      ["高价值模型 (例题)", "所属章节", "核心方法", "重要性"],
      masteredExemplars
        .sort(p => p.importance, 'desc')
        .map(p => [
          p.file.link,
          extractChapterName(p.chapter) || "未分类",
          p.method_exemplified || "未关联",
          p.importance ? "🔥".repeat(p.importance) : "未评级"
        ])
    );
  }

  // --- 模块 7: 待巩固核心方法清单 ---
  const methods = allPages
    .where(p => p.type === "知识枢纽" && p.mastery && p.mastery !== "熟练应用" && p.mastery !== "炉火纯青")
    .sort(p => p.mastery);
  if (methods.length > 0) {
    dv.header(3, "🧠 待巩固核心方法清单");
    dv.table(
      ["核心方法", "掌握程度", "所属章节", "上次复习"],
      methods.map(m => [m.file.link, m.mastery, m.chapter, formatDate(m.last_reviewed)])
    );
  }

  // --- 模块 8: 高频考点方法论 ---
  const hubPages = allPages.where(p => p.type === "知识枢纽");
  if (hubPages.length > 0) {
    dv.header(3, "👑 高频考点方法论");
    const linkedPages = allActionableItems.where(p => p.knowledge_points || p.method_exemplified);
    const hubData = hubPages
      .map(hub => {
        const hubPath = hub.file.link.path;
        const count = linkedPages.where(p =>
          (p.knowledge_points && dv.array(p.knowledge_points).some(kp => kp.path === hubPath))
          || (p.method_exemplified && p.method_exemplified.path === hubPath)
        ).length;
        return { link: hub.file.link, count: count };
      })
      .sort((a, b) => b.count - a.count)
      .limit(10);
    dv.table(
      ["方法论枢纽", "关联题目/例题数"],
      hubData.map(h => [h.link, h.count])
    );
  }

  // --- 模块 9: 待精通战术卡片 ---
  const tactics = allPages
    .where(p => p.type === "战术卡片" && p.status && p.status !== "实战检验")
    .sort(p => p.status);
  if (tactics.length > 0) {
    dv.header(3, "⚔️ 待精通战术卡片");
    dv.paragraph("> [!TIP] 这些是你考场快速决策的解题套路，多练才能熟练。");
    dv.table(
      ["战术主题", "状态", "所属知识枢纽"],
      tactics.map(t => [t.file.link, t.status, t.parent_hub || "未关联"])
    );
  }

  // --- 模块 10: 待精炼深度解析 ---
  const analyses = allPages
    .where(p => p.type === "深度解析" && p.mastery && p.mastery !== "可迁移")
    .sort(p => p.last_reviewed, 'asc');
  if (analyses.length > 0) {
    dv.header(3, "💎 待精炼深度解析");
    dv.paragraph("> [!TIP] 这些是你知识体系中的核心难点，持续打磨会有高回报。");
    dv.table(
      ["深度解析主题", "掌握程度", "考频", "所属枢纽", "上次复习"],
      analyses.map(a => [
        a.file.link,
        a.mastery,
        a.exam_frequency || "未评估",
        a.parent_hub || "未关联",
        formatDate(a.last_reviewed)
      ])
    );
  }
}

// --- 渲染与样式 ---
try {
  renderKaoyanDashboard();
} catch (e) {
  dv.paragraph(`🔴 **看板渲染出错**: ${e.message}\n\`\`\`\n${e.stack}\n\`\`\``);
}

const style = dv.container.createEl('style');
style.innerHTML = `
@keyframes pulse-red { 0% { box-shadow: 0 0 0 0 rgba(255, 82, 82, 0.7); } 70% { box-shadow: 0 0 5px 10px rgba(255, 82, 82, 0); } 100% { box-shadow: 0 0 0 0 rgba(255, 82, 82, 0); } }
.health-bar-container { height: 8px; width: 100%; background-color: var(--background-modifier-border); border-radius: 4px; margin-bottom: 1.5em; overflow: hidden; }
.health-bar-container.pulse-danger { animation: pulse-red 2s infinite; }
.health-bar { height: 100%; border-radius: 4px; transition: width 0.5s ease-in-out, background-color 0.5s ease-in-out; }
.dashboard-title { display: flex; align-items: center; gap: 0.5em; margin-bottom: 0.5em; }
.title-icon { font-size: 1.2em; }
.title-text { font-weight: 600; }
.title-status { font-size: 0.8em; font-weight: bold; }
.mastery-bar-container { width: 100%; height: 12px; background-color: var(--background-modifier-hover); border-radius: 6px; border: 1px solid var(--background-modifier-border); padding: 1px; box-sizing: border-box; }
.mastery-bar { height: 100%; border-radius: 5px; transition: width 0.3s ease; }
.dashboard-container { display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 2em; }
.dashboard-card { flex: 1; min-width: 150px; padding: 15px; background-color: var(--background-secondary); border-radius: 8px; text-align: center; border: 1px solid var(--background-modifier-border); }
.dashboard-card.exemplar-pending { border-left: 5px solid var(--color-cyan); }
.dashboard-card.review-today { border-left: 5px solid var(--color-orange); }
.dashboard-card.stale { border-left: 5px solid var(--color-red); }
.card-title { font-size: 0.9em; font-weight: 500; color: var(--text-muted); }
.card-value { font-size: 2.5em; font-weight: bold; line-height: 1.2; color: var(--text-normal); }
.card-footer { font-size: 0.8em; color: var(--text-faint); }
.stale-date { font-size: 0.8em; color: var(--text-muted); }
`;
