# Data Model: BibleText

## Overview

This document defines the structure of the `BibleText` entity, which represents a piece of scripture displayed in the application. The model is designed to be flexible, supporting both single verses and multi-verse passages.

## Entity: BibleText

Represents a block of scripture, which can be a single verse or a continuous passage.

| Attribute | Type | Description | Required | Example |
| :--- | :--- | :--- | :--- | :--- |
| `book` | `string` | The name of the book of the Bible. | Yes | `"John"` |
| `chapter` | `number` | The starting chapter number. | Yes | `3` |
| `verse` | `number` | The starting verse number. | Yes | `16` |
| `endChapter` | `number` | The ending chapter number, if the passage spans chapters. Defaults to `chapter` if omitted. | No | `8` |
| `endVerse` | `number` | The ending verse number, if the text is a passage. | No | `1` |
| `text` | `string` | The full text of the verse or passage. | Yes | `"For God so loved..."` |

## JSON Schema

```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "book": { "type": "string" },
      "chapter": { "type": "number" },
      "verse": { "type": "number" },
      "endChapter": { "type": "number" },
      "endVerse": { "type": "number" },
      "text": { "type": "string" }
    },
    "required": ["book", "chapter", "verse", "text"]
  }
}
```

## State Transitions

-   The `BibleText` data is static and loaded on demand. There are no state transitions for this entity.
