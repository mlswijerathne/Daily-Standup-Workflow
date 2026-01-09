# Antigravity Workflows

This folder contains BMAD-style AI workflows for team processes.

---

## 📋 Available Workflows

### `/daily-standup` - Daily Standup Workflow

**Purpose**: Automated daily standup preparation using BMAD methodology.

**Usage**:
- In Antigravity chat: Type `/daily-standup`
- Or: "Run the Daily Standup Workflow"
- Or trigger via CLI: `antigravity run workflows/daily-standup.md`

**Output**: 
- **Artifacts**: `step1` through `step5` (in `.agent/artifacts/`)
- **Daily report**: `docs/standups/YYYY-MM-DD.md`
- **Summary**: Ready for standup meeting

**Time to run**: ~5-10 minutes

**Team roles**:
| Role | Responsibility |
|------|---------------|
| Analyst | Collects commit updates from last 24 hours |
| Dev | Runs tests and lint checks |
| Documentor | Writes daily status report |
| Security | Checks for leaked credentials/secrets |
| Scrum Master | Generates meeting-ready summary |

---

## 📁 Directory Structure

```
.agent/
├── config.yaml           # Project & team configuration
├── workflows/
│   ├── daily-standup.md  # Main standup workflow
│   └── README.md         # This file
└── artifacts/            # Temporary outputs (gitignored)
    ├── step1_raw_updates.md
    ├── step2_checks_results.md
    ├── step3_standup_document.md
    ├── step4_security_check.md
    └── step5_standup_summary.md
```

---

## 🛠️ Configuration

The project is configured via `.agent/config.yaml`:

```yaml
# Key configuration sections:
workflows_dir: ".agent/workflows"
artifacts_dir: ".agent/artifacts"
docs_dir: "docs"

tools:
  - name: test
    command: "npm test"
  - name: lint
    command: "npm run lint"

team:
  members:
    - name: "Lakshitha"
      role: "developer"
```

---

## 📝 How to Create a New Workflow

1. **Create a `.md` file** in this folder:
   ```
   .agent/workflows/my-workflow.md
   ```

2. **Start with YAML frontmatter**:
   ```yaml
   ---
   name: "My Workflow Name"
   description: "What this workflow does"
   version: "1.0"
   roles:
     - role1
     - role2
   ---
   ```

3. **Write steps as Markdown**:
   ```markdown
   ## Step 1: First Step

   **Objective**: What this step achieves.

   **Actions**:
   1. Do this thing
   2. Create artifact
   3. Present to user
   ```

4. **Include key sections**:
   - Overview
   - Prerequisites
   - Steps (with Actions and Artifacts)
   - Constraints & Rules
   - Success Criteria

5. **Add human checkpoints**:
   - Always include "Present to user" steps
   - Wait for user feedback before proceeding

---

## 🔄 Workflow Lifecycle

```
┌─────────────────────────────────────────────────────────────┐
│                    Daily Standup Flow                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐ │
│  │  Step 1  │──▶│  Step 2  │──▶│  Step 3  │──▶│  Step 4  │ │
│  │ Analyst  │   │   Dev    │   │  Docs    │   │ Security │ │
│  │ Commits  │   │  Tests   │   │  Report  │   │  Check   │ │
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘ │
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│   ┌────────┐    ┌────────┐    ┌────────┐    ┌────────┐     │
│   │Artifact│    │Artifact│    │Artifact│    │Artifact│     │
│   │  step1 │    │  step2 │    │  step3 │    │  step4 │     │
│   └────────┘    └────────┘    └────────┘    └────────┘     │
│                                                      │      │
│                      ┌──────────┐                    ▼      │
│                      │  Step 5  │◀───────────────────┘      │
│                      │  Scrum   │                           │
│                      │ Summary  │                           │
│                      └──────────┘                           │
│                           │                                  │
│                           ▼                                  │
│                      ┌────────┐                              │
│                      │Artifact│                              │
│                      │  step5 │                              │
│                      └────────┘                              │
│                           │                                  │
│                           ▼                                  │
│                ┌─────────────────────┐                       │
│                │  Step 6: Human      │                       │
│                │  Review & Approval  │                       │
│                └─────────────────────┘                       │
│                           │                                  │
│                           ▼                                  │
│                    ✅ Share with Team                        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## ⚙️ Commands Reference

| Command | Description |
|---------|-------------|
| `/daily-standup` | Run the complete standup workflow |
| `npm test` | Run project tests |
| `npm run lint` | Run code linting |

---

## 📊 Artifacts Reference

| Artifact | Content | Retention |
|----------|---------|-----------|
| `step1_raw_updates.md` | Git commits (last 24h) | 30 days |
| `step2_checks_results.md` | Test & lint results | 30 days |
| `step3_standup_document.md` | Document creation summary | 30 days |
| `step4_security_check.md` | Security scan results | 30 days |
| `step5_standup_summary.md` | Meeting-ready summary | 30 days |

---

## 🔐 Security Notes

- Artifacts in `.agent/artifacts/` are **gitignored** by default
- Security check (Step 4) scans for:
  - API keys
  - Passwords
  - Secrets
  - Credentials
- Never share artifacts without human review

---

## 📅 Daily Routine

1. **8:30 AM** - Run `/daily-standup`
2. **8:35 AM** - Review artifacts (Steps 1-5)
3. **8:40 AM** - Approve or edit summary
4. **8:45 AM** - Share with team
5. **9:00 AM** - Conduct standup meeting using summary

---

## 🚀 Future Enhancements

- [ ] Jira API integration for real ticket data
- [ ] Confluence auto-upload for daily reports
- [ ] Slack bot for posting summaries
- [ ] Sprint burndown tracking
- [ ] Automated daily scheduling

---

## 📚 Related Documentation

- [BMAD-METHOD](https://github.com/bmad-method) - Methodology reference
- [Antigravity Docs](https://developers.googleblog.com) - Platform documentation
- [Project Config](./../config.yaml) - Team & tool settings
