import React from 'react';
import { BibleText } from '../lib/types';

interface BibleTextViewProps {
  text: BibleText | null;
  loading: boolean;
  error: string | null;
}

const BibleTextView: React.FC<BibleTextViewProps> = ({ text, loading, error }) => {
  if (loading) {
    return <p>Loading Bible text...</p>;
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>;
  }

  if (!text) {
    return <p>No Bible text available.</p>;
  }

  const formatCitation = (bibleText: BibleText) => {
    const { book, chapter, verse, endChapter, endVerse } = bibleText;

    if (endChapter && endVerse) {
      // Multi-chapter passage
      return `${book} ${chapter}:${verse}-${endChapter}:${endVerse}`;
    } else if (endVerse) {
      // Single-chapter passage
      return `${book} ${chapter}:${verse}-${endVerse}`;
    } else {
      // Single verse
      return `${book} ${chapter}:${verse}`;
    }
  };

  return (
    <div>
      <h2>{formatCitation(text)}</h2>
      <p>{text.text}</p>
    </div>
  );
};

export default BibleTextView;
