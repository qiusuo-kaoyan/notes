#!/usr/bin/env bash
#
# 求索号 Obsidian 插件一键安装脚本（macOS / Linux）
# 用法: bash install-plugins.sh /path/to/your/vault
#

set -euo pipefail

# 颜色
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
GRAY='\033[0;90m'
NC='\033[0m'

# 获取脚本所在目录
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE_DIR="$SCRIPT_DIR/obsidian-plugins"

# 参数检查
if [ $# -eq 0 ]; then
    echo "用法: bash install-plugins.sh /path/to/your/vault"
    echo ""
    echo "示例:"
    echo "  bash install-plugins.sh ~/Documents/qiusuo-notes"
    exit 1
fi

VAULT_PATH="$1"
PLUGINS_DIR="$VAULT_PATH/.obsidian/plugins"

# 检查 Vault 路径
if [ ! -d "$VAULT_PATH" ]; then
    echo "错误: Vault 路径不存在: $VAULT_PATH"
    exit 1
fi

# 检查源目录
if [ ! -d "$SOURCE_DIR" ]; then
    echo "错误: 未找到插件包目录: $SOURCE_DIR"
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
echo -e "  ${NC}1. 重新打开 Obsidian"
echo -e "  ${NC}2. 进入 设置 → 社区插件"
echo -e "  ${NC}3. 关闭安全模式（如果开启）"
echo -e "  ${NC}4. 启用你需要的插件"
echo ""
