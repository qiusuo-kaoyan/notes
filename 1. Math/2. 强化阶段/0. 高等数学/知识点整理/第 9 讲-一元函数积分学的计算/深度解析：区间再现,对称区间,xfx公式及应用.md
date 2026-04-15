---
type: 深度解析
subject: 数学
mastery: 待精炼
last_reviewed: 2025-10-12
parent_hub: "[[知识枢纽：定积分及其应用]]"
related_analyses:
  - "[[利用奇偶性计算定积分]]"
  - "[[变上限积分求导]]"
  - "[[定积分的几何意义]]"
  - "[[战术卡片：定积分计算技巧——对称性、周期性与区间变换]]"
  - "[[深度解析：三角函数定积分常用的 6 个公式]]"
exam_frequency: 高
key_variations:
  - 与变上限积分结合
  - 与二重积分结合
  - 含参/绝对值的复杂形式
tags:
  - 深度解析
  - 定积分
  - 换元法
URL:
  - https://www.bilibili.com/video/BV1Mi421a7PB/
---

# [[深度解析：区间再现,对称区间,xfx公式及应用]]

> [!note] 本篇笔记是对知识枢纽 **`$= const hub = dv.current().parent_hub; if (hub) { dv.el("strong", hub); } else { dv.el("span", "（未关联）"); }`** 的深度剖析，聚焦于其核心原理、易混淆点及实战变体。
[[区间再现公式及应用.pdf]]

---
### **专题核心例题概览**

*   **【例3.1】基础应用：** 直接出现 `f(a+b-x)` 或被积函数复杂但可通过 `f(x)+f(a+b-x)` 化简的类型。
*   **【例3.2】引申公式应用：** 涉及三角函数 `f(sinx)`、`f(cosx)` 在 `[0, π/2]` 和 `[0, π]` 上的积分性质。
*   **【例3.3】对称区间应用：** 对称区间积分与区间再现公式的关联与对比。
*   **【例3.4】变上限积分应用：** 在变上限积分问题中识别并使用区间再现公式。
*   **【例3.5】二重积分应用：** 在二重积分的累次积分计算中，对内层积分使用区间再现公式。

---

## 核心理论
### 1. 区间再现公式及证明

> [!abstract]- 区间再现公式
> 公式核心有两部分：
> 1.  **换元不变性**：
>     $$
>     \int_a^b f(x)dx = \int_a^b f(a+b-x)dx
>     $$
> 2.  **求和化简**：
>     $$
>     \int_a^b f(x)dx = \frac{1}{2} \int_a^b [f(x) + f(a+b-x)]dx
>     $$

> [!TIP]- 公式证明：换元法的直接体现
> 核心在于换元，令 $x = a+b-t$，则 $dx = -dt$。
> 换元必换限：
> *   当 $x=a$ 时, $t = b$。
> *   当 $x=b$ 时, $t = a$。
> 
> $$
> \begin{aligned}
> \int_a^b f(x)dx &= \int_b^a f(a+b-t)(-dt) \\
> &= -\int_b^a f(a+b-t)dt \\
> &= \int_a^b f(a+b-t)dt
> \end{aligned}
> $$
> 由于定积分的值与积分变量的字母无关，故可将 $t$ 替换回 $x$，即得证：
> $$
> \int_a^b f(x)dx = \int_a^b f(a+b-x)dx
> $$
> 该公式的精髓在于：**积分区间 `[a, b]` 经过变换后再次出现，但被积函数的形式发生了改变**，故名“区间再现”。 

![[区间再现-公式集.png]]![[区间再现-1-几何意义.png]]![[区间再现-对称区间公式结论.png]]

### 2. 公式的几何意义

从几何上看，$y=f(x)$ 和 $y=f(a+b-x)$ 两条曲线关于直线 $x = \frac{a+b}{2}$ 对称。因此，它们在区间 $[a,b]$ 上与x轴围成的曲边梯形面积相等。



### 3. 两大应用场景

#### **场景一：被积函数出现 `f(a+b-x)` 形式**
当被积函数中显式地出现了“上界+下界-积分变量”的结构时，直接使用公式(1)进行变量替换，往往能极大简化计算。

#### **场景二：被积函数复杂，但 `f(x)+f(a+b-x)` 能够化简**
当被积函数本身不易积分，但其与 $f(a+b-x)$ 的和具有非常简洁的形式时（例如可以约分，或变为常数），应尝试使用公式(2)。

---

## 例题解析

