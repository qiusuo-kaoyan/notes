#Requires -Version 5.1
<#
.SYNOPSIS
    求索号 Obsidian 插件一键安装脚本（Windows）
.DESCRIPTION
    将 obsidian-plugins/ 目录下的所有插件复制到指定 Vault 的 .obsidian/plugins/ 中
.PARAMETER VaultPath
    目标 Vault 的完整路径
.EXAMPLE
    .\install-plugins.ps1 -VaultPath "C:\Users\Leo\Documents\qiusuo-notes"
#>
param(
    [Parameter(Mandatory = $true, HelpMessage = "请输入你的 Vault 完整路径")]
    [string]$VaultPath
)

$ErrorActionPreference = "Stop"

# 规范化路径
$VaultPath = (Resolve-Path $VaultPath -ErrorAction SilentlyContinue).Path
if (-not $VaultPath) {
    Write-Error "路径不存在: $($PSBoundParameters['VaultPath'])"
    exit 1
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
$skipped = 0

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  求索号插件安装程序" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "目标 Vault: $VaultPath" -ForegroundColor Gray
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
Write-Host "  1. 重新打开 Obsidian" -ForegroundColor White
Write-Host "  2. 进入 设置 → 社区插件" -ForegroundColor White
Write-Host "  3. 关闭安全模式（如果开启）" -ForegroundColor White
Write-Host "  4. 启用你需要的插件" -ForegroundColor White
Write-Host ""
