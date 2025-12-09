/**
 * @module examples/form-validation
 * @description Examples demonstrating form validation functionality
 */

import { z } from 'zod';
import { zodValidator, ROOT_ERROR_KEY, FIELD_PATH_SEPARATOR } from '../form';

// ============================================
// Example 1: Simple Login Form
// ============================================

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export const exampleSimpleValidation = (): void => {
  const formData = {
    email: 'test@example.com',
    password: 'password123',
  };

  const errors = zodValidator(loginSchema, formData);
  console.log('Simple validation errors:', errors);
};

// ============================================
// Example 2: Validation with Typed Data
// ============================================

export const exampleValidationWithData = (): void => {
  const formData = {
    email: 'test@example.com',
    password: 'password123',
  };

  const errors = zodValidator(loginSchema, formData);

  if (Object.keys(errors).length === 0) {
    // Valid - no errors
    console.log('Valid email:', formData.email);
    console.log('Valid password:', formData.password);
  } else {
    // Invalid - has errors
    Object.entries(errors).forEach(([field, message]) => {
      console.error(`Error in ${field}: ${message}`);
    });
  }
};

// ============================================
// Example 3: Complex Nested Schema
// ============================================

const userSchema = z.object({
  profile: z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    age: z.number().min(0).max(150, 'Invalid age'),
  }),
  preferences: z.object({
    notifications: z.boolean(),
    theme: z.enum(['light', 'dark', 'auto']),
  }),
  tags: z.array(z.string()),
});

export const exampleNestedValidation = (): void => {
  const userData = {
    profile: {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
    },
    preferences: {
      notifications: true,
      theme: 'dark' as const,
    },
    tags: ['developer', 'typescript'],
  };

  const errors = zodValidator(userSchema, userData);

  if (Object.keys(errors).length === 0) {
    // Valid - all nested properties are available
    const { profile, preferences, tags } = userData;

    console.log('Profile:', profile);
    console.log('Theme preference:', preferences.theme);
    console.log('Tags:', tags);
  }
};

// ============================================
// Example 4: Error Handling
// ============================================

export const exampleErrorHandling = (): void => {
  const invalidData = {
    email: 'not-an-email',
    password: '123', // Too short
  };

  const errors = zodValidator(loginSchema, invalidData);

  if (Object.keys(errors).length > 0) {
    console.log('Validation failed with errors:');
    Object.entries(errors).forEach(([field, message]) => {
      console.log(`  ${field}: ${message}`);
    });
  } else {
    console.log('Validation passed!');
  }
};

// ============================================
// Example 5: Using Constants
// ============================================

export const exampleUsingConstants = (): void => {
  const errors = zodValidator(loginSchema, {
    email: 'invalid-email',
    password: 'short',
  });

  // Check if there are any errors
  if (Object.keys(errors).length === 0) {
    console.log('✅ No validation errors');
    return;
  }

  console.log('❌ Validation errors found:');

  // Use FIELD_PATH_SEPARATOR to parse nested paths
  Object.entries(errors).forEach(([path, message]) => {
    if (path === ROOT_ERROR_KEY) {
      console.log(`  General error: ${message}`);
    } else {
      const fields = path.split(FIELD_PATH_SEPARATOR);
      console.log(`  Field [${fields.join(' → ')}]: ${message}`);
    }
  });
};

// ============================================
// Example 6: Nested Path Parsing
// ============================================

export const exampleNestedPathParsing = (): void => {
  const nestedSchema = z.object({
    user: z.object({
      profile: z.object({
        email: z.string().email(),
        age: z.number().min(18),
      }),
      settings: z.object({
        theme: z.enum(['light', 'dark']),
      }),
    }),
  });

  const errors = zodValidator(nestedSchema, {
    user: {
      profile: {
        email: 'invalid',
        age: 15,
      },
      settings: {
        theme: 'invalid' as any, // Intentionally invalid for testing
      },
    },
  });

  console.log('Nested validation errors:');
  Object.entries(errors).forEach(([path, message]) => {
    // Split by FIELD_PATH_SEPARATOR to get individual field levels
    const fieldLevels = path.split(FIELD_PATH_SEPARATOR);
    const depth = fieldLevels.length;
    const indent = '  '.repeat(depth);

    console.log(`${indent}↳ ${fieldLevels[fieldLevels.length - 1]}: ${message}`);
  });
};

