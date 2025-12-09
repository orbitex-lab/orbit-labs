/**
 * @module examples/file-size
 * @description Examples demonstrating file size normalization functionality
 */

import { normalizeFileSize } from '../common';
import type { NormalizedFileSize } from '../types/common.types';

// ============================================
// Example 1: Small Files
// ============================================

export const exampleSmallFiles = (): void => {
  const tiny: NormalizedFileSize = normalizeFileSize(512);
  console.log(`Tiny file: ${tiny.size} ${tiny.unit}`); // "512 Bytes"

  const small: NormalizedFileSize = normalizeFileSize(1024);
  console.log(`Small file: ${small.size} ${small.unit}`); // "1 KB"
};

// ============================================
// Example 2: Medium Files
// ============================================

export const exampleMediumFiles = (): void => {
  const medium: NormalizedFileSize = normalizeFileSize(1024 * 1024 * 5.5);
  console.log(`Medium file: ${medium.size} ${medium.unit}`); // "5.50 MB"
  console.log(`Numeric value: ${medium.value}`); // 5.5
  console.log(`Original bytes: ${medium.bytes}`); // 5767168
};

// ============================================
// Example 3: Large Files
// ============================================

export const exampleLargeFiles = (): void => {
  const large: NormalizedFileSize = normalizeFileSize(1024 * 1024 * 1024 * 2);
  console.log(`Large file: ${large.size} ${large.unit}`); // "2 GB"

  const veryLarge: NormalizedFileSize = normalizeFileSize(
    1024 * 1024 * 1024 * 1024 * 1.5
  );
  console.log(`Very large file: ${veryLarge.size} ${veryLarge.unit}`); // "1.50 TB"
};

// ============================================
// Example 4: Error Handling
// ============================================

export const exampleErrorHandling = (): void => {
  try {
    normalizeFileSize(-100);
  } catch (error) {
    if (error instanceof RangeError) {
      console.error('Caught RangeError:', error.message);
    }
  }

  try {
    normalizeFileSize(NaN);
  } catch (error) {
    if (error instanceof RangeError) {
      console.error('Caught RangeError for NaN:', error.message);
    }
  }

  try {
    normalizeFileSize('1024' as unknown as number);
  } catch (error) {
    if (error instanceof TypeError) {
      console.error('Caught TypeError:', error.message);
    }
  }
};

// ============================================
// Example 5: Formatting Helper
// ============================================

export const formatFileSize = (size: NormalizedFileSize): string => {
  return `${size.size} ${size.unit}`;
};

export const exampleFormatting = (): void => {
  const files = [512, 1024 * 50, 1024 * 1024 * 3, 1024 * 1024 * 1024 * 1.2];

  console.log('Formatted file sizes:');
  files.forEach((bytes) => {
    const normalized = normalizeFileSize(bytes);
    console.log(`  ${bytes} bytes = ${formatFileSize(normalized)}`);
  });
};

// ============================================
// Example 6: Conditional Logic
// ============================================

export const isLargeFile = (size: NormalizedFileSize): boolean => {
  return ['GB', 'TB'].includes(size.unit);
};

export const exampleConditionalLogic = (): void => {
  const sizes = [
    normalizeFileSize(1024 * 1024), // 1 MB
    normalizeFileSize(1024 * 1024 * 1024), // 1 GB
    normalizeFileSize(1024 * 1024 * 1024 * 1024), // 1 TB
  ];

  sizes.forEach((size) => {
    const large = isLargeFile(size) ? 'LARGE' : 'SMALL';
    console.log(`${size.size} ${size.unit} is ${large}`);
  });
};
