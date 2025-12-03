# TM Sarees - E-Commerce Website

> A modern, responsive e-commerce website for traditional Indian sarees

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 🌟 Live Demo

[View Live Demo](https://surajps20.github.io/Ecommerce-saree-site/) • [Report Bug](https://github.com/Surajps20/Ecommerce-saree-site/issues) • [Request Feature](https://github.com/Surajps20/Ecommerce-saree-site/issues)

## 📸 Screenshots

![Home Page](https://via.placeholder.com/800x400/f8d7da/8a0c36?text=Add+Screenshot)
![Product Collection](https://via.placeholder.com/800x400/f8d7da/8a0c36?text=Add+Screenshot)

## Project Structure

```
saree/
├── index.html              # Login/Landing page
├── index1.html             # Home page
├── assets/
│   └── images/             # All images (products, banners, offers, etc.)
├── css/                    # All stylesheets
├── js/                     # All JavaScript files
└── pages/                  # All HTML pages
    ├── blog.html
    ├── cart.html
    ├── checkout.html
    ├── collection.html
    ├── contact.html
    ├── offer.html
    ├── profile.html
    ├── request-otp.html
    └── wishlist.html
```

## Features
- User authentication (Login/OTP)
- Product collections
- Shopping cart
- Wishlist
- Checkout system
- Blog section
- Contact page
- Special offers

## Technologies Used
- HTML5
- CSS3
- JavaScript
- Bootstrap 5.3.3
- Font Awesome 6.4.0
- AOS (Animate On Scroll)

## E-Commerce Features

### Complete Shopping Flow
1. **Browse Products** (collection.html)
   - View saree collections
   - Add to Cart or Wishlist
   - Quick buy option

2. **Wishlist** (wishlist.html)
   - Save favorite items
   - Move to cart when ready
   - Remove unwanted items
   - Persistent storage

3. **Shopping Cart** (cart.html)
   - View all items
   - Adjust quantities
   - Remove items
   - See order summary
   - Proceed to checkout

4. **Checkout** (checkout.html)
   - Fill shipping details
   - Select payment method
   - Apply discount codes
   - Place order

### Discount Codes
- **SAVE10** - 10% off
- **SAVE20** - 20% off
- **FIRST50** - ₹50 off
- **WELCOME100** - ₹100 off

### Payment Methods
- Cash on Delivery (COD)
- Credit/Debit Card
- UPI (GPay, PhonePe, Paytm)

## Path Structure
All file paths have been updated to match the new folder structure:

### From Root Files (index.html, index1.html):
- CSS: `css/filename.css`
- JS: `js/filename.js`
- Images: `assets/images/filename.jpg`
- Pages: `pages/pagename.html`

### From Pages Folder:
- CSS: `../css/filename.css`
- JS: `../js/filename.js`
- Images: `../assets/images/filename.jpg`
- Other Pages: `pagename.html` (same folder)
- Root: `../index.html` or `../index1.html`

### From CSS Files:
- Images: `../assets/images/filename.jpg`

## Testing the E-Commerce Flow

### Quick Test
1. Open `pages/collection.html`
2. Click "Add to Cart" on any product
3. View cart at `pages/cart.html`
4. Click "Proceed to Checkout"
5. Fill form and place order

### Using Demo Data
Open browser console and run:
```javascript
// Add sample wishlist items
addDemoWishlistItems()

// Add sample cart items
addDemoCartItems()

// View current data
showCurrentData()

// Clear all data
clearAllData()
```

## 📚 Documentation

- [Quick Start Guide](START-HERE.md) - How to get started
- [Upload Guide](UPLOAD-NOW.txt) - Simple upload instructions
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Suraj P S**
- GitHub: [@Surajps20](https://github.com/Surajps20)
- LinkedIn: [Suraj P S](https://linkedin.com/in/suraj-p-s-817410226)
- Email: ssuraj6255@gmail.com

## 🙏 Acknowledgments

- Bootstrap for responsive framework
- Font Awesome for icons
- AOS library for animations
- All contributors who help improve this project

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

**Note:** This is a frontend demonstration project using localStorage. For production use, implement proper backend services, database, and security measures.