> [!example]- 【例3.1】基础应用
> **(1) 计算 $\int_0^1 (1-x)^3 dx$ 和 $\int_0^1 x(1-x)^3 dx$**
> 
> *   **解析 $\int_0^1 (1-x)^3 dx$：**
>     *   **识别场景：** 此处 $a=0, b=1$，$a+b-x = 1-x$。被积函数为 $f(x)=(1-x)^3$，但直接看`(1-x)`，它符合 $a+b-x$ 的形式。
>     *   **应用公式(1)：**
>         $$
>         I = \int_0^1 (1-x)^3 dx
>         $$
>         将被积函数中的 $x$ 替换为 $1-x$：
>         $$
>         I = \int_0^1 (1-(1-x))^3 dx = \int_0^1 x^3 dx = \left[ \frac{1}{4}x^4 \right]_0^1 = \frac{1}{4}
>         $$
>     *   **对比：** 此方法避免了直接展开 $(1-x)^3$ 的繁琐计算。
> 
> *   **解析 $\int_0^1 x(1-x)^3 dx$：**
>     *   **识别场景：** 同上，被积函数中含有 $x$ 和 $1-x$ 两部分。
>     *   **应用公式(1)：**
>         $$
>         I = \int_0^1 x(1-x)^3 dx
>         $$
>         将被积函数中所有 $x$ 替换为 $1-x$：
>         $$
>         \begin{aligned}
>         I &= \int_0^1 (1-x)(1-(1-x))^3 dx \\
>         &= \int_0^1 (1-x)x^3 dx \\
>         &= \int_0^1 (x^3 - x^4) dx \\
>         &= \left[ \frac{1}{4}x^4 - \frac{1}{5}x^5 \right]_0^1 = \frac{1}{4} - \frac{1}{5} = \frac{1}{20}
>         \end{aligned}
>         $$
> 
> **(2) 计算 $\int_1^3 \frac{\sqrt{x}}{\sqrt{x}+\sqrt{4-x}} dx$**
> 
> *   **识别场景：** 此处 $a=1, b=3$，$a+b-x = 4-x$。被积函数 $f(x) = \frac{\sqrt{x}}{\sqrt{x}+\sqrt{4-x}}$ 形式复杂，不易直接积分，符合应用场景二。
> *   **应用公式(2)：**
>     $$
>     I = \int_1^3 \frac{\sqrt{x}}{\sqrt{x}+\sqrt{4-x}} dx
>     $$
>     首先计算 $f(4-x)$：
>     $$
>     f(4-x) = \frac{\sqrt{4-x}}{\sqrt{4-x}+\sqrt{4-(4-x)}} = \frac{\sqrt{4-x}}{\sqrt{4-x}+\sqrt{x}}
>     $$
>     两者相加：
>     $$
>     f(x) + f(4-x) = \frac{\sqrt{x}}{\sqrt{x}+\sqrt{4-x}} + \frac{\sqrt{4-x}}{\sqrt{4-x}+\sqrt{x}} = \frac{\sqrt{x}+\sqrt{4-x}}{\sqrt{x}+\sqrt{4-x}} = 1
>     $$
>     应用公式：
>     $$
>     I = \frac{1}{2} \int_1^3 [f(x) + f(4-x)] dx = \frac{1}{2} \int_1^3 1 dx = \frac{1}{2} [x]_1^3 = \frac{1}{2}(3-1) = 1
>     $$
> 
> **(3) 计算 $\int_0^1 \sqrt{\frac{x}{1-x}} dx$**
> 
> *   **识别场景：** 被积函数复杂，且分母中出现 $1-x$，符合场景二。
> *   **应用公式(1)变换形式：**
>     $$
>     I = \int_0^1 \sqrt{\frac{x}{1-x}} dx = \int_0^1 \frac{\sqrt{x}}{\sqrt{1-x}} dx
>     $$
>     用区间再现，将被积函数中的 $x$ 替换为 $1-x$：
>     $$
>     I = \int_0^1 \frac{\sqrt{1-x}}{\sqrt{1-(1-x)}} dx = \int_0^1 \frac{\sqrt{1-x}}{\sqrt{x}} dx
>     $$
> *   **分析：** 此时使用求和化简 `f(x)+f(1-x)` 较为复杂，不如直接对变换后的形式进行计算。
>     $$
>     I = \int_0^1 \frac{\sqrt{1-x}}{\sqrt{x}} dx = \int_0^1 (1-x)^{\frac{1}{2}} x^{-\frac{1}{2}} dx
>     $$
>     这个形式仍然不直观。回到原问题，我们可以进行换元。令 $x=\sin^2 t$，则 $dx = 2\sin t \cos t dt$。
>     当 $x=0, t=0$; 当 $x=1, t=\pi/2$。
>     $$
>     I = \int_0^{\pi/2} \sqrt{\frac{\sin^2 t}{1-\sin^2 t}} (2\sin t \cos t) dt = \int_0^{\pi/2} \frac{\sin t}{\cos t} (2\sin t \cos t) dt = 2 \int_0^{\pi/2} \sin^2 t dt
>     $$
>     使用Wallis公式或降幂公式：
>     $$
>     I = 2 \int_0^{\pi/2} \frac{1-\cos(2t)}{2} dt = \int_0^{\pi/2} (1-\cos(2t)) dt = \left[ t - \frac{1}{2}\sin(2t) \right]_0^{\pi/2} = \frac{\pi}{2}
>     $$
> *   **另解(凑微分+几何意义)：**
>     $$
>     I = \int_0^1 \frac{\sqrt{1-x}}{\sqrt{x}} dx = \int_0^1 \frac{\sqrt{1-(\sqrt{x})^2}}{\sqrt{x}} dx
>     $$
>     令 $u=\sqrt{x}$, $du = \frac{1}{2\sqrt{x}}dx \implies dx = 2\sqrt{x}du = 2u du$。但这里凑 $d(\sqrt{x})$ 更直接。
>     $$
>     I = \int_0^1 \sqrt{1-(\sqrt{x})^2} \cdot \frac{1}{\sqrt{x}} dx = 2 \int_0^1 \sqrt{1-(\sqrt{x})^2} d(\sqrt{x})
>     $$
>     令 $u=\sqrt{x}$，积分变为 $2\int_0^1 \sqrt{1-u^2}du$。
>     $\int_0^1 \sqrt{1-u^2}du$ 的几何意义是半径为1的圆在第一象限的面积，即 $\frac{1}{4}\pi(1)^2 = \frac{\pi}{4}$。
>     因此，$I = 2 \times \frac{\pi}{4} = \frac{\pi}{2}$。

