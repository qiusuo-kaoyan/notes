#高等数学 #每日一题 
***

![[1. 控制科学备考/4. 每日一题/数学/高数/每日一lim, 成为lim霸/Picture Set/2.png]]

## 1. 题目

求极限：
$$
\lim_{n \to \infty} \frac{\frac{\ln 3}{3} + \frac{\ln 4}{4} + ... + \frac{\ln n}{n}}{(\ln n)^2}
$$

## 2. 题目分析

*   **分母：** $(\ln n)^2$，形式简单。
*   **分子：** 前 $n$ 项和，$\sum_{i=3}^{n} \frac{\ln i}{i}$，形式较复杂。
*   **核心：** 如何处理分子的求和形式。

## 3. 解题方法

### 3.1. 方法一：[[战术卡片：Stolz定理-离散L'Hôpital与数列极限收割机]]

#### 3.1.1. Stolz 定理回顾

若数列 $\{b_n\}$ 严格单调递增（或递减），且 $\lim_{n \to \infty} b_n = \infty$ (严格单调递增的情况)，则：
$$
\lim_{n \to \infty} \frac{a_n}{b_n} = \lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n}
$$
(如果右侧极限存在或为无穷大)

#### 3.1.2. Stolz 定理的妙用

*   将前 $n$ 项和转化为单项：
    *   设 $S_n = \sum_{i=1}^{n} a_i$，则 $S_{n+1} - S_n = a_{n+1}$。
    *   Stolz 定理可以将求和形式的极限转化为单项形式的极限。

#### 3.1.3. 应用 Stolz 定理

1.  **构造数列：**
    *   $a_n = \sum_{i=3}^{n} \frac{\ln i}{i}$ (注意这里 i 从 3 开始，因为题目中分子从 $\frac{\ln3}{3}$ 开始)
    *   $b_n = (\ln n)^2$

2.  **验证条件：**
    *   $b_n = (\ln n)^2$ 严格单调递增，且 $\lim_{n \to \infty} b_n = \infty$。

3.  **应用 Stolz 定理：**
    $$
    \begin{aligned}
    \lim_{n \to \infty} \frac{a_n}{b_n} &= \lim_{n \to \infty} \frac{a_{n+1} - a_n}{b_{n+1} - b_n} \\
    &= \lim_{n \to \infty} \frac{\frac{\ln(n+1)}{n+1}}{(\ln(n+1))^2 - (\ln n)^2}
    \end{aligned}
    $$

4.  **化简：**
    *   分母利用平方差公式：
        $$
        (\ln(n+1))^2 - (\ln n)^2 = (\ln(n+1) - \ln n)(\ln(n+1) + \ln n) = \ln(1 + \frac{1}{n})(\ln(n+1) + \ln n)
        $$
    *   利用等价无穷小：$\ln(1 + \frac{1}{n}) \sim \frac{1}{n}$
        $$
       \lim_{n \to \infty} \frac{\frac{\ln(n+1)}{n+1}}{(\ln(n+1))^2 - (\ln n)^2} =  \lim_{n \to \infty} \frac{\frac{\ln(n+1)}{n+1}}{\frac{1}{n}(\ln(n+1) + \ln n)} =  \lim_{n \to \infty} \frac{n}{n+1} \cdot \frac{\ln(n+1)}{\ln(n+1) + \ln n}
        $$

5.  **求极限：**
    $$
    \lim_{n \to \infty} \frac{n}{n+1} \cdot \frac{\ln(n+1)}{\ln(n+1) + \ln n} =  \lim_{n \to \infty} \frac{n}{n+1} \cdot \lim_{n \to \infty} \frac{1}{1 + \frac{\ln n}{\ln (n+1)}} = 1 \cdot \frac{1}{1+1} = \frac{1}{2}
    $$

### 3.2. 方法二：积分估计

#### 3.2.1. 核心思想

*   将求和与积分建立联系。
*   利用函数的单调性，将求和放缩为积分。
*   利用夹逼定理求极限。

#### 3.2.2. 理论基础

