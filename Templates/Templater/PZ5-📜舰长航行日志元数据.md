---
type: 日记
date:
  {{date:YYYY-MM-DD}}
day_of_week:
  {{date:dddd}}
main_focus: 
mood: 3
tags:
  - 复盘
  - 日记
---

# 🗓️ {{date:YYYY-MM-DD}} `$= dv.current().file.day ? dv.current().file.day.weekdayStr : "学习日志"`

<div style="background-color: rgba(var(--color-green-rgb), 0.1); border-left: 5px solid var(--color-green); padding: 15px 20px; border-radius: 8px; margin: 1.5em 0;">
<strong style="color: var(--text-accent-2); font-size: 1.1em;">早安，舰长。</strong><br>
<span style="color: var(--text-normal);">新的一天开始了。用几分钟明确今天的目标和任务，然后专注执行。</span>
</div>

---
## 📈 Phase 1: 今日概览
> [!TIP] 在开始任何行动前，请先花60秒审视您的【战略仪表盘】，明确今日的整体态势和核心任务。
![[🧭星图仪表盘]]

---
## 🎯 Phase 2 & 3: 今日任务
> [!todo] 根据仪表盘，把今天的必清任务和主攻方向写下来。

### **第一优先级：清空到期任务**
- [ ] 

### **第二优先级：主攻薄弱环节**
- [ ] 

---
## 🚀 Phase 4: 知识沉淀
> [!idea] 今日学习计划（三选一）：

- [ ] **行动计划**：(三选一)
    - [ ] **创建/更新【知识枢纽】**：
    - [ ] **创建/更新【深度解析】**：
    - [ ] **创建/更新【战术卡片】**：

    - [ ] **创建【每日一题】**：
---
## 🔥 每日复盘

> [!abstract] 记录今天的高光、困难和明天的计划。

### **Part 1: 今日回顾**

> [!question] 今天是积极的第 天！！！
> 1.  **今日高光:** 今天哪个知识点或解题思路让你豁然开朗？
>
> 2.  **坚韧时刻:** 面对哪个难题没有放弃？最大的收获是什么？
>
> 3.  **明日计划:** 明天最值得投入精力的目标是什么？

### **Part 2: 情绪与动机**
> [!note]  简单记录今天的情绪和给自己打气的想法。

#### **微小胜利**
*   [ ] 今天完成的 `[某件具体小事]` 值得庆祝。庆祝方式：`[ ]`。

#### **明日任务赋魅**
*   明天最枯燥的任务是 `[ ]`。我可以把它和 `[某个长远目标]` 联系起来。

#### **困难转任务**
*   今天最大的困难是 `[ ]`。
*   拆解成具体任务：`[ ]`。












































<div style="background-color: rgba(var(--color-yellow-rgb), 0.1); border-left: 5px solid var(--color-yellow); padding: 12px 15px; border-radius: 6px; margin: 1.5em 0;">
<strong style="color: var(--text-normal);">舰长，今天的学习辛苦了。休息好，明天继续。</strong>
</div>