> [!example]- 【例3.2】引申公式的应用
> #### **公式1 & 2: $[0, π/2]$ 上 $sinx$ 与 $cosx$ 的互换**
> $$
> \int_0^{\pi/2} f(\sin x)dx = \int_0^{\pi/2} f(\cos x)dx
> $$
> **证明：** 在左侧积分中使用区间再现，$a=0, b=\pi/2$, $a+b-x = \pi/2-x$。
> $$
> \int_0^{\pi/2} f(\sin x)dx = \int_0^{\pi/2} f(\sin(\pi/2-x))dx = \int_0^{\pi/2} f(\cos x)dx
> $$
> 同理可证 $\int_0^{\pi/2} f(\sin x, \cos x)dx = \int_0^{\pi/2} f(\cos x, \sin x)dx$。
> 
> #### **公式3: $[0, π]$ 上 $x f(sinx)$ 的消 $x$ 公式 (极为重要)**
> $$
> \int_0^{\pi} x f(\sin x)dx = \frac{\pi}{2} \int_0^{\pi} f(\sin x)dx = \pi \int_0^{\pi/2} f(\sin x)dx
> $$
> *   **第一步证明：消去 `x`**
>     令 $I = \int_0^{\pi} x f(\sin x)dx$。
>     使用区间再现，$a=0, b=\pi$, $a+b-x = \pi-x$。
>     $$
>     \begin{aligned}
>     I &= \int_0^{\pi} (\pi-x) f(\sin(\pi-x))dx \\
>     &= \int_0^{\pi} (\pi-x) f(\sin x)dx \quad (\text{因为 } \sin(\pi-x)=\sin x) \\
>     &= \pi \int_0^{\pi} f(\sin x)dx - \int_0^{\pi} x f(\sin x)dx \\
>     &= \pi \int_0^{\pi} f(\sin x)dx - I
>     \end{aligned}
>     $$
>     移项得 $2I = \pi \int_0^{\pi} f(\sin x)dx$，所以 $I = \frac{\pi}{2} \int_0^{\pi} f(\sin x)dx$。证毕。
> 
> *   **第二步证明：区间减半**
>     $$
>     \int_0^{\pi} f(\sin x)dx = 2 \int_0^{\pi/2} f(\sin x)dx
>     $$
>     **证法一（对称性）：** 函数 $y=f(\sin x)$ 的图像关于直线 $x=\pi/2$ 对称，因此在 $[0, \pi]$ 上的积分等于在 $[0, \pi/2]$ 上积分的两倍。
>     **证法二（构造对称区间）：**
>     $$
>     \int_0^{\pi} f(\sin x)dx \xrightarrow{t=x-\pi/2} \int_{-\pi/2}^{\pi/2} f(\sin(t+\pi/2))dt = \int_{-\pi/2}^{\pi/2} f(\cos t)dt
>     $$
>     由于 $f(\cos t)$ 是偶函数，所以：
>     $$
>     \int_{-\pi/2}^{\pi/2} f(\cos t)dt = 2\int_{0}^{\pi/2} f(\cos t)dt = 2\int_{0}^{\pi/2} f(\sin t)dt
>     $$
>     证毕。
> 
> > [!TIP] 快速找对称区间小技巧：积分区间 -c，被积函数+c
> > ![[区间再现-2-快速换元找对称区间.png]]
> 
> > [!danger] **核心陷阱：`x f(cosx)` 能否使用此公式？**
> > **答案是：一般不能！具体可以参考这份笔记：[[深度解析：xf(sinx)型公式与华里士公式的对比辨析]]**
> > 尝试对 $I = \int_0^{\pi} x f(\cos x)dx$ 使用区间再现：
> > $$
> > I = \int_0^{\pi} (\pi-x) f(\cos(\pi-x))dx = \int_0^{\pi} (\pi-x) f(-\cos x)dx
> > $$
> > 除非 $f$ 是偶函数，使得 $f(-\cos x) = f(\cos x)$，否则被积函数无法再现，无法移项合并。
> > 
> > **可以使用的特例：**
> > 如果被积函数是 $f(|\cos x|)$ 或 $f(\cos^2 x)$ 等形式，由于 $|\cos(\pi-x)|=|\cos x|$ 且 $\cos^2(\pi-x) = \cos^2 x$，此时公式依然成立。
> > $$
> > \int_0^{\pi} x f(|\cos x|)dx = \frac{\pi}{2} \int_0^{\pi} f(|\cos x|)dx
> > $$
> 
> ---
> 
> **(1) 计算 $\int_0^{\pi/2} \frac{\cos^\alpha x}{\sin^\alpha x + \cos^\alpha x} dx$**
> 
> *   **识别场景：** 属于 `[0, π/2]` 区间上三角函数积分，应用引申公式1。
> *   **应用公式：**
>     $$
>     I = \int_0^{\pi/2} \frac{\cos^\alpha x}{\sin^\alpha x + \cos^\alpha x} dx
>     $$
>     根据公式，此积分等于将被积函数中的 `sin` 和 `cos` 互换后的积分：
>     $$
>     I = \int_0^{\pi/2} \frac{\sin^\alpha x}{\cos^\alpha x + \sin^\alpha x} dx
>     $$
>     两者相加：
>     $$
>     2I = \int_0^{\pi/2} \frac{\cos^\alpha x + \sin^\alpha x}{\sin^\alpha x + \cos^\alpha x} dx = \int_0^{\pi/2} 1 dx = \frac{\pi}{2}
>     $$
>     所以 $I = \frac{\pi}{4}$。
>     > [!NOTE] 类似形式如 $\int_0^{\pi/2} \frac{1}{1+\tan^\alpha x}dx$ 或令 $x=\arctan t$ 后的形式 $\int_0^\infty \frac{1}{(1+t^2)(1+t^\alpha)}dt$ 均为此题变体。
> 
> **(2) 计算 $\int_0^{\pi} \frac{x|\sin x \cos x|}{1+\sin^4 x} dx$**
> 
> *   **识别场景：** 典型的 `x f(sin x, |cos x|)` 形式，可以应用引申公式3。
> *   **法一：应用公式**
>     $$
>     I = \int_0^{\pi} \frac{x|\sin x \cos x|}{1+\sin^4 x} dx
>     $$
>     由于 $f(\sin x, |\cos x|) = \frac{|\sin x \cos x|}{1+\sin^4 x}$ 中，$\sin(\pi-x)=\sin x$ 且 $|\cos(\pi-x)|=|\cos x|$，函数部分不变，可以使用消 `x` 公式。
>     $$
>     I = \frac{\pi}{2} \int_0^{\pi} \frac{|\sin x \cos x|}{1+\sin^4 x} dx
>     $$
>     被积函数 $g(x)=\frac{|\sin x \cos x|}{1+\sin^4 x}$ 关于 $x=\pi/2$ 对称，因为 $g(\pi-x)=g(x)$。
>     $$
>     I = \frac{\pi}{2} \cdot 2 \int_0^{\pi/2} \frac{|\sin x \cos x|}{1+\sin^4 x} dx = \pi \int_0^{\pi/2} \frac{\sin x \cos x}{1+\sin^4 x} dx
>     $$
>     在 $[0, \pi/2]$ 内，$\sin x, \cos x \ge 0$，故可去掉绝对值。
>     令 $u = \sin^2 x$, $du = 2\sin x \cos x dx \implies \sin x \cos x dx = \frac{1}{2}du$。
>     换限：$x=0, u=0$; $x=\pi/2, u=1$。
>     $$
>     I = \pi \int_0^1 \frac{\frac{1}{2}du}{1+u^2} = \frac{\pi}{2} [\arctan u]_0^1 = \frac{\pi}{2} \cdot \frac{\pi}{4} = \frac{\pi^2}{8}
>     $$
> 
> *   **法二：构造对称区间**
>     令 $t = x-\pi/2$, $x=t+\pi/2$。
>     $$
>     I = \int_{-\pi/2}^{\pi/2} \frac{(t+\pi/2)|\sin(t+\pi/2)\cos(t+\pi/2)|}{1+\sin^4(t+\pi/2)} dt = \int_{-\pi/2}^{\pi/2} \frac{(t+\pi/2)|\cos t(-\sin t)|}{1+\cos^4 t} dt
>     $$
>     $$
>     I = \int_{-\pi/2}^{\pi/2} \frac{t|\sin t \cos t|}{1+\cos^4 t} dt + \frac{\pi}{2} \int_{-\pi/2}^{\pi/2} \frac{|\sin t \cos t|}{1+\cos^4 t} dt
>     $$
>     第一个积分的被积函数是奇函数，在对称区间上的积分为0。第二个积分的被积函数是偶函数。
>     $$
>     I = \frac{\pi}{2} \cdot 2 \int_0^{\pi/2} \frac{|\sin t \cos t|}{1+\cos^4 t} dt = \pi \int_0^{\pi/2} \frac{\sin t \cos t}{1+\cos^4 t} dt
>     $$
>     后续计算同法一。
> 
> **(3) 计算 $\int_0^{n\pi} x|\cos x| dx$ (n为正整数)**
> 
> *   **识别场景：** 形式类似引申公式3，但积分上限为 $n\pi$。
> *   **应用区间再现**
>     $I = \int_0^{n\pi} x|\cos x|dx$
>     $I = \int_0^{n\pi} (n\pi-x)|\cos(n\pi-x)|dx$
>     由于 $|\cos(n\pi-x)|=|\cos x|$（利用诱导公式和绝对值性质）。
>     $I = \int_0^{n\pi} (n\pi-x)|\cos x|dx = n\pi\int_0^{n\pi}|\cos x|dx - I$
>     $2I = n\pi\int_0^{n\pi}|\cos x|dx \implies I = \frac{n\pi}{2}\int_0^{n\pi}|\cos x|dx$
> *   **周期性处理**
>     被积函数 $|\cos x|$ 的周期为 $\pi$。
>     $$
>     \int_0^{n\pi}|\cos x|dx = n \int_0^{\pi}|\cos x|dx
>     $$
>     在 $[0, \pi]$ 上，
>     $$
>     \int_0^{\pi}|\cos x|dx = \int_0^{\pi/2}\cos x dx + \int_{\pi/2}^{\pi}(-\cos x)dx = [\sin x]_0^{\pi/2} - [\sin x]_{\pi/2}^{\pi} = (1-0) - (0-1) = 2
>     $$
>     所以，$I = \frac{n\pi}{2} \cdot (n \cdot 2) = n^2\pi$。

