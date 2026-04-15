---
type: 深度解析
subject: 数学
mastery: 待精炼
last_reviewed: 2025-10-12
parent_hub: "[[知识枢纽：定积分计算技巧]]"
related_analyses:
  - "[[深度解析：区间再现,对称区间,xfx公式及应用]]"
  - "[[深度解析：分部积分法]]"
  - "[[战术卡片：定积分计算技巧——对称性、周期性与区间变换]]"
  - "[[深度解析：三角函数定积分常用的 6 个公式]]"
exam_frequency: 极高
key_variations:
  - 华里士公式区间变换（如[0,π]）
  - xf(sinx)公式的前提条件判断
  - 与其他方法（如分部积分）结合考察
tags:
  - 深度解析
  - 公式辨析
  - 定积分
---

# [[深度解析：xf(sinx)型公式与华里士公式的对比辨析]]

> [!note] 本篇笔记是对知识枢纽 **`$= const hub = dv.current().parent_hub; if (hub) { dv.el("strong", hub); } else { dv.el("span", "（未关联）"); }`** 的深度剖析，聚焦于这两大高频定积分公式的核心原理、应用边界及决策辨析。

---

## 武器库概览：两大公式速览

> [!summary]+ 公式一： `xf(sinx)` 型积分公式
> *   **公式：** $\int_0^\pi x f(\sin x) dx = \frac{\pi}{2} \int_0^\pi f(\sin x) dx$
> *   **核心作用：** 在 $[0, \pi]$ 区间上，消除被积函数中的 $x$ 因子。
> *   **核心思想：** **对称性与区间再现**。

> [!summary]+ 公式二：华里士公式 (Wallis Formula)
> *   **公式：** $I_n = \int_0^{\pi/2} \sin^n x dx = \int_0^{\pi/2} \cos^n x dx = \frac{n-1}{n} \cdot \frac{n-3}{n-2} \cdots$ (奇偶有别)
> *   **核心作用：** 快速计算 $[0, \pi/2]$ 区间上 $\sin x$ 或 $\cos x$ 高次幂的定积分。
> *   **核心思想：** **分部积分与递推**。

---

## 深度剖析：逐个击破

> [!example]- 深度剖析：`xf(sinx)` 公式
> ### **1. 核心前提：公式的“准入执照”**
> 
> > [!danger] **最关键前提：$f$ 必须是 $\sin x$ 的单值函数**
> > 公式成立的根本在于换元 $x=\pi-t$ 后，被积函数中 $f(\sin(\pi-t))$ 必须等于 $f(\sin t)$。这意味着**函数 $f$ 的取值必须唯一地由 $\sin x$ 的值决定**，而不能依赖于 $x$ 本身的其他信息（如 $x$ 所在的子区间）。
> 
> **实战规则：**
> *   ✅ **允许项：** $f$ 中可以包含 $\sin x$ 的任意次幂、常数、以及 $\cos x, \tan x, \cot x$ 的**偶数**次幂。
> *   ❌ **禁止项：** $f$ 中**不能**包含 $\cos x, \tan x, \cot x$ 的**奇数**次幂。因为这些项在 $x \to \pi-x$ 变换下会变号，破坏公式成立的条件。
> 
> ---
> ### **2. 经典陷阱：错误应用分析**
> 
> 计算 $\int_0^\pi \frac{x \sin x}{1 - \cos x} dx$。
> 
> **错误做法：**
> $$
> \int_0^\pi \frac{x \sin x}{1 - \cos x} dx = \frac{\pi}{2} \int_0^\pi \frac{\sin x}{1 - \cos x} dx = \frac{\pi}{2} [\ln(1-\cos x)]_0^\pi \to \infty
> $$
> 
> **原因剖析：**
> 令 $u=\sin x$，我们无法将 $\frac{\sin x}{1-\cos x}$ 写成一个唯一的 $f(u)$。因为 $\cos x = \pm\sqrt{1-\sin^2 x}$，在 $[0, \pi]$ 区间上：
> $$ f(\sin x) =
> \begin{cases}
> \frac{\sin x}{1 - \sqrt{1-\sin^2 x}}, & 0 \le x \le \pi/2 \\
> \frac{\sin x}{1 + \sqrt{1-\sin^2 x}}, & \pi/2 < x \le \pi
> \end{cases}
> $$
> 对于同一个 $\sin x$ 的值 (如 $\sin(\pi/3)=\sin(2\pi/3)$)，函数表达式不同。因此，它不是 $\sin x$ 的单值函数，公式失效。
> [[三角函数两个常见公式2--不能使用的情况.png]]
> 
> ---
> ### **3. 公式证明 (基于区间再现)**
> > [!TIP] 证明过程封装于此，点击展开查看。
> > 1.  令 $I = \int_0^\pi x f(\sin x) dx$。
> > 2.  根据**[[深度解析：区间再现,对称区间,xfx公式及应用]]**，$\int_a^b g(x)dx = \int_a^b g(a+b-x)dx$。
> > 3.  此处 $a=0, b=\pi$。令 $g(x) = xf(\sin x)$。
> >     $$ I = \int_0^\pi (\pi-x)f(\sin(\pi-x))dx $$
> > 4.  利用**核心前提** $f(\sin(\pi-x)) = f(\sin x)$：
> >     $$ I = \int_0^\pi (\pi-x)f(\sin x)dx = \pi\int_0^\pi f(\sin x)dx - \int_0^\pi xf(\sin x)dx $$
> > 5.  $I = \pi\int_0^\pi f(\sin x)dx - I$
> > 6.  $2I = \pi\int_0^\pi f(\sin x)dx \implies I = \frac{\pi}{2}\int_0^\pi f(\sin x)dx$。

