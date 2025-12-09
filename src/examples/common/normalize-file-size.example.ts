/**
 * Example: normalizeFileSize function
 */

import { normalizeFileSize } from 'orbit-labs/common';

// Example 1: Small file (bytes)
const small = normalizeFileSize(500);
console.log(small);
// { size: "500.00 Bytes", unit: "Bytes", value: 500, bytes: 500 }

// Example 2: Medium file (KB)
const medium = normalizeFileSize(5120);
console.log(medium);
// { size: "5.00 KB", unit: "KB", value: 5, bytes: 5120 }

// Example 3: Large file (MB)
const large = normalizeFileSize(5242880);
console.log(large);
// { size: "5.00 MB", unit: "MB", value: 5, bytes: 5242880 }

// Example 4: Very large file (GB)
const veryLarge = normalizeFileSize(5368709120);
console.log(veryLarge);
// { size: "5.00 GB", unit: "GB", value: 5, bytes: 5368709120 }
