---
type: 战术卡片
subject: 数学
chapter: 
status: 草稿
parent_hub: 
related_techniques: 
last_reviewed: 
tags:
  - 战术卡片
  - 技巧对比
  - 公式辨析

URL:
---

# [[{{title}}]]

***
> [!abstract] 战术概览 (Tactical Overview)
> <!-- 在这里放置几个并列的 [!summary] 卡片，用一句话总结每个工具的核心信息。-->
> 
> > [!summary]+ 工具A卡片
> > *   **一句话作用：** 
> > *   **核心前提：** 
> > *   **证明/推导精髓：** 
> 
> > [!summary]+ 工具B卡片
> > *   **一句话作用：** 
> > *   **核心前提：** 
> > *   **证明/推导精髓：** 

***
> [!compare]- 横向对比分析 (Comparative Analysis)
> <!-- 这是战术卡片的心脏！用表格清晰对比两个工具的关键区别。-->
> | 对比维度 | **工具A** | **工具B** |
> | :--- | :--- | :--- |
> | **解题目标** | | |
> | **核心区别点** | (例如：积分区间) | (例如：被积函数形式) |
> | **底层数学思想** | (例如：对称性) | (例如：递推) |
> | **最常见陷阱**| | |

***
## 深度拆解 (In-depth Deconstruction)

<!-- 在这里可以简要附上每个工具的详细证明或应用案例的链接 -->

### 一. 工具A：[[...]]
- 关键步骤或注意事项...

### 二. 工具B：[[...]]
- 关键步骤或注意事项...

***
> [!question]- 主动复习决策点 (Active Decision Checklist)
> <!-- 在这里设计场景化的思考题，强迫自己进行决策训练。-->
> 
> - [ ] **(正向识别)** 看到题干中出现 ______ 特征，我应该**优先**考虑使用工具A，因为 ______。
> - [ ] **(反向排除)** 看到题干中出现 ______ 特征，我应该**立刻排除**工具B，因为 ______。
> - [ ] **(陷阱辨析)** 如果出题人想把我诱导到错误的工具上，他最可能设计的“伪特征”是什么？
> - [ ] 我能否用一个生活中的比喻（比如“用锤子还是用螺丝刀”），向别人解释清楚这两个工具的选择时机？

***
## ⚙️ 实战应用记录 (Automated Log)

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