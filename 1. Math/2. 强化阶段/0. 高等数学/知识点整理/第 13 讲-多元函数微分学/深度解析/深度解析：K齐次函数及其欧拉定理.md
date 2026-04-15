---
type: 深度解析
subject: 数学
chapter: "[[第 13 讲-多元函数微分学]]"
mastery: 待精炼
last_reviewed: 2025-11-29
parent_hub: "[[13. 知识枢纽：多元函数微分学]]"
related_analyses:
  - "[[深度解析：复合函数求导法]]"
  - "[[知识枢纽：常微分方程]]"
  - "[[13-31(常见题型：几何翻译+约束识别+K齐理论)]]"
exam_frequency: 中
key_variations:
  - K次齐次函数的定义与判别
  - K次齐次函数的结构定理
  - 欧拉定理及其逆定理
  - 齐次函数性质在积分学中的应用
tags:
  - 深度解析
  - 齐次函数
  - 欧拉定理
  - 多元函数
URL:
  - https://www.bilibili.com/video/BV1EY4y1t7ot?t=0.9
---

# [[深度解析：K齐次函数及其欧拉定理]]

> [!note] 本篇笔记是对知识枢纽 **`$= const hub = dv.current().parent_hub; if (hub) { dv.el("strong", hub); } else { dv.el("span", "（未关联）"); }`** 的深度剖析。其核心战略思想是：**识别并利用函数在“尺度变换”(Scaling)下的特定代数结构（即齐次性），将其转化为强大的微分性质（欧拉定理）或标准化的函数形式，从而对一类特殊的多元函数问题进行降维打击。**

![[K齐函数-1-张宇153页.jpg]] ![[K齐函数-2-张宇164页.jpg]] ![[K齐函数-3-张宇165页.jpg]]

---
### **专题核心例题概览**
*   **【例1】齐次函数的结构性质:** 证明任意二元k次齐次函数均可表示为 $f(x,y) = x^k \cdot g(\frac{y}{x})$ 的标准形式。
*   **【例2】欧拉定理及其逆定理:** 证明齐次函数的核心微分性质——欧拉定理，并掌握其逆定理的推导，建立代数结构与微分结构之间的双向联系。
*   **【例3】(660题) 积分形式的恒等式:** 通过逆向运用牛顿-莱布尼茨公式和链式法则，识别并证明一个与齐次函数性质紧密相关的积分恒等式。
*   **【例4】高阶欧拉定理的应用:** 利用一阶欧拉定理，通过再次求导推导出关于二阶偏导数的恒等式，展现齐次函数在高阶导数中的应用。
*   **【例5】(2006年真题) 与格林公式的综合:** 在曲线积分问题中，利用欧拉定理判断格林公式被积函数是否为0，是齐次函数性质的最高级实战应用。

---

## 核心理论：齐次函数的结构与性质

### (一) K次齐次函数的定义

这是识别此类问题的第一步，也是所有后续推论的基石。

> [!abstract] 定义：K次齐次函数
> 若一个 $n$ 元函数 $f(x_1, x_2, \dots, x_n)$ 满足：
> $$ f(tx_1, tx_2, \dots, tx_n) = t^k f(x_1, x_2, \dots, x_n) $$
> 则称 $f$ 为 **k次齐次函数**。其中，指数 $k$ 称为该函数的**次数**。
> 
> **核心解读**：当所有自变量同时进行 $t$ 倍的尺度缩放时，函数值会相应地进行 $t^k$ 倍的尺度缩放。

> [!example]- 典型范例
> - **① 二次齐次函数**: $f(x,y) = x^2+y^2$
>   $f(tx,ty) = (tx)^2+(ty)^2 = t^2(x^2+y^2) = t^2 f(x,y)$。这是一个2次齐次函数。
>
> - **② 七次齐次函数**: $f(x,y) = x^3y^4$
>   $f(tx,ty) = (tx)^3(ty)^4 = t^3x^3 \cdot t^4y^4 = t^7(x^3y^4) = t^7 f(x,y)$。这是一个7次齐次函数。

### (二) 齐次函数的结构定理

任何一个二元k次齐次函数，其内在结构都可以被一种标准形式所描述。

