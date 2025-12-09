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
