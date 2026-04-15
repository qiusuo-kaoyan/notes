---
type: 知识枢纽
aliases: 
subject: 数学
chapter: 
level: 强化
parent_concepts: 
related_methods: 
mastery: 待消化
last_reviewed:
  "{ date }": 
trigger_keywords: 
pitfalls: 
tags:
  - 方法论
URL: # 这里将视频的url填入
---

# [[{{title}}]]

> [!abstract] 核心思想 (一句话总结)
> 

---

## 📝 方法体系总览

### 1. 基础工具箱
- [[利用等价无穷小替换]]
- [[利用洛必达法则]]
- [[利用重要极限]]

### 2. 核心大杀器
- [[深度解析：泰勒公式的应用技巧与展开原则]]

### 3. 特种作战技巧
- [[利用定积分定义求极限]]
- [[战术卡片：夹逼准则与单调有界准则的对比]]

---

## ⚔️ 实战要点

> [!tip]- 触发信号 (Trigger Signals)
> > 看到题干中出现以下词汇，应立刻联想到此方法：
> ```dataviewjs
> // 使用完整的dataviewjs代码块，确保在任何环境下都能正确执行
> const keywords = dv.current().trigger_keywords;
> if (keywords && keywords.length > 0) {
>     dv.list(keywords);
> } else {
>     dv.paragraph("- 暂未填写");
> }
> ```

> [!danger]- 常见陷阱 (Common Pitfalls)
> > 使用此方法时，最容易犯的错误或忽略的细节：
> ```dataviewjs
> // 同样使用代码块，保证渲染的稳定性
> const pitfalls = dv.current().pitfalls;
> if (pitfalls && pitfalls.length > 0) {
>     dv.list(pitfalls);
> } else {
>     dv.paragraph("- 暂未填写");
> }
> ```

---

## 🧠 主动复习检查点 (Active Recall Checklist)

- [ ] 我能否脱稿复述出这个方法的核心步骤？
- [ ] 我能否立刻说出它的适用条件和至少一个易错点？
- [ ] 我能否在脑海中关联起一道具体的应用例题？

---

## ⚙️ 应用实例 (Automated List)

> [!example]- 以下是所有应用了本战术的题目或例题笔记 (自动更新)
> ```dataviewjs
> // --- “全息格斗室”索引脚本 V2.0 ---
> // 本脚本现在可以同时索引两种链接方式：
> // 1. 【题目笔记】通过 knowledge_points 链接到本卡片。
> // 2. 【例题笔记】通过 method_exemplified 链接到本卡片。
>
> const currentFile = dv.current().file;
> const pages = dv.pages()
>     .where(p =>
>         // 条件一：knowledge_points 数组中包含本卡片的链接
>         (p.knowledge_points && dv.array(p.knowledge_points).some(kp => kp.path === currentFile.path)) ||
>         // 条件二：method_exemplified 字段直接链接到本卡片
>         (p.method_exemplified && p.method_exemplified.path === currentFile.path)
>     );
> 
> if (pages.length > 0) {
>     dv.list(pages.map(p => p.file.link));
> } else {
>     dv.paragraph("暂无关联实战记录。");
> }
> ```
