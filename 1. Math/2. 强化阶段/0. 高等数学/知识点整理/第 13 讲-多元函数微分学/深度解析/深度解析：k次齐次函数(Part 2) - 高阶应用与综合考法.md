---
Type: 深度解析
Subject: 数学
Mastery: 待精炼
chapter: "[[第 13 讲-多元函数微分学]]"
Last_reviewed: 2025-10-14
parent_hub: "[[13. 知识枢纽：多元函数微分学]]"
Related_analyses:
  - "[[深度解析：k次齐次函数(Part 1) - 定义、性质与欧拉定理]]"
  - "[[深度解析：格林公式]]"
  - "[[深度解析：重极限、连续、偏导数与全微分]]"
Exam_frequency: 高
Key_variations:
  - 齐次函数与极坐标
  - 齐次函数与二元函数极限
  - 齐次函数与格林公式
Tags:
  - 深度解析
  - 多元函数微分学
  - 齐次函数
  - 欧拉定理
  - 极坐标
  - 格林公式
URL: https://www.bilibili.com/video/BV1EY4y1t7ot/
---

# [[深度解析：k次齐次函数(Part 2) - 高阶应用与综合考法]]

> [!note] 本篇笔记是对知识枢纽 **`$= const hub = dv.current().parent_hub; if (hub) { dv.el("strong", hub); } else { dv.el("span", "（未关联）"); }`** 的深度剖析。其核心战略思想是：**我们将 k 次齐次函数从纯粹的微分性质研究，推向更广阔的综合战场。齐次性不仅是一个代数性质，更是一个强大的“结构约束”，它在极限问题中可以被“极坐标”语言优雅地解读，在曲线积分问题中则常常作为应用“格林公式”的隐藏钥匙。**

---
### **专题核心例题概览 (Part 2)**
*   **【补充题 1】齐次函数与二元极限：** 演示如何利用**极坐标**将齐次函数的结构 $f(r\cos\theta, r\sin\theta) = r^k f(\cos\theta, \sin\theta)$ 与二元函数极限的计算完美结合，通过“无穷小 $\times$ 有界”模型证明极限。
*   **【补充题 2】零次齐次函数的充要条件：** 揭示证明“零次齐次函数”的一个极其巧妙的战术——证明其在极坐标下**对径向变量 $r$ 的偏导数为 0**。这是对欧拉定理逆定理的优雅证明。
*   **【例 5 / 2006 真题】齐次函数与格林公式：** 本专题的**终极实战**。演示在证明一个第二类线积分为 0 时，如何通过格林公式将其转化为证明一个二重积分为 0，而证明被积函数恒为零的关键，恰恰是利用题目给出的（负二次）齐次函数条件应用**欧拉定理**。

![[K齐函数-例5-极坐标变换形式上的K齐.png]] ![[K齐函数-例5.png]]
![[K齐函数-例6-经典的逻辑推理.png]] ![[K齐函数-例7.png]]

---

## 核心理论：齐次函数的高阶战术武器

### 1. 极坐标：齐次函数的“自然语言”
极坐标变换与齐次函数的定义有着天然的契合度，能够将齐次性“可视化”。

> [!abstract] 齐次函数的极坐标表示
> 对于二元 k 次齐次函数 $f(x,y)$，进行极坐标代换 $x=r\cos\theta, y=r\sin\theta$，根据定义有：
> $$ f(x,y) = f(r\cos\theta, r\sin\theta) = r^k f(\cos\theta, \sin\theta) $$
> **战略意义**：
> 1.  **变量分离**: 齐次函数在极坐标下的函数值，可以分解为一个只与距离 $r$ 有关的幂函数 $r^k$ 和一个只与角度 $\theta$ 有关的函数 $g(\theta)=f(\cos\theta, \sin\theta)$ 的乘积。
> 2.  **极限分析利器**: 在计算 $\lim_{(x,y)\to(0,0)}f(x,y)$ 时，$(x,y)\to(0,0)$ 等价于 $r \to 0^+$。若 $k>0$ 且 $f$ 有界，则极限为 0。**(补充题 1 核心)**
> 3.  **反推齐次性的捷径**: 若已知 $\frac{\partial f}{\partial r}=0$，说明 $f$ 与 $r$ 无关，仅是 $\theta$ 的函数。而 $\theta = \arctan(y/x)$，故 $f$ 仅是 $y/x$ 的函数，即 $f(x,y)=g(y/x)$。根据 Part 1 的结论，这等价于 $f$ 是一个**零次**齐次函数。**(补充题 2 核心)**

### 2. 欧拉定理与格林公式的联动
在涉及齐次函数的第二类线积分证明题中，欧拉定理是解锁格林公式被积函数的关键钥匙。

