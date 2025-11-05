'use client';

import React, { useEffect, useState, useCallback } from 'react';
import { BibleText } from './lib/types';
import { getRandomBibleText } from './lib/data';
import BibleTextView from './components/BibleTextView';

export default function HomePage() {
  const [bibleText, setBibleText] = useState<BibleText | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomText = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const text = await getRandomBibleText();
      setBibleText(text);
    } catch (err) {
      setError('Failed to load Bible text.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRandomText();
  }, [fetchRandomText]);

  return (
    <main style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Daily Devotional</h1>
      <BibleTextView text={bibleText} loading={loading} error={error} />
      <button
        onClick={fetchRandomText}
        disabled={loading}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Loading...' : 'Get New Text'}
      </button>
    </main>
  );
}