> [!example]- 【例3.3】对称区间问题
> **计算 $\int_{-2}^2 x \ln(1+e^x) dx$**
> 
> *   **识别场景：** 典型的对称区间 $[-a, a]$ 上的积分。
> *   **法一：利用对称区间性质公式**
>     $$
>     \int_{-a}^a g(x)dx = \int_0^a [g(x)+g(-x)]dx
>     $$
>     这里 $g(x) = x\ln(1+e^x)$。
>     $g(-x) = (-x)\ln(1+e^{-x}) = -x\ln(\frac{e^x+1}{e^x}) = -x[\ln(1+e^x)-\ln(e^x)] = -x\ln(1+e^x)+x^2$
>     $g(x)+g(-x) = x\ln(1+e^x) -x\ln(1+e^x)+x^2 = x^2$
>     $$
>     I = \int_0^2 x^2 dx = \left[\frac{1}{3}x^3\right]_0^2 = \frac{8}{3}
>     $$
> 
> *   **法二：使用区间再现**
>     虽然是对称区间，但仍可看作普通区间 $[a,b]$，其中 $a=-2, b=2, a+b-x = -x$。
>     $$
>     I = \int_{-2}^2 x \ln(1+e^x) dx
>     $$
>     应用区间再现：
>     $$
>     I = \int_{-2}^2 (-x) \ln(1+e^{-x}) dx
>     $$
>     两者相加：
>     $$
>     2I = \int_{-2}^2 [x\ln(1+e^x) -x\ln(1+e^{-x})] dx = \int_{-2}^2 x[\ln(1+e^x) - \ln(1+e^{-x})] dx
>     $$
>     $$
>     2I = \int_{-2}^2 x \ln\left(\frac{1+e^x}{1+e^{-x}}\right) dx = \int_{-2}^2 x \ln\left(\frac{1+e^x}{(e^x+1)/e^x}\right) dx = \int_{-2}^2 x \ln(e^x) dx = \int_{-2}^2 x^2 dx
>     $$
>     被积函数 $x^2$ 是偶函数。
>     $$
>     2I = 2 \int_0^2 x^2 dx = 2 \cdot \frac{8}{3} = \frac{16}{3}
>     $$
>     所以 $I = \frac{8}{3}$。
> 
> > [!TIP] 小结论：$x\ln(1+e^x) +(-x)\ln(1-e^{-x}) = x^2$
> > 即 $g(x) = x \ln(1+e^x)$
> > $g(x)+g(-x)=x^2$
> > ![[区间再现-对称区间公式结论.png]]