> [!abstract] 欧拉-格林联动战术
> **作战流程**：
> 1.  **目标**: 证明 $\oint_L Pdx+Qdy = 0$。
> 2.  **格林公式转化**: 目标等价于证明 $\iint_D (\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y})dxdy = 0$。
> 3.  **连续性与任意性**: 由于被积函数连续且积分区域 $D$ 任意，目标进一步等价于证明被积函数恒为零，即 $\frac{\partial Q}{\partial x} = \frac{\partial P}{\partial y}$。
> 4.  **欧拉定理介入**: 计算 $\frac{\partial Q}{\partial x}$ 和 $\frac{\partial P}{\partial y}$，并利用题目给出的齐次函数条件，通过**欧拉定理** $\sum x_i \frac{\partial f}{\partial x_i} = kf$ 对表达式进行化简，最终证明二者相等。**(例 5 核心)**

---

## 例题解析

> [!example]- 【补充题 1】齐次函数与二元极限
> **设 $f(x,y)$ 在区域 $D: |x|\le1, |y|\le1$ 上是有界的 k 次齐次函数 ($k\ge1$)。求证 $\lim_{(x,y)\to(0,0)} f(x,y) = 0$。**
> 
> 1.  **战略分析**: 涉及二元函数在原点的极限，且函数是齐次函数，这是使用**极坐标**的强烈信号。
> 2.  **执行步骤**:
>     *   对 $|f(x,y)|$ 进行极坐标变换：
>         $$ |f(x,y)| = |f(r\cos\theta, r\sin\theta)| $$
>     *   应用 k 次齐次函数的定义：
>         $$ = |r^k f(\cos\theta, \sin\theta)| = r^k |f(\cos\theta, \sin\theta)| $$
>     *   **极限分析**:
>         *   当 $(x,y) \to (0,0)$ 时，必有 $r=\sqrt{x^2+y^2} \to 0^+$。
>         *   因为 $k \ge 1$，所以 $\lim_{r\to0^+} r^k = 0$。
>         *   因为函数 $f$ 在区域 $D$ 上有界，所以 $|f(\cos\theta, \sin\theta)|$ 也是有界的（设 $|f| \le M$）。
>     *   **应用夹逼准则（或无穷小乘有界）**:
>         $$ 0 \le |f(x,y)| \le r^k \cdot M $$
>         由于 $\lim_{r\to0^+} r^k M = 0$，故 $\lim_{(x,y)\to(0,0)} |f(x,y)| = 0$，即 $\lim_{(x,y)\to(0,0)} f(x,y) = 0$。

> [!example]- 【补充题 2】零次齐次函数的充要条件
> **证明：$f(x,y)$ 是二元零次齐次函数的充要条件是 $x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = 0$。**
> 
> 1.  **必要性 ($\Rightarrow$)**:
>     *   已知 $f$ 是零次齐次函数 ($k=0$)。直接应用**欧拉定理**即可得证。
> 2.  **充分性 ($\Leftarrow$) (极坐标巧证)**:
>     *   **目标**: 已知 $x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = 0$，要证明 $f$ 是零次齐次函数。
>     *   **核心战术**: 证明 $f$ 在极坐标下与 $r$ 无关。
>     *   **计算 $\frac{\partial f}{\partial r}$**:
>         $$ \frac{\partial f}{\partial r} = \frac{\partial f}{\partial x}\frac{\partial x}{\partial r} + \frac{\partial f}{\partial y}\frac{\partial y}{\partial r} = \frac{\partial f}{\partial x}\cos\theta + \frac{\partial f}{\partial y}\sin\theta $$
>     *   **关键变形**: 将上式乘以 $r$。
>         $$ r\frac{\partial f}{\partial r} = \frac{\partial f}{\partial x}(r\cos\theta) + \frac{\partial f}{\partial y}(r\sin\theta) = x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} $$
>     *   **代入已知条件**: $r\frac{\partial f}{\partial r} = 0$。因为 $r$ 不恒为 0，所以 $\frac{\partial f}{\partial r} = 0$。
>     *   **得出结论**: $\frac{\partial f}{\partial r} = 0$ 说明函数 $f$ 与 $r$ 无关，仅是角度 $\theta$ 的函数。而 $\theta = \arctan(y/x)$，故 $f$ 仅是 $y/x$ 的函数，即 $f(x,y) = g(y/x)$。
>     *   根据 Part 1 的结论，这等价于 $f$ 是一个**零次**齐次函数。证毕。

