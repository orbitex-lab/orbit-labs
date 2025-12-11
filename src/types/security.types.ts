/**
 * @module types/security
 * @description Type definitions for security and privacy utilities
 */

import type { CountryCode } from 'libphonenumber-js';

/**
 * Options for masking phone numbers in text
 */
export interface MaskPhoneNumberOptions {
  /**
   * Character used for masking digits.
   * @default "*"
   */
  maskChar?: string;

  /**
   * How many trailing digits to keep visible.
   * @default 2
   */
  unmaskedDigits?: number;

  /**
   * Default country to assume when parsing numbers without a country code.
   * Example: "US", "BD", "GB"
   * @default undefined (libphonenumber will still try, but may be less accurate)
   */
  defaultCountry?: CountryCode;

  /**
   * If provided, only mask numbers whose parsed country is in this list.
   * Example: ["US", "CA", "BD"]
   */
  allowedCountries?: CountryCode[];
}

/**
 * Card providers supported by the validator
 */
export type CardProvider =
  | 'Visa'
  | 'Mastercard'
  | 'American Express'
  | 'Discover'
  | 'Diners Club'
  | 'JCB'
  | 'UnionPay'
  | 'Maestro'
  | 'Others';

/**
 * Card type classification
 */
export type CardType = 'Credit' | 'Debit' | 'Unknown';

/**
 * Result of card validation
 */
export interface CardValidationResult {
  /**
   * Whether the card number is valid (passes Luhn algorithm)
   */
  readonly isValid: boolean;

  /**
   * Card type (Credit, Debit, or Unknown)
   */
  readonly type: CardType | null;

  /**
   * Card provider/network
   */
  readonly provider: CardProvider | null;

  /**
   * Formatted card number with spaces (only if valid)
   */
  readonly formatted?: string;

  /**
   * Last 4 digits of the card (only if valid)
   */
  readonly lastFour?: string;
}