> [!example]- 【例1】齐次函数的结构性质
> **证明：二元k次齐次函数 $f(x,y)$ 一定可以化为形如 $f(x,y) = x^k \cdot g(\frac{y}{x})$ 的形式。**
> 
> - **证明思路**: 核心在于利用定义式中 $t$ 的任意性，通过一个精巧的代换，强行构造出 $\frac{y}{x}$ 这一结构。
> 
> - **证明过程**:
>   1.  **应用定义**: 由 $f$ 是k次齐次函数，可知 $f(tx, ty) = t^k f(x,y)$。
>   2.  **关键代换**: 此式对任意 $t$ 成立，我们**令 $t = \frac{1}{x}$** (假设$x \neq 0$)。
>   3.  **代入化简**:
>       $$ f\left(\frac{1}{x} \cdot x, \frac{1}{x} \cdot y\right) = \left(\frac{1}{x}\right)^k f(x,y) $$
>       $$ f\left(1, \frac{y}{x}\right) = \frac{1}{x^k} f(x,y) $$
>   4.  **整理结论**:
>       $$ f(x,y) = x^k \cdot f\left(1, \frac{y}{x}\right) $$
>   5.  **定义新函数**: 令 $g(u) = f(1,u)$。由于 $f(1, \frac{y}{x})$ 是一个仅由变量 $\frac{y}{x}$ 决定的表达式，故可记为 $g(\frac{y}{x})$。
>   6.  **最终形式**: $f(x,y) = x^k \cdot g(\frac{y}{x})$。
>
> > [!tip] **逆定理亦成立**
> > 若一个函数能表示为 $f(x,y) = x^k g(\frac{y}{x})$，则它必为k次齐次函数。这揭示了该结构形式是齐次性的充要条件。

### (三) 欧拉定理 (Euler's Theorem)

这是连接齐次函数的**代数定义**与其**微分性质**的核心桥梁，也是最重要的考点。

> [!abstract] **欧拉定理**
> 若 $n$ 元函数 $f(x_1, \dots, x_n)$ 是一阶可导的k次齐次函数，则其必满足：
> $$ \sum_{i=1}^n x_i \frac{\partial f}{\partial x_i} = k \cdot f(x_1, \dots, x_n) $$
> **二元形式**: $x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = kf(x,y)$

> [!example]- 【例2】欧拉定理的证明
> **设 $f(x,y,z)$ 是一阶连续可偏导的三元k次齐次函数，证明：$x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} + z\frac{\partial f}{\partial z} = k \cdot f(x,y,z)$**
>
> - **核心战术**: **对定义式两边关于 $t$ 求导，再令 $t=1$**。
>
> - **证明过程**:
>   1.  **应用定义**: $f(tx,ty,tz) = t^k f(x,y,z)$。
>   2.  **两边对 $t$ 求导**:
>       *   **左边** (使用复合函数链式法则):
>         令 $u=tx, v=ty, w=tz$，则左边为 $\frac{d}{dt}f(u,v,w)$。
>         $$ \frac{\partial f}{\partial u}\frac{du}{dt} + \frac{\partial f}{\partial v}\frac{dv}{dt} + \frac{\partial f}{\partial w}\frac{dw}{dt} = \frac{\partial f}{\partial u} \cdot x + \frac{\partial f}{\partial v} \cdot y + \frac{\partial f}{\partial w} \cdot z $$
>       *   **右边**:
>         $$ \frac{d}{dt}[t^k f(x,y,z)] = k t^{k-1} f(x,y,z) $$
>   3.  **得到恒等式**:
>       $$ x\frac{\partial f(tx,ty,tz)}{\partial(tx)} + y\frac{\partial f(tx,ty,tz)}{\partial(ty)} + z\frac{\partial f(tx,ty,tz)}{\partial(tz)} = k t^{k-1} f(x,y,z) $$
>   4.  **令 $t=1$**:
>       $$ x\frac{\partial f(x,y,z)}{\partial x} + y\frac{\partial f(x,y,z)}{\partial y} + z\frac{\partial f(x,y,z)}{\partial z} = k \cdot 1^{k-1} \cdot f(x,y,z) $$
>       证毕。
>
> > [!tip] **逆定理亦成立**
> > 若一阶可导函数满足欧拉定理的微分方程，则该函数必为k次齐次函数。其证明需要构造并求解一个关于 $t$ 的常微分方程，是更深层次的考察。

---


### (四) 齐次函数性质的进阶应用

掌握了齐次函数的定义和欧拉定理后，更深层次的考察在于如何识别和运用这些性质来解决看似无关的问题，如证明复杂的积分恒等式或推导高阶偏导数的关系。

#### **1. 在积分恒等式中的应用**

这类问题的核心在于**逆向思维**：将一个复杂的积分表达式，识别为某个复合函数全导数的积分形式，从而利用牛顿-莱布尼茨公式进行化简。

