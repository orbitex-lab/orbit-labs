# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 2.0.x   | :white_check_mark: |
| < 2.0   | :x:                |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue, please report it by emailing the maintainers or opening a private security advisory on GitHub.

**Please do not report security vulnerabilities through public GitHub issues.**

### What to Include

When reporting a vulnerability, please include:

1. A description of the vulnerability
2. Steps to reproduce the issue
3. Potential impact
4. Suggested fix (if any)

### Response Timeline

- We will acknowledge your report within 48 hours
- We will provide a detailed response within 7 days
- We will work on a fix and release it as soon as possible

## Security Best Practices

When using orbit-labs:

1. **Keep Dependencies Updated**: Always use the latest version of orbit-labs and its peer dependency (Zod)
2. **Validate User Input**: Always validate user input with Zod schemas before processing
3. **Handle Errors Properly**: Don't expose internal error details to end users
4. **Type Safety**: Use TypeScript strict mode for better type safety

## Known Security Considerations

### Input Validation

The `zodValidator` function relies on Zod for validation. Ensure your Zod schemas are properly configured to prevent:
- Injection attacks (SQL, XSS, etc.)
- Resource exhaustion (extremely large inputs)
- Type confusion

### File Size Operations

The `normalizeFileSize` function includes input validation to prevent:
- Integer overflow
- NaN/Infinity values
- Negative numbers

## Acknowledgments

We appreciate the security research community and will acknowledge researchers who responsibly disclose vulnerabilities.
