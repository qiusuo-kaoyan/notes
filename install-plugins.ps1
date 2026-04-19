#Requires -Version 5.1
<#
.SYNOPSIS
    求索号 Obsidian 插件一键安装脚本（Windows）
.DESCRIPTION
    将 obsidian-plugins/ 目录下的所有插件复制到指定 Vault 的 .obsidian/plugins/ 中
.PARAMETER VaultPath
    目标 Vault 的完整路径（可选，留空会自动检测）
.EXAMPLE
    .\install-plugins.ps1 -VaultPath "C:\Users\Leo\Documents\qiusuo-notes"
.EXAMPLE
    .\install-plugins.ps1
#>
param(
    [Parameter(Mandatory = $false)]
    [string]$VaultPath = ""
)

$ErrorActionPreference = "Stop"

# ========== 自动检测 Vault 路径 ==========

function Find-VaultPath {
    # 策略1：检查当前目录是否是 Vault（有 .obsidian 子目录）
    $currentDir = (Get-Location).Path
    if (Test-Path (Join-Path $currentDir ".obsidian")) {
        return $currentDir
    }

    # 策略2：检查脚本同级目录的父目录是否有 .obsidian（假设插件包在 Vault 内）
    $scriptDir = $PSScriptRoot
    if ($scriptDir -and (Test-Path (Join-Path $scriptDir ".obsidian"))) {
        return $scriptDir
    }

    # 策略3：检查常见文档路径
    $commonPaths = @(
        "$env:USERPROFILE\Documents\qiusuo-notes",
        "$env:USERPROFILE\Documents\notes",
        "$env:USERPROFILE\Desktop\qiusuo-notes",
        "$env:USERPROFILE\Desktop\notes"
    )
    foreach ($path in $commonPaths) {
        if (Test-Path (Join-Path $path ".obsidian")) {
            return $path
        }
    }

    return $null
}

# 如果没有提供路径，尝试自动检测
if (-not $VaultPath) {
    Write-Host "正在自动检测 Vault 路径..." -ForegroundColor Cyan
    $detected = Find-VaultPath

    if ($detected) {
        Write-Host "检测到 Vault: $detected" -ForegroundColor Green
        $confirm = Read-Host "是否使用此路径? (Y/n)"
        if ($confirm -eq '' -or $confirm -match '^[Yy]$') {
            $VaultPath = $detected
        }
    }

    if (-not $VaultPath) {
        Write-Host ""
        Write-Host "未能自动检测到 Vault 路径。" -ForegroundColor Yellow
        Write-Host ""
        Write-Host "请提供你的 Vault 完整路径。" -ForegroundColor White
        Write-Host "Vault 就是你用 Obsidian 打开的那个文件夹。" -ForegroundColor Gray
        Write-Host ""
        Write-Host "常见路径示例：" -ForegroundColor Gray
        Write-Host "  C:\Users\$env:USERNAME\Documents\qiusuo-notes" -ForegroundColor Gray
        Write-Host "  C:\Users\$env:USERNAME\Desktop\notes" -ForegroundColor Gray
        Write-Host ""
        $VaultPath = Read-Host "请输入 Vault 路径"
    }
}

# 规范化路径
$VaultPath = (Resolve-Path $VaultPath -ErrorAction SilentlyContinue).Path
if (-not $VaultPath) {
    Write-Error "路径不存在: $($PSBoundParameters['VaultPath'])"
    Write-Host ""
    Write-Host "💡 提示：在 Obsidian 里按 Ctrl+Shift+I，控制台输入 `"app.vault.adapter.basePath`" 回车，显示的就是 Vault 路径。" -ForegroundColor Yellow
    exit 1
}

# 验证 Vault 合法性（至少要有 .obsidian 目录才算 Vault）
$obsidianDir = Join-Path $VaultPath ".obsidian"
if (-not (Test-Path $obsidianDir)) {
    Write-Host ""
    Write-Host "警告: 该目录下没有找到 `.obsidian` 文件夹。" -ForegroundColor Red
    Write-Host "路径: $VaultPath" -ForegroundColor Gray
    Write-Host ""
    Write-Host "这通常意味着你指定的不是 Obsidian Vault 根目录。" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Vault 文件夹里应该有这些内容：" -ForegroundColor White
    Write-Host "  .obsidian/     ← Obsidian 配置目录" -ForegroundColor Gray
    Write-Host "  0. 指挥中心/   ← 笔记文件夹" -ForegroundColor Gray
    Write-Host "  1. Math/       ← 笔记文件夹" -ForegroundColor Gray
    Write-Host ""
    $force = Read-Host "仍然继续? (y/N)"
    if ($force -notmatch '^[Yy]$') {
        exit 1
    }
}

$pluginsDir = Join-Path $VaultPath ".obsidian\plugins"
$sourceDir = Join-Path $PSScriptRoot "obsidian-plugins"

# 检查源目录
if (-not (Test-Path $sourceDir)) {
    Write-Error "未找到插件包目录: $sourceDir"
    Write-Host "请确保 install-plugins.ps1 和 obsidian-plugins/ 在同一目录下。" -ForegroundColor Yellow
    exit 1
}

# 创建目标目录（如果不存在）
if (-not (Test-Path $pluginsDir)) {
    New-Item -ItemType Directory -Path $pluginsDir -Force | Out-Null
    Write-Host "创建插件目录: $pluginsDir" -ForegroundColor Cyan
}

# 统计
$pluginFolders = Get-ChildItem -Path $sourceDir -Directory
$total = $pluginFolders.Count
$installed = 0

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  求索号插件安装程序" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "目标 Vault: $VaultPath" -ForegroundColor Gray
Write-Host "插件目录: $pluginsDir" -ForegroundColor Gray
Write-Host "插件总数: $total" -ForegroundColor Gray
Write-Host ""

foreach ($folder in $pluginFolders) {
    $source = $folder.FullName
    $dest = Join-Path $pluginsDir $folder.Name

    if (Test-Path $dest) {
        Write-Host "[覆盖] $($folder.Name)" -ForegroundColor Yellow
        # 备份旧的 data.json（如果存在）
        $oldData = Join-Path $dest "data.json"
        if (Test-Path $oldData) {
            $backup = Join-Path $dest "data.json.backup"
            Copy-Item $oldData $backup -Force
            Write-Host "       已备份旧配置到 data.json.backup" -ForegroundColor DarkGray
        }
    } else {
        Write-Host "[新建] $($folder.Name)" -ForegroundColor Green
    }

    # 复制整个插件目录
    Copy-Item -Path $source -Destination $dest -Recurse -Force
    $installed++
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "安装完成!" -ForegroundColor Green
Write-Host "已处理 $installed / $total 个插件" -ForegroundColor Gray
Write-Host ""
Write-Host "下一步:" -ForegroundColor Cyan
Write-Host "  1. 重新打开 Obsidian（如果正在运行，请先关闭再打开）" -ForegroundColor White
Write-Host "  2. 进入 设置 → 社区插件" -ForegroundColor White
Write-Host "  3. 关闭安全模式（如果显示开启）" -ForegroundColor White
Write-Host "  4. 在插件列表中启用你需要的插件" -ForegroundColor White
Write-Host ""
Write-Host "遇到问题？查看 PLUGINS.md 中的「常见问题」部分。" -ForegroundColor Gray
Write-Host ""
