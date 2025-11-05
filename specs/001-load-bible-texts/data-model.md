# Data Model: Load Bible Texts

## Entities

### Bible Text

Represents a single Bible passage to be displayed to the user.

**Fields**:

| Field     | Type    | Description                             | Validation Rules |
|-----------|---------|-----------------------------------------|------------------|
| `book`    | string  | The name of the book of the Bible.      | Required         |
| `chapter` | integer | The chapter number.                     | Required, > 0    |
| `verse`   | integer | The verse number.                       | Required, > 0    |
| `text`    | string  | The content of the verse.               | Required         |

**Example JSON Structure**:

```json
[
  {
    "book": "John",
    "chapter": 3,
    "verse": 16,
    "text": "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."
  },
  {
    "book": "Psalm",
    "chapter": 23,
    "verse": 1,
    "text": "The LORD is my shepherd; I shall not want."
  }
]
```
