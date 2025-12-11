# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.2.1](https://github.com/orbitex-lab/orbit-labs/compare/v1.2.0...v1.2.1) (2025-12-11)


### Bug Fixes

* update import paths to include file extensions for consistency ([1f4c7eb](https://github.com/orbitex-lab/orbit-labs/commit/1f4c7eb62559211d816edf94dce871c1ed2e413b))

## [1.2.0](https://github.com/orbitex-lab/orbit-labs/compare/v1.1.2...v1.2.0) (2025-12-11)


### Features

* streamline exports and enhance utility modules for file size and validation ([98579a9](https://github.com/orbitex-lab/orbit-labs/commit/98579a96e79d7492897d224c55d9efbcb8b1aae9))

## [1.1.2](https://github.com/orbitex-lab/orbit-labs/compare/v1.1.1...v1.1.2) (2025-12-09)


### Bug Fixes

* remove duplicate examples in phone masking ([7f03194](https://github.com/orbitex-lab/orbit-labs/commit/7f031947b1398662c5fc35c5a930e204d1545a58))

## [1.1.1](https://github.com/orbitex-lab/orbit-labs/compare/v1.1.0...v1.1.1) (2025-12-09)


### Bug Fixes

* bundle zod and libphonenumber-js as dependencies for zero-config installation ([3b58c6f](https://github.com/orbitex-lab/orbit-labs/commit/3b58c6f53a10507139331b829897d7aeb118bbae))
* make all peer dependencies optional for modular installation ([910ef56](https://github.com/orbitex-lab/orbit-labs/commit/910ef5695d6fcaf42b3b3d00a95f43f04a542b7f))
* move libphonenumber-js to regular dependency to avoid user installation errors ([e564412](https://github.com/orbitex-lab/orbit-labs/commit/e564412667dbc0040ec1e8dbbe301c08a6492f88))

## [1.1.0](https://github.com/orbitex-lab/orbit-labs/compare/v1.0.2...v1.1.0) (2025-12-09)


### Features

* add phone masking security module and simplify package structure ([6204264](https://github.com/orbitex-lab/orbit-labs/commit/6204264d7b7a3c50c817e9ed13730df6cbd1beae))

## [1.0.2](https://github.com/orbitex-lab/orbit-labs/compare/v1.0.1...v1.0.2) (2025-12-09)


### Bug Fixes

* correct YAML syntax in CI workflow conditional ([a9ff13d](https://github.com/orbitex-lab/orbit-labs/commit/a9ff13ddbefb56c81ff07457941ffd12efb493d3))

## [1.0.1](https://github.com/orbitex-lab/orbit-labs/compare/v1.0.0...v1.0.1) (2025-12-09)


### Bug Fixes

* normalize repository URL format ([71644e8](https://github.com/orbitex-lab/orbit-labs/commit/71644e8ee26e69c229f97f41b6467bf5fda5f149))

## 1.0.0 (2025-12-09)


### Features

* add staging branch workflow for pre-release testing ([d8b7316](https://github.com/orbitex-lab/orbit-labs/commit/d8b7316bb9e309e7ad004815b01873e2e465c3da))


### Bug Fixes

* exclude examples from linting and update TypeScript ESLint to v8 ([9760f07](https://github.com/orbitex-lab/orbit-labs/commit/9760f07e05082199cae46044cc0167a5065394b8))

## [2.0.0] - 2025-12-10

### Added
- 🏗️ **Complete package restructure** for better scalability and maintainability
- 📁 **New folder structure**:
  - `src/types/` - Centralized type definitions
  - `src/utils/` - Core utility functions
  - `src/constants/` - Configuration constants
  - `src/examples/` - Comprehensive usage examples
- 📦 **Additional exports**: types, utils, and constants modules
- 🛠️ **Development tooling**:
  - ESLint configuration with TypeScript support
  - Prettier for code formatting
  - EditorConfig for consistent styling
- 📝 **Enhanced documentation**:
  - Contributing guidelines
  - Changelog
  - License file
- 🎯 **Path aliases** in tsconfig for cleaner imports
- 🔧 **New npm scripts**:
  - `build:watch` - Watch mode for development
  - `lint` - Code linting
  - `format` - Code formatting
  - `format:check` - Format verification
  - `clean` - Clean build directory

### Changed
- ♻️ **Refactored all modules** to follow separation of concerns
- 🎨 **Improved code organization** with clear module boundaries
- 📖 **Enhanced JSDoc comments** with `@module` tags
- 🚀 **Better tree-shaking** with modular exports
- 📦 **Updated package.json** with comprehensive metadata
- 🔄 **Separated validation logic** into helper functions
- 📝 **Improved type definitions** with better documentation

### Fixed
- ✅ **Type safety improvements** with stricter TypeScript configuration
- 🐛 **Better error handling** with input validation
- 🔒 **Immutability** enforced throughout

## [1.0.1] - 2025-12-10

### Added
- ✨ Initial production-ready release
- 📝 Comprehensive JSDoc documentation
- 🎯 Discriminated union types for `ValidationResult`
- 🛡️ Input validation with proper error types
- 📦 Proper peer dependency configuration

### Features
- `validateForm()` - Simple form validation returning errors only
- `validateFormWithData()` - Advanced validation with typed data
- `normalizeFileSize()` - File size normalization with full details

## [1.0.0] - 2025-12-10

### Added
- 🎉 Initial release
- Form validation utilities using Zod
- File size normalization utilities
- TypeScript type definitions
- Basic documentation
