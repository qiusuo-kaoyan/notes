# 🧩 求索号插件离线安装包

> 如果你是国内用户、没有代理，无法从 Obsidian 插件商店下载插件，这个包就是为你准备的。

---

## 🎯 插件要放到哪里？

打开你的笔记文件夹（Vault），找到这个目录：

```
你的Vault/
├── 0. 指挥中心/
├── 1. Math/
├── ...
└── .obsidian/              ← 在这里！
    └── plugins/            ← 把插件文件夹放进来
        ├── dataview/
        ├── templater-obsidian/
        └── ...
```

**一句话：把 `obsidian-plugins/` 里的所有文件夹，复制到 `.obsidian/plugins/` 里。**

---

## 🚀 推荐：用脚本自动安装（最简单）

### Windows

1. 确保 Obsidian **已关闭**
2. 在此文件夹空白处按住 `Shift` + 右键 → 「在此处打开 PowerShell 窗口」
3. 运行：

```powershell
.\install-plugins.ps1
```

脚本会自动检测你的 Vault 位置，按提示确认即可。

### macOS / Linux

```bash
bash install-plugins.sh
```

---

## ✋ 手动安装（三步搞定）

**第一步**：关闭 Obsidian

**第二步**：进入你的 Vault 文件夹 → `.obsidian/` → 新建 `plugins` 文件夹（如果没有的话）

**第三步**：把 `obsidian-plugins/` 里的所有文件夹复制到 `.obsidian/plugins/`

**第四步**：重新打开 Obsidian → 设置 → 社区插件 → 关闭安全模式 → 启用插件

---

## ❓ 常见问题

**Q: 找不到 `.obsidian` 文件夹？**
A: 它是隐藏文件夹。Windows 文件管理器点击「查看 → 显示隐藏的项目」；macOS 按 `Cmd+Shift+.`

**Q: 脚本说找不到 Vault？**
A: 在 Obsidian 里按 `Ctrl+Shift+I`（macOS: `Cmd+Option+I`），控制台输入 `app.vault.adapter.basePath` 回车，复制显示的路径。

**Q: 插件拖进去后 Obsidian 里看不到？**
A: 检查三点：① Obsidian 关闭后重新打开 ② 文件夹放在 `.obsidian/plugins/` 下（不是 Vault 根目录）③ 在社区插件设置里关闭安全模式并启用了插件

---

## 📋 本包包含 15 个插件

详见 `PLUGINS.md` 完整清单与作者归属。

**未包含**：Markmind（商业插件，需购买激活码）

---

*有问题？去 GitHub 提交 Issue： https://github.com/qiusuo-kaoyan/notes/issues*
