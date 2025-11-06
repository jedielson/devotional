# Research: Support Bible Passages

## Overview

The implementation for this feature is straightforward and builds upon the existing application structure. The primary changes involve a minor data model update and adjustments to the UI component to display the new data format correctly. No external libraries, APIs, or complex architectural decisions are required.

## Decisions

-   **Data Storage**: Continue using the existing `public/data/bible-texts.json` file.
    -   **Rationale**: This approach aligns with the project's constitution (Principle II: CSR with Static Data) and is sufficient for the application's current needs. It avoids adding unnecessary complexity.
    -   **Alternatives Considered**: A more complex database or a separate API were considered but deemed overkill for the current scope.

-   **Data Fetching**: Continue using the browser's `fetch` API within the existing `getRandomBibleText` function.
    -   **Rationale**: The current implementation is simple, effective, and requires minimal changes.
    -   **Alternatives Considered**: Using a data-fetching library like SWR or React Query was considered but is not necessary given the simplicity of the data requirements.
