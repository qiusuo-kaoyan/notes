# 求索号插件包（Obsidian Plugins Bundle）

> 本插件包为「求索号考研笔记母舰」的配套资源，方便国内网络环境下的学弟学妹一键安装。

---

## 插件该放在哪里？

打开你下载的笔记文件夹（Vault），你会看到这个结构：

```
你的Vault/
├── 0. 指挥中心/
├── 1. Math/
├── 2. 专业课/
├── ...
└── .obsidian/          ← 插件要放在这里面
    ├── plugins/        ← 把插件文件夹拖进这里
    │   ├── dataview/
    │   ├── templater-obsidian/
    │   └── ...
    ├── themes/
    └── ...
```

**一句话：所有插件文件夹 → 放进 `.obsidian/plugins/` 里。**

---

## 快速安装（推荐用脚本，不会错）

### Windows

1. 解压 `qiusuo-kaoyan-v26.4-plugins-only.zip`
2. 打开 PowerShell，进入解压后的文件夹
3. 运行：

```powershell
.\install-plugins.ps1 -VaultPath "C:\Users\你的用户名\Documents\qiusuo-notes"
```

> 💡 不知道 Vault 路径？在 Obsidian 里按 `Ctrl+Shift+I`，控制台输入 `app.vault.adapter.basePath` 回车，显示的就是。

### macOS / Linux

```bash
bash install-plugins.sh ~/Documents/qiusuo-notes
```

---

## 插件清单（15 个）

### 核心插件（必须安装，否则母舰功能严重受损）

| 插件 | 版本 | 作者 | 用途 | 缺省会怎样？ |
|------|------|------|------|-------------|
| **Dataview** | 0.5.68 | [Michael Brenan](https://github.com/blacksmithgu) | 127 份笔记依赖的动态看板与查询引擎 | 数学仪表盘、周复盘看板全部失效 |
| **Templater** | 2.19.0 | [SilentVoid](https://github.com/SilentVoid13) | PZ 系列模板自动填充日期、元数据 | 日记/周记模板无法自动填充 |
| **Kanban** | 2.0.51 | [mgmeyers](https://github.com/mgmeyers/obsidian-kanban) | 任务拖拽看板 | 部分看板无法渲染 |
| **Advanced Canvas** | 6.0.1 | [Developer-Mike](https://github.com/Developer-Mike) | Canvas 白板增强 | 线代/概率论大纲 Canvas 部分功能受限 |
| **PDF++** | 0.40.31 | [Ryota Ushio](https://github.com/RyotaUshio) | PDF 阅读批注 | PDF 附件无法内嵌阅读 |
| **MathLinks** | 0.5.3 | [zhaoshenzhai](https://github.com/zhaoshenzhai) | 在链接中渲染 MathJax | 数学公式链接显示异常 |

### 增强体验插件（建议安装）

| 插件 | 版本 | 作者 | 用途 |
|------|------|------|------|
| **Calendar** | 1.5.10 | [Liam Cain](https://github.com/liamcain/) | 日记日期联动与鸟瞰日历 |
| **Contextual Typography** | 2.2.5 | [mgmeyers](https://github.com/mgmeyers/obsidian-contextual-typography) | 正文阅读宽度自适应 |
| **Style Settings** | 1.0.9 | [mgmeyers](https://github.com/mgmeyers/obsidian-style-settings) | 主题微调控件 |
| **Easy Typing** | 6.0.7 | [yaozhuwa](https://github.com/Yaozhuwa) | 中文输入自动空格、符号优化 |
| **Notebook Navigator** | 2.5.7 | [Johan Sanneblad](https://github.com/johansan) | 笔记本目录快速导航与文件树增强 |
| **Image Toolkit** | 1.4.3 | [Xiangru](https://github.com/sissilab) | 点击图片预览、缩放、旋转 |
| **Linter** | 1.31.2 | [Victor Tao](https://github.com/platers) | Markdown 格式化与样式统一 |
| **I18N** | 2.0.19 | [zero](https://github.com/eondrcode/obsidian-i18n) | 插件界面汉化工具 |
| **BRAT** | 2.0.4 | [TfTHacker](https://github.com/TfTHacker/obsidian42-brat) | 测试版插件安装器 |

---

## 特别说明

### 关于 Markmind

**Markmind（思维导图插件）未包含在本插件包中。**

原因：Markmind 是商业插件，需要购买激活码才能使用完整功能。

- 作者：[MarkMindCkm](https://github.com/MarkMindCkm/obsidian-markmind)
- 购买地址：https://www.markmind.net/cn

如果你需要思维导图功能，有以下替代方案：
1. **购买 Markmind**（推荐，功能最完善）
2. 使用 Obsidian 内置的 **Canvas** 功能
3. 安装开源的 **Mind Map** 插件（Obsidian 社区市场搜索）

---

## 手动安装（不用脚本，三步搞定）

**第一步**：关闭 Obsidian（必须！不然文件会被锁定）

**第二步**：找到你的 Vault 文件夹，进入 `.obsidian/plugins/`
- Windows: `C:\Users\用户名\Documents\你的Vault\.obsidian\plugins\`
- macOS: `~/Documents/你的Vault/.obsidian/plugins/`

**第三步**：把 `obsidian-plugins/` 里的所有文件夹复制过去

完成后重新打开 Obsidian，进入「设置 → 社区插件」，关闭安全模式，然后启用插件。

---

## 常见问题

**Q: 找不到 `.obsidian` 文件夹？**
A: `.obsidian` 是隐藏文件夹。在 Windows 文件管理器中点击「查看 → 显示隐藏的项目」；在 macOS 中按 `Cmd+Shift+.` 显示隐藏文件。

**Q: `.obsidian/plugins/` 文件夹不存在？**
A: 正常，说明你还没安装过社区插件。直接新建一个 `plugins` 文件夹即可。

**Q: 插件拖进去后 Obsidian 里看不到？**
A: 检查三点：① Obsidian 是否已关闭再重新打开 ② 文件夹是否放在了 `.obsidian/plugins/` 下（不是 Vault 根目录）③ 是否在「设置 → 社区插件」里关闭了安全模式并启用了插件。

---

## 版权与免责声明

- 本插件包中的插件文件均来自 Obsidian 官方社区市场，版权归属各插件原作者。
- 所有插件均为免费开源（MIT 或类似协议），**Markmind 除外**。
- 本包仅为方便国内网络环境用户离线安装，不提供任何形式的担保。
- 如需更新插件，请连接代理后在 Obsidian 内通过社区市场更新，或访问各插件作者的 GitHub Release 页面手动下载。

---

*「插件是船帆，笔记才是航向。」*
