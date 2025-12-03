// Cart functionality
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Initialize cart when page loads
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
    renderCartItems();
    updateOrderSummary();
    
    // Setup event listeners
    document.getElementById('checkoutBtn').addEventListener('click', proceedToCheckout);
    document.getElementById('closeMiniCart').addEventListener('click', closeMiniCart);
    document.getElementById('overlay').addEventListener('click', closeMiniCart);
});

// Function to update cart count in navbar
function updateCartCount() {
    const countElement = document.querySelector('.cart-count');
    if (countElement) {
        const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
        countElement.textContent = totalItems;
    }
}

// Function to calculate cart totals
function calculateCartTotals() {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 100 : 0; // ₹100 shipping if items in cart
    const tax = subtotal * 0.18; // 18% tax
    const total = subtotal + shipping + tax;
    
    return {
        subtotal: Math.round(subtotal),
        shipping: Math.round(shipping),
        tax: Math.round(tax),
        total: Math.round(total)
    };
}

// Function to update order summary
function updateOrderSummary() {
    const totals = calculateCartTotals();
    
    document.getElementById('subtotal').textContent = `₹${totals.subtotal}`;
    document.getElementById('shipping').textContent = `₹${totals.shipping}`;
    document.getElementById('tax').textContent = `₹${totals.tax}`;
    document.getElementById('total').textContent = `₹${totals.total}`;
    
    // Update checkout button state
    const checkoutBtn = document.getElementById('checkoutBtn');
    if (cartItems.length === 0) {
        checkoutBtn.disabled = true;
        checkoutBtn.style.opacity = '0.6';
        checkoutBtn.style.cursor = 'not-allowed';
    } else {
        checkoutBtn.disabled = false;
        checkoutBtn.style.opacity = '1';
        checkoutBtn.style.cursor = 'pointer';
    }
}

// Function to render cart items
function renderCartItems() {
    const cartItemsList = document.getElementById('cartItemsList');
    const cartEmptyState = document.getElementById('cartEmptyState');
    
    // Clear container
    cartItemsList.innerHTML = '';
    
    if (cartItems.length === 0) {
        cartEmptyState.style.display = 'block';
        cartItemsList.style.display = 'none';
        return;
    }
    
    cartEmptyState.style.display = 'none';
    cartItemsList.style.display = 'block';
    
    // Render each cart item
    cartItems.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.setAttribute('data-id', item.id);
        
        // Fix image path for pages folder
        let imagePath = item.image;
        if (!imagePath.startsWith('../') && !imagePath.startsWith('http')) {
            imagePath = '../' + imagePath;
        }
        
        cartItemElement.innerHTML = `
            <div class="cart-item-image">
                <img src="${imagePath}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x400/f8d7da/8a0c36?text=Saree+Image'">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-price">₹${item.price * item.quantity}</p>
                <div class="cart-item-actions">
                    <div class="quantity-control">
                        <button class="quantity-btn minus" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity-value">${item.quantity}</span>
                        <button class="quantity-btn plus" onclick="updateQuantity(${item.id}, 1)">+</button>
                    </div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i> Remove
                    </button>
                </div>
            </div>
        `;
        
        cartItemsList.appendChild(cartItemElement);
    });
}

// Function to render mini cart items
function renderMiniCartItems() {
    const miniCartItems = document.getElementById('miniCartItems');
    const miniCartTotal = document.getElementById('miniCartTotal');
    
    // Clear container
    miniCartItems.innerHTML = '';
    
    if (cartItems.length === 0) {
        miniCartItems.innerHTML = `
            <div class="text-center p-3">
                <p>Your cart is empty</p>
            </div>
        `;
        miniCartTotal.textContent = '₹0';
        return;
    }
    
    // Render each mini cart item
    cartItems.forEach(item => {
        // Fix image path for pages folder
        let imagePath = item.image;
        if (!imagePath.startsWith('../') && !imagePath.startsWith('http')) {
            imagePath = '../' + imagePath;
        }
        
        const miniCartItem = document.createElement('div');
        miniCartItem.className = 'mini-cart-item';
        miniCartItem.innerHTML = `
            <div class="mini-cart-item-image">
                <img src="${imagePath}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/300x400/f8d7da/8a0c36?text=Saree+Image'">
            </div>
            <div class="mini-cart-item-details">
                <div class="mini-cart-item-name">${item.name}</div>
                <div class="mini-cart-item-price">₹${item.price * item.quantity}</div>
                <div class="mini-cart-item-quantity">Qty: ${item.quantity}</div>
            </div>
        `;
        miniCartItems.appendChild(miniCartItem);
    });
    
    // Update mini cart total
    const totals = calculateCartTotals();
    miniCartTotal.textContent = `₹${totals.total}`;
}

// Function to update item quantity
function updateQuantity(itemId, change) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        cartItems[itemIndex].quantity += change;
        
        // Remove item if quantity becomes 0
        if (cartItems[itemIndex].quantity <= 0) {
            cartItems.splice(itemIndex, 1);
        }
        
        // Save to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Update UI
        updateCartCount();
        renderCartItems();
        updateOrderSummary();
    }
}

// Function to remove item from cart
function removeFromCart(itemId) {
    const itemIndex = cartItems.findIndex(item => item.id === itemId);
    
    if (itemIndex !== -1) {
        cartItems.splice(itemIndex, 1);
        
        // Save to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Update UI
        updateCartCount();
        renderCartItems();
        updateOrderSummary();
    }
}

// Function to proceed to checkout
function proceedToCheckout() {
    if (cartItems.length > 0) {
        window.location.href = 'checkout.html';
    } else {
        alert('Your cart is empty! Please add items before checkout.');
    }
}

// Function to open mini cart
function openMiniCart() {
    renderMiniCartItems();
    document.getElementById('miniCart').classList.add('active');
    document.getElementById('overlay').classList.add('active');
}

// Function to close mini cart
function closeMiniCart() {
    document.getElementById('miniCart').classList.remove('active');
    document.getElementById('overlay').classList.remove('active');
}

// Function to add item to cart (to be called from other pages)
function addToCart(item, quantity = 1) {
    // Check if item already exists in cart
    const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
    
    if (existingItemIndex !== -1) {
        // If exists, increase quantity
        cartItems[existingItemIndex].quantity += quantity;
    } else {
        // If new, add to cart with specified quantity
        cartItems.push({
            ...item,
            quantity: quantity
        });
    }
    
    // Save to localStorage
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Update UI
    updateCartCount();
    
    // Show confirmation message
    alert(`${item.name} has been added to your cart!`);
    
    // Redirect to cart page
    window.location.href = 'cart.html';
}

// Function to add item to cart from wishlist page
function addToCartFromWishlist(itemId, quantity = 1) {
    // Get wishlist items from localStorage
    const wishlistItems = JSON.parse(localStorage.getItem('wishlistItems')) || [];
    
    // Find the specific item in wishlist
    const item = wishlistItems.find(item => item.id === itemId);
    
    if (item) {
        // Check if item already exists in cart
        const existingItemIndex = cartItems.findIndex(cartItem => cartItem.id === item.id);
        
        if (existingItemIndex !== -1) {
            // If exists, increase quantity
            cartItems[existingItemIndex].quantity += quantity;
        } else {
            // If new, add to cart with specified quantity
            cartItems.push({
                ...item,
                quantity: quantity
            });
        }
        
        // Save to localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        // Update UI
        updateCartCount();
        
        // Show confirmation message
        alert(`${item.name} has been added to your cart!`);
        
        // Redirect to cart page
        window.location.href = 'cart.html';
    }
}