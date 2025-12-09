# Contributing to orbit-labs

Thank you for your interest in contributing to orbit-labs! This document provides guidelines and instructions for contributing.

## 🚀 Release Process (Automated)

We use [Release Please](https://github.com/googleapis/release-please) to automate versioning and releases.

### How it Works:

1. **Make changes and commit** using [Conventional Commits](https://www.conventionalcommits.org/):
   ```bash
   git commit -m "feat: add new validation function"
   git commit -m "fix: resolve edge case in zodValidator"
   git commit -m "docs: update README examples"
   ```

2. **Push to main branch** (after PR merge):
   ```bash
   git push origin main
   ```

3. **Release Please creates a PR** automatically with:
   - Updated version in `package.json`
   - Updated `CHANGELOG.md`
   - Proper semantic version based on commits

4. **Merge the Release PR** → Package is automatically:
   - Built and published to NPM
   - Tagged on GitHub

### Commit Message Format:

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` → Minor version bump (2.0.0 → 2.1.0)
- `fix:` → Patch version bump (2.0.0 → 2.0.1)
- `docs:` → No version bump
- `chore:` → No version bump
- `refactor:` → No version bump
- `feat!:` or `BREAKING CHANGE:` → Major version bump (2.0.0 → 3.0.0)

**Examples:**
```bash
feat: add zodValidator function
fix: handle nested object validation
docs: update API documentation
chore: update dependencies
refactor: optimize file size calculation
feat!: remove deprecated validateForm function
```

## Development Setup

1. **Fork and clone the repository**
   ```bash
   git clone https://github.com/orbitex-lab/orbit-labs.git
   cd orbit-labs
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the project**
   ```bash
   npm run build
   ```

## Project Structure

```
orbit-labs/
├── src/
│   ├── common/          # Common utilities module entry
│   ├── form/            # Form validation module entry
│   ├── types/           # TypeScript type definitions
│   │   ├── common.types.ts
│   │   ├── form.types.ts
│   │   └── index.ts
│   ├── utils/           # Core utility functions
│   │   ├── file-size.util.ts
│   │   ├── validation.util.ts
│   │   └── index.ts
│   ├── constants/       # Constants and configuration
│   │   ├── file-size.constants.ts
│   │   ├── validation.constants.ts
│   │   └── index.ts
│   ├── examples/        # Usage examples (excluded from build)
│   │   ├── file-size.example.ts
│   │   ├── form-validation.example.ts
│   │   └── index.ts
│   └── index.ts         # Main entry point
├── dist/                # Compiled output (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## Coding Standards

### TypeScript

- Use strict TypeScript settings (already configured)
- All functions must have explicit return types
- Use `const` for immutable values, `let` only when necessary
- Prefer type aliases (`type`) over interfaces for simple types
- Use interfaces for object shapes that may be extended

### Naming Conventions

- **Files**: `kebab-case.type.ts`, `kebab-case.util.ts`, `kebab-case.constants.ts`
- **Types**: `PascalCase`
- **Functions**: `camelCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Private functions**: Prefix with `_` or mark as internal with JSDoc

### Code Organization

1. **Separation of Concerns**
   - Types in `src/types/`
   - Utilities in `src/utils/`
   - Constants in `src/constants/`
   - Examples in `src/examples/`

2. **Module Exports**
   - Each directory has an `index.ts` for clean exports
   - Use barrel exports pattern
   - Re-export from submodules in entry points

3. **Documentation**
   - All public functions must have JSDoc comments
   - Include `@param`, `@returns`, `@throws`, and `@example`
   - Add inline comments for complex logic

## 💬 Getting Help

- 📖 [Full Documentation](README.md)
- 🐛 [Report Issues](https://github.com/orbitex-lab/orbit-labs/issues)
- 💡 [Request Features](https://github.com/orbitex-lab/orbit-labs/issues/new)
- 🤝 [Contributing Guide](CONTRIBUTING.md)

---

**Happy coding! 🚀**

### 3. Formatting
```bash
npm run format
```

### 4. Building
```bash
npm run build
```

### 5. Watch Mode
```bash
npm run build:watch
```

## Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clean, documented code
   - Follow the project structure
   - Add examples if adding new features

3. **Test your changes**
   ```bash
   npm run typecheck
   npm run build
   ```

4. **Format and lint**
   ```bash
   npm run format
   npm run lint
   ```

5. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```
   
   Use conventional commits:
   - `feat:` for new features
   - `fix:` for bug fixes
   - `docs:` for documentation
   - `refactor:` for refactoring
   - `test:` for tests
   - `chore:` for maintenance

6. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

## Adding New Features

### Adding a New Utility Function

1. Create the type definitions in `src/types/`
2. Create the utility in `src/utils/`
3. Add constants if needed in `src/constants/`
4. Export from the appropriate module entry point
5. Add examples in `src/examples/`
6. Update README with usage examples

### Example: Adding a New Function

```typescript
// 1. Add types in src/types/your-feature.types.ts
export interface YourFeatureResult {
  readonly value: string;
}

// 2. Add utility in src/utils/your-feature.util.ts
/**
 * Your feature description
 * @param input - Description
 * @returns Description
 */
export const yourFeature = (input: string): YourFeatureResult => {
  return { value: input };
};

// 3. Export from src/utils/index.ts
export { yourFeature } from './your-feature.util';

// 4. Add example in src/examples/your-feature.example.ts
export const exampleYourFeature = (): void => {
  const result = yourFeature('test');
  console.log(result);
};
```

## Best Practices

1. **Immutability**: Use `readonly`, `as const`, `Object.freeze()`
2. **Type Safety**: Leverage discriminated unions, strict null checks
3. **Error Handling**: Validate inputs, throw typed errors
4. **Documentation**: JSDoc for all public APIs
5. **Testing**: Add examples demonstrating usage
6. **Performance**: Consider tree-shaking and bundle size

## Questions?

Feel free to open an issue for questions or discussions!
