# Security Policy

## Reporting a Vulnerability

If you discover a security issue, please email the maintainers or open a private security advisory on GitHub.

**Do not report security vulnerabilities through public GitHub issues.**

### What to Include

1. Description of the vulnerability
2. Steps to reproduce
3. Potential impact
4. Suggested fix (if any)

### Response Timeline

- Acknowledgment within 48 hours
- Detailed response within 7 days

## Security Best Practices

1. **Keep dependencies updated**: Use latest versions of orbit-labs, Zod, and libphonenumber-js
2. **Validate user input**: Always validate with Zod schemas before processing
3. **Handle errors properly**: Don't expose internal details to users
4. **Use TypeScript strict mode**: Better type safety

## License

MIT License - See LICENSE file for details.
