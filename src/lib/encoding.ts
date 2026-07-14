/**
 * Safe client-side Base64 encoding/decoding utilities.
 * Supports full UTF-8 character sets (e.g. emojis, accents, non-Latin scripts)
 * without using server-side Node modules.
 */

/**
 * Safely encodes a UTF-8 string to a Base64 string.
 */
export function base64Encode(text: string): string {
  if (!text) return '';
  
  // Use TextEncoder to convert string into UTF-8 bytes
  const utf8Bytes = new TextEncoder().encode(text);
  
  // Convert bytes to a binary string
  let binary = '';
  const len = utf8Bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(utf8Bytes[i]);
  }
  
  // Encode binary string using btoa
  return window.btoa(binary);
}

/**
 * Safely decodes a Base64 string back to a UTF-8 string.
 * Throws an error if the input is not valid Base64.
 */
export function base64Decode(base64Str: string): string {
  if (!base64Str) return '';
  
  // Decode Base64 string to a binary string using atob
  const binary = window.atob(base64Str.trim());
  
  // Convert binary string to a Uint8Array
  const len = binary.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  
  // Decode UTF-8 bytes using TextDecoder
  return new TextDecoder().decode(bytes);
}