> [!example]- 【例3.4 & 3.5】在变上限与二重积分中的高级应用
> #### **【例3.4】变上限积分中的应用**
> 
> > [!TIP]
> > 区间再现公式在变上限积分中的一个标志性应用模式是处理形如 $\int_0^x f(x-t)dt$ 的积分。通过换元 $u=x-t$ 可以证明，但直接使用区间再现则更为迅捷：
> > $$
> > \int_0^x f(x-t)dt = \int_0^x f(0+x-t)dt = \int_0^x f(t)dt
> > $$
> > **核心思想：** 将对 `t` 的积分中的 `x` 视为常数，识别出 `a=0, b=x` 的模式，从而将被积函数化简，极大地便利了后续的求导或求极限操作。
> 
> **(1) (2017 数二) 求极限 $\lim_{x\to0^+} \frac{\int_0^x \sqrt{x-t} e^{x-t} dt}{x^{3/2}}$**
> *(注：变体--根据讲义视频讲解逻辑，此处题目以更具代表性的形式呈现)*
> 
> *   **识别场景：** 0/0 型极限，分子为变上限积分。被积函数为 $g(t) = \sqrt{x-t}e^{x-t}$，符合 $f(x-t)$ 的结构。
> *   **应用区间再现化简分子：**
>     $$
>     \int_0^x \sqrt{x-t}e^{x-t} dt = \int_0^x \sqrt{t}e^t dt
>     $$
> *   **代入原极限并使用洛必达法则：**
>     $$
>     \begin{aligned}
>     \lim_{x\to0^+} \frac{\int_0^x \sqrt{t}e^t dt}{x^{3/2}} &= \lim_{x\to0^+} \frac{\frac{d}{dx}\int_0^x \sqrt{t}e^t dt}{\frac{d}{dx}x^{3/2}} \\
>     &= \lim_{x\to0^+} \frac{\sqrt{x}e^x}{\frac{3}{2}x^{1/2}} \\
>     &= \lim_{x\to0^+} \frac{e^x}{\frac{3}{2}} = \frac{e^0}{\frac{3}{2}} = \frac{2}{3}
>     \end{aligned}
>     $$
> 
> **(2) (李艳芳 900) 计算 $\frac{d}{dx}\int_0^{x^2} t f(\sqrt{x^4-t^2})dt$**
> 
> *   **识别场景：** 变上限积分求导，被积函数复杂。
> *   **第一步：凑微分**
>     注意到被积函数中有 $t^2$ 和 $t$，可以凑微分。令 $u=t^2$, $du = 2tdt \implies tdt = \frac{1}{2}du$。
>     换限：$t=0 \implies u=0$；$t=x^2 \implies u=(x^2)^2 = x^4$。
>     $$
>     \text{原积分} = \frac{1}{2}\int_0^{x^4} f(\sqrt{x^4-u})du
>     $$
> *   **第二步：应用区间再现**
>     此时积分形式为 $\int_0^a f(a-u)du$，其中 $a=x^4$。
>     $$
>     \frac{1}{2}\int_0^{x^4} f(\sqrt{x^4-u})du = \frac{1}{2}\int_0^{x^4} f(\sqrt{u})du
>     $$
> *   **第三步：求导**
>     对化简后的结果求导：
>     $$
>     \begin{aligned}
>     \frac{d}{dx}\left[\frac{1}{2}\int_0^{x^4} f(\sqrt{u})du\right] &= \frac{1}{2} \cdot \left[f(\sqrt{x^4}) \cdot \frac{d}{dx}(x^4)\right] \\
>     &= \frac{1}{2} \cdot f(x^2) \cdot 4x^3 \\
>     &= 2x^3 f(x^2)
>     \end{aligned}
>     $$
> 
> #### **【例3.5】二重积分中的应用**
> 
> > [!WARNING]
> > 在二重积分的累次积分计算中，当对内层积分进行计算时，外层积分的变量应被视为**常数**。这为区间再现公式的应用创造了条件。
> 
> **(1) 计算 $I = \int_0^1 dx \int_0^x (x-y)^3 dy$**
> 
> *   **识别场景：** 计算二重积分，先对 $y$ 积分。
> *   **处理内层积分：**
>     $$
>     J = \int_0^x (x-y)^3 dy
>     $$
>     将 $x$ 视为常数，此为对 $y$ 在 $[0,x]$ 上的积分。被积函数符合 $f(x-y)$ 结构。
>     应用区间再现：
>     $$
>     J = \int_0^x (x-y)^3 dy = \int_0^x (x-(x-y))^3 dy = \int_0^x y^3 dy
>     $$
>     计算得：
>     $$
>     J = \left[\frac{1}{4}y^4\right]_0^x = \frac{1}{4}x^4
>     $$
> *   **计算外层积分：**
>     $$
>     I = \int_0^1 \frac{1}{4}x^4 dx = \frac{1}{4}\left[\frac{1}{5}x^5\right]_0^1 = \frac{1}{20}
>     $$
> 
> **(2) (880) 计算 $I = \iint_D |\sin(x-y)|dxdy$, 其中 $D: 0 \le x \le y \le 2\pi$**
> 
> *   **第一步：建立累次积分**
>     根据积分区域 $0 \le x \le y \le 2\pi$，可以写出累次积分：
>     $$
>     I = \int_0^{2\pi} dy \int_0^y |\sin(x-y)|dx
>     $$
> *   **第二步：化简内层积分**
>     $$
>     J(y) = \int_0^y |\sin(x-y)|dx
>     $$
>     利用 $|\sin(u)|=|\sin(-u)|$，有 $|\sin(x-y)|=|\sin(y-x)|$。
>     $$
>     J(y) = \int_0^y |\sin(y-x)|dx
>     $$
>     对变量 $x$ 在区间 $[0,y]$ 上应用区间再现公式：
>     $$
>     J(y) = \int_0^y |\sin(y-(y-x))|dx = \int_0^y |\sin x| dx
>     $$
> *   **第三步：计算最终积分**
>     将化简后的内层积分代回：
>     $$
>     I = \int_0^{2\pi} \left(\int_0^y |\sin x|dx\right) dy
>     $$
>     这是一个变上限积分的积分，标准方法是使用分部积分法：
>     令 $F(y) = \int_0^y |\sin x|dx$，则 $F'(y)=|\sin y|$。
>     $$
>     \begin{aligned}
>     I &= \int_0^{2\pi} F(y) dy \\
>     &= \left[yF(y)\right]_0^{2\pi} - \int_0^{2\pi} y F'(y)dy \\
>     &= 2\pi F(2\pi) - 0 - \int_0^{2\pi} y|\sin y|dy
>     \end{aligned}
>     $$
>     其中，$F(2\pi) = \int_0^{2\pi}|\sin x|dx = 2 \int_0^\pi \sin x dx = 2[-\cos x]_0^\pi = 4$。
>     而 $\int_0^{2\pi} y|\sin y|dy = \int_0^\pi y\sin y dy + \int_\pi^{2\pi} y(-\sin y)dy$。
>     分部积分计算 $\int y\sin y dy = -y\cos y + \sin y + C$。
>     $$
>     \int_0^\pi y\sin y dy = [-y\cos y + \sin y]_0^\pi = \pi
>     $$
>     $$
>     \int_\pi^{2\pi} -y\sin y dy = [y\cos y - \sin y]_\pi^{2\pi} = (2\pi) - (-\pi) = 3\pi
>     $$
>     所以，$\int_0^{2\pi} y|\sin y|dy = \pi + 3\pi = 4\pi$。
>     代回原式：
>     $$
>     I = 2\pi \cdot 4 - 4\pi = 8\pi - 4\pi = 4\pi
>     $$
> 
> > [!idea] **思路开拓**
> > 对于 $\int_0^{2\pi} \left(\int_0^y |\sin x|dx\right) dy$ 这个积分，还可以从几何意义上理解。它是在 $y-F(y)$ 坐标系中，由曲线 $F(y)=\int_0^y|\sin x|dx$、y轴、直线$y=2\pi$围成的面积。这为理解问题提供了另一个视角。![[区间再现-880好方法.png]]

