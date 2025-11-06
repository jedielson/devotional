# Implementation Tasks: Support Bible Passages

**Feature**: Support Bible Passages
**User Story**: As a user, I want to see a complete, pre-defined passage of scripture instead of just a single verse.

## Phase 1: Foundational Changes

This phase updates the core data structures and types to support passages.

-   [X] T001 Update the `BibleText` type definition in `app/lib/types.ts` to include optional `endChapter` and `endVerse` fields.
-   [X] T002 Update the `bible-texts.json` file in `public/data/bible-texts.json` with at least one single-verse, one single-chapter passage, and one multi-chapter passage example for testing.

## Phase 2: User Story 1 - Display Bible Passages

**Goal**: Modify the application to correctly display both single verses and multi-verse passages.
**Independent Test**: The application must correctly render the citation and text for single verses, single-chapter passages, and multi-chapter passages loaded from the updated `public/data/bible-texts.json` file.

-   [X] T003 [US1] Modify the `BibleTextView` component in `app/components/BibleTextView.tsx` to conditionally render the citation, handling the display for single verses, single-chapter passages, and multi-chapter passages.
-   [X] T004 [US1] Update the `getRandomBibleText` function in `app/lib/data.ts` to correctly handle the new data structure (though no logic change may be needed as it just returns a random entry).

## Phase 3: Polish & Verification

This phase ensures the implementation is robust and clean.

-   [X] T005 [P] Review all code changes for clarity, correctness, and adherence to the project's coding style.
-   [X] T006 [P] Manually test the application by reloading several times to ensure all test cases from the updated `bible-texts.json` are displayed correctly.

## Dependencies & Execution Order

The implementation should follow the phases sequentially:

1.  **Phase 1 (Foundational)**: The data structure must be updated first.
2.  **Phase 2 (User Story 1)**: The UI can then be updated to reflect the new data structure.
3.  **Phase 3 (Polish)**: Final review and testing.

## Implementation Strategy

The strategy is to first update the underlying data representation and then modify the UI component to correctly display it. This ensures that the data model is solid before any presentation logic is written. The feature will be delivered in a single increment as all tasks are closely related and necessary for the complete functionality.
