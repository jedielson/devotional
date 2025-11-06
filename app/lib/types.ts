export type BibleText = {
  book: string;
  chapter: number;
  verse: number;
  endChapter?: number;
  endVerse?: number;
  text: string;
};
