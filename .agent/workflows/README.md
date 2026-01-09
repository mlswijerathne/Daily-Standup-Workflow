# Antigravity Workflows

This directory contains automated workflows for the development team.

## Available Workflows

| Workflow | Command | Description |
|----------|---------|-------------|
| Daily Standup | `/daily-standup` | BMAD-style AI-assisted daily standup preparation |

## How to Use

1. Open Antigravity IDE
2. Type the workflow command (e.g., `/daily-standup`)
3. Follow the interactive prompts
4. Review and approve each step

## Workflow Structure

Each workflow file follows this format:

```yaml
---
description: Short description of the workflow
---

# Workflow Title

## Step 1: First Step
...instructions...

## Step 2: Second Step
...instructions...
```

## Adding New Workflows

1. Create a new `.md` file in this directory
2. Follow the YAML frontmatter + markdown format
3. Document all steps clearly
4. Include user checkpoints for review

## Artifacts

Workflow outputs are stored in `../.agent/artifacts/`
