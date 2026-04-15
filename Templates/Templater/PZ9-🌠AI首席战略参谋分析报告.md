---
type: 周复盘
year: 
week_num: 
status: AI分析中
tags:
  - 复盘
  - AI生成
---


<div style="background-color: rgba(var(--color-purple-rgb), 0.1); border-left: 5px solid var(--color-purple); padding: 15px 20px; border-radius: 8px; margin: 1.5em 0;">
<strong style="color: var(--text-accent-2); font-size: 1.2em;">首席架构师，欢迎来到您的周度航行指挥室。</strong><br>
<span style="color: var(--text-normal);">本周的原始情报已上传。您的首席战略参谋正在进行全息分析。分析报告将在此呈现，请您审阅并做出最终战略决策。</span>
</div>

---
## 📊 Part 1: 本周战役自动化数据报告 (Automated Battle Report)
> [!TIP] 这是由系统生成的、最客观的原始数据镜像，是所有后续分析的基石。
> <!-- 注释：此部分将由Dataview插件自动渲染，无需AI或您手动填写。-->

```dataviewjs
// --- 最终毕业版: v-XV-Priority-Scheduling (优先级调度版) ---
// 首席架构师 & 首席战略参谋 联合署名:
// 本次升级为周度复盘装载了三级价值排序系统，确保您的战略复盘，能聚焦于最高价值的战果与战损之上。

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
dv.header(4, "📈 本周核心战果仪表盘");
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
    dv.header(4, "📝 本周战功墙 (所有题目与例题)");

    const newItemsThisWeek = itemsDoneThisWeek.where(p => ["错题", "已做", "未做", "待剖析"].includes(p.status?.trim()));
    const masteredItemsThisWeek = itemsDoneThisWeek.where(p => ["掌握", "已建模", "可迁移"].includes(p.status?.trim()));

    if (newItemsThisWeek.length > 0) {
        dv.paragraph(`**🔥 新增战果 (待消化) (${newItemsThisWeek.length}项)**`);
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
        dv.paragraph(`**✅ 本周掌握 (胜利果实) (${masteredItemsThisWeek.length}项)**`);
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
if (newCreations.length > 0) { dv.header(4, "💡 本周军备扩充报告 (新增知识资产)"); dv.list(newCreations.map(p => { let emoji = p.type === "知识枢纽" ? "🧠" : (p.type === "深度解析" ? "💎" : "⚔️"); return `${emoji} ${p.file.link}`; })); }
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
## 🧠 Part 2: AI首席战略参谋分析报告 (AI-Generated Strategic Analysis)

> [!NOTE] 以下内容由AI根据您本周提供的所有情报自动生成，旨在为您揭示隐藏的模式、诊断潜在的问题，并提出数据驱动的建议。

### **Part A: 舰长精神状态与续航能力评估**
#### 1. **本周情绪曲线与压力来源识别**
<!-- 
    AI分析填充区
    注释：AI将在此处分析您的每日日志，提取情绪模式、识别压力来源。
    例如：
    - 情绪波动：...
    - 核心压力源诊断：1. 生理节律失调... 2. XX学科魔咒... 3. 时间焦虑...
-->

#### 2. **状态调整与续航能力优化建议**
<!-- 
    AI分析填充区
    注释：AI将根据压力源诊断，提供具体的、可执行的调整建议。
    例如：
    - 守护生命线...
    - 打破“魔咒”...
    - 守住XX阵地...
-->

### **Part B: 本周学习焦点与知识资产增长报告**
#### 1. **本周主攻方向与学习重心**
<!-- 
    AI分析填充区
    注释：AI将在此处扫描您本周的所有知识笔记，总结出学习的核心领域与重心。
    例如：
    - 主战区：高等数学“一元函数微积分学应用”...
    - 学习重心：从“计算”转向“证明与分析”...
-->

#### 2. **本周智力资产盘点**
<!-- 
    AI分析填充区
    注释：AI将在此处量化您本周的知识产出。
    例如：
    - 深度解析：新增/更新 X 篇...
    - 高价值例题/错题建模：攻克 Y 道...
-->

### **Part C: 核心问题诊断**
#### 1. **防御体系缺口识别**
<!-- 
    AI分析填充区
    注释：AI将在此处交叉对比日志和错题，找出您的知识性或习惯性弱点。
    例如：
    - 思维惯性缺口：...
    - 知识熟练度缺口：...
    - 战略执行缺口：...
-->

#### 2. **最“意料之外”的信号**
<!-- 
    AI分析填充区
    注释：AI将尝试发现数据中反直觉的、深层次的模式或关联。
    例如：
    - 您攻克难题的效率与您的精神状态呈现出负相关...
-->
---
## ✍️ Part 3: 灵魂深处的战略复盘 (AI初稿，待您审阅)
> [!NOTE] 以下内容由AI根据上述分析，为您撰写。请您在此基础上进行修改、补充，形成您最终的战略思考。

#### 1. **本周的“决定性胜利”是什么？**
<!-- 
    AI分析填充区
    注释：AI将为您提炼并撰写本部分的初步回答。
    例如：
    - 从认知层面：...
    - 从系统层面：...
-->

#### 2. **防御体系的“潜在缺口”在哪里？**
<!-- 
    AI分析填充区
    注释：AI将为您提炼并撰写本部分的初步回答。
    例如：
    - 知识性缺口：...
    - 习惯性缺口：...
-->

#### 3. **战报中最“意料之外”的信号是什么？**
<!-- 
    AI分析填充区
    注释：AI将为您提炼并撰写本部分的初步回答。
    例如：
    - 最意外的信号是“高强度作战”对“身心续航”的透支...
-->

---
## 🎯 Part 4: 擘画下周的航行蓝图 (AI建议，待您决策)
> [!TODO] 复盘的终点，是行动的起点。请您基于以上分析，最终确定下周的作战计划。

#### 1. **下周的主攻目标 (Primary Target)**
<!-- 
    AI分析填充区
    注释：AI将根据问题诊断，为您提出具体的、可量化的主攻目标建议。
    例如：
    - 首要目标（续航能力恢复）：...
    - 次要目标（知识体系巩固）：...
-->

#### 2. **关键战术机动 (Key Tactical Maneuvers)**
<!-- 
    AI分析填充区
    注释：AI将为您建议3-5个为达成主攻目标而设计的具体战术动作。
    例如：
    - [ ] 战术一（精力管理）：...
    - [ ] 战术二（XX防线）：...
    - [ ] 战术三（知识沉淀）：...
-->

#### 3. **胜利的定义 (Defining Victory)**
<!-- 
    AI分析填充区
    注释：AI将为您定义一个清晰的、可量化的“胜利条件”。
    例如：
    - 到下周末，如果我成功地...，就代表我赢得了这场为期七天的战役！
-->

<div style="background-color: rgba(var(--color-yellow-rgb), 0.1); border-left: 5px solid var(--color-yellow); padding: 12px 15px; border-radius: 6px; margin: 1.5em 0;">
<strong style="color: var(--text-normal);">首席架构师，AI分析报告已呈递。</strong><br>
<span style="color: var(--text-normal);">您已洞察过去，亦可擘画未来。请您审阅并下达最终指令。明日的黎明到来之时，我们将再次扬帆，以星辰为目标，破浪前行。</span>
</div>
