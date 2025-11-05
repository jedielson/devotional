import { BibleText } from './types';

export async function getAllBibleTexts(): Promise<BibleText[]> {
  try {
    const response = await fetch('/data/bible-texts.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BibleText[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching Bible texts:", error);
    return []; // Return an empty array or re-throw a custom error
  }
}

export async function getRandomBibleText(): Promise<BibleText | null> {
  const texts = await getAllBibleTexts();
  if (texts.length === 0) {
    return null;
  }
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}
