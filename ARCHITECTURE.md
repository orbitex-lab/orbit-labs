# Architecture

This document describes the architecture and design decisions of the orbit-labs package.

## Design Principles

### 1. Separation of Concerns
Each aspect of the package is organized into distinct directories:
- **Types**: Pure type definitions with no implementation
- **Utils**: Pure functions with business logic
- **Constants**: Configuration and immutable values
- **Modules**: Public API entry points

### 2. Modularity
The package is split into independently importable modules:
```typescript
import { normalizeFileSize } from 'orbit-labs/common';
import { validateForm } from 'orbit-labs/form';
import { FileSizeUnit } from 'orbit-labs/types';
```

### 3. Type Safety
- Strict TypeScript configuration with 15+ strict flags
- Discriminated unions for type narrowing
- Readonly types for immutability
- Explicit return types on all functions

### 4. Tree-Shaking
- ES modules with proper exports
- No side effects
- Granular exports at every level
- Barrel pattern for clean imports

## Folder Structure

```
src/
├── common/              # Common utilities module
│   └── index.ts        # Re-exports from types, utils, constants
├── form/                # Form validation module
│   └── index.ts        # Re-exports from types, utils, constants
├── types/               # Type definitions only
│   ├── common.types.ts
│   ├── form.types.ts
│   └── index.ts
├── utils/               # Pure utility functions
│   ├── file-size.util.ts
│   ├── validation.util.ts
│   └── index.ts
├── constants/           # Configuration constants
│   ├── file-size.constants.ts
│   ├── validation.constants.ts
│   └── index.ts
├── examples/            # Usage examples (excluded from build)
│   ├── file-size.example.ts
│   ├── form-validation.example.ts
│   └── index.ts
└── index.ts             # Main entry point
```

## Module System

### Entry Points

1. **Main Entry** (`orbit-labs`)
   - Exports everything for convenience
   - Use for quick prototyping
   - Larger bundle size

2. **Subpath Exports** (Recommended)
   - `orbit-labs/common` - File size utilities
   - `orbit-labs/form` - Form validation
   - `orbit-labs/types` - Type definitions only
   - `orbit-labs/utils` - All utility functions
   - `orbit-labs/constants` - All constants

### Import Patterns

```typescript
// Recommended: Subpath imports (better tree-shaking)
import { normalizeFileSize } from 'orbit-labs/common';
import { validateForm } from 'orbit-labs/form';

// Also valid: Type-only imports
import type { FileSizeUnit } from 'orbit-labs/types';

// Fallback: Main entry (larger bundle)
import { normalizeFileSize, validateForm } from 'orbit-labs';
```

## Type System

### Discriminated Unions
Used for type narrowing in conditional flows:

```typescript
type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: FormErrors };

// TypeScript automatically narrows the type
if (result.success) {
  result.data; // Type: T
} else {
  result.errors; // Type: FormErrors
}
```

### Readonly Types
Enforces immutability at compile time:

```typescript
export type FormErrors = Readonly<Record<string, string>>;
```

### Const Assertions
Creates the most specific type possible:

```typescript
const units = ['Bytes', 'KB', 'MB'] as const;
// Type: readonly ["Bytes", "KB", "MB"]
```

## Error Handling

### Example
```typescript
export const normalizeFileSize = (bytes: number): NormalizedFileSize => {
  if (typeof bytes !== 'number') {
    throw new TypeError(`Expected number, got ${typeof bytes}`);
  }
  if (!Number.isFinite(bytes)) {
    throw new RangeError('Bytes must be a finite number');
  }
  if (bytes < 0) {
    throw new RangeError('Bytes must be non-negative');
  }
  // ... implementation
};
```

## Build System

### Compilation
- **Input**: TypeScript source in `src/`
- **Output**: JavaScript + declarations in `dist/`
- **Target**: ES2019 for broad compatibility
- **Modules**: ESNext for tree-shaking

### Type Declarations
- `.d.ts` files for all exports
- `.d.ts.map` for source mapping
- Preserves JSDoc comments

### Exclusions
- `src/examples/` excluded from build
- Test files excluded
- Development files excluded

## Dependencies

### Peer Dependencies
- **Zod**: Required for form validation
- User must install in their project
- Allows user to control version

### Dev Dependencies
- TypeScript compiler
- ESLint + TypeScript plugin
- Prettier for formatting
- Zod (for development)

## Versioning

### Semantic Versioning
- **Major**: Breaking changes to public API
- **Minor**: New features, backward compatible
- **Patch**: Bug fixes, backward compatible

### Breaking Changes
A breaking change includes:
- Removing or renaming exports
- Changing function signatures
- Changing type definitions
- Removing or renaming properties

## Performance Considerations

### Bundle Size
- Tree-shakeable exports
- No unnecessary dependencies
- Minimal runtime overhead

### Runtime Performance
- Pure functions (no side effects)
- Minimal object allocations
- Efficient algorithms

## Testing Strategy

### Type Testing
- Strict TypeScript configuration catches type errors
- Examples serve as integration tests

### Future Enhancements
- Unit tests with Vitest
- Integration tests
- Coverage reports

## Scalability

### Adding New Features
1. Add types in `src/types/`
2. Add implementation in `src/utils/`
3. Add constants if needed in `src/constants/`
4. Export from module entry point
5. Add examples in `src/examples/`

### Extending Modules
Each module is self-contained and can grow independently:
- `common/` for utility functions
- `form/` for validation logic
- New modules can be added without affecting existing ones

## Documentation Strategy

### Code Documentation
- JSDoc on all public APIs
- `@module` tags for file organization
- `@internal` for private functions
- `@example` for usage demonstration

### External Documentation
- README for quick start
- CONTRIBUTING for developers
- CHANGELOG for version history
- ARCHITECTURE for design decisions
