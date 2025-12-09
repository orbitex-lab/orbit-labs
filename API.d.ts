/**
 * Complete API reference for orbit-labs package
 * This file documents all exported types and functions
 */

import z, { ZodType } from 'zod';

// ============================================
// orbit-labs/form
// ============================================

/**
 * Form validation errors mapped by field path
 */
export type FormErrors = Readonly<Record<string, string>>;

/**
 * Result of form validation with discriminated union for type narrowing
 */
export type ValidationResult<T> =
  | { success: true; data: T }
  | { success: false; errors: FormErrors };

/**
 * Validates form data against a Zod schema
 * Returns only the errors (empty object if valid)
 */
export declare function validateForm<T extends ZodType>(
  schema: T,
  values: unknown
): FormErrors;

/**
 * Validates form data and returns structured result with typed data
 * Use this when you need access to the validated data
 */
export declare function validateFormWithData<T extends ZodType>(
  schema: T,
  values: unknown
): ValidationResult<z.infer<T>>;

// ============================================
// orbit-labs/common
// ============================================

/**
 * File size units
 */
export type FileSizeUnit = 'Bytes' | 'KB' | 'MB' | 'GB' | 'TB';

/**
 * Result of file size normalization
 */
export interface NormalizedFileSize {
  readonly size: string;
  readonly unit: FileSizeUnit;
  readonly value: number;
  readonly bytes: number;
}

/**
 * Normalizes a file size in bytes to human-readable format
 * Throws TypeError or RangeError for invalid inputs
 */
export declare function normalizeFileSize(bytes: number): NormalizedFileSize;

// ============================================
// Usage Examples
// ============================================

/*
// Form validation example
import { z } from 'zod';
import { validateFormWithData } from 'orbit-labs/form';

const schema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

const result = validateFormWithData(schema, {
  email: 'user@example.com',
  age: 25,
});

if (result.success) {
  // result.data is fully typed!
  console.log(result.data.email); // string
  console.log(result.data.age);   // number
} else {
  // result.errors contains validation errors
  console.log(result.errors);
}

// File size normalization example
import { normalizeFileSize } from 'orbit-labs/common';

const size = normalizeFileSize(1536000);
console.log(`${size.size} ${size.unit}`); // "1.46 MB"
console.log(size.value);                   // 1.46484375
console.log(size.bytes);                   // 1536000
*/
