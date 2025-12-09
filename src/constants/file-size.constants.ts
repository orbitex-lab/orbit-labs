/**
 * @module constants/file-size
 * @description Constants related to file size operations
 */

import type { FileSizeUnit } from '../types/common.types';

/**
 * File size units in order from smallest to largest
 */
export const FILE_SIZE_UNITS: readonly FileSizeUnit[] = [
  'Bytes',
  'KB',
  'MB',
  'GB',
  'TB',
] as const;

/**
 * Number of bytes in a kilobyte
 */
export const BYTES_PER_KB = 1024;

/**
 * Maximum safe file size in bytes (8 PB)
 */
export const MAX_SAFE_FILE_SIZE = Number.MAX_SAFE_INTEGER;
