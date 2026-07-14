/**
 * Core text processing utilities for Text Tools Hub.
 * All logic runs entirely client-side.
 */

// ==========================================
// 1. Word Counter Utilities
// ==========================================

export interface WordMetrics {
  words: number;
  characters: number;
  charactersNoSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTime: number; // in minutes
}

export function calculateWordMetrics(text: string): WordMetrics {
  if (!text) {
    return { words: 0, characters: 0, charactersNoSpaces: 0, sentences: 0, paragraphs: 0, readingTime: 0 };
  }

  const trimmedText = text.trim();
  
  // Word count
  const wordsArray = trimmedText.split(/\s+/).filter(w => w.length > 0);
  const words = wordsArray.length;

  // Character counts
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, '').length;

  // Sentence count (matches typical endings: ., ?, !, or ellipses)
  const sentencesArray = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const sentences = sentencesArray.length;

  // Paragraph count
  const paragraphsArray = text.split(/\n+/).filter(p => p.trim().length > 0);
  const paragraphs = paragraphsArray.length;

  // Reading time (approx 200 words per minute)
  const readingTime = Math.max(1, Math.ceil(words / 200));

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTime,
  };
}

// ==========================================
// 2. Case Converter Utilities
// ==========================================

export function toUppercase(text: string): string {
  return text.toUpperCase();
}

export function toLowercase(text: string): string {
  return text.toLowerCase();
}

export function toTitleCase(text: string): string {
  return text.replace(/\b\w+/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export function toSentenceCase(text: string): string {
  // Lowercase everything first
  const lower = text.toLowerCase();
  // Capitalize first character of text and anything following . ? ! plus whitespace
  return lower.replace(/(^\s*|[.!?]\s+)([a-z])/g, (match) => {
    return match.toUpperCase();
  });
}

export function toCamelCase(text: string): string {
  // Replace symbols/spaces with spaces, then build camelCase
  const clean = text
    .replace(/[^a-zA-Z0-9\s-_]/g, '')
    .replace(/[-_]+/g, ' ')
    .trim();
  
  if (!clean) return '';

  const words = clean.split(/\s+/);
  return words
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
    })
    .join('');
}

// ==========================================
// 3. Remove Duplicate Lines Utilities
// ==========================================

export interface DeduplicateResult {
  cleanedText: string;
  removedCount: number;
}

export function removeDuplicateLines(
  text: string,
  caseSensitive: boolean = false,
  trimLines: boolean = false
): DeduplicateResult {
  if (!text) {
    return { cleanedText: '', removedCount: 0 };
  }

  const lines = text.split(/\r?\n/);
  const seen = new Set<string>();
  const uniqueLines: string[] = [];
  let removedCount = 0;

  for (const line of lines) {
    let processLine = line;
    if (trimLines) {
      processLine = line.trim();
    }

    const comparisonKey = caseSensitive ? processLine : processLine.toLowerCase();

    if (seen.has(comparisonKey)) {
      removedCount++;
    } else {
      seen.add(comparisonKey);
      uniqueLines.push(processLine);
    }
  }

  return {
    cleanedText: uniqueLines.join('\n'),
    removedCount,
  };
}

// ==========================================
// 4. Find & Replace Utilities
// ==========================================

export interface ReplaceResult {
  outputText: string;
  replacementsCount: number;
  error?: string;
}

export function findAndReplace(
  text: string,
  findStr: string,
  replaceStr: string,
  matchCase: boolean = false,
  useRegex: boolean = false
): ReplaceResult {
  if (!text) {
    return { outputText: '', replacementsCount: 0 };
  }
  if (!findStr) {
    return { outputText: text, replacementsCount: 0 };
  }

  try {
    let regex: RegExp;
    const flags = 'g' + (matchCase ? '' : 'i');

    if (useRegex) {
      regex = new RegExp(findStr, flags);
    } else {
      // Escape special regex characters for literal replacement
      const escapedFindStr = findStr.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      regex = new RegExp(escapedFindStr, flags);
    }

    const matches = text.match(regex);
    const replacementsCount = matches ? matches.length : 0;
    const outputText = text.replace(regex, replaceStr);

    return {
      outputText,
      replacementsCount,
    };
  } catch (err: any) {
    return {
      outputText: text,
      replacementsCount: 0,
      error: err.message || 'Invalid regular expression',
    };
  }
}
