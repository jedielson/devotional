# Feature Specification: Support Bible Passages

**Feature Branch**: `002-passage-support`
**Created**: 2025-11-06
**Status**: Draft
**Input**: User description: "I want to change the data, to be able to show complete passages instead of only a verse."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View a complete Bible passage (Priority: P1)

As a user, when I load the page or request a new devotional, I want to see a complete, pre-defined passage of scripture instead of just a single verse, so that I can have a richer and more contextual devotional experience.

**Why this priority**: This is the core feature. The current app's limitation to single verses is a major constraint. Enabling the display of pre-defined passages is the primary goal.

**Independent Test**: The application should load and display a multi-verse passage from the data file, including the correct citation (e.g., John 3:16-18) and the full text. This can be tested by verifying the application's output against the source data file.

**Acceptance Scenarios**:

1.  **Given** the data file contains a passage entry for John 3:16-18,
    **When** the application loads this entry,
    **Then** the UI displays the citation "John 3:16-18" and the full, continuous text for all verses in that range.

2.  **Given** the data file contains a single verse entry for Psalm 23:1,
    **When** the application loads this entry,
    **Then** the UI displays the citation "Psalm 23:1" and the text for that verse, ensuring backward compatibility.

---

### Edge Cases

-   **Missing `endVerse`**: If an entry in the data file does not have an `endVerse` field, the system should treat it as a single verse and render it correctly.
-   **`text` field content**: The `text` field for a passage must contain the complete, pre-formatted text for the entire range of verses. The application will not be responsible for fetching individual verses and combining them.

## Requirements *(mandatory)*

### Functional Requirements

-   **FR-001**: The data structure in `public/data/bible-texts.json` MUST be updated to optionally include an `endVerse` number for entries that represent a passage.
-   **FR-002**: The data loading logic (`getRandomBibleText`) MUST correctly parse both single-verse and passage entries from the JSON file.
-   **FR-003**: The `BibleTextView` component MUST conditionally render the citation to correctly handle single verses (e.g., "John 3:16"), single-chapter passages (e.g., "John 3:16-18"), and multi-chapter passages (e.g., "Romans 7:24-8:1").
-   **FR-004**: The application MUST remain functional and correctly display verses if the `bible-texts.json` file contains a mix of single-verse and passage entries.

### Key Entities *(include if feature involves data)*

-   **BibleText**: Represents a block of scripture.
    -   **Attributes**: `book` (string), `chapter` (number), `verse` (number), `endChapter` (number, optional), `endVerse` (number, optional), `text` (string).

## Success Criteria *(mandatory)*

### Measurable Outcomes

-   **SC-001**: The application correctly renders 100% of passage entries from the `bible-texts.json` file, displaying the full verse range and text.
-   **SC-002**: The changes must not introduce any performance degradation greater than 5% to the devotional loading time.
-   **SC-003**: The application must maintain 100% backward compatibility with the old, single-verse data format.