> [!example]- 【例3】(660题) 识别并证明积分恒等式
> **设 $f(u,v)$ 是一阶连续可偏导的二元函数，且 $f(0,0)=0$，证明：$f(x,y) = \int_0^1 \left[x\frac{\partial f(tx,ty)}{\partial (tx)} + y\frac{\partial f(tx,ty)}{\partial (ty)}\right] dt$**
>
> - **核心战术**: **识别被积函数为某个复合函数的“全导数”**。
>
> - **分析与证明**:
>   1.  **识别被积函数结构**:
>       *   令 $u=tx, v=ty$。被积函数为 $x \cdot f'_u(u,v) + y \cdot f'_v(u,v)$。
>       *   我们敏锐地察觉到，这个结构与**对 $f(tx,ty)$ 关于 $t$ 求导**的结果高度相似。
>   2.  **构造复合函数并求导**:
>       *   构造一个关于 $t$ 的一元函数 $g(t) = f(tx,ty)$。
>       *   使用链式法则对其求导：
>         $$ \frac{d g(t)}{dt} = \frac{d}{dt}f(tx,ty) = \frac{\partial f}{\partial(tx)}\frac{d(tx)}{dt} + \frac{\partial f}{\partial(ty)}\frac{d(ty)}{dt} $$
>         $$ = \frac{\partial f(tx,ty)}{\partial(tx)} \cdot x + \frac{\partial f(tx,ty)}{\partial(ty)} \cdot y $$
>   3.  **逆向代入积分**:
>       *   我们发现，原积分中的被积函数**正是 $\frac{d}{dt}f(tx,ty)$**。
>       *   因此，原积分可以改写为：
>         $$ \int_0^1 \frac{d}{dt}[f(tx,ty)] dt $$
>   4.  **应用牛顿-莱布尼茨公式**:
>       *   这是一个“先导后积”的经典形式，其结果为原函数在上下限之差。
>         $$ \int_0^1 \frac{d}{dt}[f(tx,ty)] dt = [f(tx,ty)]_{t=0}^{t=1} $$
>         $$ = f(1\cdot x, 1\cdot y) - f(0\cdot x, 0\cdot y) = f(x,y) - f(0,0) $$
>   5.  **利用初始条件得出结论**:
>       *   已知 $f(0,0)=0$，故：
>         $$ f(x,y) - 0 = f(x,y) $$
>       *   等式左边等于右边，证毕。
>
> > [!tip] **战术总结**
> > 遇到形如 $\int_0^1 [x \cdot (\dots) + y \cdot (\dots)] dt$ 的表达式，要立刻警觉，检查其是否为 $f(tx,ty)$ 对 $t$ 的导数。这是解决此类问题的关键突破口。

#### **2. 在高阶偏导数中的应用**

欧拉定理本身是一个关于一阶偏导数的恒等式。通过对这个恒等式**再次求偏导**，我们可以得到关于二阶甚至更高阶偏导数之间的新关系。

