# Contributing to TM Sarees

Thank you for your interest in contributing!

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project follows a Code of Conduct. By participating, you are expected to uphold this code.

### Our Standards

- Be respectful and inclusive
- Accept constructive criticism gracefully
- Focus on what is best for the community
- Show empathy towards other community members

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues. When creating a bug report, include:

- Clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Browser and OS information

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- Clear and descriptive title
- Detailed description of the proposed feature
- Why this enhancement would be useful
- Possible implementation approach

### Code Contributions

1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes
6. Push to your fork
7. Submit a Pull Request

## 🛠️ Development Setup

1. Clone your fork
```bash
git clone https://github.com/yourusername/tm-sarees.git
cd tm-sarees
```

2. Start a local server
```bash
python -m http.server 8000
# or
npx http-server
```

3. Open in browser
```
http://localhost:8000
```

## 💻 Coding Standards

### HTML
- Use semantic HTML5 elements
- Include proper alt text for images
- Maintain proper indentation (2 spaces)
- Use meaningful class and id names

### CSS
- Follow BEM naming convention where applicable
- Keep selectors specific but not overly complex
- Use CSS variables for colors and common values
- Comment complex styles

### JavaScript
- Use ES6+ features
- Write clear, self-documenting code
- Add comments for complex logic
- Follow consistent naming conventions
- Avoid global variables

### File Organization
- Keep related files together
- Use descriptive file names
- Maintain the existing folder structure

## 📝 Commit Guidelines

### Commit Message Format
```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes (formatting, etc.)
- **refactor**: Code refactoring
- **test**: Adding or updating tests
- **chore**: Maintenance tasks

### Examples
```
feat(cart): add quantity update functionality

Added increment and decrement buttons to cart items
allowing users to update quantities without removing items.

Closes #123
```

```
fix(checkout): resolve image path issue

Fixed broken image paths in checkout page by updating
relative paths to match new folder structure.
```

## 🔄 Pull Request Process

1. **Update Documentation**: Update README.md if needed
2. **Test Thoroughly**: Test on multiple browsers
3. **Follow Code Style**: Maintain consistent code style
4. **Write Clear Description**: Explain what and why
5. **Link Issues**: Reference related issues
6. **Wait for Review**: Be patient and responsive to feedback

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested on Chrome
- [ ] Tested on Firefox
- [ ] Tested on Safari
- [ ] Tested on mobile devices

## Screenshots (if applicable)
Add screenshots here

## Related Issues
Closes #(issue number)
```

## 🧪 Testing Guidelines

Before submitting a PR, test:

1. **Functionality**: All features work as expected
2. **Responsiveness**: Works on different screen sizes
3. **Browser Compatibility**: Works on major browsers
4. **Performance**: No significant performance issues
5. **Accessibility**: Keyboard navigation works

## 📚 Additional Resources

- [HTML Best Practices](https://github.com/hail2u/html-best-practices)
- [CSS Guidelines](https://cssguidelin.es/)
- [JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Git Commit Messages](https://chris.beams.io/posts/git-commit/)

## ❓ Questions?

Feel free to open an issue with the `question` label if you have any questions about contributing.

## 🙏 Thank You!

Your contributions make this project better. Thank you for taking the time to contribute!

---

**Note**: This is a demonstration project. Major architectural changes should be discussed in an issue before implementation.
