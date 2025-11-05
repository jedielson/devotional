---
description: "Task list for feature implementation"
---

# Tasks: Load Bible Texts

**Input**: Design documents from `/specs/001-load-bible-texts/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), data-model.md

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T000 Initialize Next.js project and install dependencies (create `package.json`, run `npm install`)
- [X] T001 [P] Create the directory for data files at `public/data`
- [X] T002 [P] Create a sample data file with at least 3 Bible text objects at `public/data/bible-texts.json`
- [X] T003 [P] Create a directory for type definitions at `app/lib`
- [X] T004 [P] Create a directory for UI components at `app/components`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

- [X] T005 Define the `BibleText` type in `app/lib/types.ts` based on the data model
- [X] T006 Implement a data fetching utility in `app/lib/data.ts` to read and parse `public/data/bible-texts.json`
- [X] T007 The data utility MUST handle file-not-found and JSON parsing errors gracefully

---

## Phase 3: User Story 1 - View a Bible Text on Load (Priority: P1) 🎯 MVP

**Goal**: Display a random Bible text when the main page loads.
**Independent Test**: Load the root page of the application and verify that a Bible text is displayed without any user interaction.

### Implementation for User Story 1

- [X] T008 [US1] Create a `BibleTextView` component in `app/components/BibleTextView.tsx` to display a single Bible text
- [X] T009 [US1] The `BibleTextView` component should accept a `BibleText` object as a prop
- [X] T010 [US1] Implement the main page at `app/page.tsx` to fetch and display a random Bible text on initial load
- [X] T011 [US1] Use client-side state management (e.g., `useState`, `useEffect`) in `app/page.tsx` for fetching and storing the text
- [X] T012 [US1] Display a loading indicator while the text is being fetched
- [X] T013 [US1] Display a user-friendly error message if the text cannot be loaded

---

## Phase 4: User Story 2 - Request a New Bible Text (Priority: P2)

**Goal**: Allow the user to load a new random text by clicking a button.
**Independent Test**: Click the "New Text" button on the main page and verify that the currently displayed Bible text is replaced with a new one.

### Implementation for User Story 2

- [X] T014 [P] [US2] Add a "New Text" button to the `app/page.tsx` component
- [X] T015 [US2] Implement an `onClick` event handler for the "New Text" button
- [X] T016 [US2] The event handler should fetch a new random Bible text from the data utility
- [X] T017 [US2] Update the component's state to display the new Bible text

---

## Phase 5: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [X] T018 [P] Add basic styling to the `BibleTextView` component and the main page in `app/globals.css`
- [X] T019 Review and refactor the code for clarity, performance, and adherence to React best practices
- [X] T020 Validate the final implementation against the scenarios in `quickstart.md`

---

## Dependencies & Execution Order

- **Phase 1 & 2**: Must be completed before any user story work can begin.
- **User Story 1 (Phase 3)**: Depends on Phase 1 & 2. It is the MVP.
- **User Story 2 (Phase 4)**: Depends on User Story 1.
- **Phase 5**: Can be done after all user stories are complete.
