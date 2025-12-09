/**
 * @module common
 * @description Common utilities module entry point
 */

// Re-export types
export type { FileSizeUnit, NormalizedFileSize } from '../types/common.types';

// Re-export utilities
export { normalizeFileSize } from '../utils/file-size.util';

// Re-export constants
export {
  FILE_SIZE_UNITS,
  BYTES_PER_KB,
  MAX_SAFE_FILE_SIZE,
} from '../constants/file-size.constants';
