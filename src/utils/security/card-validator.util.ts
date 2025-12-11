/**
 * Validates a credit/debit card number using the Luhn algorithm and detects the card provider.
 *
 * @param cardNumber - The card number to validate (with or without spaces/dashes)
 * @returns Validation result with card details
 *
 * @example
 * ```typescript
 * // Valid Visa card
 * const result = validateCard('4532 1488 0343 6467');
 * // {
 * //   isValid: true,
 * //   type: 'Credit',
 * //   provider: 'Visa',
 * //   formatted: '4532 1488 0343 6467',
 * //   lastFour: '6467'
 * // }
 *
 * // Invalid card
 * const invalid = validateCard('1234 5678 9012 3456');
 * // { isValid: false, type: null, provider: null }
 * ```
 */

import type {
  CardValidationResult,
  CardProvider,
  CardType,
} from '../../types/security.types';

export function validateCard(cardNumber: string): CardValidationResult {
  const invalidResult: CardValidationResult = {
    isValid: false,
    type: null,
    provider: null,
  };

  if (!cardNumber || typeof cardNumber !== 'string') {
    return invalidResult;
  }

  // Remove all non-digit characters
  const digits = cardNumber.replace(/\D/g, '');

  // Length validation (13-19 digits for most cards)
  if (!/^\d{13,19}$/.test(digits)) {
    return invalidResult;
  }

  // Luhn Algorithm validation
  let sum = 0;
  let isEven = false;

  for (let i = digits.length - 1; i >= 0; i--) {
    const char = digits.charAt(i);
    let digit = parseInt(char, 10);

    if (isEven) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    isEven = !isEven;
  }

  // If Luhn check fails, return invalid
  if (sum % 10 !== 0) {
    return invalidResult;
  }

  // Detect card provider based on number patterns
  let provider: CardProvider = 'Others';

  if (/^4/.test(digits)) {
    provider = 'Visa';
  } else if (/^(5[1-5]|2[2-7])/.test(digits)) {
    provider = 'Mastercard';
  } else if (/^3[47]/.test(digits)) {
    provider = 'American Express';
  } else if (/^6(?:011|5|4[4-9]|22)/.test(digits)) {
    provider = 'Discover';
  } else if (/^3(?:0[0-5]|[68])/.test(digits)) {
    provider = 'Diners Club';
  } else if (/^35/.test(digits)) {
    provider = 'JCB';
  } else if (/^62/.test(digits)) {
    provider = 'UnionPay';
  } else if (/^(5018|5020|5038|6304|6759|676[1-3])/.test(digits)) {
    provider = 'Maestro';
  }

  // Determine card type (simplified - most are credit)
  const type: CardType = 'Credit';

  // Format card number with spaces (groups of 4)
  const formatted = digits.match(/.{1,4}/g)?.join(' ') || digits;

  // Extract last 4 digits
  const lastFour = digits.slice(-4);

  return {
    isValid: true,
    type,
    provider,
    formatted,
    lastFour,
  };
}
