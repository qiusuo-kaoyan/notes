---
type: 周复盘
year: {{date: YYYY}}
week_num: {{date: WW}}
status: 进行中
tags:
  - 复盘
  - 周报
---
请优先打造本周的周复盘报告！

<div style=”background-color: rgba(var(--color-purple-rgb), 0.1); border-left: 5px solid var(--color-purple); padding: 15px 20px; border-radius: 8px; margin: 1.5em 0;”>
<strong style=”color: var(--text-accent-2); font-size: 1.2em;”>舰长，欢迎来到周度航行指挥室。</strong><br>
<span style=”color: var(--text-normal);”>过去一周的学习记录已汇总。下面是基于数据生成的本周概览，供你复盘参考。</span>
</div>

---
## 📊 Part 1: 本周学习数据概览

> [!TIP] 这部分根据你本周的笔记自动生成，是后续复盘的事实基础。

```dataviewjs
// --- 最终毕业版: v-XV-Priority-Scheduling (优先级调度版) ---
// 本次升级装载了三级价值排序系统，确保复盘能聚焦于最高价值的产出与问题。

// --- I. 全局配置区 (Global Configuration) ---
const CONFIG = {
    problemNoteFolder: "1. Math",
    dailyLogFolder: "5. 考研日记/日记" 
};

// --- II. 核心时间引擎 (Core Time Engine) ---
const fileYear = dv.current().year;
const fileWeekNum = dv.current().week_num;

if (typeof fileYear !== 'number' || typeof fileWeekNum !== 'number') {
    dv.paragraph("⏳ **模板预览模式：** 您的周度航行战报将在此处自动生成。请从该模板创建新笔记，并在元数据中填写 `year` 和 `week_num` 以正式激活指挥中心。");
    return;
}

const weekStart = dv.luxon.DateTime.fromObject({ weekYear: fileYear, weekNumber: fileWeekNum }).startOf('week');
const weekEnd = weekStart.endOf('week');

// --- III. 智能思想提取器 (Intelligent Thought Extractor) ---
function extractReflection(content, keyword) {
    const regex = new RegExp(`> \\d+\\.\\s+\\*\\*${keyword}.*?\\n((?:.|\\n)*?)(?=> \\d+\\.|\\n---|##|\\z)`);
    const match = content.match(regex);
    if (!match || !match[1] || !match[1].trim() === "") return "尚未记录，期待您的思考…";
    let cleanedContent = match[1].split('\n').map(line => line.replace(/^>\s*\t?/, '').replace(/^\s*\d+\.\s*/, '').trim()).filter(line => line.length > 0).join('<br>');
    return cleanedContent.length > 0 ? cleanedContent : "尚未记录，期待您的思考…";
}

// --- IV. 数据获取与处理 (Data Acquisition & Processing) ---
const notesDoneThisWeek = dv.pages(`"${CONFIG.problemNoteFolder}"`).where(p => { const doneDate = p.done_date ? dv.date(p.done_date) : null; return (p.type?.trim() === "题目" || p.type?.trim() === "例题") && doneDate && doneDate >= weekStart && doneDate <= weekEnd; });
const mistakesThisWeek = notesDoneThisWeek.where(p => p.type?.trim() === "题目" && p.status?.trim() === "错题");
const modeledExemplarsThisWeek = notesDoneThisWeek.where(p => { const isExemplar = p.type?.trim() === "例题"; const isModeled = ["已建模", "可迁移"].includes(p.status?.trim()); return isExemplar && isModeled; });
const weekISOStart = weekStart.toISODate(); const weekISOEnd = weekEnd.toISODate();
const newCreations = dv.pages().where(p => { const cDate = p.file.cday.toISODate(); return cDate >= weekISOStart && cDate <= weekISOEnd && ["知识枢纽", "深度解析", "战术卡片"].includes(p.type?.trim()); });
const newHubs = newCreations.where(p => p.type?.trim() === "知识枢纽");
const newAnalyses = newCreations.where(p => p.type?.trim() === "深度解析");
const newTactics = newCreations.where(p => p.type?.trim() === "战术卡片");
const dailyLogsThisWeek = dv.pages(`"${CONFIG.dailyLogFolder}"`).where(p => { const logDate = p.file.day || (p.date ? dv.date(p.date) : null); return p.type === "日记" && logDate && logDate >= weekStart && logDate <= weekEnd; }).sort(p => p.file.day || p.date, 'asc');