---
## 🧠 三步精炼复盘区 (Refinement & Review Zone)

### **第一步：知识晶体萃取 (Knowledge Crystal)**
> [!summary]+ 公式/概念卡片 (Core Card)
> *   **核心对象：** 定积分 $\int_a^b f(x)dx$
> *   **一句话作用：** 通过将被积变量 $x$ 替换为 $a+b-x$，在不改变积分值的前提下，变换被积函数的形式，以达到化简目的。
> *   **关键前提/约束：** 必须是定积分，拥有确定的积分上下限 $[a, b]$。
> *   **证明/推导精髓：** 核心是换元法（令 $x=a+b-t$）以及定积分值与积分变量字母无关的性质。

### **第二步：横向辨析 (Comparison & Connection)**
> [!compare]- 横向辨析：与易混淆概念的对决
> | 对比维度 | **区间再现公式** | **对称区间积分性质** |
> | :--- | :--- | :--- |
> | **适用区间** | 任意定积分区间 $[a, b]$ | 必须是关于原点对称的区间 $[-a, a]$ |
> | **核心操作** | $\int_a^b f(x)dx = \int_a^b f(a+b-x)dx$ | 将被积函数分解为奇偶两部分，奇部积分为0，偶部积分为2倍半区间积分。 |
> | **常用化简式** | $\frac{1}{2}\int_a^b[f(x)+f(a+b-x)]dx$ | $\int_0^a[f(x)+f(-x)]dx$ |
> | **关系** | 对称区间性质是区间再现公式在 $b=-a$ 时的特例。 | 区间再现公式是更一般化的形式。 |