> [!example]- 【例 5 / 2006 真题】齐次函数与格林公式
> **设在上半平面 $y>0$ 内，$f(x,y)$ 有一阶连续偏导，且对任意 $t>0$ 均有 $f(tx,ty)=t^{-2}f(x,y)$。证明：对 D 内任意简单闭曲线 L，均有 $\oint_L yf dx - xf dy = 0$。**
> 
> 1.  **战略分析**:
>     *   **条件解读**: $f(tx,ty)=t^{-2}f(x,y)$ 意味着 $f$ 是一个 **-2 次** 齐次函数。
>     *   **目标解读**: 证明一个闭路上的第二类线积分为 0。
>     *   **战术连接**: 首选**格林公式**。目标转化为证明 $\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = 0$。
> 2.  **执行步骤**:
>     *   **应用格林公式**: $P=yf, Q=-xf$。
>         $$ \oint_L yf dx - xf dy = \iint_D \left[ \frac{\partial(-xf)}{\partial x} - \frac{\partial(yf)}{\partial y} \right]dxdy $$
>     *   **计算被积函数**:
>         $$ \frac{\partial(-xf)}{\partial x} - \frac{\partial(yf)}{\partial y} = [-f - xf'_1] - [f + yf'_2] = -2f - (xf'_1 + yf'_2) $$
>     *   **应用欧拉定理**: 因为 $f$ 是 -2 次齐次函数，所以满足欧拉定理：
>         $$ x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = -2f \implies xf'_1 + yf'_2 = -2f $$
>     *   **代入化简**:
>         $$ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = -2f - (-2f) = 0 $$
>     *   **得出结论**: 由于被积函数恒为零，故二重积分为零，原线积分得证为零。

---
## 🧠 三步精炼复盘区 (Refinement & Review Zone)

### **第一步：知识晶体萃取 (Knowledge Crystal)**
> [!summary]
> *   **核心对象：** k 次齐次函数的高阶应用。
> *   **一句话作用：** 齐次性是一个强大的“结构指示器”，它能在不同数学领域（极限、微分、积分）中提供意想不到的解题捷径。
> *   **核心战术联动：**
>     *   **齐次 + 极限 $\to$ 极坐标**
>     *   **齐次 + 偏导关系 $\to$ 欧拉定理**
>     *   **齐次 + 线积分 $\to$ 欧拉定理 + 格林公式**

### **第二步：横向辨析 (Comparison & Connection)**
> [!compare]
> | 对比维度 | **欧拉定理正向应用** | **欧拉定理逆向应用** |
> | :--- | :--- | :--- |
> | **输入** | 已知函数是 **k 次齐次** | 已知函数**满足偏微分方程** |
> | **输出** | 得到一个**一阶偏微分方程** | 证明函数是 **k 次齐次** |
> | **核心操作** | **对 t 求导，令 t=1** | **解常微分方程** 或 **证明 $\frac{\partial f}{\partial r}=0$** |
> | **应用场景** | 化简与偏导数相关的表达式（如格林公式） | 证明函数的齐次属性 |

### **第三步：出题人视角 (Examiner's Perspective)**
> [!multi-column]
> > [!example] **题型母题 (Archetype)**
> > 1.  **极限存在性**: 给出齐次函数，并结合有界性等条件，判断或证明在原点的极限。
> > 2.  **性质证明**: 给出偏微分方程，证明函数是某一次的齐次函数。
> > 3.  **积分/微分综合题**: 在线面积分、微分方程等大题中，将齐次性作为一个隐藏的关键条件。
>
> > [!danger] **命题陷阱 (Common Traps)**
> > 4.  **齐次性不敏感**: 看到 $f(tx,ty)=t^k f(x,y)$ 形式的条件，未能迅速反应出其齐次函数的本质，导致无法使用欧拉定理。
> > 5.  **欧拉定理混淆**: 记错欧拉定理的系数 $k$ 或偏导数的形式。
> > 6.  **连续性忽视**: 在由“积分在任意区域为 0”推出“被积函数为 0”时，忘记强调被积函数的连续性这一前提。
> > 7.  **极坐标不熟练**: 在使用极坐标证明时，对链式法则 $\frac{\partial f}{\partial r}$ 的计算不熟练。

---
## 🎯 主动复习压力测试 (Active Recall Stress Test)

> [!question]
> - [ ] **(概念辨析)** 我能否不看笔记，完整复述欧拉定理及其逆定理的证明思路？
> - [ ] **(深度理解)** 为什么说“$\frac{\partial f}{\partial r}=0$”等价于“$f$ 是零次齐次函数”？这个逻辑链条是怎样的？
> - [ ] **(决策选择)** 拿到一个涉及未知函数 $f(x,y)$ 的第二类线积分证明题，如果题干出现 $f(tx,ty)$ 的相关条件，我的第一反应和后续的解题步骤应该是什么？
> - [ ] **(迁移应用)** 如果一个函数 $f(x,y)$ 满足 $x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = 2f$，那么在极坐标下 $f(r,\theta)$ 应该满足怎样的关系？（提示：$r\frac{\partial f}{\partial r}=2f$，解得 $f=r^2g(\theta)$）