> [!example]- 【例4】高阶欧拉定理的应用
> **设 $f(x,y)$ 是具有二阶连续偏导数的一次齐次函数，证明：$f''_{xx}f''_{yy} = (f''_{xy})^2$**
>
> - **核心战术**: **对一阶欧拉定理的结论再次求偏导**。
>
> - **证明过程**:
>   1.  **应用一阶欧拉定理**:
>       *   因为 $f$ 是一次齐次函数 ($k=1$)，由欧拉定理得：
>         $$ x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = 1 \cdot f(x,y) $$
>       *   为书写方便，记 $f'_x = \frac{\partial f}{\partial x}, f''_{xy} = \frac{\partial^2 f}{\partial x \partial y}$ 等。
>         $$ x f'_x + y f'_y = f $$
>
>   2.  **对方程两边再次求偏导**:
>       *   **对 $x$ 求偏导**:
>         $$ \frac{\partial}{\partial x}(x f'_x + y f'_y) = \frac{\partial f}{\partial x} $$
>         $$ (1 \cdot f'_x + x \cdot f''_{xx}) + (y \cdot f''_{yx}) = f'_x $$
>         *   两边的 $f'_x$ 消去，并利用二阶偏导连续性 ($f''_{yx} = f''_{xy}$)，得到：
>           $$ x f''_{xx} + y f''_{xy} = 0 \implies x f''_{xx} = -y f''_{xy} \quad \cdots (1) $$
>       *   **对 $y$ 求偏导**:
>         $$ \frac{\partial}{\partial y}(x f'_x + y f'_y) = \frac{\partial f}{\partial y} $$
>         $$ (x \cdot f''_{xy}) + (1 \cdot f'_y + y \cdot f''_{yy}) = f'_y $$
>         *   两边的 $f'_y$ 消去，得到：
>           $$ x f''_{xy} + y f''_{yy} = 0 \implies y f''_{yy} = -x f''_{xy} \quad \cdots (2) $$
>
>   3.  **联立方程并消元**:
>       *   将式 (1) 和式 (2) **相乘**:
>         $$ (x f''_{xx}) \cdot (y f''_{yy}) = (-y f''_{xy}) \cdot (-x f''_{xy}) $$
>         $$ xy \cdot f''_{xx}f''_{yy} = xy \cdot (f''_{xy})^2 $$
>
>   4.  **严谨性讨论**:
>       *   **当 $xy \neq 0$ 时**: 可直接约去 $xy$，得到 $f''_{xx}f''_{yy} = (f''_{xy})^2$。
>       *   **当 $xy = 0$ 时** (即在坐标轴上): 由于题设二阶偏导数**连续**，故等式 $xy(f''_{xx}f''_{yy} - (f''_{xy})^2) = 0$ 在整个平面上成立。在 $xy \neq 0$ 的区域内，括号内为0。根据连续性，该函数在坐标轴上的值等于其趋近于坐标轴的极限值，因此在坐标轴上也必为0。
>       *   故 $f''_{xx}f''_{yy} = (f''_{xy})^2$ 在整个定义域内恒成立。

---

### (五) 齐次函数性质的顶峰应用——与积分学的综合

齐次函数性质的最高级考察形式，往往是将其作为“钥匙”，去解开另一个看似无关的复杂问题。2006年的考研真题就是这一思想的绝佳体现，它将齐次函数的欧拉定理与多元函数积分学中的格林公式完美结合。

> [!example]- 【例5】(2006年数学一真题) 欧拉定理与格林公式的联合作战
> **设在区域 $D=\{(x,y)|y>0\}$ 内 $f(x,y)$ 有一阶连续偏导数，且对任意的 $t>0$，有 $f(tx,ty)=t^{-2}f(x,y)$。证明对D内任意分段光滑有向简单闭曲线L，均满足 $\oint_L yf(x,y)dx - xf(x,y)dy = 0$。**
>
> - **核心战术**: **识别曲线积分 $\xrightarrow{}$ 应用格林公式 $\xrightarrow{}$ 识别齐次函数 $\xrightarrow{}$ 应用欧拉定理**。
>
> - **证明过程**:
>   1.  **第一步：应用格林公式**
>       *   题目要求证明一个**闭曲线积分**恒为零。对于具有一阶连续偏导数的函数，这立即指向了**格林公式**。
>       *   令 $P(x,y) = yf(x,y)$，$Q(x,y) = -xf(x,y)$。
>       *   根据格林公式，我们只需证明在L所围成的区域 $D_L$ 内，$\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}$ 恒等于0。
>         $$ \oint_L Pdx + Qdy = \iint_{D_L} \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right) dxdy $$
>       *   由于L是**任意**的，只要被积函数连续且恒为0，则二重积分必为0。
>
>   2.  **第二步：计算偏导数**
>       *   使用乘积法则进行求导：
>         $$ \frac{\partial Q}{\partial x} = \frac{\partial}{\partial x}(-xf) = -\left(1 \cdot f + x \cdot \frac{\partial f}{\partial x}\right) = -f - x\frac{\partial f}{\partial x} $$
>         $$ \frac{\partial P}{\partial y} = \frac{\partial}{\partial y}(yf) = 1 \cdot f + y \cdot \frac{\partial f}{\partial y} = f + y\frac{\partial f}{\partial y} $$
>       *   计算差值：
>         $$ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = \left(-f - x\frac{\partial f}{\partial x}\right) - \left(f + y\frac{\partial f}{\partial y}\right) $$
>         $$ = -x\frac{\partial f}{\partial x} - y\frac{\partial f}{\partial y} - 2f = -\left(x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} + 2f\right) $$
>
>   3.  **第三步：识别并应用欧拉定理**
>       *   观察题设条件：$f(tx,ty)=t^{-2}f(x,y)$。这正是**-2次齐次函数**的定义 ($k=-2$)。
>       *   根据欧拉定理，该函数必满足：
>         $$ x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y} = -2f $$
>
>   4.  **第四步：代入并得出结论**
>       *   将欧拉定理的结论代入第二步的计算结果中：
>         $$ \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = - ((-2f) + 2f) = - (0) = 0 $$
>       *   因为被积函数恒为0，所以二重积分为0，进而闭曲线积分也恒为0。证毕。

