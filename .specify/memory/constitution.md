<!--
Sync Impact Report:
- Version change: v1.0.0 → v1.1.0
- List of modified principles:
  - "II. Client-Side Rendering (CSR) with Static Data" → "II. Client-Side Rendering (CSR) with Next.js"
  - "III. Modern Frontend Stack" → "III. Next.js-based Stack"
- Added sections: none
- Removed sections: none
- Templates requiring updates (✅ updated):
  - .specify/templates/plan-template.md
  - .specify/templates/tasks-template.md
- Follow-up TODOs: none
-->
# Devotional Life Constitution

## Core Principles

### I. Simplicity and Focus
The application must maintain a clean, simple, and focused user interface, avoiding unnecessary complexity. The primary goal is to aid in devotional life, not to be a feature-rich, all-encompassing productivity tool. This ensures the user can focus on their devotional activities without distraction.

### II. Client-Side Rendering (CSR) with Next.js
The application will be a single-page application (SPA) built with Next.js, strictly using its Client-Side Rendering (CSR) capabilities. All data will be stored in local JSON files and managed on the client-side. No server-side rendering (SSR) or complex backend database is required for the initial versions. This provides a robust framework while simplifying deployment.

### III. Next.js-based Stack
The project will use Next.js as the core framework. Dependencies should be kept up-to-date to ensure long-term maintainability and leverage the latest performance and security improvements from the Next.js ecosystem.

### IV. Git and Version Control
Commit messages must adhere to the Conventional Commits specification. The body of the commit message should explain the "what" and "why" of the change, but it should not include a list of modified files, as this information is already part of the commit metadata.

## Governance
This Constitution is the guiding document for the project. All development, features, and contributions must align with its principles. Amendments require discussion and agreement among the core contributors.

**Version**: 1.1.0 | **Ratified**: 2025-11-05 | **Last Amended**: 2025-11-06