> [!example]- 深度剖析：华里士公式 (Wallis Formula)
> ### **1. 核心前提：积分区间的“铁律”**
> 
> > [!danger] **最关键前提：积分区间必须是 $[0, \pi/2]$**
> > 华里士公式是为区间 $[0, \pi/2]$ “量身定做”的。任何其他区间（如 $[0, \pi]$）都必须先通过对称性、周期性等变换，化归到 $[0, \pi/2]$ 上才能使用。
> > *   例如：$\int_0^\pi \sin^n x dx = 2\int_0^{\pi/2} \sin^n x dx$ (利用关于 $x=\pi/2$ 的对称性)。
> 
> ---
> ### **2. 记忆技巧与应用**
> 
> **公式：**
> $$ I_n = \int_0^{\pi/2} \sin^n x dx = \int_0^{\pi/2} \cos^n x dx $$
> 
> **记忆口诀：** "从 $\frac{n-1}{n}$ 开始，分子分母依次减2往下乘"
> *   **n为奇数：** 乘到 $\frac{2}{3}$ 停止。
>     *   $\int_0^{\pi/2} \sin^7 x dx = \frac{6}{7} \cdot \frac{4}{5} \cdot \frac{2}{3}$
> *   **n为偶数：** 乘到 $\frac{1}{2}$ 停止，**并额外乘以 $\frac{\pi}{2}$**。
>     *   $\int_0^{\pi/2} \cos^8 x dx = \frac{7}{8} \cdot \frac{5}{6} \cdot \frac{3}{4} \cdot \frac{1}{2} \cdot \frac{\pi}{2}$
> 
> ---
> ### **3. 公式证明 (基于分部积分与递推)**
> > [!TIP] 证明过程封装于此，点击展开查看。
> > [[三角函数两个常见公式1.png]]
> > 1.  **目标：** 建立 $I_n = \int_0^{\pi/2} \sin^n x dx$ 的递推关系。
> > 2.  **构造分部积分：**
> >     $$ I_n = \int_0^{\pi/2} \sin^{n-1}x \cdot \sin x dx = -\int_0^{\pi/2} \sin^{n-1}x d(\cos x) $$
> > 3.  **应用分部积分：**
> >     $$ I_n = -[\sin^{n-1}x \cos x]_0^{\pi/2} + \int_0^{\pi/2} \cos x \cdot d(\sin^{n-1}x) $$
> > 4.  边界项为0。
> >     $$ I_n = \int_0^{\pi/2} \cos x \cdot (n-1)\sin^{n-2}x \cos x dx = (n-1)\int_0^{\pi/2} \sin^{n-2}x \cos^2 x dx $$
> > 5.  **化简并建立关系：**
> >     $$ I_n = (n-1)\int_0^{\pi/2} \sin^{n-2}x (1-\sin^2 x) dx = (n-1)(I_{n-2}-I_n) $$
> > 6.  **整理得递推式：**
> >     $$ nI_n = (n-1)I_{n-2} \implies I_n = \frac{n-1}{n}I_{n-2} $$
> > 7.  根据 $n$ 的奇偶性，分别递推至 $I_1 = \int_0^{\pi/2}\sin x dx = 1$ 或 $I_0 = \int_0^{\pi/2} 1 dx = \frac{\pi}{2}$，即可得最终公式。

## 🧠 三步精炼复盘区 (Refinement & Review Zone)

### **第一步：知识晶体萃取 (Knowledge Crystal)**
> [!summary]+ 公式卡片：∫ x f(sin x) dx
> *   **核心对象：** $\int_0^\pi x f(\sin x) dx = \frac{\pi}{2} \int_0^\pi f(\sin x) dx$
> *   **一句话作用：** 在 $[0, \pi]$ 区间上，消除被积函数中的 $x$ 因子，简化计算。
> *   **关键前提/约束：** 被积函数（除去$x$后）必须是 $\sin x$ 的**单值函数**，即 $f(\sin(\pi - x)) = f(\sin x)$。**（简单说：不能含有 $\cos x, \tan x, \cot x$ 的奇数次幂）**
> *   **证明/推导精髓：** 利用**对称性与区间再现**思想，通过换元 $x = \pi - t$，构造出 $2I = \pi \int ...$ 的形式。

