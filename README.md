# 🚀 Daily Standup BMAD Workflow

[![BMAD Style](https://img.shields.io/badge/methodology-BMAD-blue.svg)](https://github.com/bmad-method)
[![Antigravity](https://img.shields.io/badge/platform-Antigravity-purple.svg)](https://antigravity.google/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready, BMAD-style AI-assisted daily standup workflow built with **Antigravity**.

---

## 📋 Overview

This project demonstrates an intelligent daily standup preparation workflow that:

1. **Analyzes** recent commits and work items
2. **Runs** automated tests and linting
3. **Documents** team status in structured reports
4. **Summarizes** everything for efficient standup meetings
5. **Validates** security before sharing

**Human-in-the-middle**: You always review and approve before sharing with your team.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 **Commit Analysis** | Automatically collects and parses last 24 hours of git commits |
| ✅ **CI/CD Checks** | Runs tests and linting, reports pass/fail status |
| 📝 **Auto Documentation** | Generates daily standup reports in Markdown |
| 🔐 **Security Scan** | Checks for leaked credentials and sensitive data |
| 📊 **Meeting Summary** | Creates a 2-minute readable summary for standups |
| 👤 **Human Approval** | All outputs require human review before sharing |

---

## 🚀 Quick Start

### Prerequisites

- [Antigravity](https://antigravity.google/) (Web or VS Code extension)
- Node.js 18+ (for running tests)
- Git configured with recent commits

### Run the Workflow

1. **Open this project in Antigravity**

2. **Type in the chat**:
   ```
   /daily-standup
   ```

3. **Review each step's artifact**

4. **Approve the summary and share with your team!**

---

## 📁 Project Structure

```
standup-bmad-workflow/
├── .agent/
│   ├── config.yaml           # Team & tool configuration
│   ├── workflows/
│   │   ├── daily-standup.md  # Main workflow file (/daily-standup)
│   │   └── README.md         # Workflow documentation
│   └── artifacts/            # Generated outputs (gitignored)
├── docs/
│   ├── standups/             # Daily reports (YYYY-MM-DD.md)
│   └── README.md
├── src/
│   ├── auth.js               # Sample authentication module
│   └── utils.js              # Sample utility functions
├── test/
│   └── example.test.js       # Sample test suite
├── package.json
├── .gitignore
└── README.md                 # This file
```

---

## 🔄 Workflow Steps

| Step | Role | Description | Artifact |
|------|------|-------------|----------|
| 1 | Analyst | Collect git commits from last 24h | `step1_raw_updates.md` |
| 2 | Dev | Run tests and lint checks | `step2_checks_results.md` |
| 3 | Documentor | Create daily status document | `step3_standup_document.md` |
| 4 | Security | Scan for leaked secrets | `step4_security_check.md` |
| 5 | Scrum Master | Generate meeting summary | `step5_standup_summary.md` |
| 6 | Human | Review and approve | ✅ Share with team |

---

## ⚙️ Configuration

Edit `.agent/config.yaml` to customize:

```yaml
# Team members
team:
  members:
    - name: "Your Name"
      role: "developer"

# Tool commands
tools:
  - name: test
    command: "npm test"
  - name: lint
    command: "npm run lint"

# Schedule
daily_schedule: "08:30"
```

---

## 📅 Daily Routine

| Time | Action |
|------|--------|
| 8:30 AM | Run `/daily-standup` |
| 8:35 AM | Review artifacts |
| 8:40 AM | Approve summary |
| 8:45 AM | Share with team |
| 9:00 AM | Conduct standup meeting |

---

## 🧪 Available Scripts

```bash
# Run tests
npm test

# Run linting
npm run lint
```

---

## 🔐 Security

- Artifacts are **gitignored** by default
- **Step 4** scans for secrets before sharing
- Blocked patterns: `password`, `secret`, `api_key`, `token`, `credential`
- Human approval required before any sharing

---

## 🛠️ Future Enhancements

- [ ] **Jira Integration** - Fetch real ticket data
- [ ] **Confluence Upload** - Auto-publish reports
- [ ] **Slack Bot** - Post summaries to Slack
- [ ] **Sprint Metrics** - Burndown tracking
- [ ] **Scheduled Runs** - Automated daily execution

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'feat: Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [BMAD-METHOD](https://github.com/bmad-method) - Breakthrough Methodology for Agentic Development
- [Google Antigravity](https://antigravity.google/) - Agentic AI IDE Platform

---

## 👨‍💻 Author

**Lakshitha Wijerathne**  
Built with ❤️ using Antigravity

---

> *"Agents do the grunt work. Humans make decisions."* - BMAD Philosophy
