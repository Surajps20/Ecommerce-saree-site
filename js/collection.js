// Collection page - Add to cart functionality

// Function to add item to cart
function addToCart(productId, productName, productPrice, productImage) {
    // Get existing cart items
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    // Normalize image path - remove ../ if present and ensure it starts correctly
    let normalizedImage = productImage;
    if (normalizedImage.startsWith('../')) {
        normalizedImage = normalizedImage.substring(3); // Remove '../'
    }
    if (!normalizedImage.startsWith('assets/')) {
        normalizedImage = 'assets/images/' + normalizedImage.split('/').pop();
    }
    
    // Check if item already exists
    const existingItemIndex = cartItems.findIndex(item => item.id === productId);
    
    if (existingItemIndex !== -1) {
        // Item exists, increase quantity
        cartItems[existingItemIndex].quantity += 1;
        alert(`${productName} quantity increased in cart!`);
    } else {
        // New item, add to cart
        const newItem = {
            id: productId,
            name: productName,
            price: productPrice,
            image: normalizedImage,
            quantity: 1
        };
        cartItems.push(newItem);
        alert(`${productName} added to cart!`);
    }
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Update cart count if on same page
    updateCartCount();
}

// Function to add item to wishlist
function addToWishlist(productId, productName, productPrice, productImage) {
    // Get existing wishlist items
    let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    
    // Normalize image path - remove ../ if present and ensure it starts correctly
    let normalizedImage = productImage;
    if (normalizedImage.startsWith('../')) {
        normalizedImage = normalizedImage.substring(3); // Remove '../'
    }
    if (!normalizedImage.startsWith('assets/')) {
        normalizedImage = 'assets/images/' + normalizedImage.split('/').pop();
    }
    
    // Check if item already exists
    const existingItem = wishlistItems.find(item => item.id === productId);
    
    if (existingItem) {
        alert(`${productName} is already in your wishlist!`);
        return;
    }
    
    // New item, add to wishlist
    const newItem = {
        id: productId,
        name: productName,
        price: productPrice,
        image: normalizedImage,
        addedDate: new Date().toISOString()
    };
    wishlistItems.push(newItem);
    
    // Save to localStorage
    localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
    
    alert(`${productName} added to wishlist! ❤️`);
    
    // Update wishlist count
    updateWishlistCount();
}

// Function to update wishlist count
function updateWishlistCount() {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    const wishlistCountElements = document.querySelectorAll('.wishlist-count');
    wishlistCountElements.forEach(element => {
        element.textContent = wishlistItems.length;
    });
}

// Function to update cart count
function updateCartCount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
    
    const cartCountElements = document.querySelectorAll('.cart-count, .btn-badge');
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    updateWishlistCount();
});
