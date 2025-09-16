// Nova-Wear Website JavaScript

// Initialize EmailJS (you'll need to replace these with your actual EmailJS keys)
// Visit https://emailjs.com to set up your account and get these keys
const EMAILJS_PUBLIC_KEY = 'YOUR_EMAILJS_PUBLIC_KEY'; // Replace with your EmailJS public key
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID

// Initialize EmailJS when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS (only if keys are provided)
    if (EMAILJS_PUBLIC_KEY !== 'YOUR_EMAILJS_PUBLIC_KEY') {
        emailjs.init(EMAILJS_PUBLIC_KEY);
    }
    
    initializeWebsite();
});

// Main initialization function
function initializeWebsite() {
    setupMobileNavigation();
    setupProductFilters();
    setupShoppingCart();
    setupContactForm();
    updateCartDisplay();
}

// Mobile Navigation
function setupMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Product Filtering
function setupProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filterValue = button.getAttribute('data-filter');
            
            // Filter products
            productCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    card.classList.add('show');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('show');
                }
            });
        });
    });
}

// Shopping Cart Functionality
let cart = JSON.parse(localStorage.getItem('nova-wear-cart')) || [];

function setupShoppingCart() {
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productData = JSON.parse(e.target.getAttribute('data-product'));
            addToCart(productData);
        }
        
        // Cart button click
        if (e.target.classList.contains('cart-btn') || e.target.closest('.cart-btn')) {
            e.preventDefault();
            showCartModal();
        }
    });
}

function addToCart(product) {
    // Check if product already exists in cart
    const existingProduct = cart.find(item => item.id === product.id);
    
    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    
    saveCart();
    updateCartDisplay();
    showAddToCartMessage(product.name);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartDisplay();
}

function updateQuantity(productId, newQuantity) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            product.quantity = newQuantity;
            saveCart();
            updateCartDisplay();
        }
    }
}

function saveCart() {
    localStorage.setItem('nova-wear-cart', JSON.stringify(cart));
}

function updateCartDisplay() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCount.textContent = totalItems;
    }
}

function showCartModal() {
    const cartHTML = generateCartHTML();
    
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'cart-modal';
    modal.innerHTML = `
        <div class="cart-modal-content">
            <div class="cart-header">
                <h2>Shopping Cart</h2>
                <button class="close-cart">&times;</button>
            </div>
            <div class="cart-body">
                ${cartHTML}
            </div>
        </div>
    `;
    
    // Add modal styles
    const modalStyles = `
        <style>
        .cart-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        }
        .cart-modal-content {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            max-width: 600px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
        }
        .cart-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 1rem;
        }
        .close-cart {
            background: none;
            border: none;
            font-size: 2rem;
            cursor: pointer;
            color: #666;
        }
        .cart-item {
            display: flex;
            align-items: center;
            padding: 1rem 0;
            border-bottom: 1px solid #e2e8f0;
        }
        .cart-item img {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 5px;
            margin-right: 1rem;
        }
        .cart-item-info {
            flex: 1;
        }
        .cart-item-controls {
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }
        .quantity-btn {
            background: #3182ce;
            color: white;
            border: none;
            width: 30px;
            height: 30px;
            border-radius: 3px;
            cursor: pointer;
        }
        .cart-total {
            text-align: center;
            margin-top: 1rem;
            font-size: 1.2rem;
            font-weight: bold;
        }
        .checkout-btn {
            width: 100%;
            margin-top: 1rem;
        }
        .empty-cart {
            text-align: center;
            padding: 2rem;
            color: #666;
        }
        </style>
    `;
    
    document.head.insertAdjacentHTML('beforeend', modalStyles);
    document.body.appendChild(modal);
    
    // Close modal events
    modal.querySelector('.close-cart').addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Quantity controls
    modal.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-product-id'));
            const action = e.target.getAttribute('data-action');
            const product = cart.find(item => item.id === productId);
            
            if (product) {
                if (action === 'increase') {
                    updateQuantity(productId, product.quantity + 1);
                } else if (action === 'decrease') {
                    updateQuantity(productId, product.quantity - 1);
                }
                
                // Update modal content
                const cartBody = modal.querySelector('.cart-body');
                cartBody.innerHTML = generateCartHTML();
                
                // Re-attach event listeners
                cartBody.querySelectorAll('.quantity-btn').forEach(newBtn => {
                    newBtn.addEventListener('click', arguments.callee);
                });
            }
        });
    });
}

function generateCartHTML() {
    if (cart.length === 0) {
        return '<div class="empty-cart">Your cart is empty</div>';
    }
    
    const cartItems = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <h4>${item.name}</h4>
                <p>$${item.price.toFixed(2)} each</p>
            </div>
            <div class="cart-item-controls">
                <button class="quantity-btn" data-product-id="${item.id}" data-action="decrease">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" data-product-id="${item.id}" data-action="increase">+</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    return `
        ${cartItems}
        <div class="cart-total">
            Total: $${total.toFixed(2)}
        </div>
        <button class="btn btn-primary checkout-btn" onclick="checkout()">Proceed to Checkout</button>
    `;
}

function checkout() {
    alert('Thank you for your interest! This is a demo store. In a real store, this would proceed to payment.');
}

function showAddToCartMessage(productName) {
    // Create a temporary message
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #48bb78;
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease-out;
    `;
    message.innerHTML = `✓ ${productName} added to cart!`;
    
    // Add animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
        if (message.parentNode) {
            message.parentNode.removeChild(message);
        }
    }, 3000);
}

// Contact Form Functionality
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = document.getElementById('submit-btn');
            const btnText = submitBtn.querySelector('.btn-text');
            const btnLoading = submitBtn.querySelector('.btn-loading');
            const messageDiv = document.getElementById('form-message');
            
            // Show loading state
            submitBtn.disabled = true;
            btnText.style.display = 'none';
            btnLoading.style.display = 'inline';
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Check if EmailJS is configured
            if (EMAILJS_PUBLIC_KEY === 'YOUR_EMAILJS_PUBLIC_KEY') {
                // Show demo message
                setTimeout(() => {
                    showFormMessage('This is a demo contact form. To make it functional, please set up EmailJS by following the instructions in the JavaScript file.', 'error');
                    resetSubmitButton();
                }, 1000);
                return;
            }
            
            // Send email using EmailJS
            emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: 'your-email@example.com' // Replace with your email
            })
            .then(function(response) {
                showFormMessage('Thank you! Your message has been sent successfully. We\'ll get back to you soon.', 'success');
                contactForm.reset();
            })
            .catch(function(error) {
                showFormMessage('Sorry, there was an error sending your message. Please try again later.', 'error');
            })
            .finally(function() {
                resetSubmitButton();
            });
            
            function resetSubmitButton() {
                submitBtn.disabled = false;
                btnText.style.display = 'inline';
                btnLoading.style.display = 'none';
            }
            
            function showFormMessage(message, type) {
                messageDiv.textContent = message;
                messageDiv.className = `form-message ${type}`;
                messageDiv.style.display = 'block';
                
                // Hide message after 5 seconds
                setTimeout(() => {
                    messageDiv.style.display = 'none';
                }, 5000);
            }
        });
    }
}

// Smooth scrolling for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const target = document.querySelector(e.target.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Add scroll effects (optional enhancement)
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    } else {
        navbar.style.backgroundColor = '#fff';
        navbar.style.backdropFilter = 'none';
    }
});