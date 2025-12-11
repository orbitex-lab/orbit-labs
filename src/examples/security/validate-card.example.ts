/**
 * Example: validateCard function
 */

import { validateCard } from 'orbit-labs/security';

// Example 1: Valid Visa card
const visa = validateCard('4532 1488 0343 6467');
console.log(visa);
// {
//   isValid: true,
//   type: 'Credit',
//   provider: 'Visa',
//   formatted: '4532 1488 0343 6467',
//   lastFour: '6467'
// }

// Example 2: Valid Mastercard
const mastercard = validateCard('5425233430109903');
console.log(mastercard);
// {
//   isValid: true,
//   type: 'Credit',
//   provider: 'Mastercard',
//   formatted: '5425 2334 3010 9903',
//   lastFour: '9903'
// }

// Example 3: Valid American Express
const amex = validateCard('378282246310005');
console.log(amex);
// {
//   isValid: true,
//   type: 'Credit',
//   provider: 'American Express',
//   formatted: '3782 8224 6310 005',
//   lastFour: '0005'
// }

// Example 4: Invalid card number
const invalid = validateCard('1234 5678 9012 3456');
console.log(invalid);
// {
//   isValid: false,
//   type: null,
//   provider: null
// }

// Example 5: Card number with various formats
const withDashes = validateCard('4532-1488-0343-6467');
const withSpaces = validateCard('4532 1488 0343 6467');
const noSpaces = validateCard('4532148803436467');
// All three will be validated and return the same result

// Example 6: Form validation
function validateCreditCardInput(input: string): boolean {
  const result = validateCard(input);

  if (!result.isValid) {
    console.error('Invalid card number');
    return false;
  }

  console.log(`Valid ${result.provider} card ending in ${result.lastFour}`);
  return true;
}

validateCreditCardInput('4532148803436467');
// "Valid Visa card ending in 6467"

// Example 7: Display masked card
function displayMaskedCard(cardNumber: string): string {
  const result = validateCard(cardNumber);

  if (!result.isValid || !result.lastFour) {
    return 'Invalid card';
  }

  return `${result.provider} •••• ${result.lastFour}`;
}

console.log(displayMaskedCard('4532148803436467'));
// "Visa •••• 6467"

// Example 8: Check card provider
function getCardIcon(cardNumber: string): string {
  const result = validateCard(cardNumber);

  if (!result.isValid) return '❌';

  const icons: Record<string, string> = {
    Visa: '💳',
    Mastercard: '💳',
    'American Express': '💳',
    Discover: '💳',
    JCB: '💳',
    Others: '💳',
  };

  return icons[result.provider || 'Others'] || '💳';
}

console.log(getCardIcon('4532148803436467')); // "💳"