---
##   今日成果汇总
> [!success] 以下是今日学习记录的自动汇总。
> ```dataviewjs  
> // v2.2-Priority-Scheduling: 日志成果汇总  
>   
> function formatDate(d) {  
>     if (!d) return "N/A";  
>     if (d.toFormat && typeof d.toFormat === 'function') return d.toFormat("yyyy-MM-dd");  
>     if (typeof d === 'string') { const dateObj = dv.date(d); if (dateObj) return dateObj.toFormat("yyyy-MM-dd"); }  
>     return "数据源日期异常";  
> }  
>   
> // --- 核心逻辑区 ---  
> const today = dv.current().date;  
>   
> if (today && today.toFormat) {  
>     const todayStr = formatDate(today);  
>     const todayISO = today.toISODate();  
>     let outputGenerated = false;  
>   
>     // --- 每日战果模块 ---  
>     const itemsDoneToday = dv.pages().where(p =>   
>         (p.type?.trim() === "题目" || p.type?.trim() === "例题") && formatDate(p.done_date) === todayStr  
>     );  
>       
>     if (itemsDoneToday.length > 0) {  
>         dv.header(4, "📝 今日已做题目");  
>           
>         const newItems = itemsDoneToday.where(p => ["错题", "已做", "未做", "待剖析"].includes(p.status?.trim()));  
>         const masteredItems = itemsDoneToday.where(p => ["掌握", "已建模", "可迁移"].includes(p.status?.trim()));  
>   
>         // --- [v2.2 UPGRADE] “新增战果”渲染模块 ---  
>         if (newItems.length > 0) {  
>             dv.paragraph(`**🔥 新增待消化 (${newItems.length}项)**`);  
>             dv.table(  
>                 ["条目", "类型", "来源", "重要性", "难度"],  
>                 newItems  
>                     // 第三排序：按ID升序  
>                     .sort(p => p.id, 'asc')  
>                     // 第二排序：按难度降序  
>                     .sort(p => p.difficulty, 'desc')  
>                     // 首要排序：按重要性降序  
>                     .sort(p => p.importance, 'desc')  
>                     .map(p => [  
>                         p.file.link,  
>                         p.type?.trim() === "例题" ? "🔬 例题" : "✏️ 题目",  
>                         p.source || "N/A",  
>                         p.importance ? "🔥".repeat(p.importance) : "-",  
>                         p.difficulty ? "⭐".repeat(p.difficulty) : "-"  
>                     ])  
>             );  
>         }  
>   
>         // --- [v2.2 UPGRADE] “今日掌握”渲染模块 ---  
>         if (masteredItems.length > 0) {  
>             dv.paragraph(`**✅ 今日已掌握 (${masteredItems.length}项)**`);  
>              dv.table(  
>                 ["条目", "类型", "来源", "重要性", "难度"],  
>                 masteredItems  
>                     // 第三排序：按ID升序  
>                     .sort(p => p.id, 'asc')  
>                     // 第二排序：按难度降序  
>                     .sort(p => p.difficulty, 'desc')  
>                     // 首要排序：按重要性降序  
>                     .sort(p => p.importance, 'desc')  
>                     .map(p => [  
>                         p.file.link,  
>                         p.type?.trim() === "例题" ? "🔬 例题" : "✏️ 题目",  
>                         p.source || "N/A",  
>                         p.importance ? "🔥".repeat(p.importance) : "-",  
>                         p.difficulty ? "⭐".repeat(p.difficulty) : "-"  
>                     ])  
>             );  
>         }  
>           
>         outputGenerated = true;  
>     }  
>   
>     // --- 新建知识资产模块 ---  
>     const newHubs = dv.pages().where(p => p.type?.includes("知识枢纽") && p.file.cday.toISODate() === todayISO);  
>     if (newHubs.length > 0) { dv.header(4, "🧠 新建知识枢纽"); dv.table(["枢纽主题", "掌握程度"], newHubs.map(p => [p.file.link, p.mastery || "-"])); outputGenerated = true; }  
>     const newAnalyses = dv.pages().where(p => p.type?.includes("深度解析") && p.file.cday.toISODate() === todayISO);  
>     if (newAnalyses.length > 0) { dv.header(4, "💎 新建深度解析"); dv.table(["解析主题", "掌握程度"], newAnalyses.map(p => [p.file.link, p.mastery || "-"])); outputGenerated = true; }  
>     const newTactics = dv.pages().where(p => p.type?.includes("战术卡片") && p.file.cday.toISODate() === todayISO);  
>     if (newTactics.length > 0) { dv.header(4, "⚔️ 新建战术卡片"); dv.table(["战术主题", "状态"], newTactics.map(p => [p.file.link, p.status || "-"])); outputGenerated = true; }  
>   
>     if (!outputGenerated) {  
>         dv.paragraph("今天还没有记录任何学习成果。🚀");  
>     }  
>   
> } else {  
>     dv.paragraph("⏳ 此成果全景图将在您创建每日日记后，根据当天的学习记录自动生成。");  
> }