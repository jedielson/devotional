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

  return (
    <div>
      <h2>{text.book} {text.chapter}:{text.verse}</h2>
      <p>{text.text}</p>
    </div>
  );
};

export default BibleTextView;
