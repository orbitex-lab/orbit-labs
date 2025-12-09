# Contributing to orbit-labs

Thank you for your interest in contributing! 🎉

## 🚀 Quick Start

1. **Fork and clone:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/orbit-labs.git
   cd orbit-labs
   npm install
   ```

2. **Create a branch:**
   ```bash
   git checkout -b feat/my-feature
   ```

3. **Make changes and test:**
   ```bash
   npm run build
   npm run typecheck
   npm run lint
   ```

4. **Commit using [Conventional Commits](https://www.conventionalcommits.org/):**
   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: resolve bug"
   git commit -m "docs: update documentation"
   ```

5. **Push and create PR:**
   ```bash
   git push origin feat/my-feature
   ```

## 📝 Commit Convention

- `feat:` - New feature (minor version)
- `fix:` - Bug fix (patch version)
- `docs:` - Documentation only
- `chore:` - Maintenance tasks
- `feat!:` or `BREAKING CHANGE:` - Breaking change (major version)

## 🔄 Release Process

Releases are automated using Release Please:
- Merge to `main` → Release Please creates release PR
- Merge release PR → Auto-publishes to NPM

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Project Structure

```
orbit-labs/
├── src/
│   ├── common/          # Common utilities module
│   │   └── index.ts     # Exports: normalizeFileSize
│   ├── form/            # Form validation module
│   │   └── index.ts     # Exports: zodValidator
│   ├── security/        # Security utilities module
│   │   └── index.ts     # Exports: maskPhoneNumbers
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Core utility functions
│   ├── constants/       # Constants and configuration
│   ├── examples/        # Module-specific usage examples
│   │   ├── common/
│   │   ├── form/
│   │   └── security/
│   └── index.ts         # Disabled (shows error message)
├── dist/                # Compiled output
└── .github/workflows/   # CI/CD workflows
```

## Module System

**Import from specific modules only:**
```typescript
import { normalizeFileSize } from 'orbit-labs/common';
import { zodValidator } from 'orbit-labs/form';
import { maskPhoneNumbers } from 'orbit-labs/security';
```

**Main export is disabled** - importing from `'orbit-labs'` will throw an error directing users to use specific modules.

## Development Commands

```bash
npm run typecheck    # Type checking
npm run build        # Build package
npm run build:watch  # Watch mode
npm run lint         # Lint code
npm run format       # Format code
npm run format:check # Check formatting
npm run clean        # Clean build
```

## Adding New Features

### 1. Choose the Right Module
- **`common/`** - General utilities (file operations, formatting, etc.)
- **`form/`** - Form validation and processing
- **`security/`** - Security-related utilities (masking, sanitization, etc.)

### 2. Implementation Steps
1. Add type definitions in `src/types/`
2. Create utility in `src/utils/`
3. Add constants in `src/constants/` (if needed)
4. Export from module's `index.ts` (e.g., `src/form/index.ts`)
5. Add examples in `src/examples/<module>/`
6. Update README with usage examples

### 3. Example Structure
```typescript
// src/examples/form/my-feature.example.ts
import { myFeature } from 'orbit-labs/form';

// Example 1: Basic usage
const result1 = myFeature(input1);
console.log(result1);

// Example 2: With options
const result2 = myFeature(input2, { option: true });
console.log(result2);
```

## Coding Standards

### TypeScript
- Use strict TypeScript settings
- Explicit return types for all functions
- Prefer `const` over `let`
- Use `readonly` for immutability

### Naming Conventions
- **Files**: `kebab-case.type.ts`, `kebab-case.util.ts`
- **Types**: `PascalCase`
- **Functions**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`

### Documentation
- JSDoc comments for all public APIs
- Include `@param`, `@returns`, `@throws`, `@example`
- Inline comments for complex logic

## Pull Request Process

1. Create feature branch
2. Make changes with conventional commits
3. Run tests: `npm run typecheck && npm run build`
4. Format: `npm run format`
5. Push and create PR
6. CI runs automatically
7. Merge after review

## Best Practices

- ✅ Modular exports (`orbit-labs/common`, `orbit-labs/form`, `orbit-labs/security`)
- ✅ Immutability with `readonly` and `as const`
- ✅ Type safety with discriminated unions
- ✅ Input validation and typed errors
- ✅ Comprehensive JSDoc documentation
- ✅ Usage examples for new features

## Questions?

- 📖 [Documentation](README.md)
- 🐛 [Report Issues](https://github.com/orbitex-lab/orbit-labs/issues)
- 💡 [Request Features](https://github.com/orbitex-lab/orbit-labs/issues/new)

---

**Happy coding! 🚀**
