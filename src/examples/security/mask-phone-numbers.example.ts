/**
 * Example: maskPhoneNumbers function
 */

import { maskPhoneNumbers } from 'orbit-labs/security';

// Example 1: Basic masking (default: last 2 digits visible)
const text1 = 'Call me at +1 415-555-0123';
const masked1 = maskPhoneNumbers(text1);
console.log(masked1);
// "Call me at +* ***-***-**23"

// Example 2: Keep last 4 digits visible
const text2 = '+1 415-555-0123';
const masked2 = maskPhoneNumbers(text2, { unmaskedDigits: 4 });
console.log(masked2);
// "+* ***-***-0123"

// Example 3: Custom mask character
const text3 = '+1 415-555-0123';
const masked3 = maskPhoneNumbers(text3, { maskChar: '•' });
console.log(masked3);
// "+• •••-•••-••23"

// Example 4: Multiple phone numbers
const text4 = 'US: +1 415-555-0123, UK: +44 20 7946 0958';
const masked4 = maskPhoneNumbers(text4);
console.log(masked4);
// "US: +* ***-***-**23, UK: +** ** **** **58"

// Example 5: Country-specific masking
const text5 = 'US: +1 415-555-0123, UK: +44 20 7946 0958';
const masked5 = maskPhoneNumbers(text5, { allowedCountries: ['US'] });
console.log(masked5);
// "US: +* ***-***-**23, UK: +44 20 7946 0958" (only US masked)
