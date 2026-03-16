:root {
  --bg: #eef3f8;
  --text: #101828;
  --muted: #667085;
  --border: rgba(16, 24, 40, 0.08);
  --shadow: 0 18px 50px rgba(16, 24, 40, 0.10);
  --green: #12b76a;
  --green-soft: #dcfae6;
  --red: #f04438;
  --red-soft: #fee4e2;
  --blue: #3b82f6;
  --blue-soft: #dbeafe;
  --orange-soft: #fff1db;
  --orange: #f79009;
  --panel: rgba(255, 255, 255, 0.84);
  --radius-xl: 28px;
  --radius-lg: 22px;
  --radius-md: 18px;
}

* {
  box-sizing: border-box;
}

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
  font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, #d9f4e7 0%, transparent 28%),
    radial-gradient(circle at top right, #dbeafe 0%, transparent 24%),
    linear-gradient(180deg, #f8fbff 0%, var(--bg) 100%);
  color: var(--text);
}

body {
  padding: 14px;
}

.app-shell {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.topbar {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 16px;
  padding: 18px;
  border-radius: var(--radius-xl);
  background: rgba(255, 255, 255, 0.78);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
}

.eyebrow {
  margin: 0 0 6px;
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
  font-weight: 800;
}

.topbar h1 {
  margin: 0;
  font-size: clamp(1.9rem, 5vw, 2.7rem);
  line-height: 1.05;
}

.subtitle {
  margin: 8px 0 0;
  color: var(--muted);
  font-size: 15px;
  line-height: 1.4;
}

.topbar-status {
  display: flex;
  align-items: center;
}

.status-badge,
.mini-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-weight: 700;
  border: 1px solid transparent;
}

.status-badge {
  padding: 10px 14px;
  font-size: 14px;
}

.mini-badge {
  padding: 8px 12px;
  font-size: 12px;
}

.online {
  background: var(--green-soft);
  color: #067647;
  border-color: #a6f4c5;
}

.offline {
  background: var(--red-soft);
  color: #b42318;
  border-color: #fecdca;
}

.dashboard {
  display: grid;
  gap: 16px;
}

.hero-card {
  display: grid;
  gap: 16px;
  background: var(--panel);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: var(--radius-xl);
  padding: 18px;
}

.section-label,
.module-label,
.footer-label,
.stat-label {
  margin: 0;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--muted);
  font-weight: 800;
}

.hero-card h2 {
  margin: 8px 0 10px;
  font-size: clamp(1.45rem, 4vw, 2rem);
  line-height: 1.12;
}

.hero-text {
  margin: 0;
  color: var(--muted);
  line-height: 1.5;
  font-size: 15px;
}

.hero-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.75);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  padding: 14px;
}

.stat-value {
  display: block;
  margin-top: 8px;
  font-size: 1.55rem;
  font-weight: 800;
}

.stat-value.small {
  font-size: 0.98rem;
}

.modules-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 14px;
}

.module-card {
  text-decoration: none;
  color: inherit;
  background: var(--panel);
  backdrop-filter: blur(16px);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: var(--radius-lg);
  padding: 18px;
  transition: transform 0.16s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.module-card:active {
  transform: scale(0.99);
}

.module-card:hover {
  border-color: rgba(59, 130, 246, 0.20);
}

.module-card.gate {
  background: linear-gradient(180deg, rgba(254, 242, 242, 0.94) 0%, rgba(255,255,255,0.88) 100%);
}

.module-card.pool {
  background: linear-gradient(180deg, rgba(219, 234, 254, 0.92) 0%, rgba(255,255,255,0.88) 100%);
}

.module-card.home {
  background: linear-gradient(180deg, rgba(236, 253, 243, 0.92) 0%, rgba(255,255,255,0.88) 100%);
}

.module-card.fountain {
  background: linear-gradient(180deg, rgba(255, 241, 219, 0.92) 0%, rgba(255,255,255,0.88) 100%);
}

.module-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 14px;
}

.module-top h3 {
  margin: 6px 0 0;
  font-size: 1.45rem;
}

.module-icon-wrap {
  display: flex;
  justify-content: center;
  margin: 18px 0 14px;
}

.emoji-circle {
  width: 82px;
  height: 82px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 34px;
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(16, 24, 40, 0.06);
  box-shadow: inset 0 1px 0 rgba(255,255,255,0.65);
}

.module-info {
  text-align: center;
}

.module-state {
  margin: 0 0 6px;
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: -0.02em;
}

.module-desc {
  margin: 0;
  color: var(--muted);
  font-size: 14px;
  line-height: 1.45;
}

.footer-panel {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.footer-card {
  background: rgba(255, 255, 255, 0.76);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  border-radius: var(--radius-md);
  padding: 16px;
}

.footer-value {
  margin: 8px 0 0;
  font-size: 1rem;
  font-weight: 700;
}

@media (min-width: 720px) {
  body {
    padding: 18px;
  }

  .topbar {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 22px;
  }

  .hero-card {
    grid-template-columns: 1.4fr 1fr;
    align-items: center;
    padding: 22px;
  }

  .modules-grid {
    grid-template-columns: 1fr 1fr;
  }

  .footer-panel {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1040px) {
  .modules-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}