# orbit-labs

[![npm version](https://img.shields.io/npm/v/orbit-labs.svg)](https://www.npmjs.com/package/orbit-labs)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready, highly scalable, type-safe utility library for form validation and common operations. Built with modern best practices and designed for enterprise applications.

## ✨ Features

- 🔒 **Fully Type-Safe** - Strict TypeScript with 15+ compiler checks
- 📦 **Tree-Shakeable** - Import only what you need with ES modules
- 🎯 **Zero Dependencies** - Only peer dependencies (Zod for validation, libphonenumber-js for masking)
- 🏗️ **Scalable Architecture** - Modular design following SOLID principles
- 💪 **Production Ready** - Comprehensive error handling and validation
- 📝 **Well Documented** - JSDoc comments for excellent IDE support
- 🚀 **High Performance** - Optimized algorithms with minimal overhead
- 🧪 **Type Tested** - Strict TypeScript catches issues at compile time
- 🤖 **Automated Releases** - Semantic versioning with Release Please

## 📦 Installation

```bash
npm install orbit-labs zod
# or
pnpm add orbit-labs zod
# or
yarn add orbit-labs zod

# For phone masking features, also install:
npm install libphonenumber-js
```

## 🚀 Quick Start

**Important:** Always import from specific modules (`/form`, `/common`, `/security`):

### Form Validation

```typescript
import { z } from 'zod';
import { zodValidator } from 'orbit-labs/form';

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

const errors = zodValidator(schema, {
  email: 'user@example.com',
  age: 25,
});

if (Object.keys(errors).length === 0) {
  console.log('Valid!');
}
```

### File Size Normalization

```typescript
import { normalizeFileSize } from 'orbit-labs/common';

const size = normalizeFileSize(1536000);
console.log(`${size.size} ${size.unit}`); // "1.46 MB"
```

### Phone Number Masking

```typescript
import { maskPhoneNumbers } from 'orbit-labs/security';

const text = 'Call me at +1 415-555-0123';
const masked = maskPhoneNumbers(text);
console.log(masked); // "Call me at +* ***-***-**23"

// Custom options
maskPhoneNumbers(text, { 
  unmaskedDigits: 4,
  maskChar: '•',
  allowedCountries: ['US', 'BD']
});
```

## 📖 API Documentation

### Form Validation (`orbit-labs/form`)

### Form Validation (`orbit-labs/form`)

#### `zodValidator<T>(schema: T, values: z.infer<T>): Record<string, string>`

Validates form data against a Zod schema and returns errors.

```typescript
import { zodValidator } from 'orbit-labs/form';

const errors = zodValidator(schema, formData);
if (Object.keys(errors).length > 0) {
  // Handle errors
}
```eatures:**
- ✅ Discriminated unions for type safety
- ✅ Nested field error paths
- ✅ Root-level error support
- ✅ Immutable error objects
- ✅ First error per field

### Common Utilities (`orbit-labs/common`)

#### `normalizeFileSize(bytes: number): NormalizedFileSize`

Converts byte values to human-readable file sizes.

```typescript
import { normalizeFileSize } from 'orbit-labs/common';

const size = normalizeFileSize(5242880);
// {
//   size: "5.00 MB",
//   unit: "MB",
//   value: 5,
//   bytes: 5242880
// }
```

**Features:**
- ✅ Multiple units (Bytes, KB, MB, GB, TB)
- ✅ Input validation (TypeError, RangeError)
- ✅ Decimal precision (2 places)
- ✅ Original bytes preserved

### Security Utilities (`orbit-labs/security`)

#### `maskPhoneNumbers(text: string, options?: MaskPhoneNumberOptions): string`

Masks phone numbers in text for privacy. Supports all countries via libphonenumber-js.

```typescript
import { maskPhoneNumbers } from 'orbit-labs/security';

// Basic masking
maskPhoneNumbers('Call +1 415-555-0123');
// => "Call **********23"

// Custom options
maskPhoneNumbers(text, {
  maskChar: '•',           // Custom mask character
  unmaskedDigits: 4,       // Keep last 4 digits visible
  defaultCountry: 'US',    // Default country for parsing
  allowedCountries: ['US', 'BD'], // Only mask specific countries
});
```

**Options:**
- `maskChar` - Character for masking (default: `"*"`)
- `unmaskedDigits` - Trailing digits to keep visible (default: `2`)
- `defaultCountry` - Default country code for parsing (e.g., `"US"`)
- `allowedCountries` - Array of country codes to mask (masks all if omitted)

**Features:**
- ✅ International phone number support (all countries)
- ✅ Preserves formatting characters
- ✅ Country-specific filtering
- ✅ Configurable masking level
- ✅ Multiple numbers in text

## 🏗️ Architecture

### Simple Structure

```
orbit-labs/
├── form/           # zodValidator
├── common/         # normalizeFileSize  
└── security/       # maskPhoneNumbers
```

### Usage

**Only import from specific modules:**

```typescript
import { zodValidator } from 'orbit-labs/form';
import { normalizeFileSize } from 'orbit-labs/common';
import { maskPhoneNumbers } from 'orbit-labs/security';
```## 🎯 Examples

### Form Validation

```typescript
import { z } from 'zod';
import { zodValidator } from 'orbit-labs/form';

// Nested validation
const schema = z.object({
  user: z.object({
    name: z.string().min(1),
    email: z.string().email(),
  }),
});

const errors = zodValidator(schema, {
  user: { name: '', email: 'invalid' },
});
// { "user.name": "Required", "user.email": "Invalid email" }
```

### File Size Utilities

```typescript
import { normalizeFileSize } from 'orbit-labs/common';

normalizeFileSize(1536000);
// { size: "1.46 MB", unit: "MB", value: 1.46, bytes: 1536000 }
```

### Phone Number Masking

```typescript
import { maskPhoneNumbers } from 'orbit-labs/security';

// Multiple numbers
const text = 'US: +1 415-555-0123, UK: +44 20 7946 0958';
maskPhoneNumbers(text, { allowedCountries: ['US'] });
// "US: +* ***-***-**23, UK: +44 20 7946 0958"
```

### Error Handling

```typescript
import { zodValidator } from 'orbit-labs/form';
import { normalizeFileSize } from 'orbit-labs/common';

// Form errors
const errors = zodValidator(schema, data);
if (Object.keys(errors).length > 0) {
  console.error('Validation failed:', errors);
}

// File size errors
try {
  normalizeFileSize(-100); // RangeError: bytes must be >= 0
} catch (error) {
  console.error(error.message);
}
```

## 📄 Requirements

- **Node.js** >= 18.0.0
- **Zod** ^3.0.0 || ^4.0.0 (required for `orbit-labs/form`)
- **libphonenumber-js** ^1.11.0 (optional, for `orbit-labs/security`)

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details on our code of conduct and development process.

## 📋 Project Structure

See [Architecture Documentation](ARCHITECTURE.md) for detailed information about the project structure and design decisions.

## 📝 Changelog

See [CHANGELOG.md](CHANGELOG.md) for release history and breaking changes.

## 📜 License

MIT © [Your Name](LICENSE)
## 📜 License

MIT © [orbitex-lab](LICENSE)

## 🔗 Links

- [Documentation](https://github.com/orbitex-lab/orbit-labs#readme)
- [Issues](https://github.com/orbitex-lab/orbit-labs/issues)
- [NPM Package](https://www.npmjs.com/package/orbit-labs)

---

Made with ❤️ by orbitex-lab
- 🔒 **Fully Type-Safe** - Written in TypeScript with strict type checking
- 📦 **Tree-Shakeable** - Import only what you need
- 🎯 **Zero Dependencies** - Except peer dependency on Zod for form validation
- 💪 **Production Ready** - Comprehensive error handling and validation
- 📝 **Well Documented** - JSDoc comments for excellent IDE support

## Installation

```bash
npm install orbit-labs zod
# or
pnpm add orbit-labs zod
# or
yarn add orbit-labs zod
```

## Usage

### Form Validation (`orbit-labs/form`)

Type-safe form validation using Zod schemas.

```typescript
import { z } from 'zod';
import { validateForm, validateFormWithData } from 'orbit-labs/form';

// Define your schema
const userSchema = z.object({
  email: z.string().email('Invalid email address'),
  age: z.number().min(18, 'Must be at least 18'),
  name: z.string().min(2, 'Name too short'),
});

// Simple validation - returns errors only
const errors = validateForm(userSchema, {
  email: 'invalid-email',
  age: 15,
  name: 'A',
});
console.log(errors);
// {
//   email: "Invalid email address",
//   age: "Must be at least 18",
//   name: "Name too short"
// }

// Advanced validation - returns success status and typed data
const result = validateFormWithData(userSchema, {
  email: 'user@example.com',
  age: 25,
  name: 'John Doe',
});

if (result.success) {
  // result.data is fully typed!
  console.log(result.data.email); // string
  console.log(result.data.age);   // number
} else {
  // result.errors contains validation errors
  console.log(result.errors);
}
```

### Common Utilities (`orbit-labs/common`)

Utility functions for common operations.

```typescript
import { normalizeFileSize } from 'orbit-labs/common';

// Convert bytes to human-readable format
const size1 = normalizeFileSize(1024);
console.log(size1);
// {
//   size: "1",
//   unit: "KB",
//   value: 1,
//   bytes: 1024
// }

const size2 = normalizeFileSize(1536000);
console.log(size2);
// {
//   size: "1.46",
//   unit: "MB",
//   value: 1.46484375,
//   bytes: 1536000
// }

// Input validation
try {
  normalizeFileSize(-100); // Throws RangeError
} catch (error) {
  console.error(error.message); // "Bytes must be non-negative"
}
```

## API Reference

### Form Validation

#### `validateForm<T>(schema: T, values: unknown): FormErrors`

Validates form data against a Zod schema and returns errors.

**Parameters:**
- `schema` - Zod schema to validate against
- `values` - Form values to validate

**Returns:** Object with field paths as keys and error messages as values

**Throws:**
- `TypeError` if schema is invalid

#### `validateFormWithData<T>(schema: T, values: unknown): ValidationResult<T>`

Validates form data and returns structured result with typed data.

**Parameters:**
- `schema` - Zod schema to validate against
- `values` - Form values to validate

**Returns:** Validation result with `success`, `data` (if valid), or `errors` (if invalid)

**Throws:**
- `TypeError` if schema is invalid

### Common Utilities

#### `normalizeFileSize(bytes: number): NormalizedFileSize`

Converts file size in bytes to human-readable format.

**Parameters:**
- `bytes` - File size in bytes (must be non-negative)

**Returns:** Object containing normalized size, unit, numeric value, and original bytes

**Throws:**
- `TypeError` if bytes is not a number
- `RangeError` if bytes is negative or not finite

## TypeScript

This library is written in TypeScript and provides full type definitions. All functions are fully typed with strict type checking enabled.

```typescript
import type { FormErrors, ValidationResult, NormalizedFileSize, FileSizeUnit } from 'orbit-labs/form';
import type { NormalizedFileSize } from 'orbit-labs/common';
```

## Requirements

- Node.js >= 18.0.0
- TypeScript >= 5.0.0 (if using TypeScript)
- Zod >= 3.0.0 (peer dependency)

## 🔄 Development & Release Workflow

We use **conventional commits** with automated releases via [Release Please](https://github.com/googleapis/release-please).

### Simple Workflow:

```bash
# 1. Create feature branch from main (or any branch)
git checkout -b feat/my-feature

# 2. Commit using conventional commits
git commit -m "feat: add new validation helper"
git commit -m "fix: resolve edge case"

# 3. Push and create PR
git push origin feat/my-feature

# 4. Merge PR to main
# ✅ CI runs automatically
# ✅ Release Please analyzes commits
# ✅ Creates release PR with version bump

# 5. Merge release PR
# 🚀 Auto-publishes to NPM!
```

### Commit Types & Versioning:

- `feat:` → Minor version (2.0.0 → 2.1.0)
- `fix:` → Patch version (2.0.0 → 2.0.1)
- `feat!:` or `BREAKING CHANGE:` → Major version (2.0.0 → 3.0.0)
- `docs:`, `chore:`, `refactor:` → No version bump

**All branches are tested automatically!** No mandatory develop/staging branches required.

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

MIT
