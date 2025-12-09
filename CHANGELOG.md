# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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
