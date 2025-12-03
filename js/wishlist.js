// Load wishlist items from localStorage
let wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];

// Initialize cart items from localStorage or empty array
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Function to show toast notification
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// Function to update wishlist count in navbar
function updateWishlistCount() {
    const countElement = document.querySelector('.wishlist-count');
    if (countElement) {
        countElement.textContent = wishlistItems.length;
    }
}

// Function to update cart count in navbar
function updateCartCount() {
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        countElement.textContent = totalItems;
    }
}

// Function to add item to cart from wishlist
function addToCart(itemId, name, price, image) {
    // Price is already numeric from wishlist
    const numericPrice = typeof price === 'string' ? parseInt(price.replace('₹', '').replace(/,/g, '')) : price;
    
    // Check if item already in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === itemId);
    
    if (existingItemIndex !== -1) {
        // Increment quantity if item exists
        cartItems[existingItemIndex].quantity += 1;
        showToast(`${name} quantity increased in cart!`);
    } else {
        // Add new item to cart
        cartItems.push({
            id: itemId,
            name: name,
            price: numericPrice,
            image: image,
            quantity: 1
        });
        showToast(`${name} added to cart!`);
    }
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Update cart count
    updateCartCount();
    
    // Redirect to cart page after a short delay
    setTimeout(() => {
        window.location.href = 'cart.html';
    }, 1000);
}

// Function to render wishlist items
function renderWishlist() {
    const container = document.getElementById('wishlistContainer');

    
    
    // Clear container
    container.innerHTML = '';
    
    if (wishlistItems.length === 0) {
        // Show empty state if wishlist is empty
        container.innerHTML = `
            <div class="col-12">
                <div class="empty-wishlist">
                    <i class="fas fa-heart"></i>
                    <h3>Your wishlist is empty</h3>
                    <p>Start adding your favorite sarees to your wishlist by clicking the heart icon</p>
                    <a href="collection.html" class="btn-browse">Browse Collections</a>
                </div>
            </div>
        `;
        return;
    }
    
    // Render each wishlist item
    wishlistItems.forEach(item => {
        const col = document.createElement('div');
        col.className = 'col-md-6 col-lg-4 col-xl-3';
        
        // Escape quotes in the name for the JavaScript function call
        const escapedName = item.name.replace(/'/g, "\\'").replace(/"/g, '\\"');
        
        // Format price display
        const priceDisplay = typeof item.price === 'number' ? `₹${item.price}` : item.price;
        
        // Fix image path for pages folder
        let imagePath = item.image;
        if (!imagePath.startsWith('../') && !imagePath.startsWith('http')) {
            imagePath = '../' + imagePath;
        }
        
        col.innerHTML = `
            <div class="wishlist-item">
                <div class="remove-btn" onclick="removeFromWishlist(${item.id})">
                    <i class="fas fa-times"></i>
                </div>
                <div class="wishlist-img">
                    <img src="${imagePath}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x400/f8d7da/8a0c36?text=Saree+Image'">
                </div>
                <div class="wishlist-details">
                    <h3>${item.name}</h3>
                    <p class="wishlist-price">${priceDisplay}</p>
                    <div class="action-buttons">
                        <button class="btn-cart" onclick="addToCart(${item.id}, '${escapedName}', ${item.price}, '${item.image}')">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                        <button class="btn-remove" onclick="removeFromWishlist(${item.id})">
                            <i class="fas fa-trash"></i> Remove
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        container.appendChild(col);
    });
}

// Function to remove item from wishlist
function removeFromWishlist(itemId) {
    const index = wishlistItems.findIndex(item => item.id === itemId);
    if (index !== -1) {
        const removedItem = wishlistItems[index];
        wishlistItems.splice(index, 1);
        
        // Save to localStorage
        localStorage.setItem('wishlistItems', JSON.stringify(wishlistItems));
        
        renderWishlist();
        updateWishlistCount();
        
        // Show notification
        showToast('"' + removedItem.name + '" removed from wishlist');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderWishlist();
    updateWishlistCount();
    updateCartCount();
    
    // Add background on scroll for navbar
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".custom-navbar");
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 50);
        }
    });
});

// Make functions available globally for onclick attributes
window.addToCart = addToCart;
window.removeFromWishlist = removeFromWishlist;