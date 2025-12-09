# orbit-labs

[![npm version](https://img.shields.io/npm/v/orbit-labs.svg)](https://www.npmjs.com/package/orbit-labs)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A production-ready, highly scalable, type-safe utility library for form validation and common operations. Built with modern best practices and designed for enterprise applications.

## ✨ Features

- 🔒 **Fully Type-Safe** - Strict TypeScript with 15+ compiler checks
- 📦 **Tree-Shakeable** - Import only what you need with ES modules
- 🎯 **Zero Dependencies** - Only peer dependency on Zod for validation
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
```

## 🚀 Quick Start

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
} else {
  console.log('Errors:', errors);
}
```

### File Size Normalization

```typescript
import { normalizeFileSize } from 'orbit-labs/common';

const size = normalizeFileSize(1536000);
console.log(`${size.size} ${size.unit}`); // "1.46 MB"
```

## 📖 Documentation

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

**Features:**
- ✅ Type-safe with Zod inference
- ✅ Nested field error paths
- ✅ Simple error object format
- ✅ Empty object when valid
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

## 🏗️ Architecture

### Modular Structure

```
orbit-labs/
├── types/          # Type definitions
├── utils/          # Core functions
├── constants/      # Configuration
├── common/         # Common utilities
├── form/           # Form validation
└── examples/       # Usage examples
```

### Import Strategies

**Recommended: Subpath imports** (Best for tree-shaking)
```typescript
import { normalizeFileSize } from 'orbit-labs/common';
import { validateForm } from 'orbit-labs/form';
import type { FormErrors } from 'orbit-labs/types';
```

**Also valid: Granular imports**
```typescript
import { normalizeFileSize } from 'orbit-labs/utils';
import { FILE_SIZE_UNITS } from 'orbit-labs/constants';
```
**Recommended: Subpath imports** (Best for tree-shaking)
```typescript
**Fallback: Main entry**
```typescript
import { normalizeFileSize, zodValidator } from 'orbit-labs';
```🎯 Advanced Usage

### Complex Form Validation

### Complex Form Validation

```typescript
const userSchema = z.object({
  profile: z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    age: z.number().min(0).max(150),
  }),
  preferences: z.object({
    notifications: z.boolean(),
    theme: z.enum(['light', 'dark', 'auto']),
  }),
});

const errors = zodValidator(userSchema, userData);

if (Object.keys(errors).length === 0) {
  console.log('All valid!');
} else {
  Object.entries(errors).forEach(([field, message]) => {
    console.log(`${field}: ${message}`);
  });
}
``` Type-Safe Helpers
### Type-Safe Helpers

```typescript
import type { NormalizedFileSize, FileSizeUnit } from 'orbit-labs/types';
import { FILE_SIZE_UNITS, FIELD_PATH_SEPARATOR } from 'orbit-labs/constants';

const isLargeFile = (size: NormalizedFileSize): boolean => {
  const largeUnits: FileSizeUnit[] = ['GB', 'TB'];
  return largeUnits.includes(size.unit);
};

// Parse nested field paths
### Error Handling

```typescript
import { zodValidator, FIELD_PATH_SEPARATOR } from 'orbit-labs/form';

const errors = zodValidator(schema, data);

Object.entries(errors).forEach(([path, message]) => {
  const fields = path.split(FIELD_PATH_SEPARATOR);
  console.log(`Error in ${fields.join(' → ')}: ${message}`);
});
```f (error instanceof RangeError) {
    console.error('Invalid input:', error.message);
  }
}
```
### Types Module (`orbit-labs/types`)

```typescript
type FileSizeUnit = 'Bytes' | 'KB' | 'MB' | 'GB' | 'TB';

interface NormalizedFileSize {
  readonly size: string;
  readonly unit: FileSizeUnit;
  readonly value: number;
  readonly bytes: number;
}
```e ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: FormErrors };
```

### Constants Module (`orbit-labs/constants`)

```typescript
FILE_SIZE_UNITS: readonly FileSizeUnit[]
BYTES_PER_KB: 1024
MAX_SAFE_FILE_SIZE: number
ROOT_ERROR_KEY: '_root'
FIELD_PATH_SEPARATOR: '.'
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build
npm run build

# Watch mode
npm run build:watch

# Type check
npm run typecheck

# Lint
npm run lint

# Format
npm run format
```

## 📄 Requirements

- **Node.js** >= 16.0.0
- **TypeScript** >= 5.0.0 (if using TypeScript)
- **Zod** >= 3.0.0 (peer dependency)

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

- Node.js >= 16.0.0
- TypeScript >= 5.0.0 (if using TypeScript)
- Zod >= 3.0.0 (peer dependency)

## 🔄 Development Workflow

We use a three-branch strategy for safe releases:

```
feature → develop → staging → main → NPM
```

- **`develop`** - Active development, frequent commits
- **`staging`** - Pre-release testing, stable features  
- **`main`** - Production releases, triggers NPM publish

### Contributing:
1. Create feature branch from `develop`
2. Merge to `develop` for integration testing
3. Merge to `staging` for pre-release validation
4. Merge to `main` for NPM release (automated)

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## License

MIT
