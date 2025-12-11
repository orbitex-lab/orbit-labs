/**
 * @module utils/validation
 * @description Form validation utilities using Zod
 */

import type { ZodType, z } from 'zod';

/**
 * Validates form data against a Zod schema
 *
 * @template T - The Zod schema type
 * @param schema - The Zod schema to validate against
 * @param values - The form values to validate (must match schema type)
 * @returns An object containing validation errors mapped by field path (empty if valid)
 *
 * @example
 * ```typescript
 * import { z } from 'zod';
 * import { zodValidator } from 'orbit-labs/form';
 *
 * const schema = z.object({
 *   email: z.string().email(),
 *   age: z.number().min(18)
 * });
 *
 * const errors = zodValidator(schema, { email: 'invalid', age: 15 });
 * // { email: "Invalid email", age: "Number must be greater than or equal to 18" }
 * ```
 */
export const zodValidator = <T extends ZodType>(
  schema: T,
  values: z.infer<T>
): Record<string, string> => {
  const result = schema.safeParse(values);
  const errors: Record<string, string> = {};

  if (!result.success) {
    type Issue = (typeof result.error.issues)[number];

    result.error.issues.forEach((issue: Issue) => {
      const path = issue.path.join('.');
      if (path.length > 0) {
        errors[path] = issue.message;
      }
    });
  }

  return errors;
};