> [!summary]+ 公式卡片：华里士公式 (Wallis Formula)
> *   **核心对象：** $\int_0^{\pi/2} \sin^n x dx = \int_0^{\pi/2} \cos^n x dx$
> *   **一句话作用：** 快速计算 $[0, \pi/2]$ 区间上 $\sin x$ 或 $\cos x$ 高次幂的定积分。
> *   **关键前提/约束：** ① 积分区间必须是 **$[0, \pi/2]$**；② $n$ 为**正整数**。
> *   **证明/推导精髓：** 利用**分部积分法**，将 $\sin^n x$ 拆分，构造出 $I_n$ 与 $I_{n-2}$ 的**递推关系**。

### **第二步：横向辨析 (Comparison & Connection)**
> [!compare]- 横向辨析：两大三角函数定积分公式的对决
> | 对比维度 | **公式一: $\int xf(\sin x)$** | **公式二: 华里士公式** |
> | :--- | :--- | :--- |
> | **积分区间** | **$[0, \pi]$** | **$[0, \pi/2]$**  (核心区别！) |
> | **被积函数** | $x$ 乘以一个 $\sin x$ 的单值函数 | $\sin^n x$ 或 $\cos^n x$ |
> | **核心思想** | **对称性与换元** | **分部积分与递推** |
> | **常见陷阱**| 滥用公式，忽略对 $f$ 的前提检查 | ① 区间不是 $\pi/2$；② 奇偶记错，漏乘 $\pi/2$ |

### **第三步：出题人视角 (Examiner's Perspective)**
> [!multi-column]
> > [!example|icon-name: "Target"] **题型母题 (Archetype)**
> > > * **公式一：** $\int_0^\pi x \sin x dx$ (最基础的应用)
> > > * **公式二：** $\int_0^{\pi/2} \sin^4 x dx$ (直接套用偶数形式)
> 
> > [!danger|icon-name: "Skull"] **命题陷阱 (Common Traps)**
> > > * **前提陷阱：** 给出积分 $\int_0^\pi x \cos x dx$，诱导学生误用公式一；或者给出 $\int_0^\pi \sin^6 x dx$ 诱导学生直接套用华里士公式。
> > > * **计算陷阱：** 使用公式一消除 $x$ 后，剩下的 $\int f(\sin x) dx$ 仍然需要复杂的换元或分部积分。
> > > * **概念混淆：** 在一个复杂的题目中，同时出现两种公式的特征，考验学生的决策能力。

---
## 💡 考场决策流 (Mnemonic)

> [!blank-container|icon-name: "BrainCircuit"]
> ### **考场决策流**
> **看到三角函数定积分** 
> ➡️ **第一步：看区间**
>  - 是 $[0, \pi/2]$ 吗？ -> **主想【华里士】**
>  - 是 $[0, \pi]$ 吗？ -> **第二步：看被积函数**
>    - 含有 $x$ 因子吗？ -> **主想【xf(sinx)公式】**
>    - 没有 $x$ 因子，但关于 $\pi/2$ 对称？ -> **区间减半，再想【华里士】**
> ➡️ **第三步：检查前提**
>  - 【华里士】：$n$ 是正整数吗？
>  - 【xf(sinx)】：除了 $x$ 外，剩下的部分是 $\cos, \tan, \cot$ 的奇次幂吗？是则不能用！

---
## 🎯 主动复习压力测试 (Active Recall Stress Test)

> [!question]
> - [ ] **(场景一)** 看到 $\int_0^\pi x \frac{\sin x \cos^2 x}{1+\sin^4 x} dx$，我的第一反应是什么？为什么这个公式能用？
> - [ ] **(场景二)** 看到 $\int_0^\pi x \sin(\cos x) dx$，我应该立刻意识到什么？为什么这个公式不能用？
> - [ ] **(场景三)** 看到 $\int_0^\pi \sin^4 x dx$，我能直接用华里士公式吗？如果不能，第一步应该做什么？（提示：利用对称性将区间减半）
> - [ ] 我能否不看笔记，完整默写出华里士公式的奇偶两种形式？
> - [ ] 我能否用一句话向别人解释清楚，为什么 `公式一` 不能用于含有 $\cos x$ 奇数次幂的函数？

---
## ⚙️ 实战应用记录 (Automated Log)

> [!example]- 以下是所有应用了本深度解析的题目笔记 (自动更新)
> ```dataviewjs
> const currentFile = dv.current().file;
> const pages = dv.pages()
>     .where(p => p.knowledge_points && dv.array(p.knowledge_points).some(kp => kp.path === currentFile.path));
> 
> if (pages.length > 0) {
>     dv.list(pages.map(p => p.file.link));
> } else {
>     dv.paragraph("暂无关联题目。");
> }
> ```
```