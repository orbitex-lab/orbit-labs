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

  // Find all phone numbers with start/end indices
  const matches = findPhoneNumbersInText(text, defaultCountry);

  if (!matches.length) return text;

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
