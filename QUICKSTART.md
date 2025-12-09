# Quick Start Guide

## 🚀 Installation

```bash
npm install orbit-labs zod
```

## 📦 Available Modules

### 1. Form Validation (`orbit-labs/form`)

```typescript
import { zodValidator } from 'orbit-labs/form';
import { ROOT_ERROR_KEY, FIELD_PATH_SEPARATOR } from 'orbit-labs/form';
```

### 2. Common Utilities (`orbit-labs/common`)

```typescript
import { normalizeFileSize } from 'orbit-labs/common';
import type { FileSizeUnit, NormalizedFileSize } from 'orbit-labs/common';
import { FILE_SIZE_UNITS, BYTES_PER_KB } from 'orbit-labs/common';
```

### 3. Types Only (`orbit-labs/types`)
### 3. Types Only (`orbit-labs/types`)

```typescript
import type {
  FileSizeUnit,
  NormalizedFileSize
} from 'orbit-labs/types';
```
### 4. Utils Only (`orbit-labs/utils`)

```typescript
### 4. Utils Only (`orbit-labs/utils`)

```typescript
import {
  zodValidator,
  normalizeFileSize
} from 'orbit-labs/utils';
```
```typescript
import {
  FILE_SIZE_UNITS,
  BYTES_PER_KB,
  ROOT_ERROR_KEY,
  FIELD_PATH_SEPARATOR
} from 'orbit-labs/constants';
```

## 💡 Basic Examples

### Form Validation

```typescript
import { z } from 'zod';
### Form Validation

```typescript
import { z } from 'zod';
import { zodValidator } from 'orbit-labs/form';

// 1. Define your schema
const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(8, 'Password too short'),
});

// 2. Validate your data
const errors = zodValidator(loginSchema, {
  email: 'user@example.com',
  password: 'password123',
});

// 3. Handle the result
if (Object.keys(errors).length === 0) {
  console.log('Valid!');
} else {
  Object.entries(errors).forEach(([field, error]) => {
    console.error(`${field}: ${error}`);
  });
}
```typescript
import { normalizeFileSize } from 'orbit-labs/common';

// 1. Pass bytes value
const fileSize = normalizeFileSize(1024 * 1024 * 5); // 5 MB

// 2. Use the result
console.log(`Size: ${fileSize.size} ${fileSize.unit}`); // "5 MB"
console.log(`Exact: ${fileSize.value}`); // 5
console.log(`Original: ${fileSize.bytes} bytes`); // 5242880
```

## 🎯 Common Use Cases

### Nested Form Validation

```typescript
const userSchema = z.object({
  profile: z.object({
### Nested Form Validation

```typescript
const userSchema = z.object({
  profile: z.object({
    name: z.string().min(2),
    age: z.number().min(18),
  }),
  email: z.string().email(),
});

const errors = zodValidator(userSchema, userData);

if (Object.keys(errors).length === 0) {
  console.log('All valid!');
}
```ort type { FormErrors } from 'orbit-labs/form';

function displayErrors(errors: FormErrors): void {
  if (Object.keys(errors).length === 0) {
### Error Display Helper

```typescript
function displayErrors(errors: Record<string, string>): void {
  if (Object.keys(errors).length === 0) {
    console.log('✅ No errors!');
    return;
  }

  console.log('❌ Validation errors:');
  Object.entries(errors).forEach(([field, message]) => {
    console.log(`  ${field}: ${message}`);
  });
}
```
function formatFileSize(bytes: number): string {
  const size = normalizeFileSize(bytes);
  return `${size.size} ${size.unit}`;
}

function isLargeFile(size: NormalizedFileSize): boolean {
  return ['GB', 'TB'].includes(size.unit);
}

// Usage
console.log(formatFileSize(1536000)); // "1.46 MB"
console.log(isLargeFile(normalizeFileSize(1024 ** 3))); // true
```

## 🔧 Configuration

### TypeScript Configuration

For best experience, ensure your `tsconfig.json` has:

```json
{
  "compilerOptions": {
    "strict": true,
    "moduleResolution": "bundler", // or "node16", "nodenext"
    "esModuleInterop": true
  }
}
```

### Import Optimization

For smallest bundle size, use subpath imports:

```typescript
// ✅ Best - Tree-shakeable
import { normalizeFileSize } from 'orbit-labs/common';
import { validateForm } from 'orbit-labs/form';

// ⚠️ OK - May include unused code
import { normalizeFileSize, validateForm } from 'orbit-labs';
```

## 📚 Next Steps

- Read the [README](README.md) for detailed API documentation
- Check [examples/](src/examples/) for more usage patterns
- Review [ARCHITECTURE](ARCHITECTURE.md) to understand design decisions
- See [CONTRIBUTING](CONTRIBUTING.md) to contribute

## 🆘 Troubleshooting

### Module Not Found

If you see `Cannot find module 'orbit-labs/common'`:

1. Ensure TypeScript version >= 5.0
2. Check `moduleResolution` in tsconfig.json
3. Try restarting TypeScript server
4. Verify installation: `npm list orbit-labs`

### Type Errors

If types aren't working:

1. Check that `zod` is installed (peer dependency)
2. Restart TypeScript server in your IDE
3. Ensure strict mode is enabled
4. Check for version compatibility

### Build Errors

If build fails:

1. Delete `node_modules` and reinstall
2. Clear TypeScript cache: `rm -rf node_modules/.cache`
3. Check Node version: >= 16.0.0
4. Verify package-lock.json/pnpm-lock.yaml is committed

## 💬 Getting Help

- 📖 [Full Documentation](README.md)
- 🐛 [Report Issues](https://github.com/yourusername/orbit-labs/issues)
- 💡 [Request Features](https://github.com/yourusername/orbit-labs/issues/new)
- 🤝 [Contributing Guide](CONTRIBUTING.md)

---

## 💬 Getting Help

- 📖 [Full Documentation](README.md)
- 🐛 [Report Issues](https://github.com/orbitex-lab/orbit-labs/issues)
- 💡 [Request Features](https://github.com/orbitex-lab/orbit-labs/issues/new)
- 🤝 [Contributing Guide](CONTRIBUTING.md)

---

**Happy coding! 🚀**