// --- V. 自动化战报渲染 (Automated Battle-Report Rendering) ---
dv.header(4, "📈 本周核心数据");
const container = dv.container.createEl('div', { cls: 'dashboard-container' });
function createCard(title, value, unit, icon, color) { const card = container.createEl('div', { cls: 'dashboard-card', attr: {style: `border-left-color: ${color};`} }); const iconEl = card.createEl('div', { cls: 'card-icon', text: icon }); const contentEl = card.createEl('div', { cls: 'card-content' }); contentEl.createEl('div', { cls: 'card-value', text: value }); contentEl.createEl('div', { cls: 'card-title', text: `${title} (${unit})` }); }
createCard("新增错题", mistakesThisWeek.length, "道", "🔥", "var(--color-red)");
createCard("已建模例题", modeledExemplarsThisWeek.length, "道", "🏆", "var(--color-gold)");
createCard("新建知识枢纽", newHubs.length, "个", "🧠", "var(--color-purple)");
createCard("新建深度解析", newAnalyses.length, "篇", "💎", "var(--color-cyan)");
createCard("新建战术卡片", newTactics.length, "张", "⚔️", "var(--color-yellow)");


// --- [v-XV UPGRADE] “本周战功墙”渲染模块 ---
const itemsDoneThisWeek = notesDoneThisWeek;
if (itemsDoneThisWeek.length > 0) {
    dv.header(4, "📝 本周已做题目与例题");

    const newItemsThisWeek = itemsDoneThisWeek.where(p => ["错题", "已做", "未做", "待剖析"].includes(p.status?.trim()));
    const masteredItemsThisWeek = itemsDoneThisWeek.where(p => ["掌握", "已建模", "可迁移"].includes(p.status?.trim()));

    if (newItemsThisWeek.length > 0) {
        dv.paragraph(`**🔥 新增待消化 (${newItemsThisWeek.length}项)**`);
        dv.table(
            ["条目", "类型", "来源", "重要性", "难度"],
            newItemsThisWeek
                // 第三排序：按ID升序
                .sort(p => p.id, 'asc')
                // 第二排序：按难度降序
                .sort(p => p.difficulty, 'desc')
                // 首要排序：按重要性降序
                .sort(p => p.importance, 'desc')
                .map(p => [
                    p.file.link,
                    p.type?.trim() === "例题" ? "🔬 例题" : "✏️ 题目",
                    p.source || "N/A",
                    p.importance ? "🔥".repeat(p.importance) : "-",
                    p.difficulty ? "⭐".repeat(p.difficulty) : "-"
                ])
        );
    }

    if (masteredItemsThisWeek.length > 0) {
        dv.paragraph(`**✅ 本周已掌握 (${masteredItemsThisWeek.length}项)**`);
         dv.table(
            ["条目", "类型", "来源", "重要性", "难度"],
            masteredItemsThisWeek
                // 第三排序：按ID升序
                .sort(p => p.id, 'asc')
                // 第二排序：按难度降序
                .sort(p => p.difficulty, 'desc')
                // 首要排序：按重要性降序
                .sort(p => p.importance, 'desc')
                .map(p => [
                    p.file.link,
                    p.type?.trim() === "例题" ? "🔬 例题" : "✏️ 题目",
                    p.source || "N/A",
                    p.importance ? "🔥".repeat(p.importance) : "-",
                    p.difficulty ? "⭐".repeat(p.difficulty) : "-"
                ])
        );
    }
} else {
    dv.paragraph("本周没有记录任何已完成的题目或例题。");
}


