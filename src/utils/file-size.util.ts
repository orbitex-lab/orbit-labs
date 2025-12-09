/**
 * @module utils/file-size
 * @description File size normalization utilities
 */

import type { FileSizeUnit, NormalizedFileSize } from '../types/common.types';

/**
 * Normalizes a file size in bytes to a human-readable format
 *
 * @param bytes - The file size in bytes (must be non-negative)
 * @returns An object containing the normalized size, unit, numeric value, and original bytes
 * @throws {TypeError} If bytes is not a number
 * @throws {RangeError} If bytes is negative or not a finite number
 *
 * @example
 * ```typescript
 * normalizeFileSize(1024); // { size: "1", unit: "KB", value: 1, bytes: 1024 }
 * normalizeFileSize(1536); // { size: "1.50", unit: "KB", value: 1.5, bytes: 1536 }
 * normalizeFileSize(0); // { size: "0", unit: "Bytes", value: 0, bytes: 0 }
 * ```
 */
export const normalizeFileSize = (bytes: number): NormalizedFileSize => {
  // Input validation
  if (typeof bytes !== 'number') {
    throw new TypeError(`Expected number, got ${typeof bytes}`);
  }

  if (!Number.isFinite(bytes)) {
    throw new RangeError('Bytes must be a finite number');
  }

  if (bytes < 0) {
    throw new RangeError('Bytes must be non-negative');
  }

  const units: readonly FileSizeUnit[] = [
    'Bytes',
    'KB',
    'MB',
    'GB',
    'TB',
  ] as const;
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  const unit = units[unitIndex];
  if (!unit) {
    throw new Error('Internal error: invalid unit index');
  }

  return {
    size: size % 1 === 0 ? size.toString() : size.toFixed(2),
    unit,
    value: size,
    bytes,
  } as const;
};
