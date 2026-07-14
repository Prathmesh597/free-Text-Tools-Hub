/**
 * JSON formatting, minification, and validation utilities.
 * All logic runs entirely client-side.
 */

export interface JSONProcessResult {
  formattedText: string;
  isValid: boolean;
  error?: string;
}

/**
 * Beautifies a JSON string with 2-space indentation.
 */
export function formatJSON(jsonStr: string): JSONProcessResult {
  if (!jsonStr.trim()) {
    return { formattedText: '', isValid: true };
  }

  try {
    const parsed = JSON.parse(jsonStr);
    return {
      formattedText: JSON.stringify(parsed, null, 2),
      isValid: true,
    };
  } catch (err: any) {
    return {
      formattedText: '',
      isValid: false,
      error: err.message || 'Invalid JSON syntax.',
    };
  }
}

/**
 * Minifies a JSON string into a single compact line.
 */
export function minifyJSON(jsonStr: string): JSONProcessResult {
  if (!jsonStr.trim()) {
    return { formattedText: '', isValid: true };
  }

  try {
    const parsed = JSON.parse(jsonStr);
    return {
      formattedText: JSON.stringify(parsed),
      isValid: true,
    };
  } catch (err: any) {
    return {
      formattedText: '',
      isValid: false,
      error: err.message || 'Invalid JSON syntax.',
    };
  }
}

/**
 * Validates JSON structure and returns success status or detailed error.
 */
export function validateJSON(jsonStr: string): { isValid: boolean; error?: string } {
  if (!jsonStr.trim()) {
    return { isValid: false, error: 'JSON string is empty.' };
  }

  try {
    JSON.parse(jsonStr);
    return { isValid: true };
  } catch (err: any) {
    return {
      isValid: false,
      error: err.message || 'Invalid JSON syntax.',
    };
  }
}
