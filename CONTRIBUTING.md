# Contributing to orbit-labs

Thank you for your interest in contributing! 🎉

## 🚀 Release Process (Fully Automated)

We use [Release Please](https://github.com/googleapis/release-please) for automated versioning and publishing.

### Flexible Workflow - No Mandatory Branch Structure

**All branches run CI automatically!** You can work with any branch structure you prefer.

### Simple Workflow:

1. **Create a feature branch:**
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feat/my-feature
   ```

2. **Make changes with [Conventional Commits](https://www.conventionalcommits.org/):**
   ```bash
   git commit -m "feat: add new validation function"
   git commit -m "fix: resolve edge case"
   git commit -m "docs: update examples"
   ```

3. **Push and create a Pull Request:**
   ```bash
   git push origin feat/my-feature
   ```
   - ✅ CI runs automatically (tests, types, build, lint, format)
   - ✅ Tests on Node.js 18.x and 20.x
   - Get feedback before merging!

4. **Merge to main:**
   - ✅ CI runs again
   - ✅ Release Please analyzes commits
   - ✅ Creates a **Release PR** with:
     - Version bump (semantic versioning)
     - Updated CHANGELOG.md
     - Updated package.json

5. **Review and merge the Release PR:**
   - 🚀 **Auto-publishes to NPM**
   - 🏷️ Creates GitHub release & tag
   - 📝 CHANGELOG updated

### Optional: Custom Branch Strategy

You can use any branch structure that fits your workflow:

```bash
# Example 1: Direct to main
feature → main

# Example 2: Development branch
feature → develop → main

# Example 3: Full workflow
feature → develop → staging → main
```

**All branches are tested!** CI runs on every push and PR, regardless of branch name.

## Commit Message Format

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

1. **Fork and clone:**
   ```bash
   git clone https://github.com/orbitex-lab/orbit-labs.git
   cd orbit-labs
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build:**
   ```bash
   npm run build
   ```

## Project Structure

```
orbit-labs/
├── src/
│   ├── common/          # Common utilities module
│   ├── form/            # Form validation module
│   ├── types/           # TypeScript type definitions
│   ├── utils/           # Core utility functions
│   ├── constants/       # Constants and configuration
│   ├── examples/        # Usage examples
│   └── index.ts         # Main entry point
├── dist/                # Compiled output
├── .github/workflows/   # CI/CD workflows
├── package.json
└── tsconfig.json
```

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

## Adding New Features

1. Add type definitions in `src/types/`
2. Create utility in `src/utils/`
3. Add constants in `src/constants/` (if needed)
4. Export from module entry point
5. Add examples in `src/examples/`
6. Update README with usage

## Best Practices

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
