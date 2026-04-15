// kaoyanReview.js - 考研错题复习看板脚本 (V3 - 最终美化版)

// --- 配置区 ---
const targetFolder = "1. 控制科学备考/1. Math";
const difficultyConfig = {
    1: "⭐", 2: "⭐⭐", 3: "⭐⭐⭐", 4: "⭐⭐⭐⭐", 5: "🔥🔥🔥🔥🔥"
};

// --- 脚本核心逻辑 ---
const notes = dv.pages(`"${targetFolder}"`)
    .where(p => p.type && p.status && p.type.includes("题目") && p.status.includes("错题"));

const groupedByKP = {};
notes.forEach(note => {
    if (note.knowledge_points) {
        let kps = Array.isArray(note.knowledge_points) ? note.knowledge_points : [note.knowledge_points];
        kps.forEach(kp => {
            const key = kp.toString();
            if (!groupedByKP[key]) groupedByKP[key] = [];
            groupedByKP[key].push(note);
        });
    }
});

const sortedKPs = Object.keys(groupedByKP).sort((a, b) => groupedByKP[b].length - groupedByKP[a].length);
const tableHeaders = ["题目", "来源", "难度/重要性", "下次复习"];
let tableData = [];
const today = new Date(); today.setHours(0, 0, 0, 0);

// --- 辅助函数 (无需修改) ---
function processReviewDate(reviewDate) { if (!reviewDate) return "—"; try { const dateObj = new Date(reviewDate.toString().split('T')[0]); if (isNaN(dateObj.getTime())) return reviewDate.toString(); dateObj.setHours(0, 0, 0, 0); const timeDiff = dateObj.getTime() - today.getTime(); const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); let countdownText = ""; if (daysDiff > 0) countdownText = `<br><span style="font-size: 0.8em; color: var(--text-muted);">还有 ${daysDiff} 天</span>`; else if (daysDiff === 0) countdownText = `<br><span style="font-size: 0.8em; font-weight: bold; color: var(--text-accent);">就是今天!</span>`; else countdownText = `<br><span style="font-size: 0.8em; font-weight: bold; color: var(--text-error);">💀 已过期!</span>`; const formattedDate = `${dateObj.getFullYear()}-${String(dateObj.getMonth() + 1).padStart(2, '0')}-${String(dateObj.getDate()).padStart(2, '0')}`; return formattedDate + countdownText; } catch (e) { return reviewDate ? reviewDate.toString() : "—"; } }
function getDifficultyDisplay(value) { return difficultyConfig[value] || value || "—"; }

// --- 构建表格 ---
sortedKPs.forEach(knowledgePoint => {
    const notesInGroup = groupedByKP[knowledgePoint];
    const groupSize = notesInGroup.length;

    // --- 核心修正点：不再使用dv.sectionLink，直接显示knowledgePoint字符串 ---
    tableData.push([
        `<strong>${knowledgePoint} (${groupSize}题)</strong>`,
        "", "", ""
    ]);
    // --------------------------------------------------------------------

    notesInGroup.forEach(note => {
        tableData.push([
            note.file.link,
            note.source || "—",
            getDifficultyDisplay(note.difficulty || note.importance),
            processReviewDate(note.review_date)
        ]);
    });
});

if (notes.length === 0) {
    dv.paragraph("🎉 恭喜！当前没有需要复习的错题。");
} else {
    dv.table(tableHeaders, tableData);
}

// 添加自定义样式 (无需修改)
const style = dv.container.createEl('style');
style.innerHTML = `
.dataview.table-view-table tr { border-bottom: 1px solid var(--background-modifier-border); }
.dataview.table-view-table tr:has(strong) { background-color: var(--background-secondary-alt) !important; font-size: 1.1em; }
.dataview.table-view-table tr:has(strong) td { padding-top: 10px !important; padding-bottom: 5px !important; }
`;