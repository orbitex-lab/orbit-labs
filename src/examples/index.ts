/**
 * @module examples
 * @description Central export for all examples
 *
 * These examples demonstrate the usage of orbit-labs package features.
 * They are not included in the production build.
 */

// Form validation examples
export {
  exampleSimpleValidation,
  exampleValidationWithData,
  exampleNestedValidation,
  exampleErrorHandling as exampleFormErrorHandling,
  exampleUsingConstants,
  exampleNestedPathParsing,
} from './form-validation.example';

// File size examples
export {
  exampleSmallFiles,
  exampleMediumFiles,
  exampleLargeFiles,
  exampleErrorHandling as exampleFileSizeErrorHandling,
  exampleFormatting,
  exampleConditionalLogic,
  formatFileSize,
  isLargeFile,
} from './file-size.example';
