/**
 * @module types/common
 * @description Type definitions for common utilities
 */

/**
 * File size units supported by the normalizer
 */
export type FileSizeUnit = 'Bytes' | 'KB' | 'MB' | 'GB' | 'TB';

/**
 * Result of file size normalization
 */
export interface NormalizedFileSize {
  /** The numeric size value as a string */
  readonly size: string;
  /** The unit of measurement */
  readonly unit: FileSizeUnit;
  /** The raw numeric value before string conversion */
  readonly value: number;
  /** The original bytes value */
  readonly bytes: number;
}