### **第三步：出题人视角 (Examiner's Perspective)**
> [!multi-column]
> > [!example|icon-name: "Target"] **题型母题 (Archetype)**
> > > 1.  $\int_a^b \frac{g(x)}{g(x)+g(a+b-x)}dx$ 这类结构，相加后被积函数变为1。
> > > 2.  $\int_0^{\pi} xf(\sin x)dx$ 这类结构，利用公式消去 $x$ 项。
> > > 3.  出现在变上限积分或二重积分的内层积分中，作为计算步骤的一部分。
> 
> > [!danger|icon-name: "Skull"] **命题陷阱 (Common Traps)**
> > > 4.  **公式误用：** 将 $\int_0^{\pi} xf(\cos x)dx$ 错误地套用消 `x` 公式，忽略了 $\cos(\pi-x)=-\cos x$ 带来的负号问题。
> > > 5.  **概念混淆：** 将区间再现公式与不定积分的换元法混淆，忘记了它是定积分的专属性质。
> > > 6.  **计算麻痹：** 在使用 $\frac{1}{2}\int[f(x)+f(a+b-x)]dx$ 时，忘记前面的 $\frac{1}{2}$。

---
## 🎯 主动复习压力测试 (Active Recall Stress Test)

> [!question]
> - [ ] **(概念辨析)** 区间再现公式和对称区间奇偶性分解的公式，其实质联系是什么？在什么情况下两者可以通用，什么情况下必须用前者？
> - [ ] **(深度理解)** 为什么 $\int_0^\pi xf(\sin x)dx$ 可以使用消去x的技巧，而 $\int_0^\pi xf(\cos x)dx$ 一般不行？其根本的数学原因是什么？
> - [ ] **(决策选择)** 面对一个复杂的定积分，我应该在何时将“区间再现”作为我的首选试探策略？它的“题眼”是什么？
> - [ ] **(迁移应用)** 我能否将区间再现的思想，口头描述并应用到三重积分 $\int_0^1 dx \int_0^x dy \int_0^y f(x-z)dz$ 的内层积分化简中？