/**
 * @module orbit-labs
 * @description Main entry point - DO NOT import from here
 *
 * Always import from specific modules:
 * - `orbit-labs/form` for form validation
 * - `orbit-labs/common` for file utilities
 * - `orbit-labs/security` for data masking
 */

throw new Error(
  `❌ Direct import from 'orbit-labs' is not allowed!\n\n` +
    `Please import from specific modules:\n` +
    `  ✓ import { zodValidator } from 'orbit-labs/form'\n` +
    `  ✓ import { normalizeFileSize } from 'orbit-labs/common'\n` +
    `  ✓ import { maskPhoneNumbers } from 'orbit-labs/security'\n\n` +
    `See documentation: https://github.com/orbitex-lab/orbit-labs#readme`
);
