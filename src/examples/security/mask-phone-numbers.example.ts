/**
 * Example: maskPhoneNumbers function
 */

import { maskPhoneNumbers } from 'orbit-labs/security';

// Example 1: Basic masking (default: last 2 digits visible)
const text1 = 'Call me at +1 415-555-0123';
const masked1 = maskPhoneNumbers(text1);
console.log(masked1);
// "Call me at +* ***-***-**23"

// Example 2: Local numbers without country code (smart detection)
const text2 = 'Bangladesh: 01625327162, US: 4155550123, UK: 07946095844';
const masked2 = maskPhoneNumbers(text2);
console.log(masked2);
// "Bangladesh: *********62, US: ********23, UK: *********44"

// Example 3: Keep last 4 digits visible
const text3 = '+1 415-555-0123';
const masked3 = maskPhoneNumbers(text3, { unmaskedDigits: 4 });
console.log(masked3);
// "+* ***-***-0123"

// Example 4: Custom mask character
const text4 = '01625327162';
const masked4 = maskPhoneNumbers(text4, { maskChar: '•' });
console.log(masked4);
// "•••••••••62"

// Example 5: Multiple phone numbers with mixed formats
const text5 = 'Contact: +1 415-555-0123, local: 4155550199, BD: 01712345678';
const masked5 = maskPhoneNumbers(text5);
console.log(masked5);
// "Contact: +* ***-***-**23, local: ********99, BD: *********78"

// Example 6: Country-specific masking
const text6 = 'US: +1 415-555-0123, UK: +44 20 7946 0958';
const masked6 = maskPhoneNumbers(text6, { allowedCountries: ['US'] });
console.log(masked6);
// "US: +* ***-***-**23, UK: +44 20 7946 0958" (only US masked)