---

## 🧠 三步精炼复盘区 (Refinement & Review Zone)

### **第一步：知识晶体萃取 (Knowledge Crystal)**
> [!summary]+ 公式/概念卡片 (Core Card)
> *   **核心对象：** K次齐次函数
> *   **一句话作用：** 利用其在尺度变换下的代数不变性（$f(t\vec{x})=t^k f(\vec{x})$），推导出强大的微分性质（欧拉定理）和标准化的函数结构（$f=x^k g(y/x)$），从而简化多元函数问题。
> *   **关键前提/约束：** 欧拉定理要求函数**一阶可导**；其高阶形式要求相应阶数的偏导数**连续**。
> *   **核心思想精髓：** **结构决定性质**。一个看似简单的代数定义，内含了深刻的微分几何信息，是连接代数与分析的桥梁。

### **第二步：横向辨析 (Comparison & Connection)**
> [!compare]- 横向辨析：齐次函数的两大核心性质
> | 性质 | **结构定理 ($f=x^k g(y/x)$)** | **欧拉定理 ($\sum x_i f'_{x_i} = kf$)** |
> | :--- | :--- | :--- |
> | **本质** | **代数**性质 | **微分**性质 |
> | **核心作用** | 将二元函数问题**降维**为一元函数问题（常用于解微分方程）。 | 建立各偏导数与函数自身之间的**线性关系**。 |
> | **战术应用** | 当题目涉及 $\frac{y}{x}$ 结构或需要简化函数形式时使用。 | 当题目涉及 $x\frac{\partial f}{\partial x} + y\frac{\partial f}{\partial y}$ 形式的表达式时，几乎是必用。 |
> | **关系** | 两者**充要**。可以互相推导，是同一事物在代数和微分领域的不同表现。 |

### **第三步：出题人视角 (Examiner's Perspective)**
> [!multi-column]
> > [!example]- **题型母题 (Archetype)**
> > > 1.  **直接考察**: 明确给出齐次函数定义，要求证明欧拉定理或其逆定理。
> > > 2.  **性质应用**: 给出齐次函数条件，要求推导其高阶偏导数关系或证明积分恒等式。
> > > 3.  **隐性考察 (最高级)**: 在一个综合题（如曲线积分、微分方程）中，齐次性作为一个“隐藏”条件，是解题的关键“钥匙”，需要考生主动识别并运用。
> 
> > [!danger]- **命题陷阱 (Common Traps)**
> > > 1.  **定义混淆**: 看到 $x^k + y^k$ 认为是齐次，但看到 $x^k + y^{k-1}$ 就反应不过来。齐次要求**每一项**的“总次数”相同。
> > > 2.  **战术僵化**: 只会从齐次定义推导欧拉定理，但面对欧拉定理的微分方程形式，无法逆向推导出齐次性。
> > > 3.  **条件遗忘**: 在应用高阶欧拉定理时，忽略了对“二阶偏导连续”的依赖，导致证明过程不严谨（如随意约去$xy$）。
> > > 4.  **识别失败**: 在综合题中未能从 $f(tx,ty)=t^k f(x,y)$ 这一条件中提取出“齐次函数”这一关键信息，导致整个问题无法下手。

---
## 💡 口诀总结 (Mnemonic)

> [!blank-container]
> 齐次函数看定义，自变量t倍放缩。
> 函数值变t的k次，结构性质心中记。
> 欲证微分找欧拉，两边对t把导求。
> 再令t等于1，线性关系自然有。

---
## 🎯 主动复习压力测试 (Active Recall Stress Test)

> [!question]
> - [ ] **(概念辨析)** 我能否用自己的话，解释0次齐次函数 $f(x,y)$ 的几何或物理意义？（提示：$f(tx,ty)=f(x,y)$）
> - [ ] **(深度理解)** 欧拉定理的逆定理证明中，为何解常微分方程时得到的积分“常数”会是 $f(x,y,z)$？这在逻辑上是否严谨？
> - [ ] **(决策选择)** 看到一个含有 $x f'_x + y f'_y$ 的复杂表达式，我的第一反应应该是什么？
> - [ ] **(迁移应用)** 如果一个函数 $f(x,y)$ 满足“半齐次”关系，例如 $f(t^a x, t^b y) = t^k f(x,y)$（其中a,b为常数），我能否类比欧拉定理的证明方法，推导出它所满足的微分方程？