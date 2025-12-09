/**
 * Example: zodValidator function
 */

import { z } from 'zod';
import { zodValidator } from 'orbit-labs/form';

// Example 1: Simple validation
const userSchema = z.object({
  email: z.string().email(),
  age: z.number().min(18),
});

const errors1 = zodValidator(userSchema, {
  email: 'invalid',
  age: 15,
});
console.log(errors1);
// { email: "Invalid email", age: "Number must be greater than or equal to 18" }

// Example 2: Valid data
const errors2 = zodValidator(userSchema, {
  email: 'user@example.com',
  age: 25,
});
console.log(errors2);
// {} (no errors)

// Example 3: Nested validation
const profileSchema = z.object({
  user: z.object({
    name: z.string().min(1),
    email: z.string().email(),
  }),
});

const errors3 = zodValidator(profileSchema, {
  user: {
    name: '',
    email: 'invalid',
  },
});
console.log(errors3);
// { "user.name": "String must contain at least 1 character(s)", "user.email": "Invalid email" }
