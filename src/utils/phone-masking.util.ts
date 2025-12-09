/**
 * @module utils/phone-masking
 * @description Phone number masking utilities for privacy protection
 */

import { findPhoneNumbersInText } from 'libphonenumber-js';
import type { MaskPhoneNumberOptions } from '../types/security.types.js';

/**
 * Masks phone numbers in arbitrary text for (virtually) all countries.
 * Uses libphonenumber-js for accurate parsing.
 *
 * @param text - The text containing phone numbers to mask
 * @param options - Configuration options for masking behavior
 * @returns The text with phone numbers masked
 *
 * @example
 * ```typescript
 * // Default masking (last 2 digits visible)
 * maskPhoneNumbers("+1 415-555-0123");
 * // => "**********23"
 *
 * // Keep last 4 digits visible
 * maskPhoneNumbers("+1 415-555-0123", { unmaskedDigits: 4 });
 * // => "**********0123"
 *
 * // Only mask US and BD numbers
 * maskPhoneNumbers(text, { allowedCountries: ["US", "BD"] });
 * ```
 */
export const maskPhoneNumbers = (
  text: string,
  options: MaskPhoneNumberOptions = {}
): string => {
  const {
    maskChar = '*',
    unmaskedDigits = 2,
    defaultCountry,
    allowedCountries,
  } = options;

  if (!text) return text;

  // First, mask international phone numbers
  const matches = findPhoneNumbersInText(text, defaultCountry);

  if (matches.length > 0) {
    // Build the result string by walking through the text once
    let result = '';
    let lastIndex = 0;

    for (const match of matches) {
      const { startsAt, endsAt, number } = match;

      // Respect allowedCountries filter if provided
      if (
        allowedCountries &&
        number.country &&
        !allowedCountries.includes(number.country)
      ) {
        continue; // skip masking this one
      }

      // Append text between the last match and this one
      if (startsAt > lastIndex) {
        result += text.slice(lastIndex, startsAt);
      }

      const originalSegment = text.slice(startsAt, endsAt);
      const maskedSegment = maskPhoneSegment(
        originalSegment,
        maskChar,
        unmaskedDigits
      );

      result += maskedSegment;
      lastIndex = endsAt;
    }

    // Append any remaining text after the last match
    if (lastIndex < text.length) {
      result += text.slice(lastIndex);
    }

    text = result;
  }

  // Then, mask local phone numbers without country codes
  text = maskLocalPhoneNumbers(text, maskChar, unmaskedDigits);

  return text;
};

/**
 * Masks local phone numbers without country codes using smart pattern detection.
 * Handles various formats from different countries:
 * - Bangladesh: 11 digits starting with 01 (e.g., 01625327162)
 * - US/Canada: 10 digits (e.g., 4155550123, 415-555-0123)
 * - UK: 10-11 digits starting with 0 (e.g., 07946095844)
 * - India: 10 digits (e.g., 9876543210)
 * - And many more common patterns
 *
 * @param text - The text containing phone numbers
 * @param maskChar - Character to use for masking
 * @param unmaskedDigits - Number of trailing digits to keep visible
 * @returns Text with local phone numbers masked
 *
 * @internal
 */
const maskLocalPhoneNumbers = (
  text: string,
  maskChar: string,
  unmaskedDigits: number
): string => {
  // Comprehensive patterns for local phone numbers across countries
  const patterns = [
    // 11-digit numbers starting with 0 (Bangladesh, UK mobile)
    // Examples: 01625327162, 07946095844
    /\b(0\d{10})\b/g,

    // 10-digit numbers (US, Canada, India without 0 prefix)
    // Examples: 4155550123, 9876543210
    /\b([1-9]\d{9})\b/g,

    // Numbers with hyphens or spaces (7-15 digits)
    // Examples: 415-555-0123, 020 7946 0958, 91-98765-43210
    /\b(\d{2,5}[-\s]\d{3,4}[-\s]\d{3,6})\b/g,

    // Numbers with parentheses (US format)
    // Examples: (415) 555-0123, (020) 7946-0958
    /\b\((\d{2,4})\)[\s-]?(\d{3,4})[-\s]?(\d{3,6})\b/g,

    // 9-digit numbers (some countries)
    // Examples: 612345678 (Australia mobile without 0)
    /\b([1-9]\d{8})\b/g,

    // 8-digit numbers (Singapore, Hong Kong)
    // Examples: 91234567
    /\b([1-9]\d{7})\b/g,
  ];

  let result = text;

  // Apply each pattern sequentially
  for (const pattern of patterns) {
    result = result.replace(pattern, (match) => {
      // Only mask if it looks like a phone number (has enough digits)
      const digitCount = match.replace(/\D/g, '').length;
      if (digitCount >= 8) {
        return maskPhoneSegment(match, maskChar, unmaskedDigits);
      }
      return match;
    });
  }

  return result;
};

/**
 * Mask only the digits in a segment, preserving formatting characters.
 * Keeps the last `unmaskedDigits` digits visible.
 *
 * @internal
 */
const maskPhoneSegment = (
  segment: string,
  maskChar: string,
  unmaskedDigits: number
): string => {
  // Collect indices of all digits
  const digitIndices: number[] = [];
  for (let i = 0; i < segment.length; i++) {
    const char = segment[i];
    if (char && /\d/.test(char)) {
      digitIndices.push(i);
    }
  }

  // If there are no digits, nothing to do
  if (digitIndices.length === 0) return segment;

  const digitsToKeep = Math.max(
    0,
    Math.min(unmaskedDigits, digitIndices.length)
  );
  const cutoffIndex = digitIndices.length - digitsToKeep;

  const chars = segment.split('');

  // Mask all digits before the cutoffIndex
  for (let i = 0; i < cutoffIndex; i++) {
    const idx = digitIndices[i];
    if (idx !== undefined) {
      chars[idx] = maskChar;
    }
  }

  return chars.join('');
};
