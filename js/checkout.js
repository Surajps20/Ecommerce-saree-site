// Checkout functionality
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
let selectedPayment = '';
let discountApplied = false;
let discountAmount = 0;

// Discount codes
const discountCodes = {
    'SAVE10': 10, // 10% off
    'SAVE20': 20, // 20% off
    'FIRST50': 50, // ₹50 off
    'WELCOME100': 100 // ₹100 off
};

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
    // Check if cart is empty
    if (cartItems.length === 0) {
        alert('Your cart is empty! Redirecting to collection page...');
        window.location.href = 'collection.html';
        return;
    }
    
    loadOrderItems();
    updateCheckoutSummary();
    
    // Disable place order button initially
    document.getElementById('placeOrderBtn').disabled = true;
    
    // Add form validation
    setupFormValidation();
});

// Load order items from cart
function loadOrderItems() {
    const orderItemsContainer = document.getElementById('orderItems');
    orderItemsContainer.innerHTML = '';
    
    cartItems.forEach(item => {
        // Fix image path for pages folder
        let imagePath = item.image;
        if (!imagePath.startsWith('../') && !imagePath.startsWith('http')) {
            imagePath = '../' + imagePath;
        }
        
        const orderItem = document.createElement('div');
        orderItem.className = 'order-item';
        orderItem.innerHTML = `
            <div class="order-item-img">
                <img src="${imagePath}" alt="${item.name}" onerror="this.src='https://via.placeholder.com/80x80/f8d7da/8a0c36?text=Saree'">
                <span class="badge">${item.quantity}</span>
            </div>
            <div class="order-item-details">
                <p class="order-item-title">${item.name}</p>
            </div>
            <p class="order-item-price">₹${item.price * item.quantity}</p>
        `;
        orderItemsContainer.appendChild(orderItem);
    });
}

// Calculate checkout totals
function calculateCheckoutTotals() {
    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = 100; // Fixed shipping
    const tax = Math.round(subtotal * 0.18); // 18% GST
    
    let discount = 0;
    if (discountApplied) {
        discount = discountAmount;
    }
    
    const total = subtotal + shipping + tax - discount;
    
    return {
        subtotal: Math.round(subtotal),
        shipping: shipping,
        tax: tax,
        discount: discount,
        total: Math.round(total)
    };
}

// Update checkout summary
function updateCheckoutSummary() {
    const totals = calculateCheckoutTotals();
    
    document.getElementById('checkoutSubtotal').textContent = `₹${totals.subtotal}`;
    document.getElementById('checkoutShipping').textContent = `₹${totals.shipping}`;
    document.getElementById('checkoutTax').textContent = `₹${totals.tax}`;
    document.getElementById('checkoutTotal').textContent = `INR ₹${totals.total}`;
    document.getElementById('taxNote').textContent = `Including ₹${totals.tax} in taxes`;
    
    if (discountApplied) {
        document.getElementById('discountRow').style.display = 'flex';
        document.getElementById('checkoutDiscount').textContent = `-₹${totals.discount}`;
    } else {
        document.getElementById('discountRow').style.display = 'none';
    }
}

// Apply discount code
function applyDiscount() {
    const discountInput = document.getElementById('discountCode');
    const code = discountInput.value.trim().toUpperCase();
    
    if (!code) {
        alert('Please enter a discount code');
        return;
    }
    
    if (discountCodes[code]) {
        const totals = calculateCheckoutTotals();
        
        // Check if it's percentage or fixed amount
        if (code.includes('SAVE')) {
            // Percentage discount
            discountAmount = Math.round((totals.subtotal * discountCodes[code]) / 100);
        } else {
            // Fixed amount discount
            discountAmount = discountCodes[code];
        }
        
        discountApplied = true;
        updateCheckoutSummary();
        alert(`Discount code "${code}" applied successfully! You saved ₹${discountAmount}`);
        discountInput.disabled = true;
    } else {
        alert('Invalid discount code. Try: SAVE10, SAVE20, FIRST50, or WELCOME100');
    }
}

// Select payment method
function selectPayment(method) {
    selectedPayment = method;
    
    // Update radio button
    document.getElementById(method).checked = true;
    
    // Update visual selection
    document.querySelectorAll('.payment-method').forEach(el => {
        el.classList.remove('selected');
    });
    event.currentTarget.classList.add('selected');
    
    // Enable place order button if form is valid
    validateForm();
}

// Setup form validation
function setupFormValidation() {
    const inputs = document.querySelectorAll('input[type="email"], input[type="text"], select');
    
    inputs.forEach(input => {
        input.addEventListener('input', validateForm);
        input.addEventListener('blur', validateForm);
    });
}

// Validate form
function validateForm() {
    const email = document.querySelector('input[type="email"]').value;
    const firstName = document.querySelectorAll('input[type="text"]')[0].value;
    const lastName = document.querySelectorAll('input[type="text"]')[1].value;
    const address = document.querySelectorAll('input[type="text"]')[2].value;
    const city = document.querySelectorAll('input[type="text"]')[3].value;
    const state = document.querySelectorAll('input[type="text"]')[4].value;
    const pincode = document.querySelectorAll('input[type="text"]')[5].value;
    const phone = document.querySelectorAll('input[type="text"]')[6].value;
    
    const isFormValid = email && firstName && lastName && address && city && state && pincode && phone && selectedPayment;
    
    const placeOrderBtn = document.getElementById('placeOrderBtn');
    placeOrderBtn.disabled = !isFormValid;
}

// Place order
function placeOrder() {
    // Get form data
    const orderData = {
        customer: {
            email: document.querySelector('input[type="email"]').value,
            firstName: document.querySelectorAll('input[type="text"]')[0].value,
            lastName: document.querySelectorAll('input[type="text"]')[1].value,
            phone: document.querySelectorAll('input[type="text"]')[6].value
        },
        shipping: {
            address: document.querySelectorAll('input[type="text"]')[2].value,
            city: document.querySelectorAll('input[type="text"]')[3].value,
            state: document.querySelectorAll('input[type="text"]')[4].value,
            pincode: document.querySelectorAll('input[type="text"]')[5].value,
            country: document.querySelector('select').value
        },
        items: cartItems,
        payment: {
            method: selectedPayment,
            status: 'pending'
        },
        totals: calculateCheckoutTotals(),
        orderDate: new Date().toISOString(),
        orderId: 'ORD' + Date.now()
    };
    
    // Save order to localStorage (in real app, send to backend)
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    // Clear cart
    localStorage.removeItem('cartItems');
    
    // Show success message
    alert(`Order placed successfully! 
    
Order ID: ${orderData.orderId}
Total Amount: ₹${orderData.totals.total}
Payment Method: ${selectedPayment.toUpperCase()}

Thank you for shopping with TM Sarees!`);
    
    // Redirect to home page
    window.location.href = '../index1.html';
}

// Footer form handler
document.addEventListener('DOMContentLoaded', function() {
    var footerForm = document.querySelector('.footer-email-form');
    if (footerForm) {
        footerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for subscribing! You will receive our special offers soon.');
        });
    }
});
