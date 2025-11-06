# Quickstart: Testing Bible Passages

## Overview

This guide provides the steps to test the "Support Bible Passages" feature.

## Steps

1.  **Update Data File**:
    -   Open the `public/data/bible-texts.json` file.
    -   Modify an existing entry or add a new one to include an `endVerse` field and the corresponding full passage text.
    -   **Example (Single Chapter Passage)**:
        ```json
        {
          "book": "John",
          "chapter": 3,
          "verse": 16,
          "endVerse": 18,
          "text": "For God so loved the world..."
        }
        ```
    -   **Example (Multi-Chapter Passage)**:
        ```json
        {
            "book": "Romans",
            "chapter": 7,
            "verse": 24,
            "endChapter": 8,
            "endVerse": 1,
            "text": "Wretched man that I am! Who will deliver me from this body of death? Thanks be to God through Jesus Christ our Lord! So then, I myself serve the law of God with my mind, but with my flesh I serve the law of sin. There is therefore now no condemnation for those who are in Christ Jesus."
        }
        ```

2.  **Run the Application**:
    -   Start the development server: `npm run dev`.
    -   Open your browser to `http://localhost:3000`.

3.  **Verify**:
    -   Reload the page or click the "Get New Text" button until your new passage is displayed.
    -   Confirm that the citation is displayed correctly (e.g., "John 3:16-18" or "Romans 7:24-8:1").
    -   Confirm that the full text of the passage is displayed.
    -   Confirm that single-verse entries are still displayed correctly.
