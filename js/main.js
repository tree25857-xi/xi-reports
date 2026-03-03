/**
 * 曦曦的分析報告 - Main JavaScript
 */

// Report data
const reports = [
    {
        id: 'bitcoin-analysis',
        title: '比特幣趨勢分析',
        date: '2026-03-02',
        description: '比特幣 (BTC) 近期趨勢量化分析報告 - 從量化交易策略分析師角度的專業解讀',
        icon: '📈'
    }
];

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('🌸 曦曦的分析報告載入完成！');
    loadReports();
    updateStats();
});

// Load reports dynamically
function loadReports() {
    const grid = document.getElementById('reportGrid');
    if (!grid) return;
    
    // Clear existing (except template)
    const template = grid.querySelector('.coming-soon');
    grid.innerHTML = '';
    
    // Add reports
    reports.forEach(report => {
        const card = createReportCard(report);
        grid.innerHTML += card;
    });
    
    // Add coming soon
    if (template) {
        grid.innerHTML += template.outerHTML;
    }
}

// Create report card HTML
function createReportCard(report) {
    return `
        <div class="report-card" onclick="openReport('${report.id}.html')">
            <div class="report-icon">${report.icon}</div>
            <h3>${report.title}</h3>
            <p class="report-date">${report.date}</p>
            <p class="report-desc">${report.description}</p>
            <span class="read-more">閱讀更多 →</span>
        </div>
    `;
}

// Open report
function openReport(filename) {
    window.open(`reports/${filename}`, '_blank');
}

// Update statistics
function updateStats() {
    const countEl = document.getElementById('reportCount');
    if (countEl) {
        countEl.textContent = reports.length;
    }
}

// Add some interactivity
document.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.report-card');
    cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            card.style.animationDelay = `${index * 0.1}s`;
        }
    });
});

// Console welcome message
console.log('%c🌸 曦曦的分析報告', 'font-size: 20px; color: #ff6b9d;');
console.log('%cMade with ❤️ by Xi for Tree', 'color: #9b59b6;');
