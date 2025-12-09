/**
 * @module orbit-labs
 * @description Main entry point for the orbit-labs package
 *
 * This is the root export file. Import from submodules for better tree-shaking:
 * - `orbit-labs/common` for common utilities
 * - `orbit-labs/form` for form validation
 */

// Note: This file serves as a fallback entry point
// Users should import from submodules for optimal tree-shaking:
// import { normalizeFileSize } from 'orbit-labs/common';
// import { zodValidator } from 'orbit-labs/form';

export type { FileSizeUnit, NormalizedFileSize } from './types';

export { normalizeFileSize, zodValidator } from './utils';

export {
  FILE_SIZE_UNITS,
  BYTES_PER_KB,
  MAX_SAFE_FILE_SIZE,
  ROOT_ERROR_KEY,
  FIELD_PATH_SEPARATOR,
} from './constants';
