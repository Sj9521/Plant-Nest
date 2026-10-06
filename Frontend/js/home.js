// Search trigger smooth scroll & flash highlight
const searchTrigger = document.getElementById('nav-search-trigger');
if (searchTrigger) {
  searchTrigger.addEventListener('click', function (e) {
    e.preventDefault();
    const searchInput = document.getElementById('hero-search-input');
    const searchBox = document.getElementById('hero-search-box');

    if (searchInput && searchBox) {
      searchBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setTimeout(() => {
        searchInput.focus();
        searchBox.classList.add('search-highlight');
        setTimeout(() => {
          searchBox.classList.remove('search-highlight');
        }, 1200);
      }, 350);
    }
  });
}

// Update cart counter from localStorage (sums total quantities)
function updateCartCounter() {
  const cartCounter = document.getElementById('cart-counter');
  if (!cartCounter) return;

  const cart = JSON.parse(localStorage.getItem('plantnest_cart')) || [];
  const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  cartCounter.textContent = totalQty;
}

// Update wishlist counter from localStorage
function updateWishlistCounter() {
  const wishlistCounter = document.getElementById('wishlist-counter');
  if (!wishlistCounter) return;

  const wishlist = JSON.parse(localStorage.getItem('plantnest_wishlist')) || [];
  wishlistCounter.textContent = wishlist.length;
}

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  // 1. Sync badge counts
  updateCartCounter();
  updateWishlistCounter();

  // 2. Auth State Check
  const authNavItem = document.getElementById('auth-nav-item');
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  if (authNavItem) {
    if (isLoggedIn) {
      authNavItem.innerHTML = `
        <a href="../html/profile.html" aria-label="Profile">
          <i class="fa-solid fa-user" title="Profile"></i>
        </a>
      `;
    } else {
      authNavItem.innerHTML = `
        <a href="../html/login.html" class="login-btn">Log In</a>
      `;
    }
  }
});