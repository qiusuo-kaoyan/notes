# 求索号插件包（Obsidian Plugins Bundle）

> 本插件包为「求索号考研笔记母舰」的配套资源，方便国内网络环境下的学弟学妹一键安装。

---

## 快速安装

### Windows

```powershell
.\install-plugins.ps1 -VaultPath "C:\Users\你的用户名\Documents\你的Vault路径"
```

### macOS / Linux

```bash
bash install-plugins.sh ~/Documents/你的Vault路径
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

## 手动安装（不用脚本）

如果你不想用脚本，可以手动复制：

1. 关闭 Obsidian
2. 将 `obsidian-plugins/` 下的所有文件夹复制到你的 Vault 的 `.obsidian/plugins/` 目录中
3. 重新打开 Obsidian
4. 在「设置 → 社区插件」中启用需要的插件

---

## 版权与免责声明

- 本插件包中的插件文件均来自 Obsidian 官方社区市场，版权归属各插件原作者。
- 所有插件均为免费开源（MIT 或类似协议），**Markmind 除外**。
- 本包仅为方便国内网络环境用户离线安装，不提供任何形式的担保。
- 如需更新插件，请连接代理后在 Obsidian 内通过社区市场更新，或访问各插件作者的 GitHub Release 页面手动下载。

---

*「插件是船帆，笔记才是航向。」*
