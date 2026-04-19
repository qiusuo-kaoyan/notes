# 贡献指南：如何成为一名舰长

感谢你对「求索号」感兴趣！本指南将手把手教你如何 Fork 母舰、本地编辑、并最终通过 Pull Request 将你的智慧汇入母舰。

> 📜 **想直接了解「舰长」认证规则？** 请先阅读 [`CONTRIBUTING-CAPTAIN-CHARTER.md`](./CONTRIBUTING-CAPTAIN-CHARTER.md)——完整的三层身份体系、晋升路径与审核标准。

---

## 🚦 开始前准备

### 1. 注册 GitHub 账号
如果你还没有 GitHub 账号，前往 https://github.com/signup 注册。

### 2. 安装 Git
- Windows: 下载 [Git for Windows](https://git-scm.com/download/win)
- macOS: `brew install git`
- 验证: 打开终端，输入 `git --version`

### 3. 安装 Obsidian
前往 https://obsidian.md 下载并安装 Obsidian。这是我们编写和阅读笔记的主要工具。

---

## 🍴 Step 1: Fork 母舰

1. 打开 https://github.com/qiusuo-kaoyan/notes
2. 点击页面右上角的 **Fork** 按钮
3. 等待几秒，你会被重定向到自己的 Fork 页面（如 `https://github.com/你的用户名/notes`）

---

## 💻 Step 2: 克隆到本地

打开终端（Windows 用 Git Bash），运行：

```bash
git clone https://github.com/你的用户名/notes.git
cd notes
```

如果你希望用 SSH（更高级），可以配置 SSH Key 后使用：
```bash
git clone git@github.com:你的用户名/notes.git
```

---

## 📝 Step 3: 用 Obsidian 打开

1. 打开 Obsidian
2. 点击左下角的 **"打开"** → **"打开本地仓库"**
3. 选择你刚才克隆的 `notes` 文件夹
4. 如果出现插件加载提示，选择 **"启用社区插件"**

### 推荐安装的插件
母舰的仪表盘、看板和模板依赖以下核心插件，建议安装：

**核心功能（缺省会大量看板/模板失效）：**
- **Dataview** — 127+ 份笔记的动态看板与查询引擎
- **Templater** — PZ 系列模板自动填充日期、元数据
- **Obsidian Kanban** — 拖拽任务看板
- **PDF++** — PDF 内嵌阅读与批注
- **Advanced Canvas** — Canvas 白板增强

**增强体验（可删不影响核心功能）：**
- **Notebook Navigator** — 笔记本目录快速导航
- **Easy Typing** — 中文输入自动空格、符号优化
- **Markmind** — 思维导图模式
- **Calendar** — 日记日期联动日历
- **Style Settings** + **Contextual Typography** — 主题微调 + 阅读宽度自适应

> 插件文件不在本仓库中（已 `.gitignore` 排除），请通过 Obsidian 社区插件市场搜索安装。安装后，启用列表会自动从 `.obsidian/community-plugins.json` 中读取，无需手动逐个配置。

---

## ✏️ Step 4: 编辑与批注

### 你可以做的贡献

- ✅ 修正错别字、公式错误
- ✅ 补充例题、解法、图解
- ✅ 添加 inline 批注或独立批注文件
- ✅ 优化目录结构或导航链接
- ✅ 更新 frontmatter 元数据

### 你不应该做的事

- ❌ 上传名师原版 PDF/讲义（版权风险）
- ❌ 包含高度个人隐私（报考信息、真实姓名电话、具体学校老师评价、敏感人际关系等）
  > 注：母舰中的日记/周记已经过脱敏处理，保留了情绪波动和备考心态的参考价值。
- ❌ 直接删除第一代舰长的原文（除非明显错误，请用批注说明）
- ❌ 引入非考研相关的无关内容

### 批注规范

**Inline 批注**（适用于 100 字以内的精华补充）：
```markdown
> 🚀 **Gen-2 舰长批注** (@你的GitHub用户名): 
> 这里补充一个快速技巧：...
```

**独立文件批注**（适用于大量补充或不同观点）：
在原文同级目录创建 `{原文名}-批注-gen2.md`。

详见母舰中的 `Templates/舰长批注模板.md`。

---

## 📤 Step 5: 提交更改

### 5.1 查看更改
```bash
git status
```

### 5.2 添加更改
```bash
git add .
```

### 5.3 书写提交信息
```bash
git commit -m "gen2: Math/数列极限 - 补充递推法示例"
```

提交信息规范：
```
gen{N}: {学科}/{章节} - {描述}
```

### 5.4 推送到你的 Fork
```bash
git push origin main
```

---

## 🔀 Step 6: 发起 Pull Request (PR)

1. 打开你的 Fork 页面 `https://github.com/你的用户名/notes`
2. 点击 **"Contribute"** → **"Open pull request"**
3. 填写 PR 信息：

**标题示例**：
```
gen2: Math/数列极限 - 补充递推法示例与易错点
```

**描述模板**：
```markdown
## 舰长信息
- **代际**: Gen-2
- **舰长**: @你的GitHub用户名
- **学科**: Math
- **章节**: 第 2 讲 - 数列极限

## 变更说明
- 补充了递推数列的"先斩后奏"技巧
- 添加了一道 2026 年真题作为例题
- 修正了原文中一个符号错误

## 检查清单
- [ ] 已更新 frontmatter 中的 `generation` 字段（如新建文件）
- [ ] 未包含个人隐私信息
- [ ] 未上传版权敏感 PDF
```

4. 点击 **"Create pull request"**
5. 等待资深舰长 Review，合并后你就正式成为 Contributor 了！

---

## 🏆 晋升路径

| 身份 | 条件 | 权限 |
|------|------|------|
| **Reader** | 任何人 | 阅读、Fork |
| **Contributor** | 1 个以上被合并的 PR | 被邀请加入 Org Members |
| **Captain Gen-N** | 成功上岸 + 3 个以上被合并的 PR | Maintainer 权限，Review PR，发布 Release |
| **Owner** | 第一代舰长 + 核心继任者 | Admin 权限，管理 Org |

> 📜 **详细规则**：以上仅为速查表，完整的身份定义、审核标准、权限矩阵与 FAQ 请参阅 [`CONTRIBUTING-CAPTAIN-CHARTER.md`](./CONTRIBUTING-CAPTAIN-CHARTER.md)。

---

## ❓ 常见问题

**Q: 我不会用 Git，可以只下载 ZIP 吗？**  
A: 当然可以。点击仓库首页的 **"Code" → "Download ZIP"** 即可。但如果你想贡献内容，建议花 30 分钟学习 Git 基础。

**Q: 我的观点和原文不一样，可以改吗？**  
A: 不要直接改原文，请用「独立文件批注」的形式保留你的观点。母舰鼓励多元视角。

**Q: 我可以把笔记用于商业考研辅导吗？**  
A: **不可以。** 本仓库采用 CC BY-NC-SA 4.0 协议，禁止商业使用。

**Q: 我想加入 Captain，该怎么做？**  
A: 努力备考，持续向母舰贡献优质 PR，上岸后联系现有 Captain 申请即可。

---

## 📞 联系我们

- 有问题？在 [notes 仓库](https://github.com/qiusuo-kaoyan/notes/discussions) 发起 Discussion
- 想私聊？给任意 Captain 发 GitHub Issue（我们会定期检查）

---

*感谢你愿意为后来者点亮一盏灯。*