*   **积分的定义：** 积分是“和式的极限”。
*   **单调函数与积分：**
    *   若 $f(x)$ 在 $[a, b]$ 上单调递减，则：
        $$
        \sum_{i=a+1}^{b} f(i) \leq \int_a^b f(x) dx \leq \sum_{i=a}^{b-1} f(i)
        $$
      或者
      $$
        \int_a^b f(x)dx \leq  \sum_{i=a}^{b-1} f(i) \cdot 1
      $$
      和
      $$
       \sum_{i=a+1}^{b} f(i) \cdot 1 \leq \int_a^b f(x)dx
      $$
    *   几何意义：用矩形面积逼近曲线下面积。

#### 3.2.3. 应用积分估计

1.  **构造函数：** $f(x) = \frac{\ln x}{x}$
    求导判断单调性:
    $$
    f'(x) = \frac{1 - lnx}{x^2}
    $$
    当 $x > e$ 时, 单调递减.

2.  **单调性：**
    *   $f'(x) = \frac{1 - \ln x}{x^2}$
    *   当 $x \geq 3$ 时，$f'(x) < 0$，即 $f(x)$ 单调递减。

3.  **放缩：**
    *   利用单调性，将求和放缩为积分：
        $$
        \int_{k}^{k+1} \frac{\ln x}{x} dx \leq \frac{\ln k}{k} \leq \int_{k-1}^{k} \frac{\ln x}{x} dx
        $$
        或者：
        $$
        \frac{ln(k+1)}{k+1} \leq  \int_{k}^{k+1} \frac{\ln x}{x} dx \leq \frac{\ln k}{k}
        $$

    *   累加：
        $$
          \int_{3}^{n+1} \frac{\ln x}{x} dx  \leq \sum_{k=3}^{n} \frac{\ln k}{k} \leq \int_{2}^{n} \frac{\ln x}{x} dx
        $$
      更正:
      由于题目给出的求和表达式, 是从 3 开始的, 所以需要单独考虑 $\frac{ln3}{3}$
      $$
        \sum_{k=3}^{n} \frac{\ln k}{k} \leq \frac{\ln 3}{3} + \int_{3}^{n} \frac{\ln x}{x} dx
      $$

4.  **计算积分：**
    $$
    \int \frac{\ln x}{x} dx = \int \ln x \ d(\ln x) = \frac{1}{2}(\ln x)^2 + C
    $$

5.  **代入：**

$$
\frac{1}{2} (\ln(n+1))^2 - \frac{1}{2}(\ln3)^2 \leq  \sum_{k=3}^{n} \frac{\ln k}{k}
$$

和
$$
 \sum_{k=3}^{n} \frac{\ln k}{k} \leq \frac{\ln 3}{3} + \frac{1}{2}(\ln n)^2 -  \frac{1}{2}(\ln 3)^2
$$
6.  **夹逼：**
    *   原极限
      $$
       \lim_{n \to \infty} \frac{\frac{\ln 3}{3} + \frac{\ln 4}{4} + ... + \frac{\ln n}{n}}{(\ln n)^2}
      $$

    *   两边同除 $(\ln n)^2$：
        $$
        \frac{\frac{1}{2} (\ln(n+1))^2 - \frac{1}{2}(\ln3)^2}{(\ln n)^2} \leq \frac{\sum_{k=3}^{n} \frac{\ln k}{k}}{(\ln n)^2} \leq \frac{\frac{\ln 3}{3} + \frac{1}{2}(\ln n)^2 -  \frac{1}{2}(\ln 3)^2}{(\ln n)^2}
        $$

    *   求左右两端的极限：
        $$
        \lim_{n \to \infty} \frac{\frac{1}{2} (\ln(n+1))^2 - \frac{1}{2}(\ln3)^2}{(\ln n)^2} = \frac{1}{2}
        $$
        $$
        \lim_{n \to \infty}  \frac{\frac{\ln 3}{3} + \frac{1}{2}(\ln n)^2 -  \frac{1}{2}(\ln 3)^2}{(\ln n)^2} = \frac{1}{2}
        $$

    *   由夹逼定理，原极限 $= \frac{1}{2}$。

## 4. 总结

*   **Stolz 定理：** 处理求和极限的有力工具，可以将求和转化为单项。
*   **积分估计：** 利用函数的单调性，将求和放缩为积分，再利用夹逼定理求极限。
*   **求和与积分的关系：** 积分是“和式的极限”，两者密切相关，可以相互转化。
*   **看到求和形式，优先考虑 Stolz 定理和积分估计。**
