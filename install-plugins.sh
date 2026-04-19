#!/usr/bin/env bash
#
# 求索号 Obsidian 插件一键安装脚本（macOS / Linux）
# 用法: bash install-plugins.sh [vault路径]
#

set -euo pipefail

# 颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
CYAN='\033[0;36m'
GRAY='\033[0;90m'
NC='\033[0m'

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/obsidian-plugins"

# ========== 自动检测 Vault 路径 ==========

find_vault_path() {
    # 策略1：检查当前目录是否是 Vault
    if [ -d ".obsidian" ]; then
        echo "$(pwd)"
        return 0
    fi

    # 策略2：检查脚本同级目录是否有 .obsidian
    if [ -d "$SCRIPT_DIR/.obsidian" ]; then
        echo "$SCRIPT_DIR"
        return 0
    fi

    # 策略3：检查常见文档路径
    local common_paths=(
        "$HOME/Documents/qiusuo-notes"
        "$HOME/Documents/notes"
        "$HOME/Desktop/qiusuo-notes"
        "$HOME/Desktop/notes"
    )
    for path in "${common_paths[@]}"; do
        if [ -d "$path/.obsidian" ]; then
            echo "$path"
            return 0
        fi
    done

    return 1
}

# 如果没有提供路径，尝试自动检测
VAULT_PATH=""
if [ $# -eq 0 ]; then
    echo -e "${CYAN}正在自动检测 Vault 路径...${NC}"
    detected=$(find_vault_path 2>/dev/null || true)

    if [ -n "$detected" ]; then
        echo -e "${GREEN}检测到 Vault: $detected${NC}"
        read -p "是否使用此路径? (Y/n) " confirm
        if [ -z "$confirm" ] || [[ "$confirm" =~ ^[Yy]$ ]]; then
            VAULT_PATH="$detected"
        fi
    fi

    if [ -z "$VAULT_PATH" ]; then
        echo ""
        echo -e "${YELLOW}未能自动检测到 Vault 路径。${NC}"
        echo ""
        echo -e "${NC}请提供你的 Vault 完整路径。${NC}"
        echo -e "${GRAY}Vault 就是你用 Obsidian 打开的那个文件夹。${NC}"
        echo ""
        echo -e "${GRAY}常见路径示例：${NC}"
        echo -e "${GRAY}  ~/Documents/qiusuo-notes${NC}"
        echo -e "${GRAY}  ~/Desktop/notes${NC}"
        echo ""
        read -p "请输入 Vault 路径: " VAULT_PATH
    fi
else
    VAULT_PATH="$1"
fi

PLUGINS_DIR="$VAULT_PATH/.obsidian/plugins"

# 检查 Vault 路径
if [ ! -d "$VAULT_PATH" ]; then
    echo -e "${RED}错误: Vault 路径不存在: $VAULT_PATH${NC}"
    echo ""
    echo -e "${YELLOW}💡 提示：在 Obsidian 里按 Ctrl+Shift+I，控制台输入 app.vault.adapter.basePath 回车，显示的就是 Vault 路径。${NC}"
    exit 1
fi

# 验证 Vault 合法性
if [ ! -d "$VAULT_PATH/.obsidian" ]; then
    echo ""
    echo -e "${RED}警告: 该目录下没有找到 .obsidian 文件夹。${NC}"
    echo -e "${GRAY}路径: $VAULT_PATH${NC}"
    echo ""
    echo -e "${YELLOW}这通常意味着你指定的不是 Obsidian Vault 根目录。${NC}"
    echo ""
    echo -e "${NC}Vault 文件夹里应该有这些内容：${NC}"
    echo -e "${GRAY}  .obsidian/     ← Obsidian 配置目录${NC}"
    echo -e "${GRAY}  0. 指挥中心/   ← 笔记文件夹${NC}"
    echo -e "${GRAY}  1. Math/       ← 笔记文件夹${NC}"
    echo ""
    read -p "仍然继续? (y/N) " force
    if [[ ! "$force" =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# 检查源目录
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}错误: 未找到插件包目录: $SOURCE_DIR${NC}"
    echo "请确保 install-plugins.sh 和 obsidian-plugins/ 在同一目录下。"
    exit 1
fi

# 创建目标目录
mkdir -p "$PLUGINS_DIR"

# 统计
total=0
installed=0

for plugin_dir in "$SOURCE_DIR"/*/; do
    total=$((total + 1))
done

echo ""
echo -e "${CYAN}========================================${NC}"
echo -e "${CYAN}  求索号插件安装程序${NC}"
echo -e "${CYAN}========================================${NC}"
echo -e "${GRAY}目标 Vault: $VAULT_PATH${NC}"
echo -e "${GRAY}插件目录: $PLUGINS_DIR${NC}"
echo -e "${GRAY}插件总数: $total${NC}"
echo ""

for plugin_dir in "$SOURCE_DIR"/*/; do
    plugin_name=$(basename "$plugin_dir")
    dest_dir="$PLUGINS_DIR/$plugin_name"

    if [ -d "$dest_dir" ]; then
        echo -e "${YELLOW}[覆盖]${NC} $plugin_name"
        # 备份旧的 data.json
        if [ -f "$dest_dir/data.json" ]; then
            cp "$dest_dir/data.json" "$dest_dir/data.json.backup"
            echo -e "       ${GRAY}已备份旧配置到 data.json.backup${NC}"
        fi
    else
        echo -e "${GREEN}[新建]${NC} $plugin_name"
    fi

    # 复制整个插件目录
    cp -r "$plugin_dir" "$dest_dir"
    installed=$((installed + 1))
done

echo ""
echo -e "${CYAN}========================================${NC}"
echo -e "${GREEN}安装完成!${NC}"
echo -e "${GRAY}已处理 $installed / $total 个插件${NC}"
echo ""
echo -e "${CYAN}下一步:${NC}"
echo -e "  ${NC}1. 重新打开 Obsidian（如果正在运行，请先关闭再打开）"
echo -e "  ${NC}2. 进入 设置 → 社区插件"
echo -e "  ${NC}3. 关闭安全模式（如果显示开启）"
echo -e "  ${NC}4. 在插件列表中启用你需要的插件"
echo ""
echo -e "${GRAY}遇到问题？查看 PLUGINS.md 中的「常见问题」部分。${NC}"
echo ""
