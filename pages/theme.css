/* 
  Cyfrowy Dowód Pupila - Premium App-Style Shopify Theme
  Colors: Deep Purple (#6c5ce7), Gold (#f9ca24), Dark (#0f172a)
*/

@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700;800;900&display=swap');

:root {
    --primary: #6c5ce7;
    --primary-dark: #4834d4;
    --accent: #f9ca24;
    --accent-dark: #e1b12c;
    --bg-dark: #0f172a;
    --bg-light: #f8fafc;
    --text-main: #1e293b;
    --text-muted: #64748b;
    --glass: rgba(255, 255, 255, 0.7);
    --glass-dark: rgba(15, 23, 42, 0.8);
    --radius: 24px;
    --shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

/* Color Themes */
:root[data-theme="orange"] { --primary: #ff7e67; --primary-dark: #e8634c; }
:root[data-theme="blue"] { --primary: #4facfe; --primary-dark: #278ee8; }
:root[data-theme="green"] { --primary: #2bc06a; --primary-dark: #1b9b50; }
:root[data-theme="pink"] { --primary: #ff758c; --primary-dark: #ff5e78; }
:root[data-theme="red"] { --primary: #ff4b2b; --primary-dark: #e03a1a; }
:root[data-theme="purple"] { --primary: #a18cd1; --primary-dark: #8e73c8; }
:root[data-theme="gray"] { --primary: #8793a0; --primary-dark: #6c7a89; }

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    background-color: var(--bg-dark); /* Prevents white gaps at the bottom of the page */
}

body {
    font-family: 'Outfit', sans-serif;
    background-color: var(--bg-light);
    color: var(--text-main);
    line-height: 1.6;
    overflow-x: clip;
    min-height: 100vh;
    min-height: 100dvh;
    display: flex;
    flex-direction: column;
}

main {
    overflow-x: clip;
    flex: 1;
}

/* Typography */
h1, h2, h3, h4 {
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -1px;
}

h1 { font-size: clamp(2.5rem, 6vw, 4.5rem); margin-bottom: 1.5rem; }
h2 { font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 1.5rem; color: var(--bg-dark); }
h3 { font-size: 1.5rem; margin-bottom: 1rem; }

.text-gradient {
    background: linear-gradient(135deg, var(--primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

/* Layout */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
}

.section {
    padding: 100px 0;
}

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 80px;
    background: var(--glass);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    z-index: 1000;
    border-bottom: 1px solid rgba(0,0,0,0.05);
    display: flex;
    align-items: center;
    transition: all 0.3s ease;
}

@media (max-width: 968px) {
    .header { height: 70px; }
}

.header-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 900;
    font-size: 1.4rem;
    color: var(--primary);
    text-decoration: none;
}

.logo i {
    font-size: 1.8rem;
    color: var(--primary);
    background: var(--primary-dark);
    -webkit-background-clip: text;
    background-clip: text;
    transition: transform 0.3s ease;
}

.logo:hover i {
    transform: rotate(-15deg) scale(1.1);
}

.logo span {
    display: block;
    white-space: nowrap;
}

@media (max-width: 480px) {
    .logo img { height: 32px; }
    .logo span { font-size: 1.1rem; }
}

.nav {
    display: flex;
    align-items: center;
    gap: 30px;
}

.nav-link {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 600;
    transition: color 0.3s;
}

.nav-link:hover {
    color: var(--primary);
}

.cart-icon-wrapper {
    position: relative;
    cursor: pointer;
    font-size: 1.4rem;
    color: var(--text-main);
    transition: transform 0.2s;
}

.cart-icon-wrapper:hover {
    transform: scale(1.1);
    color: var(--primary);
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -10px;
    background: var(--primary);
    color: white;
    font-size: 0.7rem;
    font-weight: 800;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid white;
}

.nav a {
    text-decoration: none;
    color: var(--text-main);
    font-weight: 600;
    transition: color 0.3s;
}

.nav a:hover { color: var(--primary); }

/* Hamburger Menu Button */
.hamburger-btn {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 24px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
}

.hamburger-btn span {
    width: 30px;
    height: 2px;
    background: var(--bg-dark);
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
}

@media (max-width: 968px) {
    .hamburger-btn {
        display: flex;
    }
}

.hamburger-btn.is-active span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.hamburger-btn.is-active span:nth-child(2) { opacity: 0; transform: translateX(20px); }
.hamburger-btn.is-active span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

/* Mobile Menu Overlay */
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: white;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2.5rem;
    transform: translateX(100%);
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu.is-open {
    transform: translateX(0);
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.mobile-nav a {
    font-size: 2rem;
    font-weight: 800;
    text-decoration: none;
    color: var(--bg-dark);
}

body.menu-open {
    overflow: hidden;
}

/* Theme Selector in Mobile Menu */
.theme-selector {
    margin-top: 2rem;
    text-align: center;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.5s ease 0.7s;
}

.mobile-navigation.is-open .theme-selector,
.mobile-menu.is-open .theme-selector {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.theme-selector p {
    font-size: 0.9rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--text-muted);
    margin-bottom: 1rem;
    letter-spacing: 1px;
}

.color-grid {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 1rem;
}

.color-circle {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    cursor: pointer;
    border: 4px solid white;
    box-shadow: 0 4px 15px rgba(0,0,0,0.15);
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.color-circle:hover { transform: scale(1.15); }
.color-circle.active { 
    border-color: white;
    transform: scale(1.1);
    box-shadow: 0 0 0 3px var(--bg-dark), 0 4px 15px rgba(0,0,0,0.2);
}

.c-purple { background: #6c5ce7; }
.c-orange { background: #ff7e67; }
.c-blue { background: #4facfe; }
.c-green { background: #2bc06a; }
.c-pink { background: #ff758c; }
.c-red { background: #ff4b2b; }
.c-gray { background: #8793a0; }

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 1.1rem 2.5rem;
    border-radius: 50px;
    font-weight: 800;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    cursor: pointer;
    border: none;
    font-size: 1.1rem;
}

.btn-primary {
    background: var(--primary);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-5px);
}

.btn-accent {
    background: var(--accent);
    color: var(--bg-dark);
}

.btn-accent:hover {
    transform: translateY(-5px);
    background: var(--accent-dark);
}

.btn-full {
    width: 100%;
}

/* Hero */
.hero {
    padding: 140px 0 100px;
    background: radial-gradient(circle at top, #f8faff, #fff);
    overflow: hidden;
    min-height: 60vh;
    display: flex;
    align-items: center;
}

@media (max-width: 968px) {
    .hero { 
        padding: 120px 0 80px;
        min-height: auto;
    }
}

.hero-grid {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-content {
    max-width: 900px;
}

.hero-content h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    letter-spacing: -1px;
}

.hero-sub {
    font-size: 1.25rem;
    max-width: 700px;
    margin: 0 auto 3rem;
    color: var(--text-muted);
}

@media (max-width: 768px) {
    .hero-content h1 { font-size: 2.2rem; }
    .hero-sub { font-size: 1.1rem; }
}

.hero-actions {
    justify-content: center;
    gap: 20px;
}

.hero-image-main {
    margin: 2rem auto 0.5rem;
    max-width: 450px;
    width: 100%;
    position: relative;
}

.hero-image-main img {
    width: 100%;
    height: auto;
    animation: float 6s ease-in-out infinite;
}

@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}

@media (max-width: 768px) {
    .hero-image-main {
        max-width: 300px;
        margin: 1.5rem auto 0.5rem;
    }
}



/* Features/Process */
.process-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 4rem;
}

.process-card {
    background: white;
    padding: 3rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    transition: transform 0.3s;
    text-align: center;
}

.process-card:hover { transform: translateY(-10px); }

.icon-box {
    width: 80px;
    height: 80px;
    background: #ffffff;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 2rem;
    font-size: 2rem;
    color: var(--primary);
    box-shadow: 0 8px 20px rgba(0,0,0,0.06);
}

/* Product Section */
.product-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.product-card {
    background: white;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.05);
    transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s;
    border: 1px solid #f1f5f9;
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
}

.product-card form {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    min-width: 0;
}

.product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
}

.product-carousel-wrapper {
    position: relative;
    background: #f8fafc;
    aspect-ratio: 1/1;
    overflow: hidden;
    width: 100%;
    max-width: 100%;
    min-width: 0;
}

.product-carousel {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    width: 100%;
    max-width: 100%;
    height: 100%;
    min-width: 0;
}

.product-carousel::-webkit-scrollbar {
    display: none;
}

.product-carousel-slide {
    flex: 0 0 100%;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
    padding: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    filter: drop-shadow(0 15px 25px rgba(0,0,0,0.08));
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.product-card:hover .product-carousel-slide img {
    transform: scale(1.05);
}

.product-carousel-dots {
    position: absolute;
    bottom: 12px;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 6px;
    z-index: 10;
}

.product-carousel-dots .dot {
    width: 8px;
    height: 8px;
    background: rgba(0, 0, 0, 0.15);
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
}

.product-carousel-dots .dot.active {
    background: var(--primary);
    transform: scale(1.2);
}

.product-info {
    padding: 2rem;
    text-align: center;
    background: white;
}

.product-info h3 {
    font-size: 1.4rem;
    color: var(--bg-dark);
    margin-bottom: 1.2rem;
    line-height: 1.3;
}

.price {
    font-size: 1.8rem;
    font-weight: 900;
    color: var(--bg-dark);
    margin: 1.5rem 0;
}

.size-selector {
    margin-bottom: 1.5rem;
}

.size-selector label {
    display: block;
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.8rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.size-options {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
}

.size-option {
    flex: 1;
    min-width: 80px;
    padding: 10px 12px;
    border: 2px solid #e2e8f0;
    border-radius: 12px;
    text-align: center;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    font-size: 0.9rem;
    color: var(--text-dark);
    background: white;
}

.size-option:hover {
    border-color: var(--primary);
    color: var(--primary);
}

.size-option.active {
    background: var(--primary);
    border-color: var(--primary);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(0,0,0,0.1);
}

/* Policy Pages Content */

.policy-header {
    padding: 12rem 0 4rem;
    background: #f8fafc;
    text-align: center;
    border-bottom: 1px solid #e2e8f0;
}

.policy-header h1 {
    font-size: clamp(2.5rem, 6vw, 3.5rem);
    font-weight: 800;
    color: var(--bg-dark);
    margin: 0;
}

.policy-content {
    max-width: 800px;
    margin: 4rem auto 10rem;
    padding: 0 2rem;
    line-height: 1.8;
    color: var(--text-main);
}

.policy-content h2 {
    margin: 4rem 0 1.5rem;
    font-size: 1.8rem;
    color: var(--bg-dark);
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--primary);
    display: block;
}

.policy-content p {
    margin-bottom: 2rem;
    font-size: 1.15rem;
}

.policy-content ul {
    margin: 2rem 0;
    padding-left: 1.5rem;
    list-style: none;
}

.policy-content li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1.5rem;
}

.policy-content li::before {
    content: '→';
    position: absolute;
    left: 0;
    color: var(--primary);
    font-weight: bold;
}


.policy-content li {
    margin-bottom: 0.8rem;
}

.policy-content strong {
    color: var(--bg-dark);
}

/* Footer */
.footer {
    padding: 80px 0 40px;
    background: #0f172a;
    color: #94a3b8;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 4rem;
    margin-bottom: 4rem;
}

.footer-brand h3 {
    color: white;
    margin-bottom: 1.5rem;
}

.footer-links h4 {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
}

.footer-links ul {
    list-style: none;
}

.footer-links ul li {
    margin-bottom: 0.8rem;
}

.footer-links ul li a {
    color: #94a3b8;
    transition: color 0.3s;
}

.footer-links ul li a:hover {
    color: var(--primary);
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.9rem;
}

.social-links {
    display: flex;
    gap: 1.5rem;
}

.social-links a {
    color: #94a3b8;
    font-size: 1.5rem;
    transition: color 0.3s;
}

.social-links a:hover {
    color: white;
}

.payment-methods {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.payment-methods i {
    font-size: 1.5rem;
}

/* Mobile Responsiveness */
@media (max-width: 968px) {
    .header-inner { padding: 0 1rem; }
    
    .nav { display: none; }
    .burger { display: flex; }
    
    .header .btn-primary { 
        padding: 0.5rem 1rem;
        font-size: 0.85rem;
        margin-right: 12px;
        min-height: auto;
        height: auto;
    }
    
    @media (max-width: 400px) {
        .header .btn-primary { display: none; }
    }
    
    .hero-grid, .process-grid, .app-grid, .product-grid, .footer-grid {
        grid-template-columns: 1fr;
    }
    
    .hero { text-align: center; padding-top: 110px; }
    .hero-actions { justify-content: center; }
    .hero-image { order: -1; margin-bottom: 2rem; }
    .hero-image img { max-width: 280px; }
    
    body { padding-bottom: 0; }
    .footer { padding-bottom: 140px; }
}

/* Floating Action Button for Mobile */
.mobile-fab {
    position: fixed;
    bottom: 25px;
    left: 20px;
    right: 20px;
    z-index: 999;
    display: none;
    padding: 0;
}

.mobile-fab .btn {
    width: 100%;
    justify-content: center;
    box-shadow: none;
}

@media (max-width: 768px) {
    .mobile-fab { display: block; }
}
/* Cart Drawer */
.cart-drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    max-width: 450px;
    height: 100vh;
    background: white;
    z-index: 2000;
    box-shadow: -10px 0 50px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.cart-drawer.open {
    transform: translateX(0);
}

.cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(15, 23, 42, 0.5);
    backdrop-filter: blur(4px);
    z-index: 1999;
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease;
}

.cart-overlay.open {
    opacity: 1;
    visibility: visible;
}

.cart-header {
    padding: 1.5rem;
    border-bottom: 1px solid #f1f5f9;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.cart-header h2 {
    margin-bottom: 0;
    font-size: 1.5rem;
}

.close-cart {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--text-muted);
}

.cart-items {
    flex: 1;
    overflow-y: auto;
    padding: 1.5rem;
}

.cart-item {
    display: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    animation: slideIn 0.4s ease-out backwards;
}

.cart-item-img {
    width: 80px;
    height: 80px;
    border-radius: 12px;
    object-fit: cover;
    background: #f8fafc;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h4 {
    margin-bottom: 0.2rem;
    font-size: 1.1rem;
}

.cart-item-variant {
    font-size: 0.85rem;
    color: var(--text-muted);
    margin-bottom: 0.5rem;
}

.cart-item-price {
    font-weight: 700;
    color: var(--bg-dark);
}

.cart-item-qty {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 0.5rem;
}

.qty-btn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid #e2e8f0;
    background: white;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s;
}

.qty-btn:hover {
    background: var(--bg-light);
    border-color: var(--primary);
}

.remove-item {
    color: #ef4444;
    font-size: 0.8rem;
    text-decoration: underline;
    cursor: pointer;
    margin-top: 0.5rem;
    display: inline-block;
}

.cart-footer {
    padding: 1.5rem;
    border-top: 1px solid #f1f5f9;
    background: #f8fafc;
}

.cart-total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
    font-weight: 800;
}

.cart-empty-msg {
    text-align: center;
    margin-top: 5rem;
    color: var(--text-muted);
}

.cart-empty-msg i {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
    opacity: 0.3;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
}

@media (max-width: 480px) {
    .cart-drawer { max-width: 100%; }
}

/* Floating App Button */
.app-fab {
    position: fixed;
    bottom: 100px;
    left: 20px;
    width: 60px;
    height: 60px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    z-index: 99;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    border: 2px solid var(--primary);
    overflow: hidden;
}

.app-fab img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.app-fab:hover {
    transform: scale(1.1) rotate(5deg);
}

.app-fab::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: var(--primary);
    opacity: 0.3;
    animation: pulseApp 2s infinite;
    z-index: -1;
}

@keyframes pulseApp {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(1.5); opacity: 0; }
}

@media (max-width: 768px) {
    .app-fab {
        bottom: 80px;
        left: 15px;
        width: 50px;
        height: 50px;
    }

    .product-grid {
        gap: 1.5rem;
    }

    .product-card {
        max-width: 400px;
        margin: 0 auto;
    }

    .product-carousel-wrapper {
        aspect-ratio: 4/3; /* Less tall on mobile */
    }

    .product-info {
        padding: 1.5rem;
    }

    .product-info h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
    }

    .price {
        font-size: 1.5rem;
        margin: 1rem 0;
    }

    .size-selector {
        margin-bottom: 1.2rem;
    }

    .size-options {
        gap: 8px;
    }

    .size-option {
        padding: 8px;
        font-size: 0.9rem;
    }

    .btn {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
    }
}

/* Messenger Popup Notification */
.messenger-popup {
    position: fixed;
    bottom: 30px;
    right: -400px;
    width: 350px;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
    z-index: 9999;
    font-family: 'Outfit', sans-serif;
    transition: right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    overflow: hidden;
    border: 1px solid rgba(0,0,0,0.05);
}

.messenger-popup.show {
    right: 30px;
}

@media (max-width: 480px) {
    .messenger-popup {
        width: calc(100% - 40px);
        bottom: 20px;
        right: -100%;
    }
    .messenger-popup.show {
        right: 20px;
    }
}

.messenger-popup-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 16px;
    border-bottom: 1px solid #f1f5f9;
}

.messenger-popup-sender {
    display: flex;
    align-items: center;
    gap: 12px;
}

.messenger-popup-avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--bg-light);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    border: 1px solid #e2e8f0;
}

.messenger-popup-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.messenger-popup-info {
    display: flex;
    flex-direction: column;
}

.messenger-popup-name {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--text-main);
}

.messenger-popup-time {
    font-size: 0.75rem;
    color: var(--text-muted);
}

.messenger-popup-close {
    background: transparent;
    border: none;
    color: var(--text-muted);
    font-size: 1.2rem;
    cursor: pointer;
    padding: 4px;
    border-radius: 50%;
    transition: background 0.3s, color 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
}

.messenger-popup-close:hover {
    background: #f1f5f9;
    color: var(--text-main);
}

.messenger-popup-content-link {
    display: block;
    text-decoration: none;
    color: inherit;
    transition: background 0.3s;
}

.messenger-popup-content-link:hover {
    background: #f8fafc;
}

.messenger-popup-body {
    padding: 16px;
}

.messenger-popup-body p {
    font-size: 0.95rem;
    line-height: 1.5;
    margin: 0;
    color: var(--text-main);
}