// --- 军备与日志回顾模块 (保持不变) ---
if (newCreations.length > 0) { dv.header(4, "💡 本周新增知识资产"); dv.list(newCreations.map(p => { let emoji = p.type === "知识枢纽" ? "🧠" : (p.type === "深度解析" ? "💎" : "⚔️"); return `${emoji} ${p.file.link}`; })); }
if (dailyLogsThisWeek.length > 0) {
    dv.header(4, "📜 本周舰长航行日志回顾");
    const logsContainer = dv.container.createEl('div', {cls: "logs-container"});
    for (let log of dailyLogsThisWeek) {
        const content = await dv.io.load(log.file.path);
        const peakMoment = extractReflection(content, "今日高光");
        const gritMoment = extractReflection(content, "坚韧时刻");
        const details = logsContainer.createEl("details", {cls: "log-details", attr: {open: true}});
        const summary = details.createEl("summary");
        const linkEl = summary.createEl('a', { cls: 'internal-link', href: log.file.path, text: log.file.link.display || log.file.name });
        linkEl.dataset.href = log.file.path;
        summary.createEl("span", { text: ` - ${log.main_focus || "未定焦点"}`, cls: "log-focus"});
        const contentWrapper = details.createEl("div", {cls: "log-content-wrapper"});
        contentWrapper.innerHTML = `<div class="log-content-peak"><strong>💡 高光时刻 (Peak Moment):</strong><div class="log-text">${peakMoment}</div></div><div class="log-content-grit"><strong>🔥 坚韧时刻 (Moment of Grit):</strong><div class="log-text">${gritMoment}</div></div>`;
    }
}

// --- VI. 最终样式注入 (Final Style Injection) ---
const style = dv.container.createEl('style'); style.innerHTML = `.dashboard-container { display: flex; gap: 15px; flex-wrap: wrap; margin: 1em 0; } .dashboard-card { display: flex; align-items: center; flex: 1; min-width: 180px; padding: 15px; background-color: var(--background-secondary); border-radius: 8px; border-left: 5px solid; } .card-icon { font-size: 2em; margin-right: 15px; } .card-content { display: flex; flex-direction: column; } .card-value { font-size: 1.8em; font-weight: 600; line-height: 1.2; } .card-title { font-size: 0.9em; color: var(--text-muted); } .logs-container { display: flex; flex-direction: column; gap: 10px; } .log-details { border: 1px solid var(--background-modifier-border); border-radius: 8px; overflow: hidden; } .log-details[open] { background-color: var(--background-secondary-alt); } .log-details[open] > summary { border-bottom: 1px solid var(--background-modifier-border); } .log-details summary { cursor: pointer; font-weight: bold; padding: 10px 15px; display: flex; align-items: center; gap: 5px; } .log-details summary:hover { background-color: var(--background-modifier-hover); } .log-details summary a.internal-link { text-decoration: none; } .log-details summary .log-focus { font-weight: normal; color: var(--text-muted); } .log-content-wrapper { padding: 5px 15px 15px 15px; display: flex; flex-direction: column; gap: 12px; } .log-content-peak, .log-content-grit { line-height: 1.6; } .log-content-peak .log-text, .log-content-grit .log-text { padding-left: 1.5em; color: var(--text-normal); }`;
```

---
## ✍️ Part 2: 深度复盘

> [!NOTE] 数据指向问题，而思考产生答案。请根据以下问题，将数据转化为自己的判断。

#### 1. **本周最大的收获是什么？**
**回顾上方数据，本周我在哪个知识点或学习习惯上取得了明显进步？**
*   

#### 2. **最明显的短板在哪里？**
**从错题和困难题目中，是否发现了重复出现的思维漏洞或知识盲区？**
*   

#### 3. **数据中最意外的信号是什么？**
**本周的学习数据里，有没有哪个数字或趋势和我想象的不一样？它说明了什么？**
*   

---
## 🎯 Part 3: 下周计划

> [!TODO] 请基于以上分析，为下周制定清晰、可执行的学习计划。

#### 1. **下周的核心目标**
*   下周最重要的一个目标是什么？（例如：将”泰勒公式”的错误率降低到10%以下 / 完成”线性代数”所有章节的【知识枢纽】构建）
*   

#### 2. **具体行动**
- [ ] 行动一：
- [ ] 行动二：
- [ ] 行动三：

#### 3. **如何判断成功**
*   到下周末，如果我完成了 ____________，就代表这周的目标达成了。

<div style=”background-color: rgba(var(--color-yellow-rgb), 0.1); border-left: 5px solid var(--color-yellow); padding: 12px 15px; border-radius: 6px; margin: 1.5em 0;”>
<strong style=”color: var(--text-normal);”>舰长，本周复盘结束。</strong><br>
<span style=”color: var(--text-normal);”>过去的数据是参考，未来的行动才是关键。休息好，下周继续。
</span>
